---
title: "FileSystem: root property"
short-title: root
slug: Web/API/FileSystem/root
page-type: web-api-instance-property
browser-compat: api.FileSystem.root
---

{{APIRef("File and Directory Entries API")}}

The read-only **`root`** property of the
{{domxref("FileSystem")}} interface specifies a {{domxref("FileSystemDirectoryEntry")}}
object representing the root directory of the file system, for use with the [File and Directory Entries API](/en-US/docs/Web/API/File_and_Directory_Entries_API).

## Value

A {{domxref("FileSystemDirectoryEntry")}} representing the file system's root
directory.

## Examples

### Reading the file system root

Drag a file onto the drop target to display its file system's root directory path. The dropped file provides a {{domxref("FileSystemEntry")}} from which the file system is accessed.

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
      output.textContent = `Root directory path: ${entry.filesystem.root.fullPath}`;
    }
  }
});
```

#### Result

{{EmbedLiveSample("Reading the file system root", "100%", 200)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [File and Directory Entries API](/en-US/docs/Web/API/File_and_Directory_Entries_API)
- {{domxref("FileSystem")}}
