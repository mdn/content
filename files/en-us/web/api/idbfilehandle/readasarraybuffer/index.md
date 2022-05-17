---
title: IDBFileHandle.readAsArrayBuffer()
slug: Web/API/IDBFileHandle/readAsArrayBuffer
tags:
  - API
  - Files
  - Method
  - Non-standard
  - Reference
  - WebAPI
browser-compat: api.IDBFileHandle.readAsArrayBuffer
---
{{APIRef("IndexedDB")}}{{non-standard_header}}

The **`readAsArrayBuffer()`** method of the {{domxref("IDBFileHandle")}} interface
reads the content of the associated file into an {{jsxref("ArrayBuffer")}}.
In many ways, it performs like the {{domxref("FileReader.readAsArrayBuffer()")}} method.

The reading operation starts at the position given by the
{{domxref("IDBFileHandle.location", "location")}} property.

> **Note:** The three interfaces `IDBMutableFile`, `IDBFileHandle`, and `IDBFileRequest` are deprecated and only implemented
> for backward compatibility in Firefox. _Do not use them anymore_:
> consider using the [File and Directory Entries API](/en-US/docs/Web/API/File_and_Directory_Entries_API) instead.

## Syntax

```js
readAsArrayBuffer(size)
```

### Parameters

- `size`
  - : A number representing the number of bytes to read in the file.

### Return value

An {{domxref("IDBFileRequest")}} object to handle the success or failure of the operation.
In case of success, the request's `result` is an {{jsxref("ArrayBuffer")}}
representing the data that have been read.

## Specifications

This feature is not part of any current specification. It is no longer on track to become a standard.

## Browser compatibility

{{Compat}}

## See also

- {{domxref("IDBFileHandle")}}
