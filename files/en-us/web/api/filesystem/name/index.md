---
title: "FileSystem: name property"
short-title: name
slug: Web/API/FileSystem/name
page-type: web-api-instance-property
browser-compat: api.FileSystem.name
---

{{APIRef("File and Directory Entries API")}}

The read-only **`name`** property of the
{{domxref("FileSystem")}} interface indicates the file system's name. This
string is unique among all file systems currently exposed by the [File and Directory Entries API](/en-US/docs/Web/API/File_and_Directory_Entries_API).

## Value

A string representing the file system's name.

## Examples

### Reading the file system name

Drag a file onto the drop target to display its file system's name. The dropped file provides a {{domxref("FileSystemEntry")}} from which the file system is accessed.

#### HTML

```html
<div id="drop-target">Drop a file here</div>
<p id="output" role="status">Waiting for a file</p>
```

#### CSS

```css
#drop-target {
  padding: 2rem;
  border: 2px dashed;
}

#output {
  overflow-wrap: anywhere;
}
```

#### JavaScript

```js
const dropTarget = document.getElementById("drop-target");
const output = document.getElementById("output");

dropTarget.addEventListener("dragover", (event) => {
  event.preventDefault();
});
dropTarget.addEventListener("drop", (event) => {
  event.preventDefault();
  output.textContent = "Drop a file to read its file system";
  const item = event.dataTransfer.items[0];
  if (item?.kind === "file") {
    const entry = item.webkitGetAsEntry();
    if (entry !== null) {
      output.textContent = `File system name: ${JSON.stringify(entry.filesystem.name)}`;
    }
  }
});
```

#### Result

{{EmbedLiveSample("Reading the file system name", "100%", 200)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [File and Directory Entries API](/en-US/docs/Web/API/File_and_Directory_Entries_API)
- {{domxref("FileSystem")}}
