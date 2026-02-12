import { lstat, readFile, writeFile } from "node:fs/promises";
import { cpus } from "node:os";
import { resolve } from "node:path";

import { eachLimit } from "async";
import cliProgress from "cli-progress";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";

import { fdir } from "fdir";
import { fileURLToPath } from "node:url";

import { getAjvValidator, checkFrontMatter } from "./front-matter_utils.js";

const EXCLUDED_DIRS = new Set(["conflicting", "orphaned"]);
const EXCLUDED_PATH_SEGMENTS = [
  "scripts/filecheck/fixtures/",
  "tests/front-matter_test_files",
];

function normalizePathForMatch(filePath) {
  return filePath.replaceAll("\\", "/");
}

function isExcludedFilePath(filePath) {
  const normalizedPath = normalizePathForMatch(filePath);

  if (
    EXCLUDED_PATH_SEGMENTS.some((segment) => normalizedPath.includes(segment))
  ) {
    return true;
  }

  return [...EXCLUDED_DIRS].some((dirName) =>
    normalizedPath.includes(`/${dirName}/`),
  );
}

export { isExcludedFilePath, normalizePathForMatch };

async function resolveDirectory(file) {
  const stats = await lstat(file);

  if (stats.isDirectory()) {
    const api = new fdir()
      .withErrors()
      .withFullPaths()
      .filter((filePath) => filePath.endsWith("index.md"))
      .exclude((dirName) => EXCLUDED_DIRS.has(dirName))
      .crawl(file);

    return api.withPromise();
  }

  if (
    stats.isFile() &&
    file.endsWith("index.md") &&
    !isExcludedFilePath(file)
  ) {
    return [file];
  }

  return [];
}

// lint front matter
async function lintFrontMatter(filesAndDirectories, options) {
  const files = (
    await Promise.all(filesAndDirectories.map(resolveDirectory))
  ).flat();

  options.config = JSON.parse(await readFile(options.configFile, "utf-8"));

  options.validator = getAjvValidator(options.config.schema);

  const progressBar = new cliProgress.SingleBar({ etaBuffer: 100 });
  progressBar.start(files.length, 0);

  const errors = [];
  const fixableErrors = [];
  await eachLimit(files, cpus().length, async (file) => {
    try {
      const [error, fixableError, content] = await checkFrontMatter(
        file,
        options,
      );
      if (content) {
        await writeFile(file, content);
      }
      error && errors.push(error);
      fixableError && fixableErrors.push(fixableError);
    } catch (err) {
      errors.push(`${err}\n ${err.stack}`);
    } finally {
      progressBar.increment();
    }
  });
  progressBar.stop();
  console.log(errors.length, fixableErrors.length);
  if (errors.length || fixableErrors.length) {
    let msg = errors.map((error) => `${error}`).join("\n\n");

    if (fixableErrors.length) {
      msg += "\n\nFollowing fixable errors can be fixed using '--fix' option\n";
      msg += fixableErrors.map((error) => `${error}`).join("\n");
    }
    throw new Error(msg);
  }
}

const __filename = fileURLToPath(import.meta.url);
const isMain = process.argv[1] === __filename;

if (isMain) {
  yargs(hideBin(process.argv))
    .command(
      "$0 [files...]",
      "Lint front matter in markdown files",
      (yargs) => {
        return yargs
          .positional("files", {
            type: "string",
            array: true,
            describe: "List of files and/or directories to check",
            default: ["./files/en-us"],
          })
          .option("fix", {
            type: "boolean",
            describe: "Save corrected output",
            default: false,
          })
          .option("config-file", {
            type: "string",
            describe: "Custom configuration file",
            default: "./front-matter-config.json",
          });
      },
      async (argv) => {
        const cwd = process.cwd();
        const files = (argv.files || []).map((f) => resolve(cwd, f));

        if (!files.length) {
          console.info("No files to lint.");
          return;
        }

        // yargs converts dashed flags to camelCase by default.
        const options = {
          fix: argv.fix,
          configFile: argv.configFile,
        };

        await lintFrontMatter(files, options);
      },
    )
    .help().argv;
}
