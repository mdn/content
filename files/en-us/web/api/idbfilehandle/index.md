---
title: IDBFileHandle
slug: Web/API/IDBFileHandle
tags:
  - API
  - Files
  - Non-standard
  - Interface
  - Reference
  - WebAPI
browser-compat: api.IDBFileHandle
---
{{APIRef("IndexedDB")}} {{non-standard_header}}

The **`IDBFileHandle`** interface provides tools to deal with a given file with all the necessary locks.

> **Note:** The three interfaces `IDBMutableFile`, `IDBFileHandle`, and `IDBFileRequest` are deprecated and only implemented
> for backward compatibility in Firefox. _Do not use them anymore_:
> consider using the [File and Directory Entries API](/en-US/docs/Web/API/File_and_Directory_Entries_API) instead.

## Properties

- {{domxref("IDBFileHandle.fileHandle")}} {{readonlyinline}}
  - : The {{domxref("IDBMutableFile")}} object from which the lock was opened.
- {{domxref("IDBFileHandle.mode")}} {{readonlyinline}}
  - : The mode for accessing the file; can be `readonly` or `readwrite`.
- {{domxref("IDBFileHandle.active")}} {{readonlyinline}}
  - : A flag indicating if the file can be accessed (`true`) or not (`false`).
- {{domxref("IDBFileHandle.location")}}
  - : The position of the reading/writing pointer within the file.

## Methods

- {{domxref("IDBFileHandle.getMetadata()")}}
  - : Allows to retrieve the file metadata (size and date of the last modification).
- {{domxref("IDBFileHandle.readAsArrayBuffer()")}}
  - : Allows to retrieve a part of the content of the file as an {{jsxref("ArrayBuffer")}}.
- {{domxref("IDBFileHandle.readAsText()")}}
  - : Allows to retrieve a part of the content of the file as a string.
- {{domxref("IDBFileHandle.write()")}}
  - : Allows to write some data in the file starting at the {{domxref("IDBFileHandle.location","location")}} offset.
- {{domxref("IDBFileHandle.append()")}}
  - : Allows to write some data at the end of the file..
- {{domxref("IDBFileHandle.truncate()")}}
  - : Allows to truncate the file's content.
- {{domxref("IDBFileHandle.flush()")}}
  - : Allows to guarantee that any buffered data has been transferred to disk.
- {{domxref("IDBFileHandle.abort()")}}
  - : Makes the `IDBFileHandle` inactive and cancels all ongoing operations.

### Events Handler

- {{domxref("IDBFileHandle.complete_event", "complete")}}
  - : Fired when a read or write operation is successful.
- {{domxref("IDBFileHandle.abort_event", "abort")}}
  - : Fired when the {{domxref("IDBFileHandle.abort()", "abort()")}} method is called.
- {{domxref("IDBFileHandle.error_event", "error")}}
  - : Fired when something goes wrong.

## Specifications

This feature is not part of any current specification. It is no longer on track to become a standard.

## Browser compatibility

{{Compat}}

## See also

- {{domxref("IDBMutableFile")}}
