---
title: IDBFileHandle.readAsText()
slug: Web/API/IDBFileHandle/readAsText
tags:
  - API
  - Files
  - Method
  - Non-standard
  - Reference
  - WebAPI
browser-compat: api.IDBFileHandle.readAsText
---
{{APIRef("IndexedDB")}}{{non-standard_header}}

The **`readAsText()`** method of the {{domxref("IDBFileHandle")}} interface
reads the content of the associated file
and provide the result of that reading as a string.
In many ways, it performs like the {{domxref("FileReader.readAsText()")}} method.

The reading operation starts at the position given by the
{{domxref("IDBFileHandle.location", "location")}} property.

> **Note:** The three interfaces `IDBMutableFile`, `IDBFileHandle`, and `IDBFileRequest` are deprecated and only implemented
> for backward compatibility in Firefox. _Do not use them anymore_:
> consider using the [File and Directory Entries API](/en-US/docs/Web/API/File_and_Directory_Entries_API) instead.

## Syntax

```js
readAsText(size)
readAsText(size, encoding)
```

### Parameters

- `size`
  - : A number representing the number of bytes to read in the file.
- `encoding` {{optional_inline}}
  - : A string indicating the encoding to use for the returned data. By default, UTF-8 is
    assumed if this parameter is not specified.

### Return value

An {{domxref("IDBFileRequest")}} object to handle the success or failure of the operation.
In case of success, the request's `result` is a string representing the data
that have been read.

## Specifications

This feature is not part of any current specification. It is no longer on track to become a standard.

## Browser compatibility

{{Compat}}

## See also

- {{domxref("IDBFileHandle")}}
