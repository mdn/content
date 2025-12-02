#!/usr/bin/env node

/**
 * Firefox Release Notes Version Updater
 *
 * This script automates the process of updating Firefox release notes when a new version is released.
 * It performs the following operations:
 * 1. Updates the current Beta (e.g., 145) to Stable
 * 2. Updates the current Nightly (e.g., 146) to Beta
 * 3. Creates a new Nightly page for the next version (e.g., 147)
 *
 * Usage: node scripts/content/release-firefox.js VERSION
 *
 * Example: node scripts/content/release-firefox.js 145
 */

import fs from "node:fs/promises";
import path from "node:path";
import https from "node:https";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CONTENT_ROOT = path.join(
  __dirname,
  "../files/en-us/mozilla/firefox/releases",
);
const CALENDAR_API =
  "https://whattrainisitnow.com/api/firefox/calendar/future/";

/**
 * Fetch JSON from a URL
 */
async function fetchJSON(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        let data = "";

        res.on("data", (chunk) => {
          data += chunk;
        });

        res.on("end", () => {
          try {
            const json = JSON.parse(data);
            resolve(json);
          } catch (error) {
            reject(error);
          }
        });
      })
      .on("error", (error) => {
        reject(error);
      });
  });
}

/**
 * Fetch release dates from whattrainisitnow.com
 */
async function fetchReleaseDates() {
  const futureReleases = await fetchJSON(CALENDAR_API);
  const dates = {};

  for (const versionData of Object.values(futureReleases)) {
    dates[versionData.version] = versionData.release_date;
  }

  return dates;
}

/**
 * Format date for front matter
 */
function formatDate(dateString) {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}

/**
 * Remove active status from a previous stable release
 */
async function deactivatePreviousStable(version) {
  const filePath = path.join(CONTENT_ROOT, version.toString(), "index.md");

  try {
    let content = await fs.readFile(filePath, "utf-8");

    // Update page-type: remove active from the previous stable release
    content = content.replace(
      /page-type: firefox-release-notes-active/,
      "page-type: firefox-release-notes",
    );

    // Remove (Stable) from title
    content = content.replace(
      /title: Firefox (\d+) release notes for developers \(Stable\)/,
      "title: Firefox $1 release notes for developers",
    );

    // Remove (Stable) from short-title
    content = content.replace(
      /short-title: Firefox (\d+) \(Stable\)/,
      "short-title: Firefox $1",
    );

    await fs.writeFile(filePath, content, "utf-8");
    console.log(`✅ Removed active status from Firefox ${version}`);
  } catch (error) {
    console.log(`⚠️  Could not update Firefox ${version} (file may not exist)`);
  }
}

/**
 * Update a release notes file with new status and date
 */
async function updateReleaseNotes(version, newStatus, releaseDate) {
  const filePath = path.join(CONTENT_ROOT, version.toString(), "index.md");
  let content = await fs.readFile(filePath, "utf-8");

  // Status configuration
  const statusConfig = {
    stable: {
      label: "(Stable)",
      description: "was released",
    },
    beta: {
      label: "(Beta)",
      description:
        "is the current [Beta version of Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) and ships",
    },
    nightly: {
      label: "(Nightly)",
      description:
        "is the current [Nightly version of Firefox](https://www.firefox.com/en-US/channel/desktop/#nightly) and ships",
    },
  };

  const { label: statusLabel, description: versionDescription } =
    statusConfig[newStatus];

  // Update title
  content = content.replace(
    /title: Firefox (\d+) release notes for developers \([^)]+\)/,
    `title: Firefox $1 release notes for developers ${statusLabel}`,
  );

  // Update short-title
  content = content.replace(
    /short-title: Firefox (\d+) \([^)]+\)/,
    `short-title: Firefox $1 ${statusLabel}`,
  );

  // Update description
  const descriptionPattern = new RegExp(
    `Firefox ${version} (is the current \\[(?:Beta|Nightly) version of Firefox\\]\\([^)]+\\) and ships|was released) on \\[[^\\]]+\\]\\(https://whattrainisitnow\\.com/release/\\?version=${version}\\)\\.`,
  );

  content = content.replace(
    descriptionPattern,
    `Firefox ${version} ${versionDescription} on [${releaseDate}](https://whattrainisitnow.com/release/?version=${version}).`,
  );

  // For stable releases, remove the "work in progress" note and clean up comments
  if (newStatus === "stable") {
    content = content.replace(
      /\n> \[!NOTE\]\n> The release notes for this Firefox version are still a work in progress\.\n\n/,
      "\n",
    );

    // Uncomment HTML, CSS, and JavaScript sections with "No notable changes."
    content = content.replace(
      /<!-- (### (?:HTML|CSS|JavaScript)) -->\n\n<!-- (No notable changes\.) -->/g,
      "$1\n\n$2",
    );

    // Remove all remaining HTML comments (including multi-line comments)
    content = content.replace(/<!--[\s\S]*?-->\n?/g, "");

    // Clean up excessive blank lines (more than 2 consecutive)
    content = content.replace(/\n{3,}/g, "\n\n");
  }

  await fs.writeFile(filePath, content, "utf-8");
  console.log(`✅ Updated Firefox ${version} to ${statusLabel}`);
}

