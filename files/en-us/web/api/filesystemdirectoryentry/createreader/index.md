---
title: FileSystemDirectoryEntry.createReader()
slug: Web/API/FileSystemDirectoryEntry/createReader
tags:
  - API
  - File and Directory Entries API
  - FileSystemDirectoryEntry
  - Files
  - Method
  - Reference
  - createReader
browser-compat: api.FileSystemDirectoryEntry.createReader
---
{{APIRef("File and Directory Entries API")}}

The {{domxref("FileSystemDirectoryEntry")}} interface's method
**`createReader()`** returns a
{{domxref("FileSystemDirectoryReader")}} object which can be used to read the entries in
the directory.

## Syntax

```js
directoryReader = FileSystemDirectoryEntry.createReader();
```

### Parameters

None.

### Return value

A {{domxref("FileSystemDirectoryReader")}} object which can be used to read the
directory's entries.

## Example

This example creates a method called `readDirectory()`, which fetches all of
the entries in the specified {{domxref("FileSystemDirectoryEntry")}} and returns them in
an array.

```js
function readDirectory(directory) {
  let dirReader = directory.createReader();
  let entries = [];

  let getEntries = function() {
    dirReader.readEntries(function(results) {
      if (results.length) {
        entries = entries.concat(toArray(results));
        getEntries();
      }
    }, function(error) {
      /* handle error -- error is a FileError object */
    });
  };

  getEntries();
  return entries;
}
```

This works by creating an internal function, `getEntries()`, which calls
itself recursively to get all the entries in the directory, concatenating each batch to
the array. Each iteration, {{domxref("FileSystemDirectoryReader.readEntries",
  "readEntries()")}} is called to get more entries. When it returns an empty array, the
end of the directory has been reached, and the recursion ends. Once control is returned
to `readDirectory()`, the array is returned to the caller.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [File and Directory
  Entries API](/en-US/docs/Web/API/File_and_Directory_Entries_API)
- [Introduction
  to the File System API](/en-US/docs/Web/API/File_and_Directory_Entries_API/Introduction)
- {{domxref("FileSystemDirectoryReader")}}
- {{domxref("FileSystemDirectoryEntry")}}
- {{domxref("FileSystemFileEntry")}}
- {{domxref("FileSystemEntry")}}
