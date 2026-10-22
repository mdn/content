import { createHash } from "node:crypto";
import fs from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

/**
 * Collects a content hash per built page and the total flaw count of a build.
 * @param {string} root - Build output directory.
 * @returns {Promise<{ pages: Map<string, string>, flaws: number }>}
 */
export async function collectPages(root) {
  const pages = new Map();
  let flaws = 0;
  const entries = await fs.readdir(root, {
    recursive: true,
    withFileTypes: true,
  });
  for (const entry of entries) {
    if (!entry.isFile() || entry.name !== "index.json") continue;
    const fullPath = path.join(entry.parentPath, entry.name);
    const content = await fs.readFile(fullPath);
    pages.set(
      path.relative(root, fullPath),
      createHash("sha256").update(content).digest("hex"),
    );
    flaws += countFlaws(JSON.parse(content.toString("utf8")));
  }
  return { pages, flaws };
}

/**
 * @param {{ doc?: { flaws?: Record<string, unknown> } }} page
 * @returns {number}
 */
export function countFlaws(page) {
  let count = 0;
  for (const items of Object.values(page.doc?.flaws ?? {})) {
    if (Array.isArray(items)) count += items.length;
  }
  return count;
}

/**
 * @param {Map<string, string>} base - Page hashes of the base build.
 * @param {Map<string, string>} pr - Page hashes of the PR build.
 * @returns {{ changed: string[], total: number }}
 */
export function comparePages(base, pr) {
  const all = new Set([...base.keys(), ...pr.keys()]);
  const changed = [...all].filter((file) => base.get(file) !== pr.get(file));
  return { changed: changed.sort(), total: all.size };
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
 * @param {string[]} changed
 * @returns {string}
 */
export function renderReport(stats, changed) {
  const delta = stats.pr_flaws - stats.base_flaws;
  const rows = changed
    .map((file) => `<li><code>${escapeHtml(file)}</code></li>`)
    .join("\n");
  return `<!doctype html>
<meta charset="utf-8">
<title>Build diff</title>
<h1>Build diff</h1>
<p>${stats.changed_files} of ${stats.total_files} pages across both builds changed.</p>
<p>Flaws: ${stats.base_flaws} → ${stats.pr_flaws} (${delta >= 0 ? "+" : ""}${delta}).</p>
<ul>${rows}</ul>
`;
}

async function main(baseRoot, prRoot) {
  const [base, pr] = await Promise.all([
    collectPages(baseRoot),
    collectPages(prRoot),
  ]);
  const { changed, total } = comparePages(base.pages, pr.pages);
  const stats = {
    changed_files: changed.length,
    total_files: total,
    base_flaws: base.flaws,
    pr_flaws: pr.flaws,
  };
  await fs.writeFile("diff-stats.json", `${JSON.stringify(stats, null, 2)}\n`);
  await fs.writeFile("diff.html", renderReport(stats, changed));
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
