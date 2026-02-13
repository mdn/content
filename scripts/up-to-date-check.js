import fredPackageJson from "@mdn/fred/package.json" with { type: "json" };
import thisPackageJson from "../package.json" with { type: "json" };

<<<<<<< HEAD
const availableFredVersion = thisPackageJson.devDependencies["@mdn/fred"];
=======
const availableFredVersion = thisPackageJson.dependencies["@mdn/fred"];
>>>>>>> 30471395d (window.setTimeout() - negative delay is set to 0 (#43078))
const installedFredVersion = fredPackageJson.version;

if (installedFredVersion < availableFredVersion) {
  console.log(
    `The installed version of Fred (${installedFredVersion}) is older than ` +
      `the version referenced in package.json (${availableFredVersion}). ` +
      `Please make sure your main git branch is up-to-date with ` +
      `https://github.com/mdn/content/, then run npm install to ` +
      `install the latest Fred.`,
  );
}
