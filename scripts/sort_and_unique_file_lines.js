import fs from "node:fs";
import path from "node:path";

const filePath = process.argv[2];
const check = process.argv[3] === "--check";

if (!fs.existsSync(filePath)) {
  console.error(`File ${filePath} doesn't exist.`);
  console.warn(
    "Usage:\n\tnode scripts/sort_and_unique_file_lines.js <filePath> [--check]",
  );
  process.exit(1);
}

function equalsIgnoreCase(string1, string2) {
  return new RegExp(`^${string1}$`, "gi").test(string2);
}

const uniq = [];
const content = fs.readFileSync(filePath, "utf-8");
const lines = content.split("\n").sort((a, b) => {
  a = a.toUpperCase();
  b = b.toUpperCase();
  return a < b ? -1 : a > b ? 1 : 0;
});

for (let i = 0; i < lines.length; ) {
  const line = lines[i];
  if (line.trim() !== "") {
    uniq.push(line);
    while (equalsIgnoreCase(line, lines[++i]));
  } else {
    i++;
  }
}

const sortedContent = uniq.join("\n") + "\n";
if (check) {
  if (content !== sortedContent) {
    console.error(
      `The file is not formatted properly. Run 'node scripts/sort_and_unique_file_lines.js ${filePath}' to format the file.`,
    );
    process.exit(1);
  } else {
    console.log("The file looks good.");
    process.exit(0);
  }
}

fs.writeFileSync(filePath, sortedContent);
