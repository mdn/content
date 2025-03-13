import { readFile, readdir } from "node:fs/promises";
import { existsSync, statSync } from "node:fs";
import { join } from "node:path";
import { createHash } from "node:crypto";

import { Octokit } from "@octokit/rest";
import { parse } from "node-html-parser";
import parseDiff from "parse-diff";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";

const natCompare = new Intl.Collator("en", { numeric: true }).compare;

const DEFAULT_REPO = "mdn/content"; // adjust as needed
const DEFAULT_GITHUB_TOKEN = "your_default_github_token"; // adjust as needed

const MAX_COMMENT_BODY_LENGTH = 65000;
const hiddenCommentRegex =
  /<!-- build_hash: ([a-f0-9]+) date: ([\d:\.\- ]+) -->/;

/**
 * Main function to analyze a PR build directory and post (or print) a comment.
 * @param {string} buildDirectory - Path to the build directory.
 * @param {object} config - Configuration object.
 */
async function analyzePR(buildDirectory, config) {
  const combinedComments = [];

  if (config.prefix) {
    const deploymentComment = await postAboutDeployment(buildDirectory, config);
    if (deploymentComment) combinedComments.push(deploymentComment);
  }

  if (config.analyze_flaws) {
    const flawsComment = await postAboutFlaws(buildDirectory, config);
    if (flawsComment) combinedComments.push(flawsComment);
  }

  if (config.analyze_dangerous_content) {
    let patch = null;
    if (config.diff_file) {
      try {
        const diffContent = await readFile(config.diff_file, "utf8");
        // parse-diff returns an array of patch objects
        patch = parseDiff(diffContent);
      } catch (err) {
        console.error(`Error reading diff file: ${err}`);
      }
    }
    const dangerousComment = await postAboutDangerousContent(
      buildDirectory,
      patch,
      config,
    );
    if (dangerousComment) combinedComments.push(dangerousComment);
  }

  const combinedComment = combinedComments.filter((x) => x).join("\n\n");

  if (!combinedComment) {
    console.warn("Warning! Nothing to comment at all!");
    return;
  }

  const buildHash = await getBuildHash(buildDirectory);
  const now = new Date().toISOString();
  const hiddenComment = `<!-- build_hash: ${buildHash} date: ${now} -->`;
  const fullComment = truncateComment(`${hiddenComment}\n\n${combinedComment}`);

  if (!config.repo) {
    console.warn("Warning! No 'repo' config");
  } else if (!config.pr_number) {
    console.warn("Warning! No 'pr_number' config");
  } else {
    const prUrl = `https://github.com/${config.repo}/pull/${config.pr_number}`;
    if (config.dry_run) {
      console.warn(`Dry-run! Not actually posting any comment to ${prUrl}`);
    } else {
      if (!config.github_token) {
        throw new Error("No 'github_token' so no posting of comments");
      }
      console.log(`Posting to ${prUrl}`);
      const octokit = new Octokit({ auth: config.github_token });
      const [owner, repo] = config.repo.split("/");

      // List existing comments
      const { data: comments } = await octokit.issues.listComments({
        owner,
        repo,
        issue_number: Number(config.pr_number),
      });

      let updated = false;
      for (const comment of comments) {
        if (comment.user && comment.user.login === "github-actions[bot]") {
          if (hiddenCommentRegex.test(comment.body)) {
            const nowUpdate = new Date()
              .toISOString()
              .replace("T", " ")
              .split(".")[0];
            const newComment =
              fullComment + `\n\n*(comment last updated: ${nowUpdate})*`;
            await octokit.issues.updateComment({
              owner,
              repo,
              comment_id: comment.id,
              body: newComment,
            });
            console.log(`Updating existing comment (${comment.id})`);
            updated = true;
            break;
          }
        }
      }
      if (!updated) {
        await octokit.issues.createComment({
          owner,
          repo,
          issue_number: Number(config.pr_number),
          body: fullComment,
        });
      }
    }
  }

  return fullComment;
}

/**
 * Truncates a comment if it exceeds MAX_COMMENT_BODY_LENGTH.
 * @param {string} comment - The comment text.
 */
function truncateComment(comment) {
  if (comment.length > MAX_COMMENT_BODY_LENGTH) {
    return comment.slice(0, MAX_COMMENT_BODY_LENGTH) + "…\n\nTRUNCATED!";
  }
  return comment;
}

/**
 * Constructs a comment about the deployment with preview URLs.
 * @param {string} buildDirectory - Path to the build directory.
 * @param {object} config - Configuration object.
 */
