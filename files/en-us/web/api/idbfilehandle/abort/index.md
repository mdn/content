---
title: IDBFileHandle.abort()
slug: Web/API/IDBFileHandle/abort
tags:
  - API
  - Files
  - Method
  - Non-standard
  - Reference
  - WebAPI
browser-compat: api.IDBFileHandle.abort
---
{{APIRef("IndexedDB")}}{{non-standard_header}}

The **`abort()`** method of the {{domxref("IDBFileHandle")}} interface
release the lock on the object, making it inactive:
 its {{domxref("IDBFileHandle.active", "active")}} property is set to `false`
 and all ongoing operations are canceled.

> **Warning:** When an ongoing operation is canceled, there is no rollback
> database transaction), therefore the file can be corrupted if the
> canceled operation was performing some writing.

> **Note:** The three interfaces `IDBMutableFile`, `IDBFileHandle`, and `IDBFileRequest` are deprecated and only implemented
> for backward compatibility in Firefox. _Do not use them anymore_:
> consider using the [File and Directory Entries API](/en-US/docs/Web/API/File_and_Directory_Entries_API) instead.

## Syntax

```js
abort()
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
