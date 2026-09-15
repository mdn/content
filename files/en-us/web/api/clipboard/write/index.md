---
title: "Clipboard: write() method"
short-title: write()
slug: Web/API/Clipboard/write
page-type: web-api-instance-method
browser-compat: api.Clipboard.write
---

{{APIRef("Clipboard API")}} {{securecontext_header}}

The **`write()`** method of the {{domxref("Clipboard")}} interface is used to write data such as images, text, and custom types, to the system clipboard.

The method takes as an argument an array of {{domxref("ClipboardItem")}} instances, and returns a {{jsxref("Promise")}} that is fulfilled when the data is written.
Each `ClipboardItem` can contain one or more representations of an object that has been copied, allowing apps that read the data to pick the format they prefer.
This is more flexible than {{domxref("Clipboard.writeText", "writeText()")}}, which can only write text.

## Syntax

```js-nolint
write(data)
```

### Parameters

- `data`
  - : An array of {{domxref("ClipboardItem")}} objects containing data to be written to the clipboard.

### Return value

A {{jsxref("Promise")}} which is resolved when the data has been written to the clipboard.
Note that if the underlying OS does not support multiple native clipboard items on the system clipboard, then only the first {{domxref("ClipboardItem")}} in the array is written.

The promise is rejected if the clipboard is unable to write to the clipboard.

### Exceptions

- `NotAllowedError` {{domxref("DOMException")}}
  - : Thrown if writing to the clipboard is not allowed.

## Description

Each item in the `data` array is a {{domxref("ClipboardItem")}} that can contain one or more representations of the data being written, keyed by {{Glossary("MIME type")}}.
Providing multiple representations lets an app that later pastes the data pick the best format it understands.

Browsers commonly support writing text, HTML, and PNG image data, and may support web custom formats (see the [Browser compatibility](/en-US/docs/Web/API/ClipboardItem#browser_compatibility) section of `ClipboardItem`).

## Security considerations

Writing to the clipboard can only be done in a [secure context](/en-US/docs/Web/Security/Defenses/Secure_Contexts).

Additional security requirements are covered in the [Security consideration](/en-US/docs/Web/API/Clipboard_API#security_considerations) section of the API overview topic.

## Examples

### Write text to the clipboard

This example function replaces the current contents of the clipboard with a specified string when a button is pressed.
Note that for this particular case, you could just as readily use `Clipboard.writeText()`.

```js
button.addEventListener("click", () => setClipboard("<empty clipboard>"));

async function setClipboard(text) {
  const type = "text/plain";
  const clipboardItemData = {
    [type]: text,
  };
  const clipboardItem = new ClipboardItem(clipboardItemData);
  await navigator.clipboard.write([clipboardItem]);
}
```

The `setClipboard()` function specifies a `"text/plain"` MIME type in the `type` constant, then specifies a `clipboardItemData` object with a single property — its key is the MIME type, and its value is the passed in text that we want to write to the clipboard. We then construct a new {{domxref("ClipboardItem")}} object into which the `clipboardItemData` object is passed.

Finally, `write()` is called with `await` to write the data to the clipboard.

### Write canvas contents to the clipboard

This example draws a blue rectangle to the canvas.
You can click the rectangle to copy the content of the canvas into the clipboard as an image, and then select another element and paste in the content from the clipboard.

#### HTML

The HTML just defines our `<canvas>` element and the `<div>` element with id `target` where the canvas image will be pasted.

```html
<canvas id="canvas" width="100" height="100"></canvas>

<div id="target">Paste here.</div>
```

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 60px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

```js
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

#### JavaScript

First we define an `async` function to copy a canvas to a blob.
This wraps the old callback-style {{domxref("HTMLCanvasElement.toBlob()")}} method into the more intuitive `Promise` based function.

```js
// Async/await method replacing toBlob() callback
async function getBlobFromCanvas(canvas) {
  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (blob) {
        resolve(blob);
      } else {
        reject(new Error("Canvas toBlob failed"));
      }
    });
  });
}
```

Next we set up our canvas and add an event listener for the `click` event.

When you click the blue rectangle, the canvas displaying the rectangle is copied into a blob, and then the blob is added to a `ClipboardItem` and then written to the clipboard.

```js
const canvas = document.getElementById("canvas");

// Set up canvas
const ctx = canvas.getContext("2d");
ctx.fillStyle = "cornflowerblue";
ctx.fillRect(0, 0, 100, 100);

canvas.addEventListener("click", copyCanvasContentsToClipboard);
const target = document.getElementById("target");

