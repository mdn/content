---
title: "FileSystemDirectoryReader: readEntries() method"
short-title: readEntries()
slug: Web/API/FileSystemDirectoryReader/readEntries
page-type: web-api-instance-method
browser-compat: api.FileSystemDirectoryReader.readEntries
---

{{APIRef("File and Directory Entries API")}}

The {{domxref("FileSystemDirectoryReader")}} interface's **`readEntries()`** method retrieves the directory entries
within the directory being read and delivers them in an array to a provided callback function.

The objects in the array are all based upon {{domxref("FileSystemEntry")}}.
Generally, they are either {{domxref("FileSystemFileEntry")}} objects, which represent standard files, or {{domxref("FileSystemDirectoryEntry")}} objects, which represent directories.

## Syntax

```js-nolint
readEntries(successCallback)
readEntries(successCallback, errorCallback)
```

### Parameters

- `successCallback`
  - : A function which is called when the directory's contents have been retrieved. The
    function receives a single input parameter: an array of file system entry objects,
    each based on {{domxref("FileSystemEntry")}}. Generally, they are either
    {{domxref("FileSystemFileEntry")}} objects, which represent standard files, or
    {{domxref("FileSystemDirectoryEntry")}} objects, which represent directories. If there
    are no files left, or you've already called `readEntries()` on this
    {{domxref("FileSystemDirectoryReader")}}, the array is empty.
- `errorCallback` {{optional_inline}}
  - : A callback function which is called if an error occurs while reading from the
    directory. It receives one input parameter: a {{domxref("DOMException")}} object
    describing the error which occurred.

### Return value

None ({{jsxref("undefined")}}).

## Examples

See [`DataTransferItem.webkitGetAsEntry()`](/en-US/docs/Web/API/DataTransferItem/webkitGetAsEntry#examples) for example code that uses this method.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

On Chrome 77, `readEntries()` will only return the first 100 `FileSystemEntry` instances. In order to obtain all of the
instances, `readEntries()` must be called multiple times.

## See also

- [File and Directory Entries API](/en-US/docs/Web/API/File_and_Directory_Entries_API)
- [Introduction to the File and Directory Entries API](/en-US/docs/Web/API/File_and_Directory_Entries_API/Introduction)
- {{domxref("FileSystemDirectoryEntry")}}
- {{domxref("FileSystem")}}
