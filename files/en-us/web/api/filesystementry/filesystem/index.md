---
title: FileSystemEntry.filesystem
slug: Web/API/FileSystemEntry/filesystem
tags:
  - API
  - File and Directory Entries API
  - FileSystemEntry
  - Files
  - Offline
  - Property
  - Reference
  - filesystem
browser-compat: api.FileSystemEntry.filesystem
---
{{APIRef("File and Directory Entries API")}}

The read-only **`filesystem`**
property of the {{domxref("FileSystemEntry")}} interface contains a
{{domxref("FileSystem")}} object that represents the file system on which the entry
resides.

## Syntax

```js
var filesystem = FileSystemEntry.filesystem;
```

### Value

A {{domxref("FileSystem")}} representing the file system on which the file or directory
described by the `FileSystemEntry` is located..

## Example

This example obtains a {{domxref("FileSystemDirectoryEntry")}} for the root directory
of the file system containing a file.

```js
let rootDirEntry = fileEntry.filesystem.root;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [File and Directory
  Entries API](/en-US/docs/Web/API/File_and_Directory_Entries_API)
- [Introduction
  to the File System API](/en-US/docs/Web/API/File_and_Directory_Entries_API/Introduction)
- {{domxref("FileSystemEntry")}}
- {{domxref("FileSystem")}}
