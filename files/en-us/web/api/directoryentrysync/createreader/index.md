---
title: "DirectoryEntrySync: createReader() method"
short-title: createReader()
slug: Web/API/DirectoryEntrySync/createReader
page-type: web-api-instance-method
status:
  - deprecated
  - non-standard
browser-compat: api.DirectoryEntrySync.createReader
---

{{APIRef("File and Directory Entries API")}}{{Non-standard_Header}}

The **`createReader()`** method of the {{domxref("DirectoryEntrySync")}} interface creates a new {{domxref("DirectoryReaderSync")}} to read entries from this directory.

## Syntax

```js-nolint
createReader()
```

### Parameters

None.

### Return value

A {{domxref("DirectoryReaderSync")}} object representing a directory in a file system.

### Exceptions

- `NotFoundError` {{domxref("DOMException")}}
  - : Thrown if the directory does not exist.
- `SecurityError` {{domxref("DOMException")}}
  - : Thrown if the browser determined that it was not safe to look up the metadata.

## Specifications

This feature is not part of any current specification. It is no longer on track to become a standard.
Use the [File and Directory Entries API](/en-US/docs/Web/API/File_and_Directory_Entries_API) instead.

## Browser compatibility

{{Compat}}

## See also

- {{domxref("DirectoryEntrySync")}}
- [File and Directory Entries API](/en-US/docs/Web/API/File_and_Directory_Entries_API)
