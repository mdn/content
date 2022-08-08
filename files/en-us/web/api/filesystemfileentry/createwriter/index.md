---
title: FileSystemFileEntry.createWriter()
slug: Web/API/FileSystemFileEntry/createWriter
page-type: web-api-instance-method
tags:
  - API
  - File and Directory Entries API
  - FileSystemFileEntry
  - Files
  - Method
  - Non-standard
  - Reference
  - createWriter
  - Deprecated
browser-compat: api.FileSystemFileEntry.createWriter
---
{{APIRef("File and Directories Entries API")}}{{deprecated_header}}{{Non-standard_header}}

The {{domxref("FileSystemFileEntry")}} interface's method
**`createWriter()`** returns a {{domxref("FileWriter")}} object
which can be used to write data into the file represented by the directory entry.

## Syntax

```js
createWriter(successCallback)
createWriter(successCallback, errorCallback)
```

### Parameters

- `successCallback`
  - : A callback function which is called when the {{domxref("FileWriter")}} has been
    created successfully; the `FileWriter` is passed into the callback as the
    only parameter.
- `errorCallback` {{optional_inline}}
  - : If provided, this must be a method which is called when an error occurs while trying
    to create the {{domxref("FileWriter")}}. This callback receives as input a
    {{domxref("FileError")}} object describing the error.

### Return value

None ({{jsxref("undefined")}}).

## Examples

This example establishes a method, `writeToFileEntry()`, which outputs a
text string to the file corresponding to the passed-in directory entry.

```js
function writeToFileEntry(entry, text) {
  entry.createWriter((fileWriter) => {
    let data = Blob([text], { type: "text/plain" });

    fileWriter.write(data);
  }, (fileError) => {
    /* do whatever to handle the error */
  });
}
```

The success callback for the `createWriter()` call takes the text which was
passed in and creates a new {{domxref("Blob")}} object of type `text/plain`
that contains the passed text. This blob is then output to the {{domxref("FileWriter")}}
object to be written to the file.

## Specifications

This feature is not part of any specification anymore. It is no longer on track to become a standard.

## Browser compatibility

{{Compat}}

## See also

- [File and Directory Entries API](/en-US/docs/Web/API/File_and_Directory_Entries_API)
- [Introduction to the File and Directory Entries API](/en-US/docs/Web/API/File_and_Directory_Entries_API/Introduction)
