---
title: IDBFileHandle.write()
slug: Web/API/IDBFileHandle/write
tags:
  - API
  - Files
  - Method
  - Non-standard
  - Reference
  - WebAPI
browser-compat: api.IDBFileHandle.write
---
{{APIRef("IndexedDB")}}{{non-standard_header}}

The **`write()`** method of the {{domxref("IDBFileHandle")}} interface
writes some data into the file.

The write starts at the position set in {{domxref("IDBFileHandle.location", "location")}} and moves
that position by the number of written bytes.

> **Note:** The three interfaces `IDBMutableFile`, `IDBFileHandle`, and `IDBFileRequest` are deprecated and only implemented
> for backward compatibility in Firefox. _Do not use them anymore_:
> consider using the [File and Directory Entries API](/en-US/docs/Web/API/File_and_Directory_Entries_API) instead.

## Syntax

```js
write(data)
```

### Parameters

- `data`
  - : The data to write into the file. It can be a string or an
    {{jsxref("ArrayBuffer")}}.

### Return value

An {{domxref("IDBFileRequest")}} object to handle the success or failure of the operation.

## Specifications

This feature is not part of any current specification. It is no longer on track to become a standard.

## Browser compatibility

{{Compat}}

## See also

- {{domxref("IDBFileHandle")}}
