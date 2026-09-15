---
title: "Clipboard: read() method"
short-title: read()
slug: Web/API/Clipboard/read
page-type: web-api-instance-method
browser-compat: api.Clipboard.read
---

{{APIRef("Clipboard API")}} {{securecontext_header}}

The **`read()`** method of the {{domxref("Clipboard")}} interface returns a {{jsxref("Promise")}} that fulfills with a copy of the clipboard's contents.

Each item from the clipboard can provide different representations of the copied object, allowing apps to handle the types they understand, and gracefully fall back for types they don't.
This is more flexible than {{domxref("Clipboard.readText", "readText()")}}, which can only return text.

## Syntax

```js-nolint
read()
read(formats)
```

### Parameters

- `formats` {{optional_inline}}
  - : An optional object with the following properties:
    - `unsanitized` {{optional_inline}}
      - : An {{jsxref("Array")}} of strings containing MIME types of data formats that should not be sanitized when reading from the clipboard.

        Certain browsers may sanitize the clipboard data when it is read, to prevent malicious content from being pasted into the document. For example, Chrome (and other Chromium-based browsers) sanitizes HTML data by stripping `<script>` tags and other potentially dangerous content. Use the `unsanitized` array to specify a list of MIME types that should not be sanitized.

### Return value

A {{jsxref("Promise")}} that resolves with an array of {{domxref("ClipboardItem")}} objects containing the clipboard's contents.

### Exceptions

- `NotAllowedError` {{domxref("DOMException")}}
  - : Thrown if the reading from the clipboard is not allowed.

## Description

The resolved promise is an array of {{domxref("ClipboardItem")}} instances representing the different items read from the clipboard.
Each `ClipboardItem` can contain one or more representations of the copied object, keyed by [media type](/en-US/docs/Web/HTTP/Guides/MIME_types).
A web app reads the formats in an item and selects the best representation that it understands.
For example, an item for a custom data type on the clipboard might include the custom representation, a version in HTML, and a plain text version.
An app that understands the format can fully comprehend it, while one that doesn't might still be able to use the text or HTML version.

