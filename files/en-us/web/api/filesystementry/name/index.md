---
title: "FileSystemEntry: name property"
short-title: name
slug: Web/API/FileSystemEntry/name
page-type: web-api-instance-property
browser-compat: api.FileSystemEntry.name
---

{{APIRef("File and Directory Entries API")}}

The read-only **`name`** property of
the {{domxref("FileSystemEntry")}} interface returns a string
specifying the entry's name; this is the entry within its parent directory (the last
component of the path as indicated by the {{domxref("FileSystemEntry.fullPath",
    "fullPath")}} property).

## Value

A string indicating the entry's name.

## Examples

This example shows a function called `isFileWithExtension()` which returns
true if the specified {{domxref("FileSystemEntry")}} is both a file and the file's name
ends with a given extension.

```js
function isFileWithExtension(entry, extension) {
  return entry.isFile && entry.name.endsWith(`.${extension}`);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [File and Directory Entries API](/en-US/docs/Web/API/File_and_Directory_Entries_API)
- [Introduction to the File and Directory Entries API](/en-US/docs/Web/API/File_and_Directory_Entries_API/Introduction)
- {{domxref("FileSystemEntry")}}
- {{domxref("FileSystemEntry.fullPath")}}
