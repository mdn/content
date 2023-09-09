---
title: "FileSystemDirectoryHandle: entries() method"
short-title: entries()
slug: Web/API/FileSystemDirectoryHandle/entries
page-type: web-api-instance-method
browser-compat: api.FileSystemDirectoryHandle.entries
---

{{securecontext_header}}{{APIRef("File System API")}}

The **`entries()`** method of the
{{domxref("FileSystemDirectoryHandle")}} interface returns a new asynchronous iterator
for the iteration of the key-value pairs of the entries within the `FileSystemDirectoryHandle`
on which this method is called. The order of iteration is uncertain. The key-value pairs are
in the form of an array like `[key, value]`.

## Syntax

```js-nolint
entries()
```

### Parameters

None.

### Return value

A new asynchronous iterator provides a {{jsxref('Promise')}} which fulfills with
an object with the following properties:

- `done`
  - : A boolean value, representing if the iteration has ended.
- `value`
  - : An array, representing a key-value pair of an entry.
    The first element is a string representing the key of the entry.
    The second element is the {{domxref("FileSystemHandle")}} of the entry.
    If the iteration has ended, this property would be `undefined`.

## Examples

Use the `for await...of` loop can simplify the iteration process.

```js
const dirHandle = await window.showDirectoryPicker();

for await (const [key, value] of dirHandle.entries()) {
  console.log({ key, value });
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [File System API](/en-US/docs/Web/API/File_System_API)
- [The File System Access API: simplifying access to local files](https://web.dev/file-system-access/)
