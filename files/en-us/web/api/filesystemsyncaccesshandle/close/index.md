---
title: FileSystemSyncAccessHandle.close()
slug: Web/API/FileSystemSyncAccessHandle/close
page-type: web-api-instance-method
tags:
  - close
  - Directory
  - File
  - File System Access API
  - FileSystemSyncAccessHandle
  - Method
  - stream
  - working with files
browser-compat: api.FileSystemSyncAccessHandle.close
---

{{securecontext_header}}{{DefaultAPISidebar("File System Access API")}}

The **`close()`** method of the
{{domxref("FileSystemSyncAccessHandle")}} interface closes an open synchronous file handle, disabling any further operations on it and releasing the exclusive lock previously put on the file associated with the file handle.

## Syntax

```js-nolint
close()
```

### Parameters

None.

### Return value

A {{jsxref('Promise')}} which resolves to undefined.

### Exceptions

None.

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

Note that some browsers feature an experimental synchronous version of `close()` that provides further improved performance:

```js
accessHandle.close();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [File System Access API](/en-US/docs/Web/API/File_System_Access_API)
- [The File System Access API: simplifying access to local files](https://web.dev/file-system-access/)
