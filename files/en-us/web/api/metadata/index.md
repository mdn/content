---
title: Metadata
slug: Web/API/Metadata
page-type: web-api-interface
tags:
  - API
  - File and Directory Entries API
  - Files
  - Interface
  - Non-standard
  - Offline
  - Reference
  - metadata
  - Experimental
browser-compat: api.Metadata
---
{{APIRef("File and Directory Entries API")}}{{Non-standard_Header}}{{SeeCompatTable}}

The **`Metadata`** interface contains information about a file system entry. This metadata includes the file's size and modification date and time.

> **Note:** This interface isn't available through the global scope; instead, you obtain a `Metadata` object describing a {{domxref("FileSystemEntry")}} using the method {{domxref("FileSystemEntry.getMetadata()")}}.

## Properties

- {{domxref("Metadata.modificationTime", "modificationTime")}} {{ReadOnlyInline}} {{Experimental_Inline}} {{Non-standard_Inline}}
  - : A {{jsxref("Date")}} object indicating the date and time the entry was modified.
- {{domxref("Metadata.size", "size")}} {{ReadOnlyInline}} {{Experimental_Inline}} {{Non-standard_Inline}}
  - : A 64-bit unsigned integer indicating the size of the entry in bytes.

## Specifications

This feature has been removed from all specification and is not in the process of being standardized.

## Browser compatibility

{{Compat}}

## See also

- [File and Directory Entries API](/en-US/docs/Web/API/File_and_Directory_Entries_API)
- [Introduction to the File and Directory Entries API](/en-US/docs/Web/API/File_and_Directory_Entries_API/Introduction)
- {{domxref("FileSystemEntry")}}
- {{domxref("FileSystemFileEntry")}} and {{domxref("FileSystemDirectoryEntry")}}
