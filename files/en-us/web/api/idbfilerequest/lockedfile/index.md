---
title: IDBFileRequest.lockedFile
slug: Web/API/IDBFileRequest/lockedFile
tags:
  - API
  - DOM
  - Files
  - Non-standard
  - Property
  - Reference
  - WebAPI
browser-compat: api.IDBFileRequest.lockedFile
---
{{APIRef("IndexedDB")}} {{non-standard_header}}

The **`lockedFile`** read-only property returns the {{domxref("IDBFileHandle")}} object
from which the request was started.

> **Note:** The three interfaces `IDBMutableFile`, `IDBFileHandle`, and `IDBFileRequest` are deprecated and only implemented
> for backward compatibility in Firefox. _Do not use them anymore_:
> consider using the [File and Directory Entries API](/en-US/docs/Web/API/File_and_Directory_Entries_API) instead.

## Value

A {{domxref("IDBFileHandle")}} object.

## Specifications

This feature is not part of any current specification. It is no longer on track to become a standard.

## Browser compatibility

{{Compat}}

## See also

- {{domxref("IDBFileRequest")}}
- {{domxref("IDBFileHandle")}}
