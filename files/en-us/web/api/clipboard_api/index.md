---
title: Clipboard API
slug: Web/API/Clipboard_API
page-type: web-api-overview
browser-compat:
  - api.Clipboard
  - api.ClipboardItem
---

{{DefaultAPISidebar("Clipboard API")}}

The **Clipboard API** provides the ability to respond to clipboard commands (cut, copy, and paste), as well as to asynchronously read from and write to the system clipboard.

> [!NOTE]
> Use this API in preference to the deprecated {{domxref("document.execCommand()")}} method for accessing the clipboard.

> [!NOTE]
> This API is _not available_ in [Web Workers](/en-US/docs/Web/API/Web_Workers_API) (not exposed via {{domxref("WorkerNavigator")}}).

## Concepts and usage

The _system clipboard_ is a data buffer belonging to the operating system hosting the browser, which is used for short-term data storage and/or data transfers between documents or applications.
It is usually implemented as an anonymous, temporary [data buffer](https://en.wikipedia.org/wiki/Data_buffer), sometimes called the _paste buffer_, that can be accessed from most or all programs within the environment via defined programming interfaces.

The Clipboard API allows users to asynchronously read and write text and other kinds of data to and from the system clipboard in [secure contexts](/en-US/docs/Web/Security/Defenses/Secure_Contexts), provided the user has met the criteria outlined in the [Security considerations](#security_considerations).

The system clipboard is accessed through the {{domxref("Navigator.clipboard")}} global.

### Text vs. multiple representations

The {{domxref("Clipboard")}} interface offers two ways to work with clipboard data:

- {{domxref("Clipboard.readText", "readText()")}} and {{domxref("Clipboard.writeText", "writeText()")}} can be used if you just want to read and write text from the clipboard.
- {{domxref("Clipboard.read", "read()")}} and {{domxref("Clipboard.write", "write()")}} allow you to read and write arrays of {{domxref("ClipboardItem")}} objects to the system clipboard.
  Each `ClipboardItem` can hold several representations of the same content, keyed by [media type](/en-US/docs/Web/HTTP/Guides/MIME_types).
  This enables data to be copied in multiple formats, such as an HTML table, a tab-separated plain text, or an image, and the pasting application to pick the best representation that it understands.
  For example, an application that can't render HTML could fall back gracefully to a text version.

  Note that some browsers/OS only allow one `ClipboardItem` to be written, and will error if more than one is attempted (see [`Clipboard.write()`](/en-US/docs/Web/API/Clipboard/write#browser_compatibility) for more information).

Browsers are required to support `text/plain`, `text/html`, and `image/png` representations with `read()` and `write()`.
Other types, such as `image/svg+xml` and the custom formats described in the next section, are optional.
You can use {{domxref("ClipboardItem.supports_static", "ClipboardItem.supports()")}} to check whether a particular format is supported (see [Reading and writing multiple representations](#reading_and_writing_multiple_representations) below for an example).

### Custom clipboard formats

A `ClipboardItem` can also carry a custom format: a [Media type ("MIME type")](/en-US/docs/Web/HTTP/Guides/MIME_types) prefixed with `"web "` (the word "web" followed by a space).
This lets a web app define its own clipboard format for data that has no standard representation, without colliding with the OS's native clipboard formats or another site's custom formats.

Custom formats are useful because they can preserve information a standard representation can't, for example structured metadata alongside a visual or text version of the same content.
An app that recognizes its own custom format can paste it with data loss for users who copy from it, while other apps still receive whichever standard representations you also provide.
One important use case enabled by this feature is that you can copy and paste to your own application, either in the same page or running in different tabs or browsers.

Support for custom formats currently varies by browser, so check [Browser compatibility](#browser_compatibility) and {{domxref("ClipboardItem.supports_static", "ClipboardItem.supports()")}} before relying on one.
See [Reading and writing custom formats](#reading_and_writing_custom_formats) below for a complete example.

### Clipboard and cut/copy/paste events

Events are fired as the result of {{domxref("Element/cut_event", "cut")}}, {{domxref("Element/copy_event", "copy")}}, and {{domxref("Element/paste_event", "paste")}} operations modifying the clipboard.
The events have a default action, for example the `copy` action copies the current selection to the system clipboard by default.
The default action can be overridden by the event handler — see each of the events for more information.

There is also a {{domxref("Clipboard.clipboardchange_event","clipboardchange")}} event fired directly on the {{domxref("Clipboard")}} object whenever the system clipboard's contents are changed. This is useful for notifying apps of a change to the system clipboard, for example if they have their own clipboard that needs to be kept in sync.

See [Overriding cut, copy, and paste events](#overriding_cut_copy_and_paste_events) below for an example that overrides the `copy` and `paste` events, and listens for `cut` and `clipboardchange`.

## Interfaces

- {{domxref("Clipboard")}} {{securecontext_inline}}
  - : Provides an interface for reading and writing text and data to or from the system clipboard.
    The specification refers to this as the 'Async Clipboard API'.
- {{domxref("ClipboardChangeEvent")}}
  - : Represents events fired whenever the contents of the system clipboard are changed.
- {{domxref("ClipboardEvent")}}
  - : Represents events providing information related to modification of the clipboard, that is {{domxref("Element/cut_event", "cut")}}, {{domxref("Element/copy_event", "copy")}}, and {{domxref("Element/paste_event", "paste")}} events.
    The specification refers to this as the 'Clipboard Event API'.
- {{domxref("ClipboardItem")}} {{securecontext_inline}}
  - : Represents a single clipboard entry that can hold one or more media-type representations of the same data (such as versions in HTML and text).

### Extensions to other interfaces

The Clipboard API extends the following APIs, adding the listed features.

- {{domxref("Navigator.clipboard")}} {{readonlyinline}} {{securecontext_inline}}
  - : Returns a {{domxref("Clipboard")}} object that provides read and write access to the system clipboard.
- `Element` [`copy`](/en-US/docs/Web/API/Element/copy_event) event
  - : An event fired whenever the user initiates a copy action.
- `Element` [`cut`](/en-US/docs/Web/API/Element/cut_event) event
  - : An event fired whenever the user initiates a cut action.
- `Element` [`paste`](/en-US/docs/Web/API/Element/paste_event) event
  - : An event fired whenever the user initiates a paste action.

## Security considerations

The Clipboard API allows users to programmatically read and write text and other kinds of data to and from the system clipboard in [secure contexts](/en-US/docs/Web/Security/Defenses/Secure_Contexts).

When reading from the clipboard, the specification requires that a user has recently interacted with the page ([transient user activation](/en-US/docs/Web/Security/Defenses/User_activation)) and that the call is made as a result of the user interacting with a browser or OS "paste element" (such as choosing "Paste" on a native context menu). In practice, browsers often allow read operations that do not satisfy these requirements, while placing other requirements instead (such as a permission or per-operation prompt).
For writing to the clipboard the specification expects that the page has been granted the [Permissions API](/en-US/docs/Web/API/Permissions_API) `clipboard-write` permission, and the browser may also require [transient user activation](/en-US/docs/Web/Security/Defenses/User_activation).
Browsers may place additional restrictions over use of the methods to access the clipboard.

The {{domxref("Clipboard.clipboardchange_event", "clipboardchange")}} event is only fired with [sticky activation](/en-US/docs/Glossary/Sticky_activation) or after the `clipboard-read` permission is granted.

Browser implementations have diverged from the specification.
The differences are captured in the [Browser compatibility](#browser_compatibility) section and the current state is summarized below:

Chromium browsers:

- If a read isn't allowed by the spec and the document has focus, it triggers a request to use permission `clipboard-read`, and succeeds if the permission is granted (either because the user accepted the prompt, or because the permission was granted already).
- Writing requires either the `clipboard-write` permission or transient activation.
  If the permission is granted, it persists, and further transient activation is not required.
- The HTTP [Permissions-Policy](/en-US/docs/Web/HTTP/Reference/Headers/Permissions-Policy) permissions `clipboard-read` and `clipboard-write` must be allowed for {{HTMLElement("iframe")}} elements that access the clipboard.

Firefox & Safari:

- If a read isn't allowed by the spec but transient user activation is still met, it triggers a user prompt in the form of an ephemeral context menu with a single "Paste" option (which becomes enabled after 1 second) and succeeds if the user chooses the option.
- Writing requires transient activation.
- The paste-prompt is suppressed if reading same-origin clipboard content, but not cross-origin content.
- The `clipboard-read` and `clipboard-write` permissions are not supported (and not planned to be supported) by Firefox or Safari.

Firefox [web extensions](/en-US/docs/Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard):

- Reading is available to extensions with the web extension [`clipboardRead`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#clipboardread) permission. With this permission, the extension doesn't require transient activation or use the paste prompt. From Firefox 147, reading is also available without the permission in a secure context, with transient activation, and after the user clicks the paste prompt in an ephemeral context menu.
- Writing is available in a secure context and with transient activation. However, with the web extension [`clipboardWrite`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#clipboardwrite) permission transient activation is not required.

## Examples

### Reading and writing text

This example copies a line of text with {{domxref("Clipboard.writeText", "writeText()")}} and reads it back with {{domxref("Clipboard.readText", "readText()")}}.

#### HTML

The HTML defines a {{htmlelement("p")}} element for the source text to be copied, {{htmlelement("button")}} elements to copy and paste the text, and an element into which the the text will be copied .

```html
<p id="source_text">The quick brown fox jumps over the lazy dog.</p>
<button id="copy_text" type="button">Copy</button>
<button id="paste_text" type="button">Paste</button>
<p id="target_text"></p>
```

```css hidden
#target_text {
  min-height: 1.2em;
  border: 1px solid black;
  padding: 0.5rem;
}
```

#### JavaScript

The code below registers click event handlers on the buttons that read and write the text.

```js
const sourceText = document.querySelector("#source_text");
const targetText = document.querySelector("#target_text");

document.querySelector("#copy_text").addEventListener("click", async () => {
  try {
    // Write the text to the clipboard
    await navigator.clipboard.writeText(sourceText.textContent);
    targetText.textContent = "Copied.";
  } catch (error) {
    targetText.textContent = `Copy failed: ${error.message}`;
  }
});

document.querySelector("#paste_text").addEventListener("click", async () => {
  try {
    // Read the text from the clipboard write it to #target_text
    targetText.textContent = await navigator.clipboard.readText();
  } catch (error) {
    targetText.textContent = `Paste failed: ${error.message}`;
  }
});
```

#### Result

Click "Copy", then click "Paste" to read the text back.

{{EmbedLiveSample("Reading and writing text", "100%", "150", "", "", "", "clipboard-read; clipboard-write")}}

> [!NOTE]
> If prompted, grant permission in order to copy and paste.

### Reading and writing multiple representations

This example creates a single {{domxref("ClipboardItem")}} with representations of the same content, `text/html` and `text/plain`.
It then reads the clipboard and lists every representation found.

#### HTML

```html
<div id="source_multi">
  <p><strong>Bold</strong> and <em>italic</em> text.</p>
</div>
<button id="copy_multi" type="button">Copy (HTML + plain text)</button>
<button id="paste_multi" type="button">Paste</button>
<pre id="target_multi"></pre>
```

```css hidden
#source_multi {
  border: 1px solid black;
  padding: 0.5rem;
  width: fit-content;
}

#target_multi {
  min-height: 3em;
  border: 1px solid black;
  padding: 0.5rem;
  white-space: pre-wrap;
}
```

#### JavaScript

As in the previous example, we create event handlers to copy the source element and paste to the target element.

The code that is run to copy the data is shown below.
Note how the code constructs the `ClipboardItem()` constructor with two representations of the same source data.

```js
const sourceMulti = document.querySelector("#source_multi");
const targetMulti = document.querySelector("#target_multi");

document.querySelector("#copy_multi").addEventListener("click", async () => {
  const html = sourceMulti.innerHTML;
  const text = sourceMulti.innerText;
  try {
    const clipboardItem = new ClipboardItem({
      "text/html": new Blob([html], { type: "text/html" }),
      "text/plain": new Blob([text], { type: "text/plain" }),
    });
    await navigator.clipboard.write([clipboardItem]);
    targetMulti.textContent = "Copied text/html and text/plain.";
  } catch (error) {
    targetMulti.textContent = `Copy failed: ${error.message}`;
  }
});
```

The handler that is called to paste the data is shown below.
This shows how you can read the clipboard item and then iterate its types to find the one you want (in this case we just log them).
Note that in this case we destructure the returned array of items to get a single `[clipboardItem]`.

```js
document.querySelector("#paste_multi").addEventListener("click", async () => {
  try {
    const [clipboardItem] = await navigator.clipboard.read();
    const lines = [];
    for (const type of clipboardItem.types) {
      const blob = await clipboardItem.getType(type);
      lines.push(`${type} → ${await blob.text()}`);
    }
    targetMulti.textContent = lines.join("\n");
  } catch (error) {
    targetMulti.textContent = `Paste failed: ${error.message}`;
  }
});
```

#### Result

Click "Copy (HTML + plain text)", then click "Paste" to list the representations found.

{{EmbedLiveSample("Reading and writing multiple representations", "100%", "200", "", "", "", "clipboard-read; clipboard-write")}}

> [!NOTE]
> If prompted, grant permission in order to copy and paste.

### Reading and writing custom formats

This example demonstrates how applications can use custom formats to copy and paste a faithful representation of their data when the format is understood, and provide a graceful fall back where it is not.

The code provides a source table that represents all the data provided by the application: item, quantity, and SKU.
When this is copied, a {{domxref("ClipboardItem")}} is created with a `"web "`-prefixed custom representation that fully describes that data, a `text/html` representation that omits the SKU data, and a `text/plain` version that reduces the data to text.
This can then be pasted into one of three paste areas, which are intended to represent applications that are able to render the different versions of the data.

#### HTML

First we define the HTML for our source table, and buttons for copying the text, resetting the example, and logging how many representations have been copied.
The table body starts empty: we fill it when our script runs.

```html
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

Then we define the three targets and their buttons.
Note that the target elements all allow rich text, but our code will only copy in the type of data that they are supposed to represent.

```html
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

First we check whether or not custom formats are supported and log this information.
Note that the example still works, but it only includes the default/fall back representations.

```js
const customType = "web text/x-mdn-inventory+json";

log(
  ClipboardItem.supports(customType)
    ? `Custom format supported: ${customType}`
    : `Custom format not supported by this browser: ${customType}`,
);
```

Next we set up the data for our source table, which is defined in the `inventory` array.
This uses `buildRow()` to create a table row from an array of cell values.

```js
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

We also define `buildTable()` which we later use to build a table from a list of column headers and rows of values (for our `text/html` representation).

```js
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

We also add code to reload and clear the example when the "Reload" button is pressed.

```js
const reload = document.querySelector("#reload_custom");

reload.addEventListener("click", () => {
  window.location.reload(true);
});
```

Next we define our code to copy the data representations into a `ClipboardItem` and write them to the clipboard.

First `copyInventory()` builds a `ClipboardItem` with `text/html` and `text/plain` blobs, and adds the custom-format blob only when `ClipboardItem.supports()` confirms the browser accepts it.
The `text/html` blob is a separate, reduced table with no `SKU` column, built with `buildTable()` rather than reused from the source table (the point is to show that an arbitrary HTML consumer gets less information than the custom format).
It's used both by the "Copy" button and by the table's own `copy` event listener, so a manual selection-and-copy produces the same clipboard content as clicking the button.

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

We then define the code for pasting a representation into each of tje target boxes.

The "Your app" button looks specifically for the custom format representation and rebuilds the full table, including the `SKU` column, from structured data — reproducing the source table exactly.

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

The "Arbitrary rich text target" button only ever looks for `text/html`, ignoring the custom format entirely, and renders it with `innerHTML`.
Since the copied HTML only carries `item` and `quantity`, this target shows a table with no `SKU` column.
Note that a real app should sanitize third-party HTML before inserting it this way (see [Reading unsanitized HTML from the clipboard](/en-US/docs/Web/API/Clipboard/read#reading_unsanitized_html_from_the_clipboard)); this demo only ever pastes HTML it wrote itself.

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

The "Arbitrary plain text target" button only ever looks for the `text/plain` format.

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

Click the Copy button, or select the table and copy it manually, to copy the table as HTML, plain text, and (if supported) the custom format.
Then click each of the three "Paste" buttons below to compare what each target retrieves.
Click "Reload" to reset the example.

{{EmbedLiveSample("Reading and writing custom formats", "100%", "450", "", "", "", "clipboard-read; clipboard-write")}}

> [!NOTE]
> If prompted, grant permission to copy and paste.

### Overriding cut, copy, and paste events

This example listens for the {{domxref("Element/copy_event", "copy")}}, {{domxref("Element/cut_event", "cut")}}, and {{domxref("Element/paste_event", "paste")}} events fired on a text area, and for the {{domxref("Clipboard.clipboardchange_event", "clipboardchange")}} event fired on {{domxref("Navigator.clipboard")}}.
The `copy` event's default action is overridden to append a signature to the copied text, and the `paste` event's default action is overridden to insert the pasted text in upper case.
The `cut` and `clipboardchange` events are only logged, to show that they still fire even when their default action isn't overridden.

#### HTML

```html
<textarea id="event_source" rows="3">
Select some of this text, then copy, cut, or paste using your keyboard or the context menu.</textarea>
<pre id="event_log"></pre>
```

```css hidden
#event_source {
  box-sizing: border-box;
  width: 100%;
}

#event_log {
  height: 100px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
  white-space: pre-wrap;
}
```

#### JavaScript

```js hidden
const eventLog = document.querySelector("#event_log");
function log(text) {
  eventLog.textContent = `${eventLog.textContent}${text}\n`;
  eventLog.scrollTop = eventLog.scrollHeight;
}
```

The `copy` event's default action is overridden with {{domxref("ClipboardEvent.clipboardData")}} to append a signature to whatever text was selected.

```js
const eventSource = document.querySelector("#event_source");

eventSource.addEventListener("copy", (event) => {
  const selected = eventSource.value.slice(
    eventSource.selectionStart,
    eventSource.selectionEnd,
  );
  event.clipboardData.setData("text/plain", `${selected} (MDN example)`);
  event.preventDefault();
  log("copy event: default action overridden to append a signature.");
});
```

The `cut` event isn't overridden, so cutting still removes the selected text as usual; only the event itself is logged.

```js
eventSource.addEventListener("cut", () => {
  log("cut event: fired, default action left in place.");
});
```

The `paste` event's default action is overridden to insert the pasted text in upper case instead of as-is.

```js
eventSource.addEventListener("paste", (event) => {
  const pasted = event.clipboardData.getData("text/plain");
  const { selectionStart, selectionEnd, value } = eventSource;
  eventSource.value =
    value.slice(0, selectionStart) +
    pasted.toUpperCase() +
    value.slice(selectionEnd);
  event.preventDefault();
  log("paste event: default action overridden to upper-case the pasted text.");
});
```

The `clipboardchange` fires on {{domxref("Navigator.clipboard")}} whenever the system clipboard's contents change, from any source.

```js
navigator.clipboard.addEventListener("clipboardchange", () => {
  log("clipboardchange event: the system clipboard's contents changed.");
});
```

#### Result

Select some of the text above and copy it: the log shows the `copy` event firing, and a signature "(MDN example)" is appended to the text you just stored on the clipboard (paste it elsewhere to check).
Cut some text to see the `cut` event logged with its default action untouched.
Paste anything back into the box to see it inserted in upper case.

{{EmbedLiveSample("Overriding cut, copy, and paste events", "100%", "200", "", "", "", "clipboard-read; clipboard-write")}}

> [!NOTE]
> If prompted, grant permission in order to copy and paste.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
