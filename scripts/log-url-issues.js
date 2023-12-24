/*
 * The script logs locations of affected URLs due to following reasons:
 * - file deletion
 * - Markdown header updates
 */

import fs from "node:fs/promises";
import path from "node:path";
import {
  execGit,
  getRootDir,
  walkSync,
  isImagePath,
  getLocations,
  IMG_RX,
  stringToFragment,
} from "./utils.js";

const rootDir = getRootDir();
const argLength = process.argv.length;
const deletedSlugs = [];
const fragmentDetails = [];
let isAllOk = true;

function getDeletedSlugs() {
  // git status --short --porcelain
  let result = execGit(["status", "--short", "--porcelain"], { cwd: "." });

  if (result.trim()) {
    deletedSlugs.push(
      ...result
        .split("\n")
        .filter(
          (line) =>
            /^\s*D\s+/gi.test(line) &&
            line.includes("files/en-us") &&
            (IMG_RX.test(line) || line.includes("index.md")),
        )
        .map((line) => line.replaceAll(/^\s*|files\/en-us\/|\/index.md/gm, ""))
        .map((line) => line.split(/\s+/)[1]),
    );
  }
  console.log("deletedSlugs", deletedSlugs);
}

function getFragmentDetails(fromStaging = true) {
  let result = "";

  if (fromStaging) {
    // get staged and unstaged changes
    result = execGit(["diff", "HEAD"], { cwd: "." });
  } else {
    // get diff between branch base and HEAD
    result = execGit(["diff", "origin/main...HEAD"], { cwd: "." });
  }

  if (result.trim()) {
    const segments = [
      ...result.split("diff --git a/").filter((segment) => segment !== ""),
    ];
    for (const segment of segments) {
      const path = segment
        .substring(0, segment.indexOf(" "))
        .replaceAll(/files\/en-us\/|\/index.md/gm, "");

      const headerRx = /^-#+ .*$/gm;
      const fragments = [...segment.matchAll(headerRx)]
        .map((match) => match[0].toLowerCase())
        .map((header) => header.replace(/-#+ /g, ""))
        .map((header) => stringToFragment(header));

      for (const fragment of fragments) {
        fragmentDetails.push(`${path}#${fragment}`);
      }
    }
  }
  console.log("fragmentDetails", fragmentDetails);
}

if (process.argv[2] !== "--workflow") {
  getDeletedSlugs();
  getFragmentDetails();
} else {
  getFragmentDetails(false);
}

if (deletedSlugs.length < 1 && fragmentDetails.length < 1) {
  console.log("Nothing to check. 🎉");
  process.exit(0);
}

for await (const filePath of walkSync(getRootDir())) {
  if (filePath.endsWith("index.md")) {
    try {
      const content = await fs.readFile(filePath, "utf-8");
      const relativePath = filePath.substring(filePath.indexOf("files/en-us"));

      // check deleted links
      for (const slug of deletedSlugs) {
        isAllOk = false;
        const locations = getLocations(
          content,
          new RegExp(`/${slug}[)># \"']`, "mig"),
        );
        if (locations.length) {
          for (const location of locations) {
            console.error(
              `ERROR:${relativePath}:${location.line}:${location.column}:Slug '${slug}' has been deleted`,
            );
          }
        }
      }

      // check broken URL fragment
      for (const fragment of fragmentDetails) {
        isAllOk = false;
        const locations = getLocations(content, fragment);
        // check fragments in the same file
        const urlParts = fragment.split("#");
        if (filePath.includes(urlParts[0])) {
          locations.push(...getLocations(content, urlParts[1]));
        }
        if (locations.length) {
          for (const location of locations) {
            console.error(
              `ERROR:${relativePath}:${location.line}:${location.column}:URL fragment '${fragment}' is broken`,
            );
          }
        }
      }
    } catch (e) {
      console.error(`Error processing ${filePath}: ${e.message}`);
      throw e;
    }
  }
}

if (!isAllOk) {
  process.exit(1);
}
