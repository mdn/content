import fs from "node:fs/promises";
import path from "node:path";

if (!process.argv[2]) {
  console.error("Required argument: path to webref checkout");
  process.exit(2);
}

const webrefPath = path.join(process.argv[2], "ed");
const idlnames = await fs
  .readFile(path.join(webrefPath, "idlnames.json"), "utf-8")
  .then(JSON.parse);

const idls = await Promise.all(
  Object.entries(idlnames)
    .sort(([k1], [k2]) => k1.localeCompare(k2))
    .map(([, { parsed: jsonIdlPath }]) =>
      fs.readFile(path.join(webrefPath, jsonIdlPath), "utf-8").then(JSON.parse),
    ),
);

const interfaceData = idls.reduce((interfaceData, idl) => {
  if (idl.type === "interface") {
    interfaceData[idl.name] = {
      inh: idl.inheritance?.name || "",
      impl: [],
    };
  }
  return interfaceData;
}, {});

await fs.writeFile(
  "files/jsondata/InterfaceData.json",
  JSON.stringify([interfaceData], null, 2) + "\n",
);
