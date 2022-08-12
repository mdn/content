---
title: FileSystemDirectoryHandle.getDirectoryHandle()
slug: Web/API/FileSystemDirectoryHandle/getDirectoryHandle
page-type: web-api-instance-method
tags:
  - Directories
  - Directory
  - File
  - File System Access API
  - FileSystemDirectoryHandle
  - Method
browser-compat: api.FileSystemDirectoryHandle.getDirectoryHandle
---
{{securecontext_header}}{{DefaultAPISidebar("File System Access API")}}

The **`getDirectoryHandle()`** method of the
{{domxref("FileSystemDirectoryHandle")}} interface returns a
{{domxref('FileSystemDirectoryHandle')}} for a subdirectory with the specified name
within the directory handle on which the method is called.

## Syntax

```js
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

    - `create`
      - : A boolean value, which defaults to `false`. When
        set to `true` if the directory is not found, one with the specified
        name will be created and returned.

### Return value

A {{jsxref('Promise')}} which resolves with a {{domxref('FileSystemDirectoryHandle')}}.

### Exceptions

- `NotAllowedError` {{domxref("DOMException")}}
  - : Thrown if {{domxref('PermissionStatus')}} is not 'granted'.
- `TypeMismatchError` {{domxref("DOMException")}}
  - : Thrown if the returned entry is a file and not a directory.
- `NotFoundError` {{domxref("DOMException")}}
  - : Thrown if directory doesn't exist and the `create` option is set to
    `false`.

## Examples

The following example returns a directory handle with the specified name, if the
directory does not exist it is created.

```js
const dirName = 'directoryToGetName';

// assuming we have a directory handle: 'currentDirHandle'
const subDir = currentDirHandle.getDirectoryHandle(dirName, {create: true});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [File System Access API](/en-US/docs/Web/API/File_System_Access_API)
- [The File System Access API: simplifying access to local files](https://web.dev/file-system-access/)
