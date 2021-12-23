---
title: FileSystemFileEntry
slug: Web/API/FileSystemFileEntry
tags:
  - API
  - File and Directory Entries API
  - FileEntry
  - Files
  - Interface
  - Offline
  - Reference
browser-compat: api.FileSystemFileEntry
---
{{APIRef("File and Directory Entries API")}}

The **`FileSystemFileEntry`** interface of the [File System API](/en-US/docs/Web/API/File_and_Directory_Entries_API/Introduction) represents a file in a file system. It offers properties describing the file's attributes, as well as the {{domxref("FileSystemFileEntry.file", "file()")}} method, which creates a {{domxref("File")}} object that can be used to read the file.

## Properties

_Inherits the properties of its parent interface, {{domxref("FileSystemEntry")}}, but has no properties unique to this interface._

## Methods

- {{domxref("FileSystemFileEntry.file", "file()")}}
  - : Creates a new {{domxref("File")}} object which can be used to read the file.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [File and Directory Entries API](/en-US/docs/Web/API/File_and_Directory_Entries_API)
- [Introduction to the File System API](/en-US/docs/Web/API/File_and_Directory_Entries_API/Introduction)
