---
title: StorageManager.getDirectory()
slug: Web/API/StorageManager/getDirectory
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Quota
  - Reference
  - Secure context
  - Storage
  - Storage API
  - StorageManager
  - Usage
  - getDirectory
browser-compat: api.StorageManager.getDirectory
---

{{securecontext_header}}{{APIRef("Storage")}}

The **`getDirectory()`** method of the {{domxref("StorageManager")}} interface is used to obtain a reference to a {{domxref("FileSystemDirectoryHandle")}} object allowing access to a directory and its contents, stored in the [origin private file system](/en-US/docs/Web/API/File_System_Access_API#origin_private_file_system).

## Syntax

```js-nolint
getDirectory()
```

### Parameters

None.

### Return value

A {{jsxref('Promise')}} that fulfills with a {{domxref("FileSystemDirectoryHandle")}} object.

## Examples

```js
async function manipulateDirectory() {
  const root = await navigator.storage.getDirectory();

  // Create a new file handle.
  const fileHandle = await root.getFileHandle('Untitled.txt', { create: true });

  // Create a new directory handle.
  const dirHandle = await root.getDirectoryHandle('New Folder', { create: true });

  // Recursively remove a directory.
  await root.removeEntry('Old Stuff', { recursive: true });
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("StorageManager")}}
- {{domxref("navigator.storage")}}
- {{domxref("FileSystemDirectoryHandle")}}
