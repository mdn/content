---
title: IDBFileHandle
slug: Web/API/IDBFileHandle
page-type: web-api-interface
tags:
  - API
  - Files
  - Interface
  - Reference
  - WebAPI
  - Non-standard
  - Deprecated
browser-compat: api.IDBFileHandle
---
{{APIRef("IndexedDB")}}{{deprecated_header}}

> **Note:** The three non-standard interfaces {{domxref("IDBMutableFile")}}, {{domxref("IDBFileHandle")}}, and {{domxref("IDBFileRequest")}} are [disabled by default](#browser_compatibility).
> Consider using the [File and Directory Entries API](/en-US/docs/Web/API/File_and_Directory_Entries_API) instead.

The **`IDBFileHandle`** interface provides tools to deal with a given file with all the necessary locks.

## Properties

- {{domxref("IDBFileHandle.fileHandle")}} {{ReadOnlyInline}}
  - : The {{domxref("IDBMutableFile")}} object from which the lock was opened.
- {{domxref("IDBFileHandle.mode")}} {{ReadOnlyInline}}
  - : The mode for accessing the file; can be `readonly` or `readwrite`.
- {{domxref("IDBFileHandle.active")}} {{ReadOnlyInline}}
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

This interface is not supported by any current browser.
From Firefox 102 it is behind the preference `dom.fileHandle.enabled`.

## See also

- {{domxref("IDBMutableFile")}}
