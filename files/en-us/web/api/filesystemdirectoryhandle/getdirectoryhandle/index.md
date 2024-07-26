---
title: "FileSystemDirectoryHandle: getDirectoryHandle() method"
short-title: getDirectoryHandle()
slug: Web/API/FileSystemDirectoryHandle/getDirectoryHandle
page-type: web-api-instance-method
browser-compat: api.FileSystemDirectoryHandle.getDirectoryHandle
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers}}

The **`getDirectoryHandle()`** method of the
{{domxref("FileSystemDirectoryHandle")}} interface returns a
{{domxref('FileSystemDirectoryHandle')}} for a subdirectory with the specified name
within the directory handle on which the method is called.

## Syntax

```js-nolint
getDirectoryHandle(name)
getDirectoryHandle(name, options)
```

### Parameters

- `name`
  - : A string representing the {{domxref('FileSystemHandle.name')}} of
    the subdirectory you wish to retrieve.
- `options` {{optional_inline}}

  - : An optional object containing options for the retrieved subdirectory. Options are as
    follows:

    - `create` {{optional_inline}}
      - : A boolean value, which defaults to `false`. When
        set to `true` if the directory is not found, one with the specified
        name will be created and returned.

### Return value

A {{jsxref('Promise')}} which resolves with a {{domxref('FileSystemDirectoryHandle')}}.

### Exceptions

- `NotAllowedError` {{domxref("DOMException")}}
  - : Thrown if the {{domxref('PermissionStatus.state')}} for the handle is not `'granted'` in `readwrite` mode if the `create` option is set to `true` or in `read` mode if the `create` option is set to `false`.
- {{jsxref("TypeError")}}
  - : Thrown if the name specified is not a valid string or contains characters that would
    interfere with the native file system.
- `TypeMismatchError` {{domxref("DOMException")}}
  - : Thrown if the returned entry is a file and not a directory.
- `NotFoundError` {{domxref("DOMException")}}
  - : Thrown if the current entry is not found or if the target directory doesn't exist and the `create` option is set to
    `false`.

## Examples

The following example returns a directory handle with the specified name, if the
directory does not exist it is created.

```js
const dirName = "directoryToGetName";

// assuming we have a directory handle: 'currentDirHandle'
const subDir = currentDirHandle.getDirectoryHandle(dirName, { create: true });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [File System API](/en-US/docs/Web/API/File_System_API)
- [The File System Access API: simplifying access to local files](https://developer.chrome.com/docs/capabilities/web-apis/file-system-access)
