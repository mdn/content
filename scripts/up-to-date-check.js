const yariPackageJson = require("@mdn/yari/package.json");
const thisPackageJson = require("../package.json");

const availableYariVersion = thisPackageJson.dependencies["@mdn/yari"];
const installedYariVersion = yariPackageJson.version;

if (installedYariVersion < availableYariVersion) {
  console.log(
    `The version of @mdn/yari that's installed (${installedYariVersion}) ` +
      `is older than the version that is in package.json (${availableYariVersion}). ` +
      "Please run: `yarn install` to be up-to-date."
  );
  console.log("Also, make sure your `main` git branch is up to date.");
}
