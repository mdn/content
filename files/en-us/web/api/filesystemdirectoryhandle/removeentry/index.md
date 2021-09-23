---
title: FileSystemDirectoryHandle.removeEntry()
slug: Web/API/FileSystemDirectoryHandle/removeEntry
tags:
  - Directory
  - File
  - File System Access API
  - FileSystemDirectoryHandle
  - Method
browser-compat: api.FileSystemDirectoryHandle.removeEntry
---
{{draft}}{{securecontext_header}}{{DefaultAPISidebar("File System Access API")}}

The **`removeEntry()`** method of the
{{domxref("FileSystemDirectoryHandle")}} interface attempts to remove an entry if the
directory handle contains a file or directory called the name specified.

## Syntax

```js
FileSystemDirectoryHandle.removeEntry(name).then...
```

### Parameters

- _name_
  - : A {{domxref('USVString')}} representing the {{domxref('FileSystemHandle.name')}} of
    the entry you wish to remove.
- _options_ {{optional_inline}}

  - : An optional object containing options, which are as follows:

    - `recursive`: A {{jsxref('Boolean')}}. Default `false`.
      When set to `true` entries will be removed recursively.

### Return value

A {{jsxref('Promise')}} which resolves with `undefined`.

### Exceptions

- `TypeError` {{domxref("DOMException")}}
  - : Thrown if the name is not a valid string or contains characters not allowed on the file
    system
- `NotAllowedError` {{domxref("DOMException")}}
  - : Thrown if {{domxref('PermissionStatus')}} is not 'granted'.
- `InvalidModificationError` {{domxref("DOMException")}}
  - : Thrown if `recursive` is set to false and the entry to be removed has children.
- `NotFoundError` {{domxref("DOMException")}}
  - : Thrown if an entry name is not found or matched

## Examples

The following example removes an entry within the directory handle.

```js
const entryName = 'entryToRemove';

// assuming we have a directory handle: 'currentDirHandle'
currentDirHandle.removeEntry(entryName).then( () => {
  // code to run if removing was successful
} );
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [File System Access API](/en-US/docs/Web/API/File_System_Access_API)
- [The File System Access API:
  simplifying access to local files](https://web.dev/file-system-access/)
