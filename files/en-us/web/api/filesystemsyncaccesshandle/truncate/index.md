---
title: "FileSystemSyncAccessHandle: truncate() method"
short-title: truncate()
slug: Web/API/FileSystemSyncAccessHandle/truncate
page-type: web-api-instance-method
browser-compat: api.FileSystemSyncAccessHandle.truncate
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers("dedicated")}}

The **`truncate()`** method of the
{{domxref("FileSystemSyncAccessHandle")}} interface resizes the file associated with the handle to a specified number of bytes.

> [!NOTE]
> In earlier versions of the spec, {{domxref("FileSystemSyncAccessHandle.close()", "close()")}}, {{domxref("FileSystemSyncAccessHandle.flush()", "flush()")}}, {{domxref("FileSystemSyncAccessHandle.getSize()", "getSize()")}}, and `truncate()` were wrongly specified as asynchronous methods, and older versions of some browsers implement them in this way. However, all current browsers that support these methods implement them as synchronous methods.

## Syntax

```js-nolint
truncate(newSize)
```

### Parameters

- `newSize`
  - : The number of bytes to resize the file to.

### Return value

None ({{jsxref('undefined')}}).

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the associated access handle is already closed, or if the modification of the file's binary data otherwise fails.
- `QuotaExceededError` {{domxref("DOMException")}}
  - : Thrown if the `newSize` is larger than the original size of the file, and exceeds the browser's [storage quota](/en-US/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria).
- {{jsxref("TypeError")}}
  - : Thrown if the underlying file system does not support setting the file size to the new size.

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

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [File System API](/en-US/docs/Web/API/File_System_API)
- [The File System Access API: simplifying access to local files](https://developer.chrome.com/docs/capabilities/web-apis/file-system-access)
