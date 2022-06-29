---
title: FileSystemDirectoryHandle.getFileHandle()
slug: Web/API/FileSystemDirectoryHandle/getFileHandle
page-type: web-api-instance-method
tags:
  - Directory
  - File
  - File System Access API
  - FileSystemDirectoryHandle
  - Method
browser-compat: api.FileSystemDirectoryHandle.getFileHandle
---
{{securecontext_header}}{{DefaultAPISidebar("File System Access API")}}

The **`getFileHandle()`** method of the
{{domxref("FileSystemDirectoryHandle")}} interface returns a
{{domxref('FileSystemFileHandle')}} for a file with the specified name, within the
directory the method is called.

## Syntax

```js
getFileHandle(name)
getFileHandle(name, options)
```

### Parameters

- `name`
  - : A string representing the {{domxref('FileSystemHandle.name')}} of
    the file you wish to retrieve.
- `options` {{optional_inline}}

  - : An object with the following properties:

    - `create`
      - : A {{jsxref('Boolean')}}. Default `false`. When
        set to `true` if the file is not found, one with the specified name
        will be created and returned.

### Return value

A {{jsxref('Promise')}} which resolves with a {{domxref('FileSystemFileHandle')}}.

### Exceptions

- `NotAllowedError` {{domxref("DOMException")}}
  - : Thrown if {{domxref('PermissionStatus')}} is not 'granted'.
- {{jsxref("TypeError")}}
  - : Thrown if the name specified is not a valid string or contains characters that would
    interfere with the native file system
- `TypeMismatchError` {{domxref("DOMException")}}
  - : Thrown if the named entry is a directory and not a file.
- `NotFoundError` {{domxref("DOMException")}}
  - : Thrown if file doesn't exist and the `create` option is set to
    `false`.

## Examples

The following example returns a file handle with the specified name, if the file does
not exist it is created.

```js
const fileName = 'fileToGetName';

// assuming we have a directory handle: 'currentDirHandle'
const fileHandle = currentDirHandle.getFileHandle(fileName, {create: true});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [File System Access API](/en-US/docs/Web/API/File_System_Access_API)
- [The File System Access API: simplifying access to local files](https://web.dev/file-system-access/)
