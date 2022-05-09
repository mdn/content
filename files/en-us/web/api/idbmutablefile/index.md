---
title: IDBMutableFile
slug: Web/API/IDBMutableFile
tags:
  - API
  - DOM
  - Files
  - Reference
  - Non-standard
  - Interface
browser-compat: api.IDBMutableFile
---
{{APIRef("IndexedDB")}}{{non-standard_header}}

The **`IDBMutableFile`** interface provides access in read or write mode to a file, dealing with all the necessary locks.

As `IDBMutableFile` objects are bound to a fake file system built using IndexedDB, such an object is created using the {{domxref("IDBDatabase.createMutableFile()")}} method.

> **Note:** The three interfaces `IDBMutableFile`, `IDBFileHandle`, and `IDBFileRequest` are deprecated and only implemented
> for backward compatibility in Firefox. _Do not use them anymore_:
> consider using the [File and Directory Entries API](/en-US/docs/Web/API/File_and_Directory_Entries_API) instead.

## Properties

- {{domxref("IDBMutableFile.name")}} {{readonlyinline}}
  - : The name of the handled file.
- {{domxref("IDBMutableFile.type")}} {{readonlyinline}}
  - : The MIME type of the handled file.

## Methods

- {{domxref("IDBMutableFile.open()")}}
  - : Returns a {{domxref("IDBFileHandle")}} object to read or write the associated file safely.

### Events

- {{domxref("IDBMutableFile.abort_event", "abort")}}
  - : Fired when the handled file is aborted.
- {{domxref("IDBMutableFile.error_event", "error")}}
  - : Fired when something goes wrong.

## Specifications

This feature is not part of any current specification. It is no longer on track to become a standard.

## Browser compatibility

{{Compat}}

## See also

- {{domxref("IDBFileHandle")}}
- {{domxref("File")}}
