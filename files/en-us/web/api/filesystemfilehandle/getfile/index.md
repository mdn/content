---
title: FileSystemFileHandle.getFile()
slug: Web/API/FileSystemFileHandle/getFile
tags:
  - Directory
  - File
  - File System Access API
  - FileSystemFileHandle
  - Method
  - getFile
  - working with files
browser-compat: api.FileSystemFileHandle.getFile
---
{{draft}}{{securecontext_header}}{{DefaultAPISidebar("File System Access API")}}

The **`getFile()`** method of the
{{domxref("FileSystemFileHandle")}} interface returns a {{domxref('File','file
  object')}} representing the state on disk of the entry represented by the handle.

If the file on disk changes or is removed after this method is called, the returned
{{domxref('File','file object')}} will likely be no longer readable.

## Syntax

```js
var File = FileSystemFileHandle.getFile();
```

### Parameters

None.

### Return value

A {{domxref('File','File object')}}.

### Exceptions

- NotAllowedError
  - : Thrown if the {{domxref('PermissionStatus.state')}} is not `granted` in
    read mode.

## Examples

The following asynchronous function presents a file picker and once a file is chosen,
uses the `getFile()` method to retrieve the contents.

```js
async function getTheFile() {
  // open file picker
  [fileHandle] = await window.showOpenFilePicker(pickerOpts);

  // get file contents
  const fileData = await fileHandle.getFile();
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
