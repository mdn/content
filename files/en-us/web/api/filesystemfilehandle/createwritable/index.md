---
title: FileSystemFileHandle.createWritable()
slug: Web/API/FileSystemFileHandle/createWritable
page-type: web-api-instance-method
tags:
  - Directory
  - File
  - File System Access API
  - FileSystemFileHandle
  - Method
  - stream
  - working with files
browser-compat: api.FileSystemFileHandle.createWritable
---
{{securecontext_header}}{{DefaultAPISidebar("File System Access API")}}

The **`createWritable()`** method of the
{{domxref("FileSystemFileHandle")}} interface creates
a {{domxref('FileSystemWritableFileStream')}} that can be used to write to a file.
The method returns a {{jsxref('Promise')}} which resolves to this created stream.

Any changes made through the stream won't be reflected in the file represented by the
file handle until the stream has been closed. This is typically implemented by writing
data to a temporary file, and only replacing the file represented by file handle with
the temporary file when the writable filestream is closed.

## Syntax

```js
const fileStreamPromise = FileSystemFileHandle.createWritable();
```

### Parameters

- FileSystemCreateWritableOptions

  - : An object representing options to pass into the method. Options are:

    - `keepExistingData`: If `false` or not specified, the
      temporary file starts out empty, otherwise the existing file is first copied to
      this temporary file.

### Return value

A {{jsxref('Promise')}} which resolves to a {{domxref('FileSystemWritableFileStream')}} object.

### Exceptions

- NotAllowedError
  - : Thrown if the {{domxref('PermissionStatus.state')}} for the handle is not
    `'granted'` in `readwrite` mode.

## Examples

The following asynchronous function writes the given contents to the file handle, and
thus to disk.

```js
async function writeFile(fileHandle, contents) {
  // Create a FileSystemWritableFileStream to write to.
  const writable = await fileHandle.createWritable();

  // Write the contents of the file to the stream.
  await writable.write(contents);

  // Close the file and write the contents to disk.
  await writable.close();
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [File System Access API](/en-US/docs/Web/API/File_System_Access_API)
- [The File System Access API: simplifying access to local files](https://web.dev/file-system-access/)
