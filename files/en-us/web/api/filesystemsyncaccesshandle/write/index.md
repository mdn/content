---
title: "FileSystemSyncAccessHandle: write() method"
short-title: write()
slug: Web/API/FileSystemSyncAccessHandle/write
page-type: web-api-instance-method
browser-compat: api.FileSystemSyncAccessHandle.write
---

{{securecontext_header}}{{APIRef("File System Access API")}}

The **`write()`** method of the
{{domxref("FileSystemSyncAccessHandle")}} interface writes the content of a specified buffer to the file associated with the handle, optionally at a given offset. Note that you cannot directly manipulate the contents of an `ArrayBuffer`. Instead, you create one of the typed array objects like an {{jsxref("Int8Array")}} or a {{jsxref("DataView")}} object which represents the buffer in a specific format, and use that to read and write the contents of the buffer.

Writes performed using {{domxref('FileSystemSyncAccessHandle.write()')}} are in-place, meaning that changes are written to the actual underlying file at the same time as they are written to the writer. This is not the case with other writing mechanisms available in the {{domxref("File System Access API", "File System Access API", "", "nocode")}} (e.g. {{domxref('FileSystemFileHandle.createWritable()')}}), where changes are not committed to disk until the writing stream is closed.

## Syntax

```js-nolint
write(buffer, FileSystemReadWriteOptions)
```

### Parameters

- `buffer`
  - : An {{jsxref("ArrayBuffer")}} or `ArrayBufferView` (such as a {{jsxref("DataView")}}) representing the buffer to be written to the file.
- `FileSystemReadWriteOptions` {{optional_inline}}
  - : An options object containing the following properties:
    - `at`
      - : A number representing the offset in bytes from the start of the file that the buffer should be written at.

### Return value

A {{jsxref('Promise')}} which resolves to a number representing the number of bytes written to the file.

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the associated access handle is already closed.

## Examples

The following asynchronous event handler function is contained inside a Web Worker. On receiving a message from the main thread it:

- Creates a synchronous file access handle.
- Gets the size of the file and creates an {{jsxref("ArrayBuffer")}} to contain it.
- Reads the file contents into the buffer.
- Encodes the message and writes it to the end of the file.
- Persists the changes to disk and closes the access handle.

```js
onmessage = async (e) => {
  // Retrieve message sent to work from main script
  const message = e.data;

  // Get handle to draft file
  const root = await navigator.storage.getDirectory();
  const draftHandle = await root.getFileHandle("draft.txt", { create: true });
  // Get sync access handle
  const accessHandle = await draftHandle.createSyncAccessHandle();

  // Get size of the file.
  const fileSize = accessHandle.getSize();
  // Read file content to a buffer.
  const buffer = new DataView(new ArrayBuffer(fileSize));
  const readBuffer = accessHandle.read(buffer, { at: 0 });

  // Write the message to the end of the file.
  const encoder = new TextEncoder();
  const encodedMessage = encoder.encode(message);
  const writeBuffer = accessHandle.write(encodedMessage, { at: readBuffer });

  // Persist changes to disk.
  accessHandle.flush();

  // Always close FileSystemSyncAccessHandle if done.
  accessHandle.close();
};
```

> **Note:** In earlier versions of the spec, {{domxref("FileSystemSyncAccessHandle.close()", "close()")}}, {{domxref("FileSystemSyncAccessHandle.flush()", "flush()")}}, {{domxref("FileSystemSyncAccessHandle.getSize()", "getSize()")}}, and {{domxref("FileSystemSyncAccessHandle.truncate()", "truncate()")}} were wrongly specified as asynchronous methods. This has now been [amended](https://github.com/whatwg/fs/issues/7), but some browsers still support the asynchronous versions.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [File System Access API](/en-US/docs/Web/API/File_System_Access_API)
- [The File System Access API: simplifying access to local files](https://web.dev/file-system-access/)
