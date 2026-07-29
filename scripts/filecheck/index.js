#!/usr/bin/env node

import path from "node:path";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";

import { runChecker } from "./checker.js";
import { MAX_COMPRESSION_DIFFERENCE_PERCENTAGE } from "./constants.js";
import { CONTENT_ROOT, CONTENT_TRANSLATED_ROOT } from "./env.js";

/**
 * @typedef {Object} FilecheckOptions
 * @property {string} [cwd] Explicit current-working-directory
 * @property {number} [maxCompressionDifferencePercentage] Max percentage for reduction after compression
 * @property {boolean} [saveCompression] If it can be compressed, save the result
 */

/**
 * @typedef {Object} FilecheckArgs
 * @property {string[]} [files] List of files and/or directories to check
 */

const defaultFiles = [CONTENT_ROOT, CONTENT_TRANSLATED_ROOT].filter(Boolean);

/**
 * Resolve file paths against the provided cwd.
 * @param {string[]} files
 * @param {string} cwd
 * @returns {string[]}
 */
function resolveFiles(files, cwd) {
  return (files || []).map((f) => path.resolve(cwd || process.cwd(), f));
}

const argv = yargs(hideBin(process.argv))
  .scriptName("filecheck")
  .version("0.0.0")
  .command("$0 [files...]", "Check image files")
  .option("cwd", {
    type: "string",
    describe: "Explicit current-working-directory",
    default: process.cwd(),
  })
  .option("max-compression-difference-percentage", {
    type: "number",
    describe: "Max percentage for reduction after compression",
    default: MAX_COMPRESSION_DIFFERENCE_PERCENTAGE,
  })
  .option("save-compression", {
    type: "boolean",
    describe: "If it can be compressed, save the result",
    default: false,
  })
  .positional("files", {
    type: "string",
    array: true,
    describe: "List of files and/or directories to check",
    default: defaultFiles,
  })
  .check((args) => {
    if (
      args.maxCompressionDifferencePercentage != null &&
      Number.isNaN(Number(args.maxCompressionDifferencePercentage))
    ) {
      throw new Error(
        "--max-compression-difference-percentage must be a number",
      );
    }
    return true;
  })
  .help()
  .strict()
  .parse();

/** @type {FilecheckArgs & FilecheckOptions} */
const optionsAndArgs = /** @type {any} */ (argv);

const cwd = optionsAndArgs.cwd || process.cwd();
/** @type {string[]} */
const files = resolveFiles(optionsAndArgs.files || [], cwd);

if (!files.length) {
  console.info("No files to check.");
  process.exit(0);
}

// yargs converts dashed flags to camelCase by default.
// Pull out the options we pass through to runChecker.
const { maxCompressionDifferencePercentage, saveCompression } = optionsAndArgs;

/** @type {FilecheckOptions} */
const checkerOptions = {
  cwd,
  maxCompressionDifferencePercentage,
  saveCompression,
};

const maybePromise = runChecker(files, checkerOptions);

// If runChecker returns a promise, let unhandled rejections surface clearly.
if (maybePromise && typeof maybePromise.then === "function") {
  maybePromise.catch((err) => {
    console.error(err instanceof Error ? err.stack || err.message : err);
    process.exitCode = 1;
  });
}
