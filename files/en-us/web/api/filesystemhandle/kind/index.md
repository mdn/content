---
title: "FileSystemHandle: kind property"
short-title: kind
slug: Web/API/FileSystemHandle/kind
page-type: web-api-instance-property
browser-compat: api.FileSystemHandle.kind
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers}}

The **`kind`** read-only property of the
{{domxref("FileSystemHandle")}} interface returns the type of entry. This is
`'file'` if the associated entry is a file or `'directory'`. It is
used to distinguish files from directories when iterating over the contents of a
directory.

## Value

A string that can be:

- `'file'`: If the handle is a {{domxref('FileSystemFileHandle')}}.
- `'directory'`: If the handle is a {{domxref('FileSystemDirectoryHandle')}}.

## Examples

The following function allows the user to choose a file from the file picker and then
tests to see whether the handle returned is a file or directory

```js
// store a reference to our file handle
let fileHandle;

async function getFile() {
  // open file picker
  [fileHandle] = await window.showOpenFilePicker();

  if (fileHandle.kind === "file") {
    // run file code
  } else if (fileHandle.kind === "directory") {
    // run directory code
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [File System API](/en-US/docs/Web/API/File_System_API)
- [The File System Access API: simplifying access to local files](https://developer.chrome.com/docs/capabilities/web-apis/file-system-access)
