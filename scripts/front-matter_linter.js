import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";

import { eachLimit } from "async";
import cliProgress from "cli-progress";

import fdir_pkg from "fdir";
const { fdir, PathsOutput } = fdir_pkg;

import caporal from "@caporal/core";
const { program } = caporal;

import {
  getAjvValidator,
  checkFrontMatter,
  getRelativePath,
} from "./front-matter_utils.js";

async function resolveDirectory(file) {
  const stats = await fs.lstat(file);
  if (stats.isDirectory()) {
    const api = new fdir()
      .withErrors()
      .withFullPaths()
      .filter((filePath) => filePath.endsWith("index.md"))
      .crawl(file);
    return api.withPromise();
  } else if (
    stats.isFile() &&
    file.endsWith("index.md") &&
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

  options.config = JSON.parse(
    await fs.readFile("./front-matter-config.json", "utf-8"),
  );

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
        fs.writeFile(file, content);
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
      msg +=
        "\n\nFollowing fixable errors can be fixed using '--fix true' option\n";
      msg += fixableErrors.map((error) => `${error}`).join("\n");
    }
    throw new Error(msg);
  }
}

function tryOrExit(f) {
  return async ({ options = {}, ...args }) => {
    try {
      await f({ options, ...args });
    } catch (error) {
      if (options.verbose || options.v) {
        console.error(chalk.red(error.stack));
      }
      throw error;
    }
  };
}

program
  .option("--fix", "Save corrected output", {
    validator: program.BOOLEAN,
    default: false,
  })
  .argument("[files...]", "list of files and/or directories to check", {
    default: ["./files/en-us"],
  })
  .action(
    tryOrExit(({ args, options, logger }) => {
      const cwd = process.cwd();
      const files = (args.files || []).map((f) => path.resolve(cwd, f));
      if (!files.length) {
        logger.info("No files to lint.");
        return;
      }
      return lintFrontMatter(files, options);
    }),
  );

program.run();
