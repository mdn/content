---
title: FileSystemSyncAccessHandle.getSize()
slug: Web/API/FileSystemSyncAccessHandle/getSize
page-type: web-api-instance-method
tags:
  - getSize
  - Directory
  - File
  - File System Access API
  - FileSystemSyncAccessHandle
  - Method
  - stream
  - working with files
browser-compat: api.FileSystemSyncAccessHandle.getSize
---

{{securecontext_header}}{{DefaultAPISidebar("File System Access API")}}

The **`getSize()`** method of the
{{domxref("FileSystemSyncAccessHandle")}} interface returns the size of the file associated with the handle in bytes.

## Syntax

```js-nolint
getSize()
```

### Parameters

None.

### Return value

A {{jsxref('Promise')}} which resolves to a number representing the number of bytes in the file.

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
  const draftHandle = await root.getFileHandle('draft.txt', { create: true });
  // Get sync access handle
  const accessHandle = await draftHandle.createSyncAccessHandle();

  // Get size of the file.
  const fileSize = await accessHandle.getSize();
  // Read file content to a buffer.
  const buffer = new DataView(new ArrayBuffer(fileSize));
  const readBuffer = accessHandle.read(buffer, { at: 0 });

  // Write the message to the end of the file.
  const encoder = new TextEncoder();
  const encodedMessage = encoder.encode(message);
  const writeBuffer = accessHandle.write(encodedMessage, { at: readBuffer });

  // Persist changes to disk.
  await accessHandle.flush();

  // Always close FileSystemSyncAccessHandle if done.
  await accessHandle.close();
}
```

Note that some browsers feature an experimental synchronous version of `getSize()` that provides further improved performance:

```js
const fileSize = accessHandle.getSize();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [File System Access API](/en-US/docs/Web/API/File_System_Access_API)
- [The File System Access API: simplifying access to local files](https://web.dev/file-system-access/)
