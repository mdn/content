import fs from "node:fs";

const check = process.argv[2] === "--check";
const inputPaths = process.argv.slice(check ? 3 : 2);

if (!inputPaths.length) {
  console.error(`No file paths provided.`);
  console.warn(
    "Usage:\n\tnode scripts/sort_and_unique_file_lines.js [--check] [inputPaths...]",
  );
  process.exit(1);
} else {
  const invalidFiles = inputPaths.filter(
    (filePath) => !fs.existsSync(filePath),
  );
  if (invalidFiles.length) {
    console.error(`Invalid file paths: ${invalidFiles.join(", ")}`);
    process.exit(1);
  }
}

const filePaths = inputPaths.flatMap((arg) => {
  if (fs.statSync(arg).isDirectory()) {
    return fs.readdirSync(arg).map((file) => `${arg}/${file}`);
  }
  return arg;
});

const equalsIgnoreCase = (a, b) => a?.toLowerCase() === b?.toLowerCase();

for (const filePath of filePaths) {
  const uniq = [];
  const content = fs.readFileSync(filePath, "utf-8");
  const lines = content.split("\n").sort((a, b) => {
    a = a.toLowerCase();
    b = b.toLowerCase();
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
      process.exitCode = 1;
    } else {
      console.log(`The file ${filePath} looks good.`);
    }
  } else {
    fs.writeFileSync(filePath, sortedContent);
  }
}
