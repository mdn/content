---
title: FileSystemFlags.create
slug: Web/API/FileSystemFlags/create
tags:
  - API
  - Create
  - File and Directory Entries API
  - FileSystemFlags
  - Files
  - File System API
  - Offline
  - Property
  - Reference
browser-compat: api.FileSystemFlags.create
---
{{APIRef("File and Directory Entries API")}}

The **`create`** property on the {{domxref("FileSystemFlags")}}
dictionary is used to indicate whether or not the file should be created if it's
missing. `FileSystemFlags` is only used when calling
{{domxref("FileSystemDirectoryEntry.getFile()")}} or
{{domxref("FileSystemDirectoryEntry.getDirectory()")}}.

## Syntax

```js
fileSystemFlags.create = booleanValue
```

### Values

{{page("/en-US/docs/Web/API/FileSystemFlags", "Values and results")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [File and Directory
  Entries API](/en-US/docs/Web/API/File_and_Directory_Entries_API)
- [Introduction
  to the File System API](/en-US/docs/Web/API/File_and_Directory_Entries_API/Introduction)
- {{domxref("FileSystemFlags")}}
- {{domxref("FileSystemDirectoryEntry.getFile()")}} and
  {{domxref("FileSystemDirectoryEntry.getDirectory()")}}
