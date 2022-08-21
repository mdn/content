---
title: FileSystemEntry.fullPath
slug: Web/API/FileSystemEntry/fullPath
page-type: web-api-instance-property
tags:
  - API
  - File and Directory Entries API
  - FileSystemEntry
  - Files
  - Offline
  - Property
  - Reference
  - fullPath
browser-compat: api.FileSystemEntry.fullPath
---
{{APIRef("File and Directory Entries API")}}

The read-only **`fullPath`** property
of the {{domxref("FileSystemEntry")}} interface returns a string
specifying the full, absolute path from the file system's root to the file represented
by the entry.

This can also be thought of as a path which is relative to the root directory, with a
"/" prepended to it to make it absolute.

## Value

A string indicating the entry's full path.

## Examples

This example shows a function which is called with a file system; it then gets a
{{domxref("FileSystemFileEntry")}} for a file named `data.json` and returns
its full path.

```js
function gotFileSystem(fs) {
  let path = "";

  fs.root.getFile("data.json", { create: true, exclusive: true }, (entry) => {
    path = fullPath;
  }, handleError(error));

  return path;
}
```

Obviously, this is somewhat contrived, since we know that the file's full path is
`"/data.json"`, having just looked it up ourselves, but the concept holds up
for scenarios in which you don't know it.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [File and Directory Entries API](/en-US/docs/Web/API/File_and_Directory_Entries_API)
- [Introduction to the File and Directory Entries API](/en-US/docs/Web/API/File_and_Directory_Entries_API/Introduction)
- {{domxref("FileSystemEntry")}}
