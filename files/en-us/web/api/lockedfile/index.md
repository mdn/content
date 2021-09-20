---
title: LockedFile
slug: Web/API/LockedFile
tags:
  - API
  - Files
  - Non Standard
  - Reference
  - WebAPI
---
{{APIRef("File System API")}} {{non-standard_header}}

## Summary

The `LockedFile` interface provides tools to deal with a given file with all the necessary locks.

## Properties

- {{domxref("LockedFile.fileHandle")}} {{readonlyinline}}
  - : The {{domxref("IDBMutableFile")}} object from which the lock was opened.
- {{domxref("LockedFile.mode")}} {{readonlyinline}}
  - : The mode for accessing the file; can be `readonly` or `readwrite`.
- {{domxref("LockedFile.active")}} {{readonlyinline}}
  - : A flag indicating if the file can be accessed (`true`) or not (`false`).
- {{domxref("LockedFile.location")}}
  - : The position of the reading/writing pointer within the file.

### Events Handler

- {{domxref("LockedFile.oncomplete")}}
  - : The {{event("complete")}} event is triggered each time a read or write operation is successful.
- {{domxref("LockedFile.onabort")}}
  - : The {{event("abort")}} event is triggered each time the {{domxref("LockedFile.abort()","abort()")}} method is called.
- {{domxref("LockedFile.onerror")}}
  - : The {{event("error")}} event is triggered each time something goes wrong.

## Methods

- {{domxref("LockedFile.getMetadata()")}}
  - : Allows to retrieve the file metadata (size and date of the last modification). Returns a {{domxref("FileRequest")}}.
- {{domxref("LockedFile.readAsArrayBuffer()")}}
  - : Allows to retrieve a part of the content of the file as an {{jsxref("ArrayBuffer")}}. Returns a {{domxref("FileRequest")}} object.
- {{domxref("LockedFile.readAsText()")}}
  - : Allows to retrieve a part of the content of the file as a string. Returns a {{domxref("FileRequest")}} object.
- {{domxref("LockedFile.write()")}}
  - : Allows to write some data in the file starting at the {{domxref("LockedFile.location","location")}} offset. Returns a {{domxref("FileRequest")}} object.
- {{domxref("LockedFile.append()")}}
  - : Allows to write some data at the end of the file. Returns a {{domxref("FileRequest")}} object.
- {{domxref("LockedFile.truncate()")}}
  - : Allows to truncate the file's content. Returns a {{domxref("FileRequest")}} object.
- {{domxref("LockedFile.flush()")}}
  - : Allows to guarantee that any buffered data has been transferred to disk.
- {{domxref("LockedFile.abort()")}}
  - : Makes the `LockedFile` inactive and cancels all ongoing operations.

## Specifications

| Specification                        | Status                           | Comment         |
| ------------------------------------ | -------------------------------- | --------------- |
| {{SpecName('FileSystem')}} | {{Spec2('FileSystem')}} | Draft proposal. |

## See also

- {{domxref("IDBMutableFile")}}
- {{domxref("FileRequest")}}
