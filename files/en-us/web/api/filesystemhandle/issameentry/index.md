---
title: FileSystemHandle.isSameEntry()
slug: Web/API/FileSystemHandle/isSameEntry
tags:
  - Directory
  - File
  - File System Access API
  - FileSystemHandle
  - Method
browser-compat: api.FileSystemHandle.isSameEntry
---
{{draft}}{{securecontext_header}}{{DefaultAPISidebar("File System Access API")}}

The **`isSameEntry()`** method of the
{{domxref("FileSystemHandle")}} interface compares two {{domxref("FileSystemHandle",
  "handles")}} to see if the associated entries (either a file or directory) match.

## Syntax

```js
var Boolean = FileSystemHandle1.isSameEntry(FileSystemHandle2);
```

### Parameters

- {{domxref("FileSystemHandle")}}
  - : The `FileSystemHandle` to match against the handle on which the method is
    invoked.

### Return value

Returns a {{jsxref('Boolean')}} which is `true` is the entries match.

### Exceptions

No exceptions are thrown.

## Examples

The following function compares a single entry with an array of entries, and returns a
new array with any matching entries removed.

```js
function removeMatches(fileEntry, entriesArr) {

  let newArr = entriesArr.filter( entry => !fileEntry.isSameEntry(entry) )

  return newArr;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [File System Access API](/en-US/docs/Web/API/File_System_Access_API)
- [The File System Access API:
  simplifying access to local files](https://web.dev/file-system-access/)
