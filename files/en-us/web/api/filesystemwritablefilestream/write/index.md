---
title: "FileSystemWritableFileStream: write() method"
short-title: write()
slug: Web/API/FileSystemWritableFileStream/write
page-type: web-api-instance-method
browser-compat: api.FileSystemWritableFileStream.write
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers}}

The **`write()`** method of the {{domxref("FileSystemWritableFileStream")}} interface writes content into the file the method is called on, at the current file cursor offset.

No changes are written to the actual file on disk until the stream has been closed.
Changes are typically written to a temporary file instead. This method can also be used to seek to a byte point within the stream and truncate to modify the total bytes the file contains.

## Syntax

```js-nolint
write(data)
```

### Parameters

- `data`

  - : Can be one of the following:

    - The file data to write, in the form of an {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}}, {{jsxref("DataView")}}, {{domxref('Blob')}}, or string.
    - An object containing the following properties:

      - `type`
        - : A string that is one of `"write"`, `"seek"`, or `"truncate"`.
      - `data`
        - : The file data to write. Can be an {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}}, {{jsxref("DataView")}}, {{domxref('Blob')}}, or string. This property is required if `type` is set to `"write"`.
      - `position`
        - : The byte position the current file cursor should move to if type `"seek"` is used. Can also be set if `type` is `"write"`, in which case the write will start at the specified position.
      - `size`
        - : A number representing the number of bytes the stream should contain. This property is required if `type` is set to `"truncate"`.

### Return value

A {{jsxref('Promise')}} that returns `undefined`.

### Exceptions

- `NotAllowedError` {{domxref("DOMException")}}
  - : Thrown if {{domxref('PermissionStatus.state')}} is not `granted`.
- `QuotaExceededError` {{domxref("DOMException")}}
  - : Thrown if the new size of the file is larger than the original size of the file, and exceeds the browser's [storage quota](/en-US/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria).
- {{jsxref("TypeError")}}
  - : Thrown if `data` is undefined, or if `position` or `size` aren't valid.

## Examples

The following asynchronous function opens the 'Save File' picker, which returns a {{domxref('FileSystemFileHandle')}} once a file is selected. From this, a writable stream is created using the {{domxref('FileSystemFileHandle.createWritable()')}} method.

A text string is then written to the stream, which is subsequently closed.

```js
async function saveFile() {
  try {
    // create a new handle
    const newHandle = await window.showSaveFilePicker();

    // create a FileSystemWritableFileStream to write to
    const writableStream = await newHandle.createWritable();

    // write our file
    await writableStream.write("This is my file content");

    // close the file and write the contents to disk.
    await writableStream.close();
  } catch (err) {
    console.error(err.name, err.message);
  }
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
