---
title: FileSystemDirectoryReader
slug: Web/API/FileSystemDirectoryReader
page-type: web-api-interface
tags:
  - API
  - File and Directory Entries API
  - FileSystemDirectoryReader
  - Files
  - Interface
  - Offline
  - Reference
browser-compat: api.FileSystemDirectoryReader
---
{{APIRef("File and Directory Entries API")}}

The `FileSystemDirectoryReader` interface of the [File and Directory Entries API](/en-US/docs/Web/API/File_and_Directory_Entries_API) lets you access the {{domxref("FileSystemFileEntry")}}-based objects (generally {{domxref("FileSystemFileEntry")}} or {{domxref("FileSystemDirectoryEntry")}}) representing each entry in a directory.

## Methods

- {{domxref("FileSystemDirectoryReader.readEntries", "readEntries()")}}
  - : Returns an array containing some number of the directory's entries. Each item in the array is an object based on {{domxref("FileSystemEntry")}}—typically either {{domxref("FileSystemFileEntry")}} or {{domxref("FileSystemDirectoryEntry")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [File and Directory Entries API](/en-US/docs/Web/API/File_and_Directory_Entries_API)
- [Introduction to the File and Directory Entries API](/en-US/docs/Web/API/File_and_Directory_Entries_API/Introduction)
- {{domxref("FileSystemDirectoryEntry")}}
- {{domxref("FileSystem")}}
