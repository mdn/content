import fs from "node:fs/promises";
import path from "node:path";
import childProcess from "node:child_process";

export const IMG_RX = /(\.png|\.jpg|\.svg|\.gif)$/gim;
export const SLUG_RX = /(?<=\nslug: ).*?$/gm;

export async function* walkSync(dir) {
  const files = await fs.readdir(dir, { withFileTypes: true });
  for (const file of files) {
    if (file.isDirectory()) {
      yield* walkSync(path.join(dir, file.name));
    } else {
      yield path.join(dir, file.name);
    }
  }
}

export function execGit(args, opts = {}, root = null) {
  const gitRoot = root || getRootDir();
  const { status, error, stdout, stderr } = childProcess.spawnSync(
    "git",
    args,
    {
      cwd: gitRoot,
      // Default is 1MB
      maxBuffer: 1024 * 1024 * 100, // 100MB
    },
  );
  if (error || status !== 0) {
    if (stderr) {
      console.log(args);
      console.log(`Error running git ${args}`);
      console.error(stderr);
    }
    if (error) {
      throw error;
    }
    throw new Error(
      `git command failed: ${stderr.toString() || stdout.toString()}`,
    );
  }
  return stdout.toString().trim();
}

export function getRootDir() {
  return execGit(["rev-parse", "--show-toplevel"], {}, process.cwd());
}

export function isImagePath(path) {
  return IMG_RX.test(path);
}

/*
 * Returns locations (line and column numbers) of 'searchValue' in the given 'content'.
 */
export function getLocations(content, searchValue) {
  const lineLengths = content.split("\n").map((line) => line.length);
  const searchRx =
    searchValue instanceof RegExp
      ? searchValue
      : new RegExp(searchValue, "mig");
  const matches = [...content.matchAll(searchRx)].map((match) => match.index);
  const positions = [];

  let currentPosition = 0;
  lineLengths.forEach((lineLength, index) => {
    lineLength += 1; // add '\n'
    for (const match of matches) {
      if (currentPosition < match && currentPosition + lineLength > match) {
        positions.push({
          line: index + 1,
          column: match - currentPosition + 1,
        });
      }
    }
    currentPosition += lineLength;
  });
  return positions;
}

/*
 * Convert Markdown header into URL slug.
 */
export function stringToFragment(text) {
  if (!text) return text;
  return text
    .trim()
    .replace(/["#$%&+,/:;=?@[\]^`{|}~')(\\]/g, "")
    .replace(/\s+/g, "_");
}
