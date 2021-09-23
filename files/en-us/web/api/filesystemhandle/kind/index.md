---
title: FileSystemHandle.kind
slug: Web/API/FileSystemHandle/kind
tags:
  - Directory
  - File
  - File System Access API
  - FileSystemHandle
  - Property
  - Read-only
  - handle
browser-compat: api.FileSystemHandle.kind
---
{{draft}}{{securecontext_header}}{{DefaultAPISidebar("File System Access API")}}

The **`kind`** read-only property of the
{{domxref("FileSystemHandle")}} interface returns the type of entry. This is
`'file'` if the associated entry is a file or `'directory'`. It is
used to distinguish files from directories when iterating over the contents of a
directory.

## Syntax

```js
var FileSystemHandleKind = FileSystemHandle.kind;
```

### Value

- _FileSystemHandleKind_

  - : Can be either:

    - `'file'`: If handle is a {{domxref('FileSystemFileHandle')}}.
    - `'directory'`: If handle is a
      {{domxref('FileSystemDirectoryHandle')}}.

## Examples

The following function allows the user to choose a file from the file picker and then
tests to see whether the handle returned is a file or directory

```js
// store a reference to our file handle
let fileHandle;

async function getFile() {
  // open file picker
  [fileHandle] = await window.showOpenFilePicker();

  if (fileHandle.kind === 'file') {
    // run file code
  } else if (fileHandle.kind === 'directory')
    // run directory code
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
