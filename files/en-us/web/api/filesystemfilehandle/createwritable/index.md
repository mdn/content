---
title: "FileSystemFileHandle: createWritable() method"
short-title: createWritable()
slug: Web/API/FileSystemFileHandle/createWritable
page-type: web-api-instance-method
browser-compat: api.FileSystemFileHandle.createWritable
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers}}

The **`createWritable()`** method of the {{domxref("FileSystemFileHandle")}} interface creates a {{domxref('FileSystemWritableFileStream')}} that can be used to write to a file.
The method returns a {{jsxref('Promise')}} which resolves to this created stream.

Any changes made through the stream won't be reflected in the file represented by the file handle until the stream has been closed.
This is typically implemented by writing data to a temporary file, and only replacing the file represented by file handle with the temporary file when the writable filestream is closed.

## Syntax

```js-nolint
createWritable()
createWritable(options)
```

### Parameters

- `options` {{optional_inline}}

  - : An object with the following properties:

    - `keepExistingData` {{optional_inline}}
      - : A {{jsxref('Boolean')}}. Default `false`.
        When set to `true` if the file exists, the existing file is first copied to the temporary file.
        Otherwise the temporary file starts out empty.

### Return value

A {{jsxref('Promise')}} which resolves to a {{domxref('FileSystemWritableFileStream')}} object.

### Exceptions

- `NotAllowedError` {{domxref("DOMException")}}
  - : Thrown if the {{domxref('PermissionStatus.state')}} for the handle is not `'granted'` in `readwrite` mode.
- `NotFoundError` {{domxref("DOMException")}}
  - : Thrown if current entry is not found.
- `NoModificationAllowedError` {{domxref("DOMException")}}
  - : Thrown if the browser is not able to acquire a lock on the file associated with the file handle.
- `AbortError` {{domxref("DOMException")}}
  - : Thrown if implementation-defined malware scans and safe-browsing checks fails.

## Examples

The following asynchronous function writes the given contents to the file handle, and thus to disk.

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

- [File System API](/en-US/docs/Web/API/File_System_API)
- [The File System Access API: simplifying access to local files](https://developer.chrome.com/docs/capabilities/web-apis/file-system-access)
