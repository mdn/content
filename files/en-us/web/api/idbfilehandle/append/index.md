---
title: IDBFileHandle.append()
slug: Web/API/IDBFileHandle/append
tags:
  - API
  - Files
  - Method
  - Non-standard
  - Reference
  - WebAPI
browser-compat: api.IDBFileHandle.append
---
{{APIRef("IndexedDB")}}{{non-standard_header}}

The **`append()`** method of the {{domxref("IDBFileHandle")}} interface
write additional data at the end of the file.

The write operation is performed at the end of the file,
regardless of the {{domxref("IDBFilehandle.location")}} value,
and actually sets the value of this property to `null`.

> **Note:** The three interfaces `IDBMutableFile`, `IDBFileHandle`, and `IDBFileRequest` are deprecated and only implemented
> for backward compatibility in Firefox. _Do not use them anymore_:
> consider using the [File and Directory Entries API](/en-US/docs/Web/API/File_and_Directory_Entries_API) instead.

## Syntax

```js
append(data)
```

### Parameters

- `data`
  - : The data to write into the file. It can be a string or an {{jsxref("ArrayBuffer")}}.

### Return value

An {{domxref("IDBFileRequest")}} object to handle the success or failure of the operation.

## Specifications

This feature is not part of any current specification. It is no longer on track to become a standard.

## Browser compatibility

{{Compat}}

## See also

- {{domxref("IDBFileHandle")}}
