---
title: "FileSystemSyncAccessHandle: truncate() method"
short-title: truncate()
slug: Web/API/FileSystemSyncAccessHandle/truncate
page-type: web-api-instance-method
browser-compat: api.FileSystemSyncAccessHandle.truncate
---

{{securecontext_header}}{{APIRef("File System API")}}

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
  - : Thrown if the `newSize` is larger than the original size of the file, and exceeds the browser's [storage quota](/en-US/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria).

## Examples

```js
async function truncateFile() {
  // Get handle to draft file
  const root = await navigator.storage.getDirectory();
  const draftHandle = await root.getFileHandle("draft.txt", { create: true });
  // Get sync access handle
  const accessHandle = await draftHandle.createSyncAccessHandle();

  // Truncate the file to 0 bytes
  accessHandle.truncate(0);

  // Persist changes to disk.
  accessHandle.flush();

  // Always close FileSystemSyncAccessHandle if done.
  accessHandle.close();
}
```

> **Note:** In earlier versions of the spec, {{domxref("FileSystemSyncAccessHandle.close()", "close()")}}, {{domxref("FileSystemSyncAccessHandle.flush()", "flush()")}}, {{domxref("FileSystemSyncAccessHandle.getSize()", "getSize()")}}, and `truncate()` were wrongly specified as asynchronous methods. This has now been [amended](https://github.com/whatwg/fs/issues/7), but some browsers still support the asynchronous versions.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [File System API](/en-US/docs/Web/API/File_System_API)
- [The File System Access API: simplifying access to local files](https://web.dev/file-system-access/)
