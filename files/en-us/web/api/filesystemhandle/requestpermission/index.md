---
title: "FileSystemHandle: requestPermission() method"
short-title: requestPermission()
slug: Web/API/FileSystemHandle/requestPermission
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.FileSystemHandle.requestPermission
---

{{securecontext_header}}{{APIRef("File System Access API")}}{{SeeCompatTable}}

The **`requestPermission()`** method of the
{{domxref("FileSystemHandle")}} interface requests read or readwrite permissions for the
file handle.

## Syntax

```js-nolint
requestPermission(fileSystemHandlePermissionDescriptor)
```

### Parameters

- FileSystemHandlePermissionDescriptor {{optional_inline}}

  - : An object which specifies the permission mode to query for. Options are as follows:

    - `'mode'`: Can be either `'read'` or
      `'readwrite'`.

### Return value

{{domxref('PermissionStatus.state')}} which is one of `'granted'`,
`'denied'` or `'prompt'`.

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if no parameter is specified or the `mode` is not that of
    `'read'` or `'readwrite'`

## Examples

The following asynchronous function requests permissions if they have not been granted.

```js
// fileHandle is a FileSystemFileHandle
// withWrite is a boolean set to true if write

async function verifyPermission(fileHandle, withWrite) {
  const opts = {};
  if (withWrite) {
    opts.mode = "readwrite";
  }

  // Check if we already have permission, if so, return true.
  if ((await fileHandle.queryPermission(opts)) === "granted") {
    return true;
  }

  // Request permission to the file, if the user grants permission, return true.
  if ((await fileHandle.requestPermission(opts)) === "granted") {
    return true;
  }

  // The user did not grant permission, return false.
  return false;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [File System Access API](/en-US/docs/Web/API/File_System_Access_API)
- [The File System Access API: simplifying access to local files](https://web.dev/file-system-access/)