async function postAboutDeployment(buildDirectory, config) {
  const docs = await getBuiltDocs(buildDirectory);
  let links = [];
  for (const doc of docs) {
    if (doc.mdn_url) {
      const url = mdnUrlToDevUrl(config.prefix, config.host, doc.mdn_url);
      const mdnUrl = doc.mdn_url;
      links.push(`- [\`${mdnUrl}\`](${url})`);
    }
  }
  links.sort();

  if (links.length > 0) {
    if (links.length > 5) {
      const heading = `<details><summary><b>Preview URLs</b> (${links.length} pages)</summary>\n\n`;
      return heading + links.join("\n") + "\n\n</details>";
    } else {
      const heading = `<b>Preview URLs</b>\n\n`;
      return heading + links.join("\n");
    }
  }
  return "*seems not a single file was built!* 🙀";
}

/**
 * Transforms an MDN URL into a developer preview URL.
 * @param {string} prefix - The preview prefix.
 * @param {string} host - The preview environment host.
 * @param {string} mdnUrl - The MDN URL.
 */
function mdnUrlToDevUrl(prefix, host, mdnUrl) {
  return `https://${prefix}.${host}${mdnUrl}`;
}

/**
 * Constructs a comment reporting any dangerous external URLs.
 * @param {string} buildDirectory - Path to the build directory.
 * @param {Array} patch - Array of patch objects (from parse-diff).
 * @param {object} config - Configuration object.
 */
async function postAboutDangerousContent(buildDirectory, patch, config) {
  const OK_URL_PREFIXES = ["https://github.com/mdn/"];
  const docs = await getBuiltDocs(buildDirectory);
  const comments = [];
  let totalUrls = 0;

  let patchLines = {};
  if (patch) {
    patchLines = getPatchLines(patch);
  }

  for (const doc of docs) {
    let renderedHtml = "";
    if (doc.body && Array.isArray(doc.body)) {
      renderedHtml = doc.body
        .filter((x) => x.type === "prose" && x.value && x.value.content)
        .map((x) => x.value.content)
        .join("\n");
    }

    let diffLines = null;
    if (patchLines && doc.source && doc.source.folder && doc.source.filename) {
      const fileSuffix = join(doc.source.folder, doc.source.filename);
      for (const filePath in patchLines) {
        if (filePath.endsWith(fileSuffix)) {
          diffLines = patchLines[filePath];
          break;
        }
      }
    }

    const root = parse(renderedHtml);
    const anchorElements = root.querySelectorAll("a[href]");
    const externalUrls = {};
    for (const node of anchorElements) {
      let href = node.getAttribute("href");
      if (!href) continue;
      href = href.split("#")[0];
      if (href.startsWith("//") || href.includes("://")) {
        let skip = false;
        for (const okPrefix of OK_URL_PREFIXES) {
          if (href.toLowerCase().startsWith(okPrefix.toLowerCase())) {
            skip = true;
            break;
          }
        }
        if (skip) continue;
        if (diffLines && !diffLines.includes(href)) {
          continue;
        }
        externalUrls[href] = (externalUrls[href] || 0) + 1;
      }
    }

    if (Object.keys(externalUrls).length > 0) {
      const externalUrlsList = [];
      const sortedUrls = Object.keys(externalUrls).sort();
      for (const url of sortedUrls) {
        let count = externalUrls[url];
        const originalUrl = url;
        let replacedUrl = url.replace(
          "https://github.com/",
          "https://redirect.github.com/",
        );
        const link =
          replacedUrl === originalUrl
            ? `<${url}>`
            : `[${originalUrl}](<${replacedUrl}>)`;
        let line = `${url.startsWith("http://") ? "🚨 " : ""}${link} (${count} time${count === 1 ? "" : "s"})`;
        if (diffLines) {
          line += " (Note! This may be a new URL 👀)";
        }
        externalUrlsList.push("  - " + line);
      }
      comments.push({ doc, comment: externalUrlsList.join("\n") });
      totalUrls += externalUrlsList.length;
    }
  }

  if (comments.length > 0) {
    let heading = `\n<details><summary><b>External URLs</b> (${totalUrls})</summary>\n\n`;
    const perDocComments = [];
    for (const { doc, comment } of comments) {
      const lines = [];
      if (config.prefix && doc.mdn_url) {
        const url = mdnUrlToDevUrl(config.prefix, config.host, doc.mdn_url);
        lines.push(`URL: [\`${doc.mdn_url}\`](${url})`);
      } else if (doc.mdn_url) {
        lines.push(`URL: \`${doc.mdn_url}\``);
      }
      if (doc.title) {
        lines.push(`Title: \`${doc.title}\``);
      }
      lines.push("");
      lines.push(comment);
      lines.push("");
      perDocComments.push(lines.join("\n"));
    }
    return heading + perDocComments.join("\n---\n") + "\n</details>";
  }
}

