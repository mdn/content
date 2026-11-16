---
title: FileEntrySync
slug: Web/API/FileEntrySync
page-type: web-api-interface
status:
  - deprecated
  - non-standard
browser-compat: api.FileEntrySync
---

{{APIRef("File and Directory Entries API")}} {{Non-standard_header}}

The `FileEntrySync` interface represents a file in a file system. It lets you write content to a file.

> [!WARNING]
> This interface is deprecated and is no more on the standard track.
> _Do not use it anymore._ Use the [File and Directory Entries API](/en-US/docs/Web/API/File_and_Directory_Entries_API) instead.

## Instance methods

- {{domxref("FileEntrySync.createWriter()")}}
  - : Creates a new `FileWriterSync` associated with the file that the `FileEntrySync` represents.
- {{domxref("FileEntrySync.file()")}}
  - : Returns a File that represents the current state of the file that this `FileEntry` represents.

## Specifications

This feature is not part of any specification anymore. It is no longer on track to become a standard.

## Browser compatibility

{{Compat}}

## See also

- [File and Directory Entries API](/en-US/docs/Web/API/File_and_Directory_Entries_API)
