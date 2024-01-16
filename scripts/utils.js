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
