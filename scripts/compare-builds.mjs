import { createHash } from "node:crypto";
import fs from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

/**
 * Collects a content hash per built page and the flaw count of a build.
 * @param {string} root - Build output directory.
 * @returns {Promise<{ pages: Map<string, string>, flaws: number }>}
 */
export async function collectPages(root) {
  const pages = new Map();
  const entries = await fs.readdir(root, {
    recursive: true,
    withFileTypes: true,
  });
  for (const entry of entries) {
    if (!entry.isFile() || entry.name !== "index.json") continue;
    const fullPath = path.join(entry.parentPath, entry.name);
    pages.set(
      path.relative(root, fullPath),
      createHash("sha256")
        .update(await fs.readFile(fullPath))
        .digest("hex"),
    );
  }
  const issues = JSON.parse(
    await fs.readFile(path.join(root, "issues.json"), "utf8"),
  );
  return { pages, flaws: countIssues(issues) };
}

/**
 * Counts the issues written by `rari build --issues`, ignoring suppressed ones.
 * @param {Record<string, { ignore?: boolean }[]>} issues - Issues keyed by source file.
 * @returns {number}
 */
export function countIssues(issues) {
  let count = 0;
  for (const items of Object.values(issues)) {
    count += items.filter((issue) => !issue.ignore).length;
  }
  return count;
}

/**
 * @param {Map<string, string>} base - Page hashes of the base build.
 * @param {Map<string, string>} pr - Page hashes of the PR build.
 * @returns {{ added: string[], removed: string[], modified: string[], total: number }}
 */
export function comparePages(base, pr) {
  const all = new Set([...base.keys(), ...pr.keys()]);
  const added = [];
  const removed = [];
  const modified = [];
  for (const file of [...all].sort()) {
    if (!base.has(file)) added.push(file);
    else if (!pr.has(file)) removed.push(file);
    else if (base.get(file) !== pr.get(file)) modified.push(file);
  }
  return { added, removed, modified, total: all.size };
}

const escapeHtml = (value) =>
  value.replace(
    /[&<>"']/g,
    (char) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      })[char],
  );

/**
 * @param {Record<string, number>} stats
 * @param {{ added: string[], removed: string[], modified: string[] }} pages
 * @returns {string}
 */
export function renderReport(stats, pages) {
  const delta = stats.pr_flaws - stats.base_flaws;
  const section = (title, files) =>
    files.length
      ? `<h2>${title} (${files.length})</h2>\n<ul>\n${files
          .map((file) => `<li><code>${escapeHtml(file)}</code></li>`)
          .join("\n")}\n</ul>\n`
      : "";
  return `<!doctype html>
<meta charset="utf-8">
<title>Build diff</title>
<h1>Build diff</h1>
<p>Pages: ${stats.added_pages} added, ${stats.removed_pages} removed, ${stats.modified_pages} modified (${stats.total_pages} total).</p>
<p>Flaws: ${stats.base_flaws} → ${stats.pr_flaws} (${delta >= 0 ? "+" : ""}${delta}).</p>
${section("Added", pages.added)}${section("Removed", pages.removed)}${section("Modified", pages.modified)}`;
}

async function main(baseRoot, prRoot) {
  const [base, pr] = await Promise.all([
    collectPages(baseRoot),
    collectPages(prRoot),
  ]);
  const pages = comparePages(base.pages, pr.pages);
  const stats = {
    added_pages: pages.added.length,
    removed_pages: pages.removed.length,
    modified_pages: pages.modified.length,
    total_pages: pages.total,
    base_flaws: base.flaws,
    pr_flaws: pr.flaws,
  };
  await fs.writeFile("diff-stats.json", `${JSON.stringify(stats, null, 2)}\n`);
  await fs.writeFile("diff.html", renderReport(stats, pages));
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  const [baseRoot, prRoot] = process.argv.slice(2);
  if (!baseRoot || !prRoot) {
    console.error(
      "Usage: node scripts/compare-builds.mjs <base-build> <pr-build>",
    );
    process.exit(1);
  }
  await main(baseRoot, prRoot);
}
