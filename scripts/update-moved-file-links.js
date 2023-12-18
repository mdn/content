import fs from "node:fs/promises";
import path from "node:path";
import { execGit, getRootDir, walkSync, isImagePath } from "./utils.js";

const SLUG_RX = /(?<=\nslug: ).*?$/gm;
const HELP_MSG =
  "Usage:\n\t" +
  "node scripts/update-moved-file-links.js\n\t" +
  "node scripts/update-moved-file-links.js [movedFromPath] [movedToPath]\n";

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

let movedFiles = [];
const rootDir = getRootDir();
const argLength = process.argv.length;

if (process.argv[2] === "--help" || process.argv[2] === "-h") {
  console.error(HELP_MSG);
  process.exit(0);
} else if (argLength === 2 && argLength > 3) {
  console.error(HELP_MSG);
  process.exit(1);
} else if (argLength === 3) {
  movedFiles.push({ from: process.argv[2], to: process.argv[3] });
} else {
  // git log --name-status --pretty=format:"" --since "1 day ago" --diff-filter=R
  let result = execGit(
    [
      "log",
      "--name-status",
      "--pretty=format:",
      '--since="1 day ago"',
      "--diff-filter=R",
    ],
    { cwd: "." },
  );

  if (result.trim()) {
    movedFiles.push(
      ...result
        .split("\n")
        .filter((line) => line.trim() !== "" && line.includes("files/en-us"))
        .map((line) => line.replaceAll(/files\/en-us\/|\/index.md/gm, ""))
        .map((line) => line.split(/\s/))
        .map((tuple) => {
          return { from: tuple[1], to: tuple[2] };
        }),
    );
  }
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

console.log(`Number of moved files to consider: ${movedFiles.length}`);

let totalNo = 0,
  updatedNo = 0;
for await (const filePath of walkSync(getRootDir())) {
  if (filePath.endsWith("index.md")) {
    try {
      totalNo++;
      const content = await fs.readFile(filePath, "utf-8");
      let updated = new String(content);
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

      if (content !== updated) {
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
