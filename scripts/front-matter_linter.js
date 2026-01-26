import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";

import { eachLimit } from "async";
import cliProgress from "cli-progress";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";

import { fdir } from "fdir";

import { getAjvValidator, checkFrontMatter } from "./front-matter_utils.js";

async function resolveDirectory(file) {
  const stats = await fs.lstat(file);
  if (stats.isDirectory()) {
    const api = new fdir()
      .withErrors()
      .withFullPaths()
      .filter((filePath) => filePath.endsWith("index.md"))
      .exclude((dirName) => dirName === "conflicting" || dirName === "orphaned")
      .crawl(file);
    return api.withPromise();
  } else if (
    stats.isFile() &&
    file.endsWith("index.md") &&
    !file.includes("/conflicting/") &&
    !file.includes("/orphaned/") &&
    !file.includes("scripts/filecheck/fixtures/") &&
    !file.includes("tests/front-matter_test_files")
  ) {
    return [file];
  } else {
    return [];
  }
}

// lint front matter
async function lintFrontMatter(filesAndDirectories, options) {
  const files = (
    await Promise.all(filesAndDirectories.map(resolveDirectory))
  ).flat();

  options.config = JSON.parse(await fs.readFile(options.configFile, "utf-8"));

  options.validator = getAjvValidator(options.config.schema);

  const progressBar = new cliProgress.SingleBar({ etaBuffer: 100 });
  progressBar.start(files.length, 0);

  const errors = [];
  const fixableErrors = [];
  await eachLimit(files, os.cpus().length, async (file) => {
    try {
      const [error, fixableError, content] = await checkFrontMatter(
        file,
        options,
      );
      if (content) {
        await fs.writeFile(file, content);
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
      const files = (argv.files || []).map((f) => path.resolve(cwd, f));

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
