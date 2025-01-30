export default {
  "files/en-us/_redirects.txt": () => [
    `yarn content fix-redirects`,
    `yarn content:legacy validate-redirects en-us --strict`,
  ],
  "!*.md": (files) => [`prettier --ignore-unknown --write ${files.join(" ")}`],
  "*.md": (files) => [
    `markdownlint-cli2 --fix ${files.join(" ")}`,
    `node scripts/front-matter_linter.js --fix true ${files.join(" ")}`,
    `node scripts/update-moved-file-links.js --check`,
    `prettier --write ${files.join(" ")}`,
  ],
  "tests/**/*.*": () => [`yarn test:front-matter-linter`],
  "*.{svg,png,jpeg,jpg,gif}": (files) => [`yarn filecheck ${files.join(" ")}`],
  "*": () => [`node scripts/log-url-issues.js`],
  ".vscode/dictionaries/*.txt": (files) => [
    `node scripts/sort_and_unique_file_lines.js ${files.join(" ")}`,
  ],
};
