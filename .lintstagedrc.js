export default {
  "files/en-us/_redirects.txt": (filenames) => [
    `yarn content fix-redirects en-US`,
    `yarn content validate-redirects en-us --strict`,
  ],
  "!*.md": (filenames) => [
    `prettier --ignore-unknown --write ${filenames.join(" ")}`,
  ],
  "*.md": (filenames) => [
    `markdownlint-cli2 --fix ${filenames.join(" ")}`,
    `node scripts/front-matter_linter.js --fix true  ${filenames.join(" ")}`,
    `node scripts/update-moved-file-links.js --check`,
    `prettier --write ${filenames.join(" ")}`,
  ],
  "tests/**/*.*": (filenames) => [`yarn test:front-matter-linter`],
  "*.{svg,png,jpeg,jpg,gif}": (filenames) => [
    `yarn filecheck ${filenames.join(" ")}`,
  ],
  "*": (filenames) => [`node scripts/log-url-issues.js`],
};