async function copyCanvasContentsToClipboard() {
  // Copy canvas to blob
  try {
    const blob = await getBlobFromCanvas(canvas);
    // Create ClipboardItem with blob and its type, and add to an array
    const data = [new ClipboardItem({ [blob.type]: blob })];
    // Write the data to the clipboard
    await navigator.clipboard.write(data);
    log("Copied");
  } catch (error) {
    log(error);
  }
}
```

Note that if you are fetching a less-common file type or a resource that you don't know the type in advance, you may want to use {{domxref("ClipboardItem.supports_static", "ClipboardItem.supports()")}} to check if the file type is supported, and provide a good error message to the user in case it isn't.

We then define an event listener for [`paste` events](/en-US/docs/Web/API/Element/paste_event) on then element where we want to display the clipboard contents as an image.
The [FileReader API](/en-US/docs/Web/API/FileReader) allows us to read the blob using the [`readAsDataUrl`](/en-US/docs/Web/API/FileReader/readAsDataURL) method and create an `<img>` element with the canvas contents:

```js
target.addEventListener("paste", (event) => {
  const items = (event.clipboardData || window.clipboardData).items;
  const blob = items[0].getAsFile();
  const reader = new FileReader();

  reader.addEventListener("load", (event) => {
    const img = new Image();
    img.src = event.target.result;
    target.appendChild(img);
  });

  reader.readAsDataURL(blob);
});
```

```css hidden
body {
  font-family: sans-serif;
}
#target {
  border: 2px solid;
  padding: 1rem;
  height: 150px;
}
img {
  margin: 0.5rem;
}
```

#### Result

The result is shown below.
First click on the blue square, and then select the text "Paste here" and use your OS-specific keyboard combinations to paste from the clipboard (such as `Ctrl+V` on Windows).

{{embedlivesample("write_canvas_contents_to_the_clipboard", "", "420", "", "", "", "clipboard-write")}}

### Writing a custom format to the clipboard

This example uses the same code as [Reading and writing custom formats](/en-US/docs/Web/API/Clipboard_API#reading_and_writing_custom_formats) in the Clipboard API overview, but shows only the code that's specific to `write()`.
For more detail see that example.

#### HTML

```html hidden
<table id="source">
  <thead>
    <tr>
      <th>Item</th>
      <th>Quantity</th>
      <th>SKU</th>
    </tr>
  </thead>
  <tbody></tbody>
</table>
<button id="copy_custom" type="button">
  Copy (HTML + text + custom format)
</button>
<button id="reload_custom" type="button">Reload</button>
<p id="status_custom"></p>
```

```html hidden
<div class="targets">
  <div>
    <p>Your app</p>
    <div id="target_app"></div>
    <button id="paste_app" type="button">Paste</button>
  </div>
  <div>
    <p>Arbitrary rich text target</p>
    <div id="target_richtext"></div>
    <button id="paste_richtext" type="button">Paste</button>
  </div>
  <div>
    <p>Arbitrary plain text target</p>
    <div id="target_plaintext"></div>
    <button id="paste_plaintext" type="button">Paste</button>
  </div>
</div>
```

```css hidden
body {
  margin: 1rem;
}

#source {
  border-collapse: collapse;
  margin-bottom: 1rem;
}

#source th,
#source td {
  border: 1px solid black;
  padding: 0.25rem 0.5rem;
}

#status_custom {
  min-height: 1.2em;
  font-style: italic;
}

.targets {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 1rem 0;
}

.targets > div {
  flex: 1;
  min-width: 150px;
}

.targets p {
  margin: 0 0 0.25rem;
  font-weight: bold;
}

.targets button {
  margin-top: 0.5rem;
}

#target_app,
#target_richtext,
#target_plaintext {
  box-sizing: border-box;
  width: 100%;
  min-height: 80px;
  border: 1px solid black;
  padding: 0.5rem;
  font-family: inherit;
  font-size: inherit;
  white-space: pre-wrap;
}

#target_app:empty::before,
#target_richtext:empty::before,
#target_plaintext:empty::before {
  content: "Nothing pasted yet";
  color: gray;
}

#target_app table {
  border-collapse: collapse;
}

#target_app th,
#target_app td {
  border: 1px solid black;
  padding: 0.25rem 0.5rem;
}
```

#### JavaScript

```js hidden
const statusElement = document.querySelector("#status_custom");
function log(text) {
  statusElement.textContent = text;
}
```

```js hidden
const inventory = [
  { item: "Apples", quantity: 12, sku: "A-104" },
  { item: "Pears", quantity: 7, sku: "P-221" },
];

function buildRow(cells, cellTag) {
  const tr = document.createElement("tr");
  for (const value of cells) {
    const cell = document.createElement(cellTag);
    cell.textContent = value;
    tr.appendChild(cell);
  }
  return tr;
}
const sourceBody = document.querySelector("#source tbody");
for (const row of inventory) {
  sourceBody.appendChild(buildRow([row.item, row.quantity, row.sku], "td"));
}
```

```js hidden
function buildTable(headers, rows) {
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  thead.appendChild(buildRow(headers, "th"));
  const tbody = document.createElement("tbody");
  for (const row of rows) {
    tbody.appendChild(buildRow(row, "td"));
  }
  table.append(thead, tbody);
  return table;
}
```

```js hidden
const reload = document.querySelector("#reload_custom");

