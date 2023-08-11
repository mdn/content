---
title: "StorageManager: getDirectory() method"
short-title: getDirectory()
slug: Web/API/StorageManager/getDirectory
page-type: web-api-instance-method
browser-compat: api.StorageManager.getDirectory
---

{{securecontext_header}}{{APIRef("Storage")}}

The **`getDirectory()`** method of the {{domxref("StorageManager")}} interface is used to obtain a reference to a {{domxref("FileSystemDirectoryHandle")}} object allowing access to a directory and its contents, stored in the [origin private file system](/en-US/docs/Web/API/File_System_API/Origin_private_file_system) (OPFS).

## Syntax

```js-nolint
getDirectory()
```

### Parameters

None.

### Return value

A {{jsxref('Promise')}} that fulfills with a {{domxref("FileSystemDirectoryHandle")}} object.

### Exceptions

- `SecurityError` {{domxref("DOMException")}}
  - : Thrown if the user agent is not able to map the requested directory to the local OPFS.

## Examples

The following asynchronous event handler function is contained inside a Web Worker. On receiving a message from the main thread it:

1. Gets a {{domxref("FileSystemDirectoryHandle")}} representing the root of the OPFS using `getDirectory()`, storing it in the `root` variable.
2. Gets a file handle using {{domxref("FileSystemDirectoryHandle.getFileHandle()")}}.
3. Creates a synchronous file access handle using {{domxref("FileSystemFileHandle.createSyncAccessHandle()")}}.
4. Gets the size of the file and creates an {{jsxref("ArrayBuffer")}} to contain it.
5. Reads and writes to the file.
6. Persists the changes to disk and closes the synchronous access handle.

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

- {{domxref("StorageManager")}}
- {{domxref("navigator.storage")}}
- {{domxref("FileSystemDirectoryHandle")}}
