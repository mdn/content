---
title: IDBFileHandle.fileHandle
slug: Web/API/IDBFileHandle/fileHandle
tags:
  - API
  - Files
  - Non-standard
  - Property
  - Reference
  - WebAPI
browser-compat: api.IDBFileHandle.fileHandle
---
{{APIRef("IndexedDB")}}{{non-standard_header}}

The read-only **`fileHandle`** property of the {{domxref("IDBFileHandle")}} interface
returns the {{domxref("IDBMutableFile")}} object that produced this object.

> **Note:** The three interfaces `IDBMutableFile`, `IDBFileHandle`, and `IDBFileRequest` are deprecated and only implemented
> for backward compatibility in Firefox. _Do not use them anymore_:
> consider using the [File and Directory Entries API](/en-US/docs/Web/API/File_and_Directory_Entries_API) instead.

## Value

A {{domxref("IDBMutableFile")}} object.

## Specifications

This feature is not part of any current specification. It is no longer on track to become a standard.

## Browser compatibility

{{Compat}}

## See also

- {{domxref("IDBFileHandle")}}
