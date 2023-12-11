---
title: "FileSystemEntry: getMetadata() method"
short-title: getMetadata()
slug: Web/API/FileSystemEntry/getMetadata
page-type: web-api-instance-method
status:
  - deprecated
  - non-standard
browser-compat: api.FileSystemEntry.getMetadata
---

{{APIRef("File and Directory Entries API")}}{{Deprecated_Header}}{{Non-standard_Header}}

The {{domxref("FileSystemEntry")}} interface's method
**`getMetadata()`** obtains a
{{domxref("Metadata")}} object with information about the file system entry, such as
its modification date and time and its size.

## Syntax

```js-nolint
getMetadata(successCallback)
getMetadata(successCallback, errorCallback)
```

### Parameters

- `successCallback`
  - : A function which is called when the copy operation is successfully completed.
    Receives a single input parameter: a {{domxref("Metadata")}} object with information
    about the file.
- `errorCallback` {{optional_inline}}
  - : An optional callback which is executed if an error occurs while looking up the
    metadata. There's a single parameter: a {{domxref("FileError")}} describing what went
    wrong.

### Return value

None ({{jsxref("undefined")}}).

### Errors

- `FileError.NOT_FOUND_ERR`
  - : The {{domxref("FileSystemEntry")}} refers to an item which doesn't exist.
- `FileError.SECURITY_ERR`
  - : Security restrictions prohibit obtaining the requested metadata.

## Examples

This example checks the size of a log file in a temporary folder and, if it exceeds a
megabyte, moves it into a different directory.

```js
workingDirectory.getFile(
  "tmp/log.txt",
  {},
  (fileEntry) => {
    fileEntry.getMetadata((metadata) => {
      if (metadata.size > 1048576) {
        workingDirectory.getDirectory(
          "log",
          {},
          (dirEntry) => {
            fileEntry.moveTo(dirEntry);
          },
          handleError,
        );
      }
    });
  },
  handleError,
);
```

## Browser compatibility

{{Compat}}

## See also

- [File and Directory Entries API](/en-US/docs/Web/API/File_and_Directory_Entries_API)
- [Introduction to the File and Directory Entries API](/en-US/docs/Web/API/File_and_Directory_Entries_API/Introduction)
