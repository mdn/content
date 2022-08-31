---
title: FileSystemWritableFileStream.truncate()
slug: Web/API/FileSystemWritableFileStream/truncate
page-type: web-api-instance-method
tags:
  - File
  - File System Access API
  - FileSystemWritableFileStream
  - Method
  - stream
  - write
  - Experimental
browser-compat: api.FileSystemWritableFileStream.truncate
---
{{securecontext_header}}{{APIRef("File System Access API")}}{{SeeCompatTable}}

The **`truncate()`** method of the
{{domxref("FileSystemWritableFileStream")}} interface resizes the file associated with
the stream to be the specified size in bytes.

If the size specified is larger than the current file size this pads the file with
`null` bytes, otherwise it truncates the file.

The file cursor is also updated when `truncate()` is called. If the offset
is smaller than the size, it remains unchanged. If the offset is larger than size, the
offset is set to that size. This ensures that subsequent writes do not error.

No changes are written to the actual file on disk until the stream has been closed.
Changes are typically written to a temporary file instead.

## Syntax

```js
FileSystemWritableFileStream.truncate().then(/* … */);
```

### Parameters

- size
  - : An `unsigned long` of the amount of bytes to resize the stream to.

### Return value

A {{jsxref('Promise')}} which returns undefined.

### Exceptions

- `NotAllowedError` {{domxref("DOMException")}}
  - : If the {{domxref('PermissionState')}} is not 'granted'.
- {{jsxref("TypeError")}}
  - : If the size is undefined or not an unsigned long.

## Examples

```js
// todo
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [File System Access API](/en-US/docs/Web/API/File_System_Access_API)
- [The File System Access API: simplifying access to local files](https://web.dev/file-system-access/)
