---
title: FileSystemEntry.isFile
slug: Web/API/FileSystemEntry/isFile
page-type: web-api-instance-property
tags:
  - API
  - File and Directory Entries API
  - FileSystemEntry
  - Files
  - Offline
  - Property
  - Reference
  - isFile
browser-compat: api.FileSystemEntry.isFile
---
{{APIRef("File and Directory Entries API")}}

The read-only **`isFile`** property of
the {{domxref("FileSystemEntry")}} interface is `true` if the entry
represents a file (meaning it's a {{domxref("FileSystemFileEntry")}}) and
`false` if it's not.

You can also use {{domxref("FileSystemEntry.isDirectory", "isDirectory")}} to determine
if the entry is a directory.

> **Warning:** You should not assume that any entry which isn't a file is a directory or vice-versa.
> There are other types of file descriptors on many operating systems. Be sure to use
> both `isDirectory` and `isFile` as needed to ensure that the
> entry is something you know how to work with.

## Value

A Boolean indicating whether or not the {{domxref("FileSystemEntry")}} is a file.

## Examples

This example shows how this property might be used to determine whether to process the
entry as a directory or file. If the entry is neither, an error handler is called with
an appropriate message.

```js
if (entry.isDirectory) {
  processSubdirectory(entry);
} else if (entry.isFile) {
  processFile(entry);
} else {
  displayErrorMessage("Unsupported file system entry specified.");
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
- {{domxref("FileSystemEntry.isDirectory")}}
- {{domxref("FileSystemFileEntry")}}
