---
title: "FileSystemFileHandle: createSyncAccessHandle() method"
short-title: createSyncAccessHandle()
slug: Web/API/FileSystemFileHandle/createSyncAccessHandle
page-type: web-api-instance-method
browser-compat: api.FileSystemFileHandle.createSyncAccessHandle
---

{{securecontext_header}}{{APIRef("File System Access API")}}

The **`createSyncAccessHandle()`** method of the
{{domxref("FileSystemFileHandle")}} interface returns a {{jsxref('Promise')}} which resolves to a {{domxref('FileSystemSyncAccessHandle')}} object
that can be used to synchronously read from and write to a file. The synchronous nature of this method brings performance advantages,
but it is only usable inside dedicated [Web Workers](/en-US/docs/Web/API/Web_Workers_API) for files within the [origin private file system](/en-US/docs/Web/API/File_System_Access_API#origin_private_file_system).

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

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the {{domxref('FileSystemSyncAccessHandle')}} object does not represent a file in the [origin private file system](/en-US/docs/Web/API/File_System_Access_API#origin_private_file_system).
- `NoModificationAllowedError` {{domxref("DOMException")}}
  - : Thrown if the browser is not able to acquire a lock on the file associated with the file handle.
- `NotAllowedError` {{domxref("DOMException")}}
  - : Thrown if the permission has not been granted at the API level (i.e. {{domxref("FileSystemHandle.requestPermission")}} is required).

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

- [File System Access API](/en-US/docs/Web/API/File_System_Access_API)
- [The File System Access API: simplifying access to local files](https://web.dev/file-system-access/)
