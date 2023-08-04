---
title: "FileSystemDirectoryHandle: removeEntry() method"
short-title: removeEntry()
slug: Web/API/FileSystemDirectoryHandle/removeEntry
page-type: web-api-instance-method
browser-compat: api.FileSystemDirectoryHandle.removeEntry
---

{{securecontext_header}}{{APIRef("File System API")}}

The **`removeEntry()`** method of the
{{domxref("FileSystemDirectoryHandle")}} interface attempts to remove an entry if the
directory handle contains a file or directory called the name specified.

## Syntax

```js-nolint
removeEntry(name)
removeEntry(name, options)
```

### Parameters

- `name`
  - : A string representing the {{domxref('FileSystemHandle.name')}} of
    the entry you wish to remove.
- `options` {{optional_inline}}

  - : An optional object containing options, which are as follows:

    - `recursive`
      - : A boolean value, which defaults to `false`. When set to `true` entries will be removed recursively.

### Return value

A {{jsxref('Promise')}} which resolves with `undefined`.

### Exceptions

- {{jsxref("TypeError")}}
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
const entryName = "entryToRemove";

// assuming we have a directory handle: 'currentDirHandle'
currentDirHandle.removeEntry(entryName).then(() => {
  // code to run if removing was successful
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [File System API](/en-US/docs/Web/API/File_System_API)
- [The File System Access API: simplifying access to local files](https://web.dev/file-system-access/)
