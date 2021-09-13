---
title: FileSystemFlags.exclusive
slug: Web/API/FileSystemFlags/exclusive
tags:
  - API
  - File and Directory Entries API
  - FileSystemFlags
  - Files
  - Offline
  - Property
  - Reference
  - exclusive
browser-compat: api.FileSystemFlags.exclusive
---
{{APIRef("File and Directory Entries API")}}

The **`exclusive`** property on the
{{domxref("FileSystemFlags")}} dictionary is used in tandem with the create property to
determine whether or not it's acceptable to require that the file not already exist when
the reference to it is created by calling
{{domxref("FileSystemDirectoryEntry.getFile()")}} or
{{domxref("FileSystemDirectoryEntry.getDirectory()")}}.

## Syntax

```js
fileSystemFlags.exclusive = booleanValue
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
