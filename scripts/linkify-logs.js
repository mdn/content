/*
 *  The script converts file paths to GitHub source links in the provided text.
 *  Usage: node scripts/linkify-logs.js ${logs}
 */

const logs = process.argv[2];

console.log(
  logs.replaceAll(
    /(files\/.*?\/index.md):?(\d+)?:?(\d+)?/g,
    (_, path, lineNo, columnNo) => {
      if (lineNo) {
        return `[${path}:${lineNo}:${columnNo}](https://github.com/mdn/content/blob/main/${path}?plain=1#L${lineNo})`;
      }
      return `[${path}](https://github.com/mdn/content/blob/main/${path}?plain=1)`;
    },
  ),
);
