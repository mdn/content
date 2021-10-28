---
title: FileSystemDirectoryHandle.resolve()
slug: Web/API/FileSystemDirectoryHandle/resolve
tags:
  - Directory
  - File
  - File System Access API
  - FileSystemDirectoryHandle
  - Method
browser-compat: api.FileSystemDirectoryHandle.resolve
---
{{draft}}{{securecontext_header}}{{DefaultAPISidebar("File System Access API")}}

The **`resolve()`** method of the
{{domxref("FileSystemDirectoryHandle")}} interface returns an {{jsxref('Array')}} of
directory names from the parent handle to the specified child entry, with the name of
the child entry as the last array item.

## Syntax

```js
var pathArr = FileSystemDirectoryHandle.resolve(possibleDescendant);
```

### Parameters

- possibleDescendant
  - : The {{domxref('FileSystemHandle.name')}} of the {{domxref('FileSystemHandle')}} from
    which to return the relative path.

### Return value

A {{jsxref('Promise')}} which resolves with an {{jsxref('Array')}} of
{{jsxref('USVString','strings')}}.

### Exceptions

No exceptions are thrown.

## Examples

The following asynchronous function uses `resolve()` to find the path to a
chosen file, relative to a specified directory handle.

```js
async function returnPathDirectories(directoryHandle) {

  // Get a file handle by showing a file picker:
  const handle = await self.showOpenFilePicker();
  if (!handle) {
    // User cancelled, or otherwise failed to open a file.
    return;
  }

  // Check if handle exists inside our directory handle
  const relativePaths = await directoryHandle.resolve(handle[0]);

  if (relativePaths === null) {
    // Not inside directory handle
  } else {
    // relativePath is an array of names, giving the relative path

    for (const name of relativePaths) {
      // log each entry
      console.log(name);
    }
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [File System Access API](/en-US/docs/Web/API/File_System_Access_API)
- [The File System Access API:
  simplifying access to local files](https://web.dev/file-system-access/)
