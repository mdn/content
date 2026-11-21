---
title: DirectoryEntrySync
slug: Web/API/DirectoryEntrySync
page-type: web-api-interface
status:
  - deprecated
  - non-standard
browser-compat: api.DirectoryEntrySync
---

{{APIRef("File and Directory Entries API")}}{{Non-standard_Header}}

The `DirectoryEntrySync` interface represents a directory in a file system. It includes methods for creating, reading, looking up, and recursively removing files in a directory.

> [!WARNING]
> This interface is deprecated and is no more on the standard track.
> _Do not use it anymore._ Use the [File and Directory Entries API](/en-US/docs/Web/API/File_and_Directory_Entries_API) instead.

## Instance methods

- {{domxref("DirectoryEntrySync.createReader()")}}
  - : Creates a new {{domxref("DirectoryReaderSync")}} to read entries from this directory.
- {{domxref("DirectoryEntrySync.getFile()")}}
  - : Depending on how you've set the `options` parameter, the method either creates a file or looks up an existing file.
- {{domxref("DirectoryEntrySync.getDirectory()")}}
  - : Creates or looks up a directory.
- {{domxref("DirectoryEntrySync.removeRecursively()")}}
  - : Deletes a directory and all of its contents.

## Specifications

This feature is not part of any current specification. It is no longer on track to become a standard.
Use the [File and Directory Entries API](/en-US/docs/Web/API/File_and_Directory_Entries_API) instead.

## Browser compatibility

{{Compat}}

## See also

- [File and Directory Entries API](/en-US/docs/Web/API/File_and_Directory_Entries_API)
