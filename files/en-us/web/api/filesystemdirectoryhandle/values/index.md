---
title: "FileSystemDirectoryHandle: values() method"
short-title: values()
slug: Web/API/FileSystemDirectoryHandle/values
page-type: web-api-instance-method
browser-compat: api.FileSystemDirectoryHandle.values
---

{{securecontext_header}}{{APIRef("File System API")}}

The **`values()`** method of the
{{domxref("FileSystemDirectoryHandle")}} interface returns a new asynchronous iterator
for the iteration of the value of the entries within the `FileSystemDirectoryHandle`
on which this method is called. The order of iteration is uncertain.

## Syntax

```js-nolint
values()
```

### Parameters

None.

### Return value

A new asynchronous iterator provides a {{jsxref('Promise')}} which fulfills with
an object with the following properties:
  - `done`
    - : A boolean value, representing if the iteration has ended.
  - `value`
    - : A {{domxref("FileSystemHandle")}} object. The handle of the entry.
        If the iteration has ended, It would be `undefined`.

## Examples

Use the `for await...of` loop can simplify the iteration process.

```js
const dirHandle = await window.showDirectoryPicker();

for await (const value of dirHandle.values()) {
  console.log(value);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [File System API](/en-US/docs/Web/API/File_System_API)
- [The File System Access API: simplifying access to local files](https://web.dev/file-system-access/)
