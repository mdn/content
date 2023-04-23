---
title: "FileSystemSyncAccessHandle: read() method"
short-title: read()
slug: Web/API/FileSystemSyncAccessHandle/read
page-type: web-api-instance-method
browser-compat: api.FileSystemSyncAccessHandle.read
---

{{securecontext_header}}{{APIRef("File System Access API")}}

The **`read()`** method of the
{{domxref("FileSystemSyncAccessHandle")}} interface reads the content of the file associated with the handle into a specified buffer, optionally at a given offset.

## Syntax

```js-nolint
read(buffer, FileSystemReadWriteOptions)
```

### Parameters

- `buffer`
  - : An {{jsxref("ArrayBuffer")}} or `ArrayBufferView` (such as a {{jsxref("DataView")}}) representing the buffer that the file content should be read into. Note that you cannot directly manipulate the contents of an `ArrayBuffer`. Instead, you create one of the typed array objects like an {{jsxref("Int8Array")}} or a {{jsxref("DataView")}} object which represents the buffer in a specific format, and use that to read and write the contents of the buffer.
- `FileSystemReadWriteOptions` {{optional_inline}}

  - : An options object containing the following properties:

    - `at`
      - : A number representing the offset in bytes that the file should be read from.

### Return value

A {{jsxref('Promise')}} which resolves to a number representing the number of bytes read from the file.

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
