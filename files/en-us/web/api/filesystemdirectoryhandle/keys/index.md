---
title: "FileSystemDirectoryHandle: keys() method"
short-title: keys()
slug: Web/API/FileSystemDirectoryHandle/keys
page-type: web-api-instance-method
browser-compat: api.FileSystemDirectoryHandle.keys
---

{{securecontext_header}}{{APIRef("File System API")}}

The **`keys()`** method of the
{{domxref("FileSystemDirectoryHandle")}} interface returns a new _array iterator_
containing the keys for each item in `FileSystemDirectoryHandle`.

## Syntax

```js-nolint
FileSystemDirectoryHandle.keys()
```

### Parameters

None.

### Return value

A new {{jsxref('Array')}}

## Examples

```js
const dirHandle = await window.showDirectoryPicker();

for await (const key of dirHandle.keys()) {
  console.log(key);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [File System API](/en-US/docs/Web/API/File_System_API)
- [The File System Access API: simplifying access to local files](https://web.dev/file-system-access/)
