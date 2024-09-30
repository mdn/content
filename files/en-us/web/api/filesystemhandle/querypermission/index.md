---
title: "FileSystemHandle: queryPermission() method"
short-title: queryPermission()
slug: Web/API/FileSystemHandle/queryPermission
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.FileSystemHandle.queryPermission
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers}}{{SeeCompatTable}}

The **`queryPermission()`** method of the
{{domxref("FileSystemHandle")}} interface queries the current permission state of the
current handle.

## Syntax

```js-nolint
queryPermission(descriptor)
```

### Parameters

- `descriptor` {{optional_inline}}

  - : An object which specifies the permission mode to query for. Options are as follows:

    - `'mode'` {{optional_inline}}

      - : Can be either `'read'` or `'readwrite'`.

### Return value

A {{jsxref("Promise")}} that resolves with {{domxref('PermissionStatus.state')}} which is one of `'granted'`, `'denied'` or `'prompt'`. It may also reject with one of the exceptions below.

If this resolves with "prompt", the website will have to call `requestPermission()` before any
operations on the handle can be done. If this resolves with "denied" any operations will
reject. Usually handles returned by the local file system handle factories will
initially resolves with "granted" for their read permission state. However, other than through
the user revoking permission, a handle retrieved from IndexedDB is also likely to resolves with
"prompt".

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if `mode` is specified with a value other than
    `'read'` or `'readwrite'`

## Examples

The following asynchronous function returns true if user has granted read or readwrite
permissions to the file handle. Permission is requested if not.

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

- [File System API](/en-US/docs/Web/API/File_System_API)
- [The File System Access API: simplifying access to local files](https://developer.chrome.com/docs/capabilities/web-apis/file-system-access)
