---
title: "FileSystemDirectoryHandle: resolve() method"
short-title: resolve()
slug: Web/API/FileSystemDirectoryHandle/resolve
page-type: web-api-instance-method
browser-compat: api.FileSystemDirectoryHandle.resolve
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers}}

The **`resolve()`** method of the
{{domxref("FileSystemDirectoryHandle")}} interface returns an {{jsxref('Array')}} of
directory names from the parent handle to the specified child entry, with the name of
the child entry as the last array item.

## Syntax

```js-nolint
resolve(possibleDescendant)
```

### Parameters

- `possibleDescendant`
  - : The {{domxref('FileSystemHandle')}} from which to return the relative path.

### Return value

A {{jsxref('Promise')}} which resolves with an {{jsxref('Array')}} of
strings, or `null` if `possibleDescendant` is not a descendant of this {{domxref('FileSystemDirectoryHandle')}}.

### Exceptions

No exceptions are thrown.

## Examples

The following asynchronous function uses `resolve()` to find the path to a
chosen file, relative to a specified directory handle.

```js
async function returnPathDirectories(directoryHandle) {
  // Get a file handle by showing a file picker:
  const [handle] = await self.showOpenFilePicker();
  if (!handle) {
    // User cancelled, or otherwise failed to open a file.
    return;
  }

  // Check if handle exists inside our directory handle
  const relativePaths = await directoryHandle.resolve(handle);

  if (relativePaths === null) {
    // Not inside directory handle
  } else {
    // relativePath is an array of names, giving the relative path
    for (const name of relativePaths) {
      // log each entry
      console.log(name);
    }
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [File System API](/en-US/docs/Web/API/File_System_API)
- [The File System Access API: simplifying access to local files](https://developer.chrome.com/docs/capabilities/web-apis/file-system-access)
