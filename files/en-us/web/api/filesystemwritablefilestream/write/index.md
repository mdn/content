---
title: FileSystemWritableFileStream.write()
slug: Web/API/FileSystemWritableFileStream/write
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.FileSystemWritableFileStream.write
---

{{securecontext_header}}{{APIRef("File System Access API")}}{{SeeCompatTable}}

The **`write()`** method of the {{domxref("FileSystemWritableFileStream")}} interface writes content into the file the method is called on, at the current file cursor offset.

No changes are written to the actual file on disk until the stream has been closed.
Changes are typically written to a temporary file instead. This method can also be used to seek to a byte point within the stream and truncate to modify the total bytes the file contains.

## Syntax

```js-nolint
write(data)
```

### Parameters

- `data`

  - : Can be either the file data to write, in the form of an {{jsxref("ArrayBuffer")}}, a {{jsxref("TypedArray")}},
    a {{jsxref("DataView")}}, a {{domxref('Blob')}}, a {{jsxref("String")}} object, or a string literal.
    Or an object containing the following properties:

    - `type`
      - : A string that is one of the following: `"write"`, `"seek"`, or `"truncate"`.
    - `data`
      - : The file data to write. Can be an {{jsxref("ArrayBuffer")}}, a {{jsxref("TypedArray")}}, a {{jsxref("DataView")}},
        a {{domxref('Blob')}}, a {{jsxref("String")}} object, or a string literal.
        This property is required if `type` is set to `write`.
    - `position`
      - : The byte position the current file cursor should move to if type `seek` is used.
        Can also be set with if `type` is `write`, in which case the write will start at the position.
    - `size`
      - : An unsigned long value representing the amount of bytes the stream should contain.
        This property is required if `type` is set to `truncate`.

### Return value

{{jsxref('Promise')}} which returns undefined.

### Exceptions

- `NotAllowedError` {{domxref("DOMException")}}
  - : Returned if {{domxref('PermissionStatus')}} is not granted.
- {{jsxref("TypeError")}}
  - : Returned if data is undefined, or if `position` or `size` aren't valid.
- `InvalidStateError` {{domxref("DOMException")}}
  - : Returned if the `position` is set and larger than the bytes available.

## Examples

This asynchronous function opens the 'Save File' picker, which returns a {{domxref('FileSystemFileHandle')}} once a file is selected.
From which a writable stream is then created using the {{domxref('FileSystemFileHandle.createWritable()')}} method.

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

- [File System Access API](/en-US/docs/Web/API/File_System_Access_API)
- [The File System Access API: simplifying access to local files](https://web.dev/file-system-access/)
