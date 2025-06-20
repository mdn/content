import fs from "fs/promises";
import grayMatter from "gray-matter";

const rootDir = new URL(
  "../files/en-us/web/javascript/reference/",
  import.meta.url,
);
async function walkDirectory(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const parentDirName = dir.pathname.split("/").at(-1);
  let results = [];

  for (const entry of entries) {
    if (entry.isDirectory()) {
      if (entry.name === parentDirName) continue;
      const subDir = new URL(`${entry.name}/`, dir);
      results = results.concat(await walkDirectory(subDir));
    } else if (entry.isFile() && entry.name === "index.md") {
      results.push(new URL(entry.name, dir));
    }
  }

  return results;
}

async function generate() {
  const files = await walkDirectory(rootDir);
  const availableTypes = [
    "javascript-static-method",
    "javascript-instance-method",
    "javascript-instance-accessor-property",
    "javascript-class",
  ];

  for (const file of files) {
    const content = await fs.readFile(file, "utf-8");
    const { data } = grayMatter(content);

    if (!data["short-title"] && availableTypes.includes(data["page-type"])) {
      data["short-title"] = generateTitle(data.title);
      const updatedContent = grayMatter.stringify(content, data);
      await fs.writeFile(file, updatedContent);
    }
  }

  console.log("Done.");
}
generate();

function generateTitle(title) {
  // Your title generation logic here
  return title.split(".").pop();
}
