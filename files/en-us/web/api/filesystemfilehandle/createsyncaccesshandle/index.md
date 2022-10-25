---
title: FileSystemFileHandle.createSyncAccessHandle()
slug: Web/API/FileSystemFileHandle/createSyncAccessHandle
page-type: web-api-instance-method
tags:
  - Directory
  - File
  - File System Access API
  - FileSystemFileHandle
  - Method
  - createSyncAccessHandle
  - working with files
browser-compat: api.FileSystemFileHandle.createSyncAccessHandle
---

{{securecontext_header}}{{DefaultAPISidebar("File System Access API")}}

The **`createSyncAccessHandle()`** method of the
{{domxref("FileSystemFileHandle")}} interface returns a {{jsxref('Promise')}} which resolves to a {{domxref('FileSystemSyncAccessHandle')}} object
that can be used to synchronously read from and write to a file. The synchronous nature of this method brings performance advantages,
but it is only usable inside dedicated [Web Workers](/en-US/docs/Web/API/Web_Workers_API).

Creating a {{domxref('FileSystemSyncAccessHandle')}} takes an exclusive lock on the file associated with the file handle. This prevents the creation of further {{domxref('FileSystemSyncAccessHandle')}}s or {{domxref('FileSystemWritableFileStream')}}s for the file, until the existing access handle is closed.

If the file on disk changes or is removed after this method is called, the returned
{{domxref('File')}} object will likely be no longer readable.

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
  - : Thrown if the {{domxref('FileSystemSyncAccessHandle')}} object does not represent an file in the [origin private file system](https://fs.spec.whatwg.org/#origin-private-file-system).
- `NoModificationAllowedError` {{domxref("DOMException")}}
  - : Thrown if the browser is not able to take an exclusive lock on the file associated with the file handle.
- `NotAllowedError` {{domxref("DOMException")}}
  - : Thrown if the {{domxref('PermissionStatus.state')}} is not `granted` in
    read mode.

## Examples

The following asynchronous event handler function is contained inside a Web Worker. The snippet inside it creates a synchronous file access handle.

```js
onmessage = async (e) => {
  // retrieve message sent to work from main script
  const message = e.data;

  // Get handle to draft file
  const root = await navigator.storage.getDirectory();
  const draftFile = await root.getFileHandle('draft.txt');
  // Get sync access handle
  const accessHandle = await draftFile.createSyncAccessHandle();

    ...

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
