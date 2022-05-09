---
title: IDBFileHandle.truncate()
slug: Web/API/IDBFileHandle/truncate
tags:
  - API
  - Files
  - Method
  - Non Standard
  - Reference
  - WebAPI
browser-compat: api.IDBFileHandle.truncate
---
{{APIRef("IndexedDB")}}{{non-standard_header}}

The **`truncate`** method of the {{domxref("IDBFileHandle")}} interface
removes some data within the file.

If the method is called with no argument, the operation removes all the bytes starting
at the index set in {{domxref("IDBFileHandle.location", "location")}}.

If the method is called with an argument, the operation removes all the bytes starting
at the index corresponding to the parameter and regardless of the value of
{{domxref("IDBFileHandle.location", "location")}}.

> **Note:** The three interfaces `IDBMutableFile`, `IDBFileHandle`, and `IDBFileRequest` are deprecated and only implemented
> for backward compatibility in Firefox. _Do not use them anymore_:
> consider using the [File and Directory Entries API](/en-US/docs/Web/API/File_and_Directory_Entries_API) instead.

## Syntax

```js
truncate()
truncate(start)
```

### Parameters

- `start` {{optional_inline}}
  - : A number representing the index where to start the operation.

### Return value

An {{domxref("IDBFileRequest")}}` object to handle the success or failure of the operation.

## Specifications

This feature is not part of any current specification. It is no longer on track to become a standard.

## Browser compatibility

{{Compat}}

## See also

- {{domxref("IDBFileHandle")}}