Browsers commonly support reading text, HTML, and PNG image data, and may support web custom formats (see [browser compatibility](/en-US/docs/Web/API/ClipboardItem#browser_compatibility) in `ClipboardItem`).

## Security considerations

Reading from the clipboard can only be done in a [secure context](/en-US/docs/Web/Security/Defenses/Secure_Contexts).

Additional security requirements are covered in the [Security consideration](/en-US/docs/Web/API/Clipboard_API#security_considerations) section of the API overview topic.

## Examples

### Reading multiple formats from the clipboard

This example copies text to the clipboard as a single {{domxref("ClipboardItem")}} with two format representations: `text/html` and `text/plain`.
It then reads the clipboard back with `read()` and lists the returned formats.

#### HTML

First we define the `source` element which contains the HTML that we'll copy.
Below that are the buttons that will be used to copy the HTML and to read (and log) the returned clipboard items.

```html
<div id="source">
  <p><strong>Bold</strong> and <em>italic</em> text.</p>
</div>
<button id="copy" type="button">Copy (HTML + plain text)</button>
<button id="inspect" type="button">Read clipboard item</button>
```

Note that there is also hidden code for a logging panel below the buttons, which is not relevant to the example.

```html hidden
<pre id="log"></pre>
```

```css hidden
#source {
  border: 1px solid black;
  padding: 0.5rem;
  width: fit-content;
}

#log {
  height: 130px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
  white-space: pre-wrap;
}
```

#### JavaScript

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

The "Copy" button constructs one `ClipboardItem` with two MIME-type keys, `text/html` and `text/plain`, and writes it as a single clipboard entry.

```js
const sourceElement = document.querySelector("#source");
const copyButton = document.querySelector("#copy");

copyButton.addEventListener("click", async () => {
  const html = sourceElement.innerHTML;
  const text = sourceElement.innerText;
  try {
    const clipboardItem = new ClipboardItem({
      "text/html": new Blob([html], { type: "text/html" }),
      "text/plain": new Blob([text], { type: "text/plain" }),
    });
    await navigator.clipboard.write([clipboardItem]);
    log("Copied one ClipboardItem with two formats: text/html and text/plain.");
  } catch (error) {
    log(`Copy failed: ${error.message}`);
  }
});
```

The "Read" button calls `read()`, then logs every MIME type each returned `ClipboardItem` carries, fetching each format's data with `getType()`.

```js
const inspectButton = document.querySelector("#inspect");

inspectButton.addEventListener("click", async () => {
  try {
    const clipboardItems = await navigator.clipboard.read();
    for (const clipboardItem of clipboardItems) {
      log(`ClipboardItem contains: ${clipboardItem.types.join(", ")}`);
      for (const type of clipboardItem.types) {
        const blob = await clipboardItem.getType(type);
        const text = await blob.text();
        log(`  ${type} → ${text}`);
      }
    }
  } catch (error) {
    log(`Read failed: ${error.message}`);
  }
});
```

#### Result

First click the Copy button to copy the element as both text and HTML.
Then click "Read clipboard item" to read it back and list the formats in the item.

{{EmbedLiveSample("Reading multiple formats from the clipboard", "100%", "320", "", "", "", "clipboard-read; clipboard-write")}}

> [!NOTE]
> If prompted, grant permission in order to copy and paste.

### Reading image data from clipboard

This example uses the `read()` method to read image data from the clipboard and paste it into an {{HTMLElement("img")}} element.

#### HTML

```html
<img id="source" src="butterfly.jpg" alt="A butterfly" />
<img
  id="destination"
  src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="
  alt="Pasted image" />
<button id="reload" type="button">Reload</button>
<p id="log"></p>
```

#### CSS

```css
img {
  height: 100px;
  width: 100px;
  margin: 0 1rem;
  border: 1px solid black;
}
#reload {
  display: block;
  margin: 0 1rem;
}
```

#### JavaScript

This code provides a mechanism to log any errors to the element with id `log`.

```js
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `Error: ${text}`;
}
```

We also add code to reload and clear the example when the "Reload" button is pressed.

```js
const reload = document.querySelector("#reload");

reload.addEventListener("click", () => {
  window.location.reload(true);
});
```

The remaining code reads the clipboard when the destination element is clicked and copies the image data into the `destinationImage` element.
It logs an error if it is unable to use the `read()` method, or if the clipboard does not contain data in PNG format.

```js
const destinationImage = document.querySelector("#destination");
destinationImage.addEventListener("click", pasteImage);

async function pasteImage() {
  try {
    const clipboardContents = await navigator.clipboard.read();
    for (const item of clipboardContents) {
      if (!item.types.includes("image/png")) {
        throw new Error("Clipboard does not contain PNG image data.");
      }
      const blob = await item.getType("image/png");
      destinationImage.src = URL.createObjectURL(blob);
    }
  } catch (error) {
    log(error.message);
  }
}
```

#### Result

Copy the butterfly image on the left by right-clicking the image and selecting "Copy image" from the context menu.
Then click on the empty frame on the right.
The example will fetch the image data from the clipboard and display the image in the empty frame.

{{EmbedLiveSample("Reading image data from clipboard", "100%", "250", "", "", "", "clipboard-read")}}

> [!NOTE]
> If prompted, grant permission in order to paste the image.

### Reading data from the clipboard

This example uses the `read()` method to read data from the clipboard and log whatever data is stored in the clipboard.

This differs from the previous version in that it will display text, HTML, and image {{domxref("ClipboardItem")}} objects (rather than just images).

#### HTML

```html
<img id="source_jpg" src="butterfly.jpg" alt="JPG butterfly image" />
<div id="destination">Click here to copy clipboard data.</div>
<button id="reload" type="button">Reload</button>
<p id="log"></p>
```

#### CSS

```css
img {
  height: 100px;
  width: 100px;
  margin: 0 1rem;
  border: 1px solid black;
}

#destination {
  min-height: 300px;
  min-width: 90%;
  margin: 0 1rem;
  border: 1px solid black;
}

#reload {
  display: block;
  margin: 0 1rem;
}
```

#### JavaScript

This code provides a mechanism to log any errors to the element with id `log`.

```js
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `Error: ${text}`;
}
```

We also add code to reload and clear the example when the "Reload" button is pressed.

```js
const reload = document.querySelector("#reload");

reload.addEventListener("click", () => {
  window.location.reload(true);
});
```

The remaining code reads the clipboard when the destination element is clicked and displays each {{domxref("ClipboardItem")}} element along with its MIME type.
It logs an error it is unable to use the `read()` method, or if the clipboard contains any other MIME type.

```js
const destinationDiv = document.querySelector("#destination");
destinationDiv.addEventListener("click", pasteData);

async function pasteData() {
  destinationDiv.innerText = ""; // Clear inner text
  try {
    const clipboardContents = await navigator.clipboard.read();
    for (const item of clipboardContents) {
      for (const mimeType of item.types) {
        const mimeTypeElement = document.createElement("p");
        mimeTypeElement.innerText = `MIME type: ${mimeType}`;
        destinationDiv.appendChild(mimeTypeElement);
        if (mimeType === "image/png") {
          const pngImage = new Image();
          pngImage.alt = "PNG image from clipboard";
          const blob = await item.getType("image/png");
          pngImage.src = URL.createObjectURL(blob);
          destinationDiv.appendChild(pngImage);
        } else if (mimeType === "text/html") {
          const blob = await item.getType("text/html");
          const blobText = await blob.text();
          const clipHTML = document.createElement("pre");
          clipHTML.innerText = blobText;
          destinationDiv.appendChild(clipHTML);
        } else if (mimeType === "text/plain") {
          const blob = await item.getType("text/plain");
          const blobText = await blob.text();
          const clipPlain = document.createElement("pre");
          clipPlain.innerText = blobText;
          destinationDiv.appendChild(clipPlain);
        } else {
          throw new Error(`${mimeType} not supported.`);
        }
      }
    }
  } catch (error) {
    log(error.message);
  }
}
```

#### Result

Copy some text or the butterfly (JPG) image below (to copy images right-click on them and then select "Copy image" from the context menu).
Select the indicated frame below to paste this information from the clipboard into the frame.

{{EmbedLiveSample("Reading data from the clipboard", "100%", "500", "", "", "", "clipboard-read")}}

Notes:

- Even though the butterfly image is a JPG file, when read from the clipboard it is a PNG.
- If prompted, you will need to grant permission in order to paste the image.
- This may not work on chromium browsers as the sample frame is not granted the [Permissions-Policy](/en-US/docs/Web/HTTP/Reference/Headers/Permissions-Policy) `clipboard-read` and `clipboard-write` permissions ([required by Chromium browsers](/en-US/docs/Web/API/Clipboard_API#security_considerations)).

### Reading unsanitized HTML from the clipboard

This example uses the `formats` parameter to read HTML data from the clipboard and get the code in its original form, without the browser sanitizing it first.

#### HTML

```html
<textarea id="source" rows="5">
  <style>h1 {color: red;} p {color: blue;}</style>
  <h1>Hello world!</h1>
  <p>This is a test.</p>
  <script>alert('Hello world!');</script>
</textarea>
<button id="copy">Copy HTML</button>
<button id="paste_normal">Paste HTML</button>
<button id="paste_unsanitized">Paste unsanitized HTML</button>
<textarea id="destination" rows="5"></textarea>
```

#### CSS

```css
body {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5px;
}

textarea {
  grid-column: 1 / span 3;
}
```

#### JavaScript

```js
const copyButton = document.getElementById("copy");
const pasteButton = document.getElementById("paste_normal");
const pasteUnsanitizedButton = document.getElementById("paste_unsanitized");
const sourceTextarea = document.getElementById("source");
const destinationTextarea = document.getElementById("destination");

copyButton.addEventListener("click", async () => {
  const text = sourceTextarea.value;
  const type = "text/html";
  const blob = new Blob([text], { type });
  const data = [new ClipboardItem({ [type]: blob })];

  try {
    await navigator.clipboard.write(data);
  } catch (error) {
    destinationTextarea.value = `Clipboard write failed: ${error}`;
  }
});

async function getHTMLFromClipboardContents(clipboardContents) {
  for (const item of clipboardContents) {
    if (item.types.includes("text/html")) {
      const blob = await item.getType("text/html");
      const blobText = await blob.text();
      return blobText;
    }
  }

  return null;
}

pasteButton.addEventListener("click", async () => {
  try {
    const clipboardContents = await navigator.clipboard.read();
    const html = await getHTMLFromClipboardContents(clipboardContents);
    destinationTextarea.value =
      html || "Could not find HTML data in the clipboard.";
  } catch (error) {
    destinationTextarea.value = `Clipboard read failed: ${error}`;
  }
});

pasteUnsanitizedButton.addEventListener("click", async () => {
  try {
    const clipboardContents = await navigator.clipboard.read({
      unsanitized: ["text/html"],
    });
    const html = await getHTMLFromClipboardContents(clipboardContents);
    destinationTextarea.value =
      html || "Could not find HTML data in the clipboard.";
  } catch (error) {
    destinationTextarea.value = `Clipboard read failed: ${error}`;
  }
});
```

#### Result

First click the "Copy HTML" button to write the HTML code from the first textarea to the clipboard. Then either click the "Paste HTML" button or the "Paste unsanitized HTML" button to paste the sanitized or unsanitized HTML code into the second textarea.

{{EmbedLiveSample("Reading unsanitized HTML from the clipboard", "100%", "250", "", "", "", "clipboard-read; clipboard-write")}}

### Reading a custom format from the clipboard

This example uses the same code as [Reading and writing custom formats](/en-US/docs/Web/API/Clipboard_API#reading_and_writing_custom_formats) in the Clipboard API overview, but shows only the code that's specific to `read()`.
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
Note that this example works either way, we just won't be able to write (or read) the custom type.

```js
const customType = "web text/x-mdn-inventory+json";

log(
  ClipboardItem.supports(customType)
    ? `Custom format supported: ${customType}`
    : `Custom format not supported by this browser: ${customType}`,
);
```

```js hidden
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

This code shows the listener for the button that pastes the clipboard to the "Your app" box.
This reads the clipboard, gets the first item, checks that it include our custom type (defined above) and then gets that representation.
It then uses it to build the table and writes it to the box.

```js
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

The "Arbitrary rich text target" button handler does the same thing, but uses the `text/html` representation and renders it with `innerHTML`.
Since the copied HTML only carries `item` and `quantity`, this target shows a table with no `SKU` column.

```js
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

The "Arbitrary plain text target" button uses the `text/plain` representation.

```js
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

Click the "Copy" button, or select the table and copy it manually, to copy the table as HTML, plain text, and (if supported) the custom format.
Then click each of the three "Paste" buttons to compare what each target retrieves.
Click "Reload" to reset the example.

{{EmbedLiveSample("Reading a custom format from the clipboard", "100%", "450", "", "", "", "clipboard-read; clipboard-write")}}

> [!NOTE]
> If prompted, grant permission in order to copy and paste.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Clipboard API](/en-US/docs/Web/API/Clipboard_API)
- [Unblocking clipboard access](https://web.dev/articles/async-clipboard) on web.dev
- [Unsanitized HTML in the Async Clipboard API](https://developer.chrome.com/docs/web-platform/unsanitized-html-async-clipboard) on developer.chrome.com
- {{domxref("Clipboard.readText()")}}
- {{domxref("Clipboard.writeText()")}}
- {{domxref("Clipboard.write()")}}
