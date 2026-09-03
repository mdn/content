---
title: "DataTransfer: files property"
short-title: files
slug: Web/API/DataTransfer/files
page-type: web-api-instance-property
browser-compat: api.DataTransfer.files
---

{{APIRef("HTML Drag and Drop API")}}

The **`files`** read-only property of the {{domxref("DataTransfer")}} interface is a [list of the files](/en-US/docs/Web/API/FileList) in the drag operation. If the operation includes no files, the list is empty.

This feature can be used to drag files from a user's desktop to the browser.

During a drag operation, this property can only be used to read files in the handlers for the {{domxref("HTMLElement/dragstart_event", "dragstart")}} and {{domxref("HTMLElement/drop_event", "drop")}} events, because those are the only times the drag data store is readable. Accessing it from any other drag event returns an empty list. See [Reading the drag data store](/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Drag_data_store#reading_the_drag_data_store) for details.

For clipboard operations, files can also be read in the handler for the {{domxref("Element/paste_event", "paste")}} event, using {{domxref("ClipboardEvent.clipboardData")}}.

## Value

A {{domxref("FileList")}} of the files in a drag operation, one list item for
each file in the operation. If the drag operation had no files, the list is empty.

## Examples

### Reading the files list

This example creates a basic area that you can drop files into and displays some metadata.

```html
<pre id="output">Drop files here from your file system.</pre>
```

```css
#output {
  min-height: 200px;
  border: 1px solid black;
  padding: 1em;
}
```

```js
const output = document.getElementById("output");

function log(text) {
  output.innerText += text;
}

output.addEventListener("dragenter", (e) => {
  e.stopPropagation();
  e.preventDefault();
  output.textContent = "";
});
output.addEventListener("dragover", (e) => {
  e.stopPropagation();
  e.preventDefault();
});
output.addEventListener("drop", (e) => {
  e.stopPropagation();
  e.preventDefault();
  const files = event.dataTransfer.files;
  log(`File Count: ${files.length}\n`);

  for (const file of files) {
    log(`  File: ${file}, ${file.name}, ${file.size} bytes\n`);
  }
});
```

{{EmbedLiveSample("reading_the_files_list", "", "300")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
