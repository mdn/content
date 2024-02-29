/**
 * This script stores the 'main' branch's HEAD commit hash in .husky/_/history
 * The stored commit hash is used by the post-merge script .husky/post-merge
 */

import fs from "node:fs";
import { execGit } from "./utils.js";

const HUSKY_ROOT = ".husky/_/";
const HISTORY_FILE = HUSKY_ROOT + "history";

const branch = execGit(["rev-parse", "--abbrev-ref", "HEAD"], { cwd: "." });
if (branch === "main" && fs.existsSync(HUSKY_ROOT)) {
  const hash = execGit(["rev-parse", "HEAD"], { cwd: "." });
  fs.writeFileSync(HISTORY_FILE, hash);
}