reload.addEventListener("click", () => {
  window.location.reload(true);
});
```

Here we define the custom media ("MIME") type that we will use in the following code.
We also use {{domxref("ClipboardItem.supports_static", "ClipboardItem.supports()")}} to check whether that particular format is supported and log that to the output.
Note that this example works either way, we just won't be able to read (or write) the custom type.

```js
const customType = "web text/x-mdn-inventory+json";

log(
  ClipboardItem.supports(customType)
    ? `Custom format supported: ${customType}`
    : `Custom format not supported by this browser: ${customType}`,
);
```

The following code builds the `ClipboardItem` when the copy button is pressed.
This creates representation for `text/html` and `text/plain` blobs, and adds the custom-format blob only when `ClipboardItem.supports()` confirms the browser accepts it.
There is nothing special about the blob for the custom format: the only difference is the`web` prefix used for its key.
The `text/html` blob omits the `SKU` column stored in the custom format, and acts as a fall back when the content is pasted in apps and browsers that don't allow the format.

```js
const sourceTable = document.querySelector("#source");
const copyButton = document.querySelector("#copy_custom");

async function copyInventory() {
  const reducedTable = buildTable(
    ["Item", "Quantity"],
    inventory.map((row) => [row.item, row.quantity]),
  );
  const html = reducedTable.outerHTML;
  const text = inventory
    .map((row) => `${row.item}\t${row.quantity}`)
    .join("\n");

  const data = {
    "text/html": new Blob([html], { type: "text/html" }),
    "text/plain": new Blob([text], { type: "text/plain" }),
  };
  if (ClipboardItem.supports(customType)) {
    const json = JSON.stringify(inventory);
    data[customType] = new Blob([json], { type: customType });
  }

  try {
    await navigator.clipboard.write([new ClipboardItem(data)]);
    log(`Copied ${Object.keys(data).length} format(s) to the clipboard.`);
  } catch (error) {
    log(`Copy failed: ${error.message}`);
  }
}

copyButton.addEventListener("click", copyInventory);

document.addEventListener("copy", (event) => {
  const selection = document.getSelection();
  if (!sourceTable.contains(selection.anchorNode)) return;
  event.preventDefault();
  copyInventory();
});
```

```js hidden
const targetApp = document.querySelector("#target_app");
const pasteAppButton = document.querySelector("#paste_app");

pasteAppButton.addEventListener("click", async () => {
  try {
    const [clipboardItem] = await navigator.clipboard.read();
    if (clipboardItem.types.includes(customType)) {
      const blob = await clipboardItem.getType(customType);
      const rows = JSON.parse(await blob.text());
      const table = buildTable(
        ["Item", "Quantity", "SKU"],
        rows.map((row) => [row.item, row.quantity, row.sku]),
      );
      targetApp.replaceChildren(table);
    } else {
      targetApp.textContent = "Custom format not on the clipboard.";
    }
  } catch (error) {
    targetApp.textContent = `Paste failed: ${error.message}`;
  }
});
```

```js hidden
const targetRichtext = document.querySelector("#target_richtext");
const pasteRichtextButton = document.querySelector("#paste_richtext");

pasteRichtextButton.addEventListener("click", async () => {
  try {
    const [clipboardItem] = await navigator.clipboard.read();
    if (clipboardItem.types.includes("text/html")) {
      const blob = await clipboardItem.getType("text/html");
      targetRichtext.innerHTML = await blob.text();
    } else {
      targetRichtext.textContent = "No text/html on the clipboard.";
    }
  } catch (error) {
    targetRichtext.textContent = `Paste failed: ${error.message}`;
  }
});
```

```js hidden
const targetPlaintext = document.querySelector("#target_plaintext");
const pastePlaintextButton = document.querySelector("#paste_plaintext");

pastePlaintextButton.addEventListener("click", async () => {
  try {
    const [clipboardItem] = await navigator.clipboard.read();
    if (clipboardItem.types.includes("text/plain")) {
      const blob = await clipboardItem.getType("text/plain");
      targetPlaintext.textContent = await blob.text();
    } else {
      targetPlaintext.textContent = "No text/plain on the clipboard.";
    }
  } catch (error) {
    targetPlaintext.textContent = `Paste failed: ${error.message}`;
  }
});
```

#### Result

Click the "Copy" button, or select the table and copy it manually, to write the table to the clipboard as HTML, plain text, and (if supported) the custom format.
Click each of the three "Paste" buttons to see what each representation was used for, or see [Reading and writing custom formats](/en-US/docs/Web/API/Clipboard_API#reading_and_writing_custom_formats) in the Clipboard API overview for the full walkthrough.
Click "Reload" to reset the example.

{{EmbedLiveSample("Writing a custom format to the clipboard", "100%", "450", "", "", "", "clipboard-read; clipboard-write")}}

> [!NOTE]
> If prompted, grant permission in order to copy and paste.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Clipboard API](/en-US/docs/Web/API/Clipboard_API)
- [Image support for Async Clipboard article](https://web.dev/articles/async-clipboard)
- {{domxref("Clipboard.writeText()")}}
- {{domxref("Clipboard.read()")}}
- {{domxref("Clipboard.readText()")}}
