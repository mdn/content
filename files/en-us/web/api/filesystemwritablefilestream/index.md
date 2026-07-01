---
title: FileSystemWritableFileStream
slug: Web/API/FileSystemWritableFileStream
page-type: web-api-interface
browser-compat: api.FileSystemWritableFileStream
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers}}

The **`FileSystemWritableFileStream`** interface of the {{domxref("File System API", "File System API", "", "nocode")}} is a {{domxref('WritableStream')}} object with additional convenience methods, which operates on a single file on disk. The interface is accessed through the {{domxref('FileSystemFileHandle.createWritable()')}} method.

{{InheritanceDiagram}}

## Instance properties

_Inherits properties from its parent, {{DOMxRef("WritableStream")}}._

## Instance methods

_Inherits methods from its parent, {{DOMxRef("WritableStream")}}._

- {{domxref('FileSystemWritableFileStream.write()')}}
  - : Writes content into the file the method is called on, at the current file cursor offset.
- {{domxref('FileSystemWritableFileStream.seek()')}}
  - : Updates the current file cursor offset to the position (in bytes) specified.
- {{domxref('FileSystemWritableFileStream.truncate()')}}
  - : Resizes the file associated with the stream to be the specified size in bytes.

## Examples

The following asynchronous function opens the 'Save File' picker, which returns a {{domxref('FileSystemFileHandle')}} once a file is selected. From this, a writable stream is created using the {{domxref('FileSystemFileHandle.createWritable()')}} method.

A text string is then written to the stream, which is subsequently closed.

```js
async function saveFile() {
  // create a new handle
  const newHandle = await window.showSaveFilePicker();

  // create a FileSystemWritableFileStream to write to
  const writableStream = await newHandle.createWritable();

  // write our file
  await writableStream.write("This is my file content");

  // close the file and write the contents to disk.
  await writableStream.close();
}
```

The following examples show different options that can be passed into the `write()` method.

```js
// just pass in the data (no options)
writableStream.write(data);

// writes the data to the stream from the determined position
writableStream.write({ type: "write", position, data });

// updates the current file cursor offset to the position specified
writableStream.write({ type: "seek", position });

// resizes the file to be size bytes long
writableStream.write({ type: "truncate", size });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [File System API](/en-US/docs/Web/API/File_System_API)
- [The File System Access API: simplifying access to local files](https://developer.chrome.com/docs/capabilities/web-apis/file-system-access)
