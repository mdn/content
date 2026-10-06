import fs from "node:fs";
import fsPromises from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { describe, it } from "node:test";

import sharp from "sharp";
import isSvg from "is-svg";

import { checkFile } from "./checker.js";
import { MAX_FILE_SIZE } from "./env.js";

const FIXTURES = new URL("fixtures/", import.meta.url);

describe("checking files", () => {
  it("should spot SVGs with scripts inside them", async () => {
    const filePath = fileURLToPath(new URL("./script.svg", FIXTURES));
    console.assert(fs.existsSync(filePath), `${filePath} does not exist`);
    await assert.rejects(
      () => checkFile(filePath),
      / does not appear to be an SVG$/,
    );
  });

  it("should spot SVGs with onLoad inside an element", async () => {
    const filePath = fileURLToPath(new URL("./onhandler.svg", FIXTURES));
    console.assert(fs.existsSync(filePath), `${filePath} does not exist`);
    await assert.rejects(
      () => checkFile(filePath),
      / does not appear to be an SVG$/,
    );
  });

  it("should spot files that are not mentioned in source", async () => {
    const filePath = fileURLToPath(new URL("./orphan.png", FIXTURES));
    console.assert(fs.existsSync(filePath), `${filePath} does not exist`);
    await assert.rejects(() => checkFile(filePath), /is not mentioned in/);
  });

  it("should spot files that are completely empty", async () => {
    const filePath = fileURLToPath(new URL("./zero.gif", FIXTURES));
    console.assert(fs.existsSync(filePath), `${filePath} does not exist`);
    await assert.rejects(() => checkFile(filePath), /is 0 bytes/);
  });

  it("should spot mismatch between file-type and file extension", async () => {
    const filePath = fileURLToPath(new URL("./png.jpeg", FIXTURES));
    console.assert(fs.existsSync(filePath), `${filePath} does not exist`);
    await assert.rejects(
      () => checkFile(filePath),
      /of type 'image\/png' should have extension 'png', but has extension '.jpeg'/,
    );
  });
});

async function createImageFile(t, extension, input) {
  const directory = await fsPromises.mkdtemp(
    path.join(os.tmpdir(), "filecheck-[images]()-"),
  );
  t.after(() => fsPromises.rm(directory, { recursive: true, force: true }));
  t.mock.method(console, "log", () => {});
  const filename = `image.${extension}`;
  const filePath = path.join(directory, filename);
  await fsPromises.writeFile(path.join(directory, "index.md"), filename);
  await fsPromises.writeFile(filePath, input);
  return filePath;
}

function createImage() {
  return sharp({
    create: {
      width: 64,
      height: 64,
      channels: 4,
      background: { r: 255, g: 0, b: 0, alpha: 0.5 },
    },
  });
}

function addGifComment(input) {
  const blocks = Array.from({ length: 16 }, () =>
    Buffer.concat([Buffer.from([255]), Buffer.alloc(255, 32)]),
  );
  return Buffer.concat([
    input.subarray(0, -1),
    Buffer.from([0x21, 0xfe]),
    ...blocks,
    Buffer.from([0, 0x3b]),
  ]);
}

