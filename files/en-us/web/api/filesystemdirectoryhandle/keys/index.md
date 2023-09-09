---
title: "FileSystemDirectoryHandle: keys() method"
short-title: keys()
slug: Web/API/FileSystemDirectoryHandle/keys
page-type: web-api-instance-method
browser-compat: api.FileSystemDirectoryHandle.keys
---

{{securecontext_header}}{{APIRef("File System API")}}

The **`keys()`** method of the
{{domxref("FileSystemDirectoryHandle")}} interface returns a new asynchronous iterator
for the iteration of the key of the entries within the `FileSystemDirectoryHandle`
on which this method is called. The order of iteration is uncertain.

## Syntax

```js-nolint
FileSystemDirectoryHandle.keys()
```

### Parameters

None.

### Return value

A new asynchronous iterator provides a {{jsxref('Promise')}} which fulfills with
an object with the following properties:
  - `done`
    - : A boolean value, representing if the iteration has ended.
  - `value`
    - : A string, representing the key of an entry. If the iteration has ended, it would be `undefined`.

## Examples

Use the `for await...of` loop can simplify the iteration process.

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
