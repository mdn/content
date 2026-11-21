---
title: "FileEntrySync: file() method"
short-title: file()
slug: Web/API/FileEntrySync/file
page-type: web-api-instance-method
status:
  - deprecated
  - non-standard
browser-compat: api.FileEntrySync.file
---

{{APIRef("File and Directory Entries API")}}{{Non-standard_Header}}

The **`file()`** method of the {{domxref("FileEntrySync")}} interface returns a {{domxref("File")}} that represents the current state of the file that this `FileEntry` represents.

## Syntax

```js-nolint
file()
```

### Parameters

None.

### Return value

A {{domxref("File")}} object.

### Exceptions

- `NotFoundError` {{domxref("DOMException")}}
  - : Thrown if the file does not exist.
- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the file is no longer valid for some reason other than it having been deleted.

## Specifications

This feature is not part of any specification anymore. It is no longer on track to become a standard.

## Browser compatibility

{{Compat}}

## See also

- {{domxref("FileEntrySync")}}
- [File and Directory Entries API](/en-US/docs/Web/API/File_and_Directory_Entries_API)
