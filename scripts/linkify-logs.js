/*
 *  The script converts file paths to GitHub source links in the provided text.
 *  Usage: node scripts/linkify-logs.js ${logs}
 */

const logs = process.argv[2];

console.log(
  logs.replaceAll(/(files\/.*?\/index.md):?(\d+)?/g, (_, path, lineNo) => {
    let link = `[${path}](https://github.com/mdn/content/blob/main/${path}?plain=1`;
    if (lineNo) {
      return link + `#L${lineNo}):${lineNo}`;
    }
    return link + `)`;
  }),
);
