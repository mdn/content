---
title: "FileEntrySync: createWriter() method"
short-title: createWriter()
slug: Web/API/FileEntrySync/createWriter
page-type: web-api-instance-method
status:
  - deprecated
  - non-standard
browser-compat: api.FileEntrySync.createWriter
---

{{APIRef("File and Directory Entries API")}}{{Non-standard_Header}}

The **`createWriter()`** method of the {{domxref("FileEntrySync")}} interface creates a new `FileWriterSync` associated with the file that the `FileEntrySync` represents.

## Syntax

```js-nolint
createWriter()
```

### Parameters

None.

### Return value

A `FileWriterSync` object.

### Exceptions

- `NotFoundError` {{domxref("DOMException")}}
  - : Thrown if the file does not exist.
- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the file is no longer valid for some reason other than it having been deleted.

## Description

To write content to file, create a `FileWriterSync` object by calling `createWriter()`.

## Specifications

This feature is not part of any specification anymore. It is no longer on track to become a standard.

## Browser compatibility

{{Compat}}

## See also

- {{domxref("FileEntrySync")}}
- [File and Directory Entries API](/en-US/docs/Web/API/File_and_Directory_Entries_API)
