---
title: "FileSystemWritableFileStream: truncate() method"
short-title: truncate()
slug: Web/API/FileSystemWritableFileStream/truncate
page-type: web-api-instance-method
browser-compat: api.FileSystemWritableFileStream.truncate
---

{{securecontext_header}}{{APIRef("File System API")}}

The **`truncate()`** method of the {{domxref("FileSystemWritableFileStream")}} interface resizes the file associated with the stream to the specified size in bytes.

If the size specified is larger than the current file size the file is padded with `null` bytes.

The file cursor is also updated when `truncate()` is called.
If the offset is smaller than the size, it remains unchanged.
If the offset is larger than size, the offset is set to that size.
This ensures that subsequent writes do not error.

No changes are written to the actual file on disk until the stream has been closed.
Changes are typically written to a temporary file instead.

## Syntax

```js-nolint
truncate(size)
```

### Parameters

- size
  - : A number specifying the number of bytes to resize the stream to.

### Return value

A {{jsxref('Promise')}} that returns `undefined`.

### Exceptions

- `NotAllowedError` {{domxref("DOMException")}}
  - : Returned if {{domxref('PermissionStatus.state')}} is not `granted`.
- {{jsxref("TypeError")}}
  - : Returned if `size` is not a number or not defined.

## Examples

The following asynchronous function opens the 'Save File' picker, which returns a {{domxref('FileSystemFileHandle')}} once a file is selected. From this, a writable stream is created using the {{domxref('FileSystemFileHandle.createWritable()')}} method.

Next, we write to the stream:

1. A text string is written to the stream.
2. The `truncate()` method is used to resize the file to 8 bytes.
3. A second text string is written to the start of the stream, overwriting the first write.

The stream is then closed.

```js
async function saveFile() {
  try {
    // create a new handle
    const newHandle = await window.showSaveFilePicker();

    // create a FileSystemWritableFileStream to write to
    const writableStream = await newHandle.createWritable();

    // write our file
    await writableStream.write("This is my first file content");
    await writableStream.truncate(8);
    await writableStream.write("my second file content");

    // close the file and write the contents to disk.
    await writableStream.close();
  } catch (err) {
    console.error(err.name, err.message);
  }
}
```

If you run the above function and then open the resulting file created on disk, you should see the text "This is my second file content".

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [File System API](/en-US/docs/Web/API/File_System_API)
- [The File System Access API: simplifying access to local files](https://web.dev/file-system-access/)
