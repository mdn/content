/*
 * The script logs locations of affected URLs due to following reasons:
 * - file deletion
 * - Markdown header updates
 */

import fs from "node:fs/promises";
import {
  execGit,
  getRootDir,
  walkSync,
  getLocations,
  IMG_RX,
  stringToFragment,
} from "./utils.js";

const deletedSlugs = [];
const addedFragmentDetails = [];
let deletedFragmentDetails = [];
let isAllOk = true;

function getDeletedSlugs(fromStaging = true) {
  let result = "";

  if (fromStaging) {
    // git status --short --porcelain
    result = execGit(["status", "--short", "--porcelain"], { cwd: "." });
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
          .map((line) =>
            line.replaceAll(/^\s+|files\/en-us\/|\/index.md/gm, ""),
          )
          .map((line) => line.split(/\s+/)[1]),
      );
    }
  } else {
    // git diff --summary origin/main...HEAD
    result = execGit(["diff", "--summary", "origin/main...HEAD"], { cwd: "." });
    if (result.trim()) {
      deletedSlugs.push(
        ...result
          .split("\n")
          .filter(
            (line) =>
              line.includes("delete mode") &&
              line.includes("files/en-us") &&
              (IMG_RX.test(line) || line.includes("index.md")),
          )
          .map((line) => line.replace(/^\s*delete mode \d+ /gm, ""))
          .map((line) =>
            line.replaceAll(/^\s+|files\/en-us\/|\/index.md/gm, ""),
          ),
      );
    }
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

      const addedHeaderRx = /^\+#+ .*$/gm;
      const addedFragments = [...segment.matchAll(addedHeaderRx)]
        .map((match) => match[0].toLowerCase())
        .map((header) => header.replace(/\+#+ /g, ""))
        .map((header) => stringToFragment(header));

      const removedHeaderRx = /^-#+ .*$/gm;
      [...segment.matchAll(removedHeaderRx)]
        .map((match) => match[0].toLowerCase())
        .map((header) => header.replace(/-#+ /g, ""))
        .map((header) => stringToFragment(header))
        .filter((header) => !addedFragments.includes(header))
        .forEach((header) => deletedFragmentDetails.push(`${path}#${header}`));

      addedFragments.forEach((header) =>
        addedFragmentDetails.push(`${path}#${header}`),
      );
    }
  }

  console.log("deletedFragmentDetails", deletedFragmentDetails);
}

if (process.argv[2] !== "--workflow") {
  getDeletedSlugs();
  getFragmentDetails();
} else {
  getDeletedSlugs(false);
  getFragmentDetails(false);
}

deletedFragmentDetails = deletedFragmentDetails.filter(
  (fragment) => !addedFragmentDetails.includes(fragment),
);

if (deletedSlugs.length < 1 && deletedFragmentDetails.length < 1) {
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
        const locations = getLocations(
          content,
          new RegExp(`/${slug}[)># \"']`, "mig"),
        );
        if (locations.length) {
          isAllOk = false;
          for (const location of locations) {
            console.error(
              `ERROR:${relativePath}:${location.line}:${location.column}:Slug '${slug}' has been deleted`,
            );
          }
        }
      }

      // check broken URL fragment
      for (const fragment of deletedFragmentDetails) {
        const locations = getLocations(content, fragment);
        // check fragments in the same file
        const urlParts = fragment.split("#");
        if (filePath.includes(`${urlParts[0]}/index.md`)) {
          locations.push(...getLocations(content, `[(]#${urlParts[1]}`));
        }
        if (locations.length) {
          isAllOk = false;
          for (const location of locations) {
            console.error(
              `ERROR:${relativePath}:${location.line}:${location.column}:URL fragment in URL '${fragment}' is broken`,
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
