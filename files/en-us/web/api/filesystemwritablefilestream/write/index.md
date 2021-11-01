---
title: FileSystemWritableFileStream.write()
slug: Web/API/FileSystemWritableFileStream/write
tags:
  - File
  - File System Access API
  - FileSystemWritableFileStream
  - Method
  - stream
  - working with files
  - write
browser-compat: api.FileSystemWritableFileStream.write
---
{{draft}}{{securecontext_header}}{{DefaultAPISidebar("File System Access API")}}

The **`write()`** method of the
{{domxref("FileSystemWritableFileStream")}} interface writes content into the file the
method is called on, at the current file cursor offset.

No changes are written to the actual file on disk until the stream has been closed.
Changes are typically written to a temporary file instead. This method can also be used
to seek to a byte point within the stream and truncate to modify the total bytes the
file contains.

## Syntax

```js
FileSystemWritableFileStream.write(data).then(...);
```

### Parameters

- `data`

  - : Can be either the file data to write, in the form of a {{domxref('BufferSource')}},
    {{domxref('Blob')}} or {{domxref('USVString')}}. Or an object containing the following
    properties:

    - **`type`**: One of `'write'`,
      `'seek'` or `'truncate'`. This is required if the object is
      passed into the `write()` method.
    - **`data`**: The file data to write. Can be a
      {{domxref('BufferSource')}}, {{domxref('Blob')}} or {{domxref('USVString')}}. This
      is required if the `type` is set to `'write'`.
    - **`position`**: The byte position the current file
      cursor should move to if type `'seek'` is used. Can also be set with
      `'write'` in which case the write will start at the position.
    - **`size`**: An unsigned long value representing the
      amount of bytes the stream should contain. This is required if the
      `type` is set to `'truncate'`

### Return value

{{jsxref('Promise')}} which returns undefined

### Exceptions

- `NotAllowedError` {{domxref("DOMException")}}
  - : Returned if {{domxref('PermissionStatus')}} is not granted.
- `TypeError` {{domxref("DOMException")}}
  - : Returned if data is undefined, or if `position` or `size` aren't valid.
- `InvalidStateError` {{domxref("DOMException")}}
  - : Returned if the `position` is set and larger than the bytes available.

## Examples

This asynchronous function opens the 'Save File' picker, which returns a
{{domxref('FileSystemFileHandle')}} once a file is selected. From which a writable
stream is then created using the {{domxref('FileSystemFileHandle.createWritable()')}}
method.

A user defined {{domxref('Blob')}} is then written to the stream which is subsequently
closed.

```js
async function saveFile() {

  // create a new handle
  const newHandle = await window.showSaveFilePicker();

  // create a FileSystemWritableFileStream to write to
  const writableStream = await newHandle.createWritable();

  // write our file
  await writableStream.write(imgBlob);

  // close the file and write the contents to disk.
  await writableStream.close();
}
```

The following show different examples of options that can be passed into the
`write()` method.

```js
// just pass in the data (no options)
writableStream.write(data)

// writes the data to the stream from the determined position
writableStream.write({ type: "write", position: position, data: data })

// updates the current file cursor offset to the position specified
writableStream.write({ type: "seek", position: position })

// resizes the file to be size bytes long
writableStream.write({ type: "truncate", size: size })
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [File System Access API](/en-US/docs/Web/API/File_System_Access_API)
- [The File System Access API:
  simplifying access to local files](https://web.dev/file-system-access/)
