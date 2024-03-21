import fs from "node:fs/promises";
import path from "node:path";
import {
  execGit,
  getRootDir,
  walkSync,
  isImagePath,
  IMG_RX,
  SLUG_RX,
} from "./utils.js";

const HELP_MSG =
  "Usage:\n\t" +
  "node scripts/update-moved-file-links.js\n\t" +
  "node scripts/update-moved-file-links.js --check\n";

/**
 * Try to get slug for an image from file path
 */
export async function getImageSlug(imagePath, root) {
  const nodePath = path.parse(imagePath);
  const absolutePath = `${root}/files/en-us/${nodePath.dir}/index.md`;
  let content;
  try {
    content = await fs.readFile(absolutePath, "utf-8");
  } catch (e) {}

  if (content) {
    return `/en-US/docs/${(content.match(SLUG_RX) || [])[0]}/${nodePath.base}`;
  } else {
    return `/en-US/docs/${imagePath}`;
  }
}

const rootDir = getRootDir();
let movedFiles = [];
let isCheckOnly = false;

if (process.argv[2] === "--help" || process.argv[2] === "-h") {
  console.error(HELP_MSG);
  process.exit(0);
} else if (process.argv[2] === "--check") {
  isCheckOnly = true;
}

// get staged and unstaged changes
const result = execGit(["status", "--short", "--porcelain"], { cwd: "." });
if (result.trim()) {
  movedFiles.push(
    ...result
      .split("\n")
      .filter(
        (line) =>
          /^\s*RM?\s+/gi.test(line) &&
          line.includes("files/en-us") &&
          (IMG_RX.test(line) || line.includes("index.md")),
      )
      .map((line) =>
        line.replaceAll(/^\s*RM?\s+|files\/en-us\/|\/index.md/gm, ""),
      )
      .map((line) => line.split(/ -> /))
      .map((tuple) => {
        return { from: tuple[0], to: tuple[1] };
      }),
  );
}

if (movedFiles.length < 1) {
  console.log("No content files were moved. Nothing to update! 🎉");
  process.exit(0);
}

const redirectsText = await fs.readFile(
  `${rootDir}/files/en-us/_redirects.txt`,
  "utf-8",
);

// convert file paths to slugs
movedFiles = (
  await Promise.all(
    movedFiles.map(async (tuple) => {
      const movedLineRg = new RegExp(`\n.*?${tuple.from}\\s+.*?\n`, "gmi");
      const redirectLine = (redirectsText.match(movedLineRg) || [])[0];

      if (redirectLine) {
        const urls = redirectLine.trim().split(/\s+/);
        return { from: urls[0], to: urls[1] };
      }

      if (isImagePath(tuple.from)) {
        return {
          from: await getImageSlug(tuple.from, rootDir),
          to: await getImageSlug(tuple.to, rootDir),
        };
      }

      console.warn("No redirect entry found for: ", tuple.from);
    }),
  )
).filter((e) => !!e);

console.log("Moved files:", movedFiles);

let totalNo = 0;
let updatedNo = 0;
for await (const filePath of walkSync(getRootDir())) {
  if (filePath.endsWith("index.md")) {
    try {
      totalNo++;
      const content = await fs.readFile(filePath, "utf-8");
      let updated = String(content);
      for (const moved of movedFiles) {
        // [text](link)
        updated = updated.replaceAll(`${moved.from})`, `${moved.to})`);
        // <link>
        updated = updated.replaceAll(`${moved.from}>`, `${moved.to}>`);
        // [text](link#)
        updated = updated.replaceAll(`${moved.from}#`, `${moved.to}#`);
        // [text](link "tool tip")
        updated = updated.replaceAll(`${moved.from} `, `${moved.to} `);
        // <a href="link">
        updated = updated.replaceAll(`${moved.from}"`, `${moved.to}"`);
        // <a href='link'>
        updated = updated.replaceAll(`${moved.from}'`, `${moved.to}'`);
      }

      if (content !== updated.valueOf()) {
        if (isCheckOnly) {
          console.error(
            "File(s) have been moved. " +
              "Run 'node scripts/update-moved-file-links.js' to update references.",
          );
          process.exit(1);
        }
        updatedNo++;
        await fs.writeFile(filePath, updated);
      }
    } catch (e) {
      console.error(`Error processing ${filePath}: ${e.message}`);
      throw e;
    }
  }
}

console.log(`Updated moved file links in ${updatedNo}/${totalNo} files.`);