/**
 * Constructs a comment reporting document flaws.
 * @param {string} buildDirectory - Path to the build directory.
 * @param {object} config - Configuration object.
 */
async function postAboutFlaws(buildDirectory, config) {
  const docs = await getBuiltDocs(buildDirectory);
  const comments = [];
  const MAX_FLAW_EXPLANATION = 5;
  let docsWithZeroFlaws = 0;
  let totalFlaws = 0;

  for (const doc of docs) {
    if (!doc.flaws || Object.keys(doc.flaws).length === 0) {
      docsWithZeroFlaws++;
      continue;
    }

    const flawsList = [];
    for (const flawName in doc.flaws) {
      flawsList.push(`- **${flawName}**:`);
      const flawValues = doc.flaws[flawName];
      for (let i = 0; i < flawValues.length; i++) {
        if (i >= MAX_FLAW_EXPLANATION) {
          flawsList.push(
            `  - *and ${flawValues.length - MAX_FLAW_EXPLANATION} more flaws omitted*`,
          );
          break;
        }
        let explanation;
        if (typeof flawValues[i] === "object" && flawValues[i] !== null) {
          explanation = flawValues[i].explanation;
        } else {
          explanation = String(flawValues[i]);
        }
        if (explanation) {
          flawsList.push(`  - \`${explanation}\``);
        } else {
          flawsList.push("  - *no explanation!*");
        }
      }
    }
    comments.push({ doc, comment: flawsList.join("\n") });
  }

  function countFlaws(flaws) {
    let count = 0;
    for (const key in flaws) {
      count += flaws[key].length;
    }
    return count;
  }

  if (comments.length > 0) {
    const perDocComments = [];
    for (const { doc, comment } of comments) {
      const lines = [];
      if (config.prefix && doc.mdn_url) {
        const url = mdnUrlToDevUrl(config.prefix, config.host, doc.mdn_url);
        lines.push(`URL: [\`${doc.mdn_url}\`](${url})`);
      } else if (doc.mdn_url) {
        lines.push(`URL: \`${doc.mdn_url}\``);
      }
      if (doc.title) {
        lines.push(`Title: \`${doc.title}\``);
      }
      const flawCount = doc.flaws ? countFlaws(doc.flaws) : 0;
      if (flawCount) {
        totalFlaws += flawCount;
        lines.push(`Flaw count: ${flawCount}`);
      }
      lines.push("");
      lines.push(comment);
      perDocComments.push(lines.join("\n"));
    }
    let heading = `\n<details><summary><b>Flaws</b> (${totalFlaws})</summary>\n\n`;
    if (docsWithZeroFlaws) {
      heading += `Note! *${docsWithZeroFlaws} document${docsWithZeroFlaws === 1 ? "" : "s"} with no flaws that don't need to be listed. 🎉*\n\n`;
    }
    return heading + perDocComments.join("\n\n---\n\n") + "\n\n</details>";
  }
}

/**
 * Recursively finds and returns the parsed JSON document objects from all index.json files.
 * @param {string} buildDirectory - Path to the build directory.
 */
async function getBuiltDocs(buildDirectory) {
  const docs = [];
  async function walk(dir) {
    let files;
    try {
      files = await readdir(dir, { withFileTypes: true });
    } catch (err) {
      console.error(`Error reading directory ${dir}: ${err}`);
      return;
    }
    for (const file of files) {
      const fullPath = join(dir, file.name);
      if (file.isDirectory()) {
        await walk(fullPath);
      } else if (file.name === "index.json") {
        try {
          const content = await readFile(fullPath, "utf8");
          const data = JSON.parse(content);
          if ("doc" in data) {
            docs.push(data.doc);
          }
        } catch (err) {
          console.error(`Error processing file ${fullPath}: ${err}`);
        }
      }
    }
  }
  await walk(buildDirectory);

  docs.sort((a, b) => natCompare(a.mdn_url, b.mdn_url));

  return docs;
}

/**
 * Computes an MD5 hash over all index.json files in the build directory.
 * @param {string} buildDirectory - Path to the build directory.
 */
