import fs from "node:fs/promises";
import path from "node:path";

if (!process.argv[2]) {
  console.error("Required argument: path to webref checkout");
  process.exit(2);
}

const webrefPath = path.join(process.argv[2], "ed");
const interfaceData = {};
const index = await fs
  .readFile(path.join(webrefPath, "idlnames.json"), "utf-8")
  .then(JSON.parse);

(
  await Promise.all(
    Object.entries(index)
      .sort(([k1], [k2]) => k1.localeCompare(k2))
      .map(([, { parsed: jsonIdlPath }]) =>
        fs.readFile(path.join(webrefPath, jsonIdlPath), "utf-8")
      )
  )
).forEach((jsonData) => {
  const jsonIdl = JSON.parse(jsonData);
  if (jsonIdl.type === "interface") {
    interfaceData[jsonIdl.name] = {
      inh: jsonIdl.inheritance?.name || "",
      impl: [],
    };
  }
});

await fs.writeFile(
  "files/jsondata/InterfaceData.json",
  JSON.stringify([interfaceData], null, 2)
);
