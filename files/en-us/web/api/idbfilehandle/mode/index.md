---
title: IDBFileHandle.mode
slug: Web/API/IDBFileHandle/mode
tags:
  - API
  - Files
  - Non-standard
  - Property
  - Reference
  - WebAPI
browser-compat: api.IDBFileHandle.mode
---
{{APIRef("IndexedDB")}}{{non-standard_header}}

The **`mode`** read-only property of the {{domxref("IDBFileHandle")}} interface
provides the read/write status of the file.

> **Note:** The three interfaces `IDBMutableFile`, `IDBFileHandle`, and `IDBFileRequest` are deprecated and only implemented
> for backward compatibility in Firefox. _Do not use them anymore_:
> consider using the [File and Directory Entries API](/en-US/docs/Web/API/File_and_Directory_Entries_API) instead.

## Value

A string, either `readonly` or `readwrite`.

## Specifications

This feature is not part of any current specification. It is no longer on track to become a standard.

## Browser compatibility

{{Compat}}

## See also

- {{domxref("IDBFileHandle")}}