async function getBuildHash(buildDirectory) {
  const hash = createHash("md5");
  async function walk(dir) {
    let files;
    try {
      files = await readdir(dir, { withFileTypes: true });
    } catch (err) {
      console.error(`Error reading directory ${dir}: ${err}`);
      return;
    }
    for (const file of files) {
      const fullPath = join(dir, file.name);
      if (file.isDirectory()) {
        await walk(fullPath);
      } else if (file.name === "index.json") {
        try {
          const content = await readFile(fullPath);
          hash.update(content);
        } catch (err) {
          console.error(`Error reading file ${fullPath}: ${err}`);
        }
      }
    }
  }
  await walk(buildDirectory);
  return hash.digest("hex");
}

/**
 * Extracts added (new) lines from patch objects.
 * @param {Array} patches - Array of patch objects from parse-diff.
 */
function getPatchLines(patches) {
  const patchLines = {};
  for (const file of patches) {
    if (file.binary) continue;
    // Here we assume file.to is the current file path (if renamed, parse-diff usually sets file.from and file.to)
    const filePath = file.to;
    let newLines = "";
    if (file.chunks && Array.isArray(file.chunks)) {
      for (const chunk of file.chunks) {
        for (const line of chunk.changes) {
          if (line.type === "add") {
            newLines += line.content;
          }
        }
      }
    }
    patchLines[filePath] = newLines;
  }
  return patchLines;
}

yargs(hideBin(process.argv))
  .command(
    "$0",
    "Analyze the PR build",
    (yargs) => {
      return yargs
        .positional("directory", {
          describe: "Directory path",
          type: "string",
          coerce: (dirPath) => {
            if (!existsSync(dirPath) || !statSync(dirPath).isDirectory()) {
              throw new Error(`Directory "${dirPath}" is not valid.`);
            }
            return dirPath;
          },
        })
        .option("prefix", {
          describe: "What prefix was it uploaded as",
          type: "string",
          default: null,
        })
        .option("host", {
          describe: "Host of the review environment",
          type: "string",
          default: "review.mdn.allizom.net",
        })
        .option("repo", {
          describe: "Name of the repo (e.g. mdn/content)",
          type: "string",
          default: DEFAULT_REPO,
        })
        .option("pr-number", {
          describe: "Number for the PR",
          type: "number",
          default: null,
        })
        .option("github-token", {
          describe: "Token used to post PR comments",
          type: "string",
          default: DEFAULT_GITHUB_TOKEN,
        })
        .option("analyze-flaws", {
          describe: "Analyze the .doc.flaws keys in the index.json files",
          type: "boolean",
          default: false,
        })
        .option("analyze-dangerous-content", {
          describe:
            'Look through the built content and list "dangerous things"',
          type: "boolean",
          default: false,
        })
        .option("diff-file", {
          describe:
            "The path to the file that is a diff output. (Only relevant in conjunction with --analyze-dangerous-content)",
          type: "string",
          default: null,
          coerce: (filePath) => {
            if (filePath && !existsSync(filePath)) {
              throw new Error(`File "${filePath}" does not exist.`);
            }
            return filePath;
          },
        })
        .option("dry-run", {
          describe: "Enable dry-run (no comment)",
          type: "boolean",
          default: false,
        })
        .option("verbose", {
          describe: "Enable verbose logging",
          type: "boolean",
          default: false,
        });
    },
    async (argv) => {
      const directory = argv._.shift();
      const {
        prefix,
        host,
        repo,
        prNumber: pr_number,
        githubToken: github_token,
        analyzeFlaws: analyze_flaws,
        analyzeDangerousContent: analyze_dangerous_content,
        diffFile: diff_file,
        dryRun: dry_run,
        verbose,
      } = argv;

      const options = {
        directory,
        prefix,
        host,
        repo,
        pr_number,
        github_token,
        analyze_flaws,
        analyze_dangerous_content,
        diff_file,
        dry_run,
        verbose,
      };

      // Check that at least one actionable option was provided
      if (
        !options.prefix &&
        !options.analyze_flaws &&
        !options.analyze_dangerous_content
      ) {
        throw new Error("No actionable option used.");
      }

      // Call your analysis function with the directory and options
      const combinedComment = await analyzePR(directory, options);

      if (argv.verbose) {
        console.log("_".repeat(80));
        console.log("POST");
        console.log(combinedComment);
        console.log("END POST".padStart(80, "_"));
      }
    },
  )
  .demandCommand(1, "You need to specify a command.")
  .help().argv;
