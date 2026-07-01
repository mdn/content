---
title: "FileSystemDirectoryEntry: createReader() method"
short-title: createReader()
slug: Web/API/FileSystemDirectoryEntry/createReader
page-type: web-api-instance-method
browser-compat: api.FileSystemDirectoryEntry.createReader
---

{{APIRef("File and Directory Entries API")}}

The {{domxref("FileSystemDirectoryEntry")}} interface's method
**`createReader()`** returns a
{{domxref("FileSystemDirectoryReader")}} object which can be used to read the entries in
the directory.

## Syntax

```js-nolint
createReader()
```

### Parameters

None.

### Return value

A {{domxref("FileSystemDirectoryReader")}} object which can be used to read the
directory's entries.

## Examples

This example creates an async function called `readDirectory()`, which fetches all of
the entries in the specified {{domxref("FileSystemDirectoryEntry")}} and returns them in
an array.

```js
async function readDirectory(directory) {
  const dirReader = directory.createReader();
  const entries = [];

  while (true) {
    const results = await new Promise((resolve, reject) => {
      dirReader.readEntries(resolve, reject);
    });

    if (!results.length) {
      break;
    }

    for (const entry of results) {
      entries.push(entry);
    }
  }

  return entries;
}
```

This works by calling {{domxref("FileSystemDirectoryReader.readEntries", "readEntries()")}} repetitively to get all the entries in the directory, concatenating each batch to the array. When it returns an empty array, all entries have been read, and the loop ends.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [File and Directory Entries API](/en-US/docs/Web/API/File_and_Directory_Entries_API)
- {{domxref("FileSystemDirectoryReader")}}
- {{domxref("FileSystemDirectoryEntry")}}
- {{domxref("FileSystemFileEntry")}}
- {{domxref("FileSystemEntry")}}
