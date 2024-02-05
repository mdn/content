---
title: "FileSystemEntry: isDirectory property"
short-title: isDirectory
slug: Web/API/FileSystemEntry/isDirectory
page-type: web-api-instance-property
browser-compat: api.FileSystemEntry.isDirectory
---

{{APIRef("File and Directory Entries API")}}

The read-only **`isDirectory`**
property of the {{domxref("FileSystemEntry")}} interface is `true` if the
entry represents a directory (meaning it's a {{domxref("FileSystemDirectoryEntry")}})
and `false` if it's not.

You can also use {{domxref("FileSystemEntry.isFile", "isFile")}} to determine if the
entry is a file.

> **Warning:** You should not assume that any entry which isn't a directory is a file or vice versa.
> There are other types of file descriptors on many operating systems. Be sure to use
> both `isDirectory` and `isFile` as needed to ensure that the
> entry is something you know how to work with.

## Value

A Boolean indicating whether or not the {{domxref("FileSystemEntry")}} is a directory.

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
- {{domxref("FileSystemEntry.isFile")}}
- {{domxref("FileSystemDirectoryEntry")}}
