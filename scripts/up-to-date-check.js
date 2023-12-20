import yariPackageJson from "@mdn/yari/package.json" assert { type: "json" };
import thisPackageJson from "../package.json" assert { type: "json" };

const availableYariVersion = thisPackageJson.dependencies["@mdn/yari"];
const installedYariVersion = yariPackageJson.version;

if (installedYariVersion < availableYariVersion) {
  console.log(
    `The installed version of Yari (${installedYariVersion}) is older than ` +
      `the version referenced in package.json (${availableYariVersion}). ` +
      `Please make sure your main git branch is up-to-date with ` +
      `https://github.com/mdn/content/, then run yarn install to ` +
      `install the latest Yari.`,
  );
}
