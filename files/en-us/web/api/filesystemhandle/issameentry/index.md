---
title: "FileSystemHandle: isSameEntry() method"
short-title: isSameEntry()
slug: Web/API/FileSystemHandle/isSameEntry
page-type: web-api-instance-method
browser-compat: api.FileSystemHandle.isSameEntry
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers}}

The **`isSameEntry()`** method of the
{{domxref("FileSystemHandle")}} interface compares two {{domxref("FileSystemHandle", "handles")}} to see if the associated entries (either a file or directory) match.

## Syntax

```js-nolint
isSameEntry(fileSystemHandle)
```

### Parameters

- {{domxref("FileSystemHandle")}}
  - : The `FileSystemHandle` to match against the handle on which the method is
    invoked.

### Return value

A Promise that fulfills with a {{jsxref('Boolean')}}.

## Examples

The following function compares a single entry with an array of entries, and returns a
{{jsxref("Promise")}} that fulfils with a new array with any matching entries removed.

```js
async function removeMatches(fileEntry, entriesArr) {
  const newArr = [];
  for (const entry of entriesArr) {
    if (!(await fileEntry.isSameEntry(entry))) {
      newArr.push(entry);
    }
  }
  return newArr;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [File System API](/en-US/docs/Web/API/File_System_API)
- [The File System Access API: simplifying access to local files](https://developer.chrome.com/docs/capabilities/web-apis/file-system-access)
