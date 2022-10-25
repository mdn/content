---
title: FileSystemSyncAccessHandle.truncate()
slug: Web/API/FileSystemSyncAccessHandle/truncate
page-type: web-api-instance-method
tags:
  - truncate
  - Directory
  - File
  - File System Access API
  - FileSystemSyncAccessHandle
  - Method
  - stream
  - working with files
browser-compat: api.FileSystemSyncAccessHandle.truncate
---

{{securecontext_header}}{{DefaultAPISidebar("File System Access API")}}

The **`truncate()`** method of the
{{domxref("FileSystemSyncAccessHandle")}} interface resizes the file associated with the handle to a specified number of bytes.

## Syntax

```js-nolint
truncate(newSize)
```

### Parameters

- `newSize`
  - : The number of bytes to resize the file to.

### Return value

A {{jsxref('Promise')}} which resolves to undefined.

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the associated access handle is already closed, or if the modification of the file's binary data otherwise fails.
- `QuotaExceededError` {{domxref("DOMException")}}
  - : Thrown if the `newSize` is larger than the original size of the file, and exceeds the browser's [storage quota](/en-US/docs/Web/API/IndexedDB_API/Browser_storage_limits_and_eviction_criteria).

## Examples

```js
async function truncateFile() {
  // Get handle to draft file
  const root = await navigator.storage.getDirectory();
  const draftFile = await root.getFileHandle('draft.txt');
  // Get sync access handle
  const accessHandle = await draftFile.createSyncAccessHandle();

  // Truncate the file to 0 bytes
  await accessHandle.truncate(0);

  // Persist changes to disk.
  await accessHandle.flush();

  // Always close FileSystemSyncAccessHandle if done.
  await accessHandle.close();
}
```

Note that some browsers feature an experimental synchronous version of `truncate()` that provides further improved performance:

```js
accessHandle.truncate(0);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [File System Access API](/en-US/docs/Web/API/File_System_Access_API)
- [The File System Access API: simplifying access to local files](https://web.dev/file-system-access/)
