const fs = require("fs").promises;

if (!process.argv[2]) {
  console.error("Required argument: path to webref checkout");
  process.exit(2);
}
const webrefPath = process.argv[2] + "ed/";
(async function () {
  const interfaceData = {};
  const index = JSON.parse(await fs.readFile(webrefPath + "idlnames.json", "utf-8"));
  (await Promise.all(
    Object.entries(index)
      .sort(([k1, v1], [k2, v2]) => k1.localeCompare(k2))
      .map(async ([,{parsed: jsonIdlPath}]) => await fs.readFile(webrefPath + jsonIdlPath, "utf-8"))
  )).forEach(jsonData => {
    const jsonIdl = JSON.parse(jsonData);
    if (jsonIdl.type === "interface") {
      interfaceData[jsonIdl.name] = {
        inh: jsonIdl.inheritance?.name || "",
        impl: []
      };
    }
  });
  await fs.writeFile("files/jsondata/InterfaceData.json", JSON.stringify([interfaceData], null, 2));
})();
