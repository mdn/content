---
title: IDBFileHandle.flush()
slug: Web/API/IDBFileHandle/flush
tags:
  - API
  - Files
  - Method
  - Non-standard
  - Reference
  - WebAPI
browser-compat: api.IDBFileHandle.flush
---
{{APIRef("IndexedDB")}}{{non-standard_header}}

The **`flush()`** method of the {{domxref("IDBFileHandle")}} interface
ensures any change made to a file is properly written on disk.

For performance reasons, a {{domxref("IDBFileHandle")}} object buffers all its operation in memory.
This allows fast writing and reading operations.
Periodically, the data are written onto disk.
However, if something goes wrong before that, some operations can be lost.
To avoid that, it's possible to force a write onto the disk by calling the `flush()` method.

> **Note:** The three interfaces `IDBMutableFile`, `IDBFileHandle`, and `IDBFileRequest` are deprecated and only implemented
> for backward compatibility in Firefox. _Do not use them anymore_:
> consider using the [File and Directory Entries API](/en-US/docs/Web/API/File_and_Directory_Entries_API) instead.

## Syntax

```js
flush()
```

### Parameters

None.

### Return value

An {{domxref("IDBFileRequest")}} object to handle the success or failure of the operation.

## Specifications

This feature is not part of any current specification. It is no longer on track to become a standard.

## Browser compatibility

{{Compat}}

## See also

- {{domxref("IDBFileHandle")}}
