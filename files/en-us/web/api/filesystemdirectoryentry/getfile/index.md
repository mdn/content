---
title: FileSystemDirectoryEntry.getFile()
slug: Web/API/FileSystemDirectoryEntry/getFile
tags:
  - API
  - File and Directory Entries API
  - FileSystemDirectoryEntry
  - Files
  - Method
  - Reference
  - getFile
browser-compat: api.FileSystemDirectoryEntry.getFile
---
{{APIRef("File and Directory Entries API")}}

The {{domxref("FileSystemDirectoryEntry")}} interface's method
**`getFile()`** returns a
{{domxref("FileSystemFileEntry")}} object corresponding to a file contained somewhere
within the directory subtree rooted at the directory on which it's called.

## Syntax

```js
FileSystemDirectoryEntry.getFile([path][, options][, successCallback][, errorCallback]);
```

### Parameters

- `path` {{optional_inline}}
  - : A {{domxref("USVString")}} specifying the path, relative to the directory on which
    the method is called, describing which file's entry to return.
- `options` {{optional_inline}}
  - : An object based on the {{domxref("FileSystemFlags")}} dictionary, which allows you
    to specify whether or not to create the entry if it's missing and if it's an error if
    the file already exists. These options are currently not useful in Web contexts.
- `successCallback` {{optional_inline}}
  - : A method to be called once the {{domxref("FileSystemFileEntry")}} has been created.
    The method receives a single parameter: the `FileSystemFileEntry` object
    representing the file in question.
- `errorCallback` {{optional_inline}}
  - : A method to be called if an error occurs. Receives as its sole input parameter a
    {{domxref("DOMException")}} object describing the error which occurred.

### Return value

None.

### Exceptions

- `NotFoundError` {{domxref("DOMException")}}
  - : Thrown if the `create` option was not specified (or was specified as
    `false`), and the file doesn't exist.
- `SecurityError` {{domxref("DOMException")}}
  - : Thrown if the request to access the file was denied for security reasons.
- `TypeMismatchError` {{domxref("DOMException")}}
  - : Thrown if the path specified is not a file; it's probably a directory, but might be an
    unsupported file descriptor such as a pipe; this depends on the user agent to some
    extent.

## Example

In this example, a function is presented whose job it is to locate within a user's app
data directory a JSON file containing a user dictionary for a specified language, then
load that dictionary.

```js
let dictionary = null;

function loadDictionaryForLanguage(appDataDirEntry, lang) {
  dictionary = null;

  appDataDirEntry.getDirectory("Dictionaries", {}, function(dirEntry) {
    dirEntry.getFile(lang + "-dict.json", {}, function(fileEntry) {
      fileEntry.file(function(dictFile) {
        let reader = new FileReader();

        reader.addEventListener("loadend", function() {
          dictionary = JSON.parse(reader.result);
        });

        reader.readAsText(dictFile);
      });
    });
  });
}
```

The `loadDictionaryForLanguage()` function starts by using
`getDirectory()` to obtain the {{domxref("FileSystemDirectoryEntry")}} object
representing a subfolder named "Dictionaries" located inside the specified app data
directory. The success callback for this takes the resulting directory entry object and
calls {{domxref("FileSystemDirectoryEntry.getFile", "getFile()")}} to get a
{{domxref("FileSystemFileEntry")}} object representing the dictionary file; the success
callback for this, in turn, creates a new {{domxref("FileReader")}} and uses it to load
the contents of the file. When that is loaded successfully (as indicated by the
{{event("loadend")}} event being fired), the loaded text is passed into
{{jsxref("JSON.parse()")}} to be reconstituted into a JavaScript object.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [File and Directory
  Entries API](/en-US/docs/Web/API/File_and_Directory_Entries_API)
- [Introduction
  to the File System API](/en-US/docs/Web/API/File_and_Directory_Entries_API/Introduction)
- {{domxref("FileSystemFileEntry")}}
