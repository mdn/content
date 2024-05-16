export default {
  "files/en-us/_redirects.txt": (filenames) => [
    `yarn content fix-redirects en-US`,
    `yarn content validate-redirects en-us --strict`,
  ],
};