describe("compressing images", () => {
  const cases = [
    ...["jpg", "jpeg"].map((extension) => ({
      name: extension,
      extension,
      format: "jpeg",
      input: () =>
        createImage()
          .withExif({
            IFD0: { ImageDescription: "Image description ".repeat(256) },
          })
          .jpeg({ quality: 100 })
          .toBuffer(),
    })),
    {
      name: "transparent PNG",
      extension: "png",
      format: "png",
      input: () => createImage().png({ compressionLevel: 0 }).toBuffer(),
    },
    {
      name: "GIF",
      extension: "gif",
      format: "gif",
      input: async () => addGifComment(await createImage().gif().toBuffer()),
    },
    {
      name: "SVG",
      extension: "svg",
      input: () =>
        Buffer.from(
          `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64"><metadata>${"Image description ".repeat(256)}</metadata><circle cx="32" cy="32" r="20"/></svg>`,
        ),
    },
  ];

  for (const { name, extension, format, input } of cases) {
    it(`reports and saves compression for ${name}`, async (t) => {
      const original = await input();
      const filePath = await createImageFile(t, extension, original);
      await assert.rejects(() => checkFile(filePath), /can be compressed to/);
      assert.deepEqual(await fsPromises.readFile(filePath), original);

      await checkFile(filePath, { saveCompression: true });
      const compressed = await fsPromises.readFile(filePath);
      assert.ok(compressed.length < original.length * 0.75);
      if (format) {
        const metadata = await sharp(compressed).metadata();
        assert.equal(metadata.format, format);
        assert.equal(metadata.width, 64);
        assert.equal(metadata.height, 64);
        if (format === "png") {
          const { data } = await sharp(compressed)
            .raw()
            .toBuffer({ resolveWithObject: true });
          assert.equal(metadata.hasAlpha, true);
          assert.equal(data[3], 128);
        }
      } else {
        assert.ok(isSvg(compressed.toString()));
      }
      await checkFile(filePath);
      await checkFile(filePath, { saveCompression: true });
      assert.deepEqual(await fsPromises.readFile(filePath), compressed);
    });
  }

  it("preserves GIF frames, timing, loop count, and pixels", async (t) => {
    const frames = await Promise.all([
      createImage().png().toBuffer(),
      createImage().negate({ alpha: false }).png().toBuffer(),
    ]);
    const original = addGifComment(
      await sharp(frames, { join: { animated: true } })
        .gif({ delay: [100, 200], loop: 3 })
        .toBuffer(),
    );
    const filePath = await createImageFile(t, "gif", original);
    await checkFile(filePath, { saveCompression: true });
    const compressed = await fsPromises.readFile(filePath);
    assert.ok(compressed.length < original.length * 0.75);
    const metadata = await sharp(compressed, { animated: true }).metadata();
    assert.equal(metadata.pages, 2);
    assert.equal(metadata.pageHeight, 64);
    assert.deepEqual(metadata.delay, [100, 200]);
    assert.equal(metadata.loop, 3);
    assert.deepEqual(
      await sharp(compressed, { animated: true }).raw().toBuffer(),
      await sharp(original, { animated: true }).raw().toBuffer(),
    );
  });

  it("applies EXIF orientation before removing metadata", async (t) => {
    const original = await createImage()
      .resize(64, 32)
      .withMetadata({ orientation: 6 })
      .withExifMerge({
        IFD0: { ImageDescription: "Image description ".repeat(256) },
      })
      .jpeg()
      .toBuffer();
    const filePath = await createImageFile(t, "jpg", original);
    await checkFile(filePath, { saveCompression: true });
    const metadata = await sharp(filePath).metadata();
    assert.equal(metadata.width, 32);
    assert.equal(metadata.height, 64);
    assert.equal(metadata.orientation, undefined);
  });

  it("saves oversized images that compress below the size limit", async (t) => {
    const original = await createImage()
      .resize(512, 512)
      .png({ compressionLevel: 0 })
      .toBuffer();
    assert.ok(original.length > MAX_FILE_SIZE);
    const filePath = await createImageFile(t, "png", original);
    await assert.rejects(
      () => checkFile(filePath),
      /is too large.*but can be compressed/,
    );
    assert.deepEqual(await fsPromises.readFile(filePath), original);
    await checkFile(filePath, { saveCompression: true });
    assert.ok((await fsPromises.stat(filePath)).size < MAX_FILE_SIZE);
  });

  it("rejects images that remain oversized after compression", async (t) => {
    const pixels = Buffer.alloc(800 * 800 * 3);
    let seed = 1;
    for (let i = 0; i < pixels.length; i++) {
      seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
      pixels[i] = seed >>> 24;
    }
    const original = await sharp(pixels, {
      raw: { width: 800, height: 800, channels: 3 },
    })
      .png({ compressionLevel: 0 })
      .toBuffer();
    const filePath = await createImageFile(t, "png", original);
    for (const saveCompression of [false, true]) {
      await assert.rejects(
        () => checkFile(filePath, { saveCompression }),
        /is too large.*even after compressing/,
      );
      assert.deepEqual(await fsPromises.readFile(filePath), original);
    }
  });

  it("leaves WebP images unchanged", async (t) => {
    const original = await createImage().webp().toBuffer();
    const filePath = await createImageFile(t, "webp", original);
    await checkFile(filePath, { saveCompression: true });
    assert.deepEqual(await fsPromises.readFile(filePath), original);
  });
});
