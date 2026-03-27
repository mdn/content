import fs from "node:fs";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { describe, it } from "node:test";

import { checkFile } from "./checker.js";

const HTML_FIXTURES = new URL("fixtures/html/", import.meta.url);
const MD_FIXTURES = new URL("fixtures/md/", import.meta.url);

describe("checking files", () => {
  it("should spot SVGs with scripts inside them", async () => {
    const filePath = fileURLToPath(new URL("./script.svg", HTML_FIXTURES));
    console.assert(fs.existsSync(filePath), `${filePath} does not exist`);
    await assert.rejects(
      () => checkFile(filePath),
      / does not appear to be an SVG$/,
    );
  });

  it("should spot SVGs with onLoad inside an element", async () => {
    const filePath = fileURLToPath(new URL("./onhandler.svg", HTML_FIXTURES));
    console.assert(fs.existsSync(filePath), `${filePath} does not exist`);
    await assert.rejects(
      () => checkFile(filePath),
      / does not appear to be an SVG$/,
    );
  });

  it("should spot files that are not mentioned in source", async () => {
    const filePath = fileURLToPath(new URL("./orphan.png", HTML_FIXTURES));
    console.assert(fs.existsSync(filePath), `${filePath} does not exist`);
    await assert.rejects(() => checkFile(filePath), /is not mentioned in/);
  });

  it("should spot files that are not mentioned in md source", async () => {
    const filePath = fileURLToPath(new URL("./orphan.png", MD_FIXTURES));
    console.assert(fs.existsSync(filePath), `${filePath} does not exist`);
    await assert.rejects(() => checkFile(filePath), /is not mentioned in/);
  });

  it("should spot files that are completely empty", async () => {
    const filePath = fileURLToPath(new URL("./zero.gif", HTML_FIXTURES));
    console.assert(fs.existsSync(filePath), `${filePath} does not exist`);
    await assert.rejects(() => checkFile(filePath), /is 0 bytes/);
  });

  it("should spot mismatch between file-type and file extension", async () => {
    const filePath = fileURLToPath(new URL("./png.jpeg", HTML_FIXTURES));
    console.assert(fs.existsSync(filePath), `${filePath} does not exist`);
    await assert.rejects(
      () => checkFile(filePath),
      /of type 'image\/png' should have extension 'png', but has extension '.jpeg'/,
    );
  });
});
