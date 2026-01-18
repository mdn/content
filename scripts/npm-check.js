if (process.env.npm_config_user_agent?.includes("yarn")) {
  console.error();
  console.error(
    "❌ Yarn is no longer supported in this repository (since December 1, 2025).",
  );
  console.error("   Use npm instead:");
  console.error("   - `npm ci`          instead of `yarn --frozen-lockfile`");
  console.error("   - `npm install`     instead of `yarn install`");
  console.error("   - `npm run content` instead of `yarn content`");
  console.error();
  process.exit(1);
} else {
  console.info();
  console.info("🐥 This repository is now using npm (since December 1, 2025).");
  console.info(
    "🐞 Please report any issues here: https://github.com/mdn/fred/issues/new?template=bug.yml",
  );
  console.info();
}
