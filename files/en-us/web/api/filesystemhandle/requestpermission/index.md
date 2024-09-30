---
title: "FileSystemHandle: requestPermission() method"
short-title: requestPermission()
slug: Web/API/FileSystemHandle/requestPermission
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.FileSystemHandle.requestPermission
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers}}{{SeeCompatTable}}

The **`requestPermission()`** method of the
{{domxref("FileSystemHandle")}} interface requests read or readwrite permissions for the
file handle.

## Syntax

```js-nolint
requestPermission(descriptor)
```

### Parameters

- `descriptor` {{optional_inline}}

  - : An object which specifies the permission mode to query for. Options are as follows:

    - `'mode'` {{optional_inline}}

      - : Can be either `'read'` or `'readwrite'`.

### Return value

A {{jsxref("Promise")}} that resolves with {{domxref('PermissionStatus.state')}} which is one of `'granted'`, `'denied'` or `'prompt'`. It may also reject with one of the exceptions below.

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if no parameter is specified or the `mode` is not that of
    `'read'` or `'readwrite'`
- `SecurityError` {{domxref("DOMException")}}
  - : Thrown in one of the following cases:
    - The method was called in a context that's not [same-origin](/en-US/docs/Web/Security/Same-origin_policy) as the top-level context (i.e. a cross-origin iframe).
    - There was no transient user activation such as a button press. This includes when the handle is in a non-Window context which cannot consume user activation, such as a worker.

## Security

[Transient user activation](/en-US/docs/Web/Security/User_activation) is required. The user has to interact with the page or a UI element in order for this feature to work.

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

- [File System API](/en-US/docs/Web/API/File_System_API)
- [The File System Access API: simplifying access to local files](https://developer.chrome.com/docs/capabilities/web-apis/file-system-access)
