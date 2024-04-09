---
title: "FileSystemFileHandle: createSyncAccessHandle() method"
short-title: createSyncAccessHandle()
slug: Web/API/FileSystemFileHandle/createSyncAccessHandle
page-type: web-api-instance-method
browser-compat: api.FileSystemFileHandle.createSyncAccessHandle
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers("dedicated")}}

The **`createSyncAccessHandle()`** method of the
{{domxref("FileSystemFileHandle")}} interface returns a {{jsxref('Promise')}} which resolves to a {{domxref('FileSystemSyncAccessHandle')}} object
that can be used to synchronously read from and write to a file. The synchronous nature of this method brings performance advantages,
but it is only usable inside dedicated [Web Workers](/en-US/docs/Web/API/Web_Workers_API) for files within the [origin private file system](/en-US/docs/Web/API/File_System_API/Origin_private_file_system).

Creating a {{domxref('FileSystemSyncAccessHandle')}} takes an exclusive lock on the file associated with the file handle. This prevents the creation of further {{domxref('FileSystemSyncAccessHandle')}}s or {{domxref('FileSystemWritableFileStream')}}s for the file until the existing access handle is closed.

## Syntax

```js-nolint
createSyncAccessHandle()
```

### Parameters

None.

### Return value

A {{jsxref('Promise')}} which resolves to a {{domxref('FileSystemSyncAccessHandle')}} object.

### Exceptions

- `NotAllowedError` {{domxref("DOMException")}}
  - : Thrown if the {{domxref('PermissionStatus.state')}} for the handle is not `granted` in `readwrite` mode.
- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the {{domxref('FileSystemSyncAccessHandle')}} object does not represent a file in the [origin private file system](/en-US/docs/Web/API/File_System_API/Origin_private_file_system).
- `NotFoundError` {{domxref("DOMException")}}
  - : Thrown if current entry is not found.
- `NoModificationAllowedError` {{domxref("DOMException")}}
  - : Thrown if the browser is not able to acquire a lock on the file associated with the file handle.

## Examples

The following asynchronous event handler function is contained inside a Web Worker. The snippet inside it creates a synchronous file access handle.

```js
onmessage = async (e) => {
  // Retrieve message sent to work from main script
  const message = e.data;

  // Get handle to draft file
  const root = await navigator.storage.getDirectory();
  const draftHandle = await root.getFileHandle("draft.txt", { create: true });
  // Get sync access handle
  const accessHandle = await draftHandle.createSyncAccessHandle();

  // …

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
