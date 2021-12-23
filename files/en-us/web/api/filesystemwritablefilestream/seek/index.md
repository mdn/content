---
title: FileSystemWritableFileStream.seek()
slug: Web/API/FileSystemWritableFileStream/seek
tags:
  - File
  - File System Access API
  - FileSystemWritableFileStream
  - Method
  - stream
  - write
browser-compat: api.FileSystemWritableFileStream.seek
---
{{draft}}{{securecontext_header}}{{DefaultAPISidebar("File System Access API")}}

The **`seek()`** method of the
{{domxref("FileSystemWritableFileStream")}} interface updates the current file cursor
offset to the position (in bytes) specified when calling the method.

## Syntax

```js
FileSystemWritableStream.seek(position).then(...);
```

### Parameters

- `position`
  - : An unsigned long describing the byte position from the top (beginning) of the file.

### Return value

{{jsxref('Promise')}} which returns undefined.

### Exceptions

- NotAllowedError
  - : If the {{domxref('PermissionStatus.state')}} is not 'granted'.
- TypeError
  - : If `position` is not defined or of type unsigned long.

## Examples

Todo

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [File System Access API](/en-US/docs/Web/API/File_System_Access_API)
- [The File System Access API:
  simplifying access to local files](https://web.dev/file-system-access/)
