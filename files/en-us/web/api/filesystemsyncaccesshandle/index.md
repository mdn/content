---
title: FileSystemSyncAccessHandle
slug: Web/API/FileSystemSyncAccessHandle
page-type: web-api-interface
browser-compat: api.FileSystemSyncAccessHandle
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers("dedicated")}}

The **`FileSystemSyncAccessHandle`** interface of the {{domxref("File System API", "File System API", "", "nocode")}} represents a synchronous handle to a file system entry.

This class is only accessible inside dedicated [Web Workers](/en-US/docs/Web/API/Web_Workers_API) (so that its methods do not block execution on the main thread) for files within the [origin private file system](/en-US/docs/Web/API/File_System_API/Origin_private_file_system), which is not visible to end-users.

As a result, its methods are not subject to the same security checks as methods running on files within the user-visible file system, and so are much more performant. This makes them suitable for significant, large-scale file updates such as [SQLite](https://www.sqlite.org/wasm) database modifications.

The interface is accessed through the {{domxref('FileSystemFileHandle.createSyncAccessHandle()')}} method.

> [!NOTE]
> In earlier versions of the spec, {{domxref("FileSystemSyncAccessHandle.close()", "close()")}}, {{domxref("FileSystemSyncAccessHandle.flush()", "flush()")}}, {{domxref("FileSystemSyncAccessHandle.getSize()", "getSize()")}}, and {{domxref("FileSystemSyncAccessHandle.truncate()", "truncate()")}} were wrongly specified as asynchronous methods, and older versions of some browsers implement them in this way. However, all current browsers that support these methods implement them as synchronous methods.

## Instance properties

None.

## Instance methods

- {{domxref('FileSystemSyncAccessHandle.close', 'close()')}}
  - : Closes an open synchronous file handle, disabling any further operations on it and releasing the exclusive lock previously put on the file associated with the file handle.
- {{domxref('FileSystemSyncAccessHandle.flush', 'flush()')}}
  - : Persists any changes made to the file associated with the handle via the {{domxref('FileSystemSyncAccessHandle.write', 'write()')}} method to disk.
- {{domxref('FileSystemSyncAccessHandle.getSize', 'getSize()')}}
  - : Returns the size of the file associated with the handle in bytes.
- {{domxref('FileSystemSyncAccessHandle.read', 'read()')}}
  - : Reads the content of the file associated with the handle into a specified buffer, optionally at a given offset.
- {{domxref('FileSystemSyncAccessHandle.truncate', 'truncate()')}}
  - : Resizes the file associated with the handle to a specified number of bytes.
- {{domxref('FileSystemSyncAccessHandle.write', 'write()')}}
  - : Writes the content of a specified buffer to the file associated with the handle, optionally at a given offset.

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

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [File System API](/en-US/docs/Web/API/File_System_API)
- [The File System Access API: simplifying access to local files](https://developer.chrome.com/docs/capabilities/web-apis/file-system-access)
