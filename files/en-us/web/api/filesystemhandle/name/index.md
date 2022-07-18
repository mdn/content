---
title: FileSystemHandle.name
slug: Web/API/FileSystemHandle/name
page-type: web-api-instance-property
tags:
  - Directory
  - File
  - File System Access API
  - FileSystemHandle
  - Property
  - Read-only
browser-compat: api.FileSystemHandle.name
---
{{securecontext_header}}{{DefaultAPISidebar("File System Access API")}}

The **`name`** read-only property of the
{{domxref("FileSystemHandle")}} interface returns the name of the entry represented by
handle.

## Value

A string.

## Examples

The following function allows the user to choose a file from the file picker and
retrieve the `name` property.

```js
// store a reference to our file handle
let fileHandle;

async function getFile() {
  // open file picker
  [fileHandle] = await window.showOpenFilePicker();

  const fileName = fileHandle.name;

}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [File System Access API](/en-US/docs/Web/API/File_System_Access_API)
- [The File System Access API: simplifying access to local files](https://web.dev/file-system-access/)
