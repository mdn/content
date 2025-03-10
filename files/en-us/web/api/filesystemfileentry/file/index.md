---
title: "FileSystemFileEntry: file() method"
short-title: file()
slug: Web/API/FileSystemFileEntry/file
page-type: web-api-instance-method
browser-compat: api.FileSystemFileEntry.file
---

{{APIRef("File and Directory Entries API")}}

The {{domxref("FileSystemFileEntry")}} interface's method
**`file()`** returns a
{{domxref("File")}} object which can be used to read data from the file represented by
the directory entry.

## Syntax

```js-nolint
file(successCallback)
file(successCallback, errorCallback)
```

### Parameters

- `successCallback`
  - : A callback function which is called when the {{domxref("File")}} has been created
    successfully; the `File` is passed into the callback as the only parameter.
- `errorCallback` {{optional_inline}}
  - : If provided, this must be a method which is called when an error occurs while trying
    to create the {{domxref("File")}}. This callback receives as input a
    {{domxref("DOMException")}} object describing the error.

### Return value

None ({{jsxref("undefined")}}).

## Examples

This example establishes a method, `readFile()`, reads a text file and calls
a specified callback function with the received text (in a string)
once the read is completed. If an error occurs, a specified (optional) error callback is
called.

```js
function readFile(entry, successCallback, errorCallback) {
  entry.file((file) => {
    let reader = new FileReader();

    reader.onload = () => {
      successCallback(reader.result);
    };

    reader.onerror = () => {
      errorCallback(reader.error);
    };

    reader.readAsText(file);
  }, errorCallback);
}
```

This function calls `file()`, specifying as its success callback a method
which proceeds to use a {{domxref("FileReader")}} to read the file as text. The
FileReader's {{domxref("FileReader/load_event", "load")}} event handler is set up to deliver the loaded string to
the `successCallback` specified when the `readFile()` method was
called; similarly, its {{domxref("FileReader/error_event", "error")}} handler is set up to call the
`errorCallback` specified.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [File and Directory Entries API](/en-US/docs/Web/API/File_and_Directory_Entries_API)
