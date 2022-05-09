---
title: IDBFileHandle.active
slug: Web/API/IDBFileHandle/active
tags:
  - API
  - Files
  - Non-standard
  - Property
  - Reference
  - WebAPI
browser-compat: api.IDBFileHandle.abort
---
{{APIRef("IndexedDB")}} {{non-standard_header}}

The read-only **`active`** property of the {{domxref("IDBFileHandle")}} interface
indicates if the object is still usable (`true`), or not (`false`). If the object is inactive then it is impossible to perform any
read or write operation with it.
Typically, an {{domxref("IDBFileHandle")}} object becomes inactive when the {{domxref("IDBFileHandle.abort()")}} method is called,
or if an error occurs.

> **Note:** The three interfaces `IDBMutableFile`, `IDBFileHandle`, and `IDBFileRequest` are deprecated and only implemented
> for backward compatibility in Firefox. _Do not use them anymore_:
> consider using the [File and Directory Entries API](/en-US/docs/Web/API/File_and_Directory_Entries_API) instead.

## Value

A boolean value.

## Specifications

This feature is not part of any current specification. It is no longer on track to become a standard.

## Browser compatibility

{{Compat}}

## See also

- {{domxref("IDBFileHandle")}}
