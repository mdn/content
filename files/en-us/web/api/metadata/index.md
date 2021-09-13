---
title: Metadata
slug: Web/API/Metadata
tags:
  - API
  - File System API
  - File and Directory Entries API
  - Files
  - Interface
  - Non-standard
  - Offline
  - Reference
  - metadata
browser-compat: api.Metadata
---
{{ APIRef("File System API") }}{{SeeCompatTable}}{{Non-standard_header}}

The **`Metadata`** interface is used by the [File and Directory Entries API](/en-US/docs/Web/API/File_and_Directory_Entries_API) to contain information about a file system entry. This metadata includes the file's size and modification date and time.

> **Note:** This interface isn't available through the global scope; instead, you obtain a `Metadata` object describing a {{domxref("FileSystemEntry")}} using the method {{domxref("FileSystemEntry.getMetadata()")}}.

## Properties

- {{domxref("Metadata.modificationTime", "modificationTime")}} {{ReadOnlyInline}}
  - : A {{jsxref("Date")}} object indicating the date and time the entry was modified.
- {{domxref("Metadata.size", "size")}} {{ReadOnlyInline}}
  - : A 64-bit unsigned integer indicating the size of the entry in bytes.

## Specifications

This API has no official W3C or WHATWG specification.

## Browser compatibility

{{Compat}}

## See also

- [File and Directory Entries API](/en-US/docs/Web/API/File_and_Directory_Entries_API)
- [Introduction to the File System API](/en-US/docs/Web/API/File_and_Directory_Entries_API/Introduction)
- {{domxref("FileSystemEntry")}}
- {{domxref("FileSystemFileEntry")}} and {{domxref("FileSystemDirectoryEntry")}}
