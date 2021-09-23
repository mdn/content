---
title: FileSystemWritableFileStream
slug: Web/API/FileSystemWritableFileStream
tags:
  - File
  - File System Access API
  - FileSystemWritableFileStream
  - Interface
  - stream
  - write file
browser-compat: api.FileSystemWritableFileStream
---
{{draft}}{{securecontext_header}}{{DefaultAPISidebar("File System Access API")}}

The **`FileSystemWritableFileStream`** interface of the {{domxref('File System Access API')}} is a {{domxref('WritableStream')}} object with additional convenience methods, which operates on a single file on disk. The interface is accessed through the {{domxref('FileSystemFileHandle.createWritable()')}} method.

## Properties

_Inherits properties from its parent, {{DOMxRef("WritableStream")}}._

## Methods

_Inherits methods from its parent, {{DOMxRef("WritableStream")}}._

- {{domxref('FileSystemWritableFileStream.write')}}
  - : Writes content into the file the method is called on, at the current file cursor offset.
- {{domxref('FileSystemWritableFileStream.seek')}}
  - : Updates the current file cursor offset to the position (in bytes) specified.
- {{domxref('FileSystemWritableFileStream.truncate')}}
  - : Resizes the file associated with the stream to be the specified size in bytes.

## Examples

This asynchronous function opens the 'Save File' picker, which returns a {{domxref('FileSystemFileHandle')}} once a file is selected. From which a writable stream is then created using the {{domxref('FileSystemFileHandle.createWritable()')}} method.

A user defined {{domxref('Blob')}} is then written to the stream which is subsequently closed.

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

The following show different examples of options that can be passed into the `write()` method.

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
- [The File System Access API: simplifying access to local files](https://web.dev/file-system-access/)