/**
 * Create a new Nightly release notes page
 */
async function createNightlyPage(version, releaseDate) {
  const dirPath = path.join(CONTENT_ROOT, version.toString());
  const filePath = path.join(dirPath, "index.md");

  // Create directory if it doesn't exist
  await fs.mkdir(dirPath, { recursive: true });

  // Read template and replace placeholders
  const templatePath = path.join(__dirname, "release-firefox.md");
  let content = await fs.readFile(templatePath, "utf-8");
  content = content.replaceAll("{{VERSION}}", version.toString());
  content = content.replaceAll("{{RELEASE_DATE}}", releaseDate);

  await fs.writeFile(filePath, content, "utf-8");
  console.log(`✅ Created new Nightly page for Firefox ${version}`);
}

/**
 * Main function
 */
async function main() {
  console.log("🦊 Firefox Release Notes Updater\n");

  // Parse command line arguments
  const args = process.argv.slice(2);

  if (args.length === 0) {
    console.error("❌ Error: Version number is required");
    console.error("\nUsage: node scripts/content/release-firefox.js VERSION");
    console.error("Example: node scripts/content/release-firefox.js 145\n");
    process.exit(1);
  }

  const newStableVersion = parseInt(args[0], 10);
  if (isNaN(newStableVersion)) {
    console.error(
      `❌ Error: Invalid version number: ${args[0]}. Please provide a valid number.\n`,
    );
    process.exit(1);
  }

  try {
    // Determine the new version numbers
    const previousStableVersion = newStableVersion - 1;
    const newBetaVersion = newStableVersion + 1;
    const newNightlyVersion = newStableVersion + 2;

    console.log("📋 Planned updates:");
    console.log(`   Firefox ${previousStableVersion} → Remove active status`);
    console.log(`   Firefox ${newStableVersion} → Stable`);
    console.log(`   Firefox ${newBetaVersion} → Beta`);
    console.log(`   Firefox ${newNightlyVersion} → Nightly (new page)\n`);

    // Fetch release dates from Mozilla Product Details API
    console.log("📡 Fetching release dates...");
    const releaseDates = await fetchReleaseDates();

    const stableDate = releaseDates[newStableVersion];
    const betaDate = releaseDates[newBetaVersion];
    const nightlyDate = releaseDates[newNightlyVersion];

    if (!stableDate || !betaDate || !nightlyDate) {
      console.warn("⚠️  Warning: Could not find all release dates.");
      console.log(
        `   Stable (${newStableVersion}): ${stableDate || "NOT FOUND"}`,
      );
      console.log(`   Beta (${newBetaVersion}): ${betaDate || "NOT FOUND"}`);
      console.log(
        `   Nightly (${newNightlyVersion}): ${nightlyDate || "NOT FOUND"}`,
      );
      console.log("");

      if (!stableDate || !betaDate || !nightlyDate) {
        throw new Error("Missing required release dates. Cannot proceed.");
      }
    }

    console.log(`   Stable release date: ${formatDate(stableDate)}`);
    console.log(`   Beta release date: ${formatDate(betaDate)}`);
    console.log(`   Nightly release date: ${formatDate(nightlyDate)}\n`);

    // Perform updates
    console.log("🔄 Updating release notes...\n");

    // Remove active status from previous stable
    await deactivatePreviousStable(previousStableVersion);

    // Update Beta → Stable
    await updateReleaseNotes(
      newStableVersion,
      "stable",
      formatDate(stableDate),
    );

    // Update Nightly → Beta
    await updateReleaseNotes(newBetaVersion, "beta", formatDate(betaDate));

    // Create new Nightly page
    await createNightlyPage(newNightlyVersion, formatDate(nightlyDate));

    console.log("\n✨ Release notes update complete!");
  } catch (error) {
    console.error("❌ Error:", error.message);
    process.exit(1);
  }
}

// Run the script
main();
