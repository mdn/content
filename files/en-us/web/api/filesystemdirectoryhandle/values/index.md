---
title: "FileSystemDirectoryHandle: values() method"
short-title: values()
slug: Web/API/FileSystemDirectoryHandle/values
page-type: web-api-instance-method
browser-compat: api.FileSystemDirectoryHandle.values
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers}}

The **`values()`** method of the
{{domxref("FileSystemDirectoryHandle")}} interface returns a new asynchronous iterator
for the iteration of the value of the entries within the `FileSystemDirectoryHandle`
on which this method is called.

## Syntax

```js-nolint
values()
```

### Parameters

None.

### Return value

A new asynchronous iterator containing the handles of each entry within the `FileSystemDirectoryHandle`.

### Exceptions

- `NotAllowedError` {{domxref("DOMException")}}
  - : Thrown if the {{domxref('PermissionStatus.state')}} for the handle is not `'granted'` in `read` mode.
- `NotFoundError` {{domxref("DOMException")}}
  - : Thrown if the current entry is not found.

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
- [The File System Access API: simplifying access to local files](https://developer.chrome.com/docs/capabilities/web-apis/file-system-access)
