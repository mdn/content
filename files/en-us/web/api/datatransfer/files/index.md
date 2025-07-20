---
title: "DataTransfer: files property"
short-title: files
slug: Web/API/DataTransfer/files
page-type: web-api-instance-property
browser-compat: api.DataTransfer.files
---

{{APIRef("HTML Drag and Drop API")}}

The **`files`** read-only property of [`DataTransfer`](/en-US/docs/Web/API/DataTransfer) objects is a [list of the files](/en-US/docs/Web/API/FileList) in the drag operation. If the operation includes no files, the list is empty.

This feature can be used to drag files from a user's desktop to the browser.

> [!NOTE]
> The `files` property of [`DataTransfer`](/en-US/docs/Web/API/DataTransfer) objects can only be accessed from within the {{domxref("HTMLElement/drop_event", "drop")}} and {{domxref("Element/paste_event", "paste")}} events. For all other events, the `files` property will be empty — because its underlying data store will be in a [protected mode](https://html.spec.whatwg.org/multipage/dnd.html#the-drag-data-store).

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
