---
title: IDBFileHandle.location
slug: Web/API/IDBFileHandle/location
tags:
  - API
  - Files
  - Non-standard
  - Property
  - Reference
  - WebAPI
browser-compat: api.IDBFileHandle.location
---
{{APIRef("IndexedDB")}}{{non-standard_header}}

The **`location`** property of the {{domxref("IDBFileHandle")}} is a zero-based index
representing the position of the read/write pointer within the file.
Its value indicates at which bytes within the file any write or read operation will start.

This value is changed automatically after every read and write operation. The special
value `null` means end-of-file.

This property can be changed at will.

> **Note:** The three interfaces `IDBMutableFile`, `IDBFileHandle`, and `IDBFileRequest` are deprecated and only implemented
> for backward compatibility in Firefox. _Do not use them anymore_:
> consider using the [File and Directory Entries API](/en-US/docs/Web/API/File_and_Directory_Entries_API) instead.

## Value

A number or the `null` value, meaning end-of-file.

## Specifications

This feature is not part of any current specification. It is no longer on track to become a standard.

## Browser compatibility

{{Compat}}

## See also

- {{domxref("IDBFileHandle")}}
