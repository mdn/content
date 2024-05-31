---
title: "FileSystemDirectoryHandle: keys() method"
short-title: keys()
slug: Web/API/FileSystemDirectoryHandle/keys
page-type: web-api-instance-method
browser-compat: api.FileSystemDirectoryHandle.keys
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers}}

The **`keys()`** method of the
{{domxref("FileSystemDirectoryHandle")}} interface returns a new asynchronous iterator
for the iteration of the key of the entries within the `FileSystemDirectoryHandle`
on which this method is called.

## Syntax

```js-nolint
keys()
```

### Parameters

None.

### Return value

A new asynchronous iterator containing the keys of each entry within the `FileSystemDirectoryHandle`.

### Exceptions

- `NotAllowedError` {{domxref("DOMException")}}
  - : Thrown if the {{domxref('PermissionStatus.state')}} for the handle is not `'granted'` in `read` mode.
- `NotFoundError` {{domxref("DOMException")}}
  - : Thrown if the current entry is not found.

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
- [The File System Access API: simplifying access to local files](https://developer.chrome.com/docs/capabilities/web-apis/file-system-access)
