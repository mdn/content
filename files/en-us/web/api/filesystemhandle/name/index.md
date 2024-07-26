---
title: "FileSystemHandle: name property"
short-title: name
slug: Web/API/FileSystemHandle/name
page-type: web-api-instance-property
browser-compat: api.FileSystemHandle.name
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers}}

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

- [File System API](/en-US/docs/Web/API/File_System_API)
- [The File System Access API: simplifying access to local files](https://developer.chrome.com/docs/capabilities/web-apis/file-system-access)
