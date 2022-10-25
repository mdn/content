---
title: FileSystemSyncAccessHandle.write()
slug: Web/API/FileSystemSyncAccessHandle/write
page-type: web-api-instance-method
tags:
  - write
  - Directory
  - File
  - File System Access API
  - FileSystemSyncAccessHandle
  - Method
  - stream
  - working with files
browser-compat: api.FileSystemSyncAccessHandle.write
---

{{securecontext_header}}{{DefaultAPISidebar("File System Access API")}}

The **`write()`** method of the
{{domxref("FileSystemSyncAccessHandle")}} interface writes the content of a specified buffer to the file associated with the handle, optionally at a given offset.

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
  // retrieve message sent to work from main script
  const message = e.data;

  // Get handle to draft file
  const root = await navigator.storage.getDirectory();
  const draftFile = await root.getFileHandle('draft.txt');
  // Get sync access handle
  const accessHandle = await draftFile.createSyncAccessHandle();

  // Get size of the file.
  const fileSize = await accessHandle.getSize();
  // Read file content to a buffer.
  const buffer = new DataView(new ArrayBuffer(fileSize));
  const readBuffer = accessHandle.read(buffer, { "at": 0 });

  // Write the message to the end of the file.
  const encoder = new TextEncoder();
  const encodedMessage = encoder.encode(message);
  const writeBuffer = accessHandle.write(encodedMessage, { "at" : readBuffer });

  // Persist changes to disk.
  await accessHandle.flush();

  // Always close FileSystemSyncAccessHandle if done.
  await accessHandle.close();
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [File System Access API](/en-US/docs/Web/API/File_System_Access_API)
- [The File System Access API: simplifying access to local files](https://web.dev/file-system-access/)
