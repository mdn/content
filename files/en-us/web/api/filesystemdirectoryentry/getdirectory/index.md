---
title: FileSystemDirectoryEntry.getDirectory()
slug: Web/API/FileSystemDirectoryEntry/getDirectory
tags:
  - API
  - File and Directory Entries API
  - FileSystemDirectoryEntry
  - Files
  - Method
  - Reference
  - getDirectory
browser-compat: api.FileSystemDirectoryEntry.getDirectory
---
{{APIRef("File and Directory Entries API")}}

The {{domxref("FileSystemDirectoryEntry")}} interface's method
**`getDirectory()`** returns a
{{domxref("FileSystemDirectoryEntry")}} object corresponding to a directory contained
somewhere within the directory subtree rooted at the directory on which it's called.

## Syntax

```js
FileSystemDirectoryEntry.getDirectory([path][, options][, successCallback][, errorCallback]);
```

### Parameters

- `path` {{optional_inline}}
  - : A {{domxref("USVString")}} representing an absolute path or a path relative to the
    directory on which the method is called, describing which directory entry to return.
    Absolute paths may not be able to be used, for security reasons.
- `options` {{optional_inline}}
  - : An object based on the {{domxref("FileSystemFlags")}} dictionary, which allows you
    to specify whether or not to create the entry if it's missing and if it's an error if
    the file already exists. These options are currently not useful in Web contexts.
- `successCallback` {{optional_inline}}
  - : A method to be called once the {{domxref("FileSystemDirectoryEntry")}} has been
    created. The method receives a single parameter: the
    `FileSystemDirectoryEntry` object representing the directory in question.
- `errorCallback` {{optional_inline}}
  - : A method to be called if an error occurs. Receives as its sole input parameter a
    {{domxref("DomException")}} object describing the error which occurred.

### Return value

{{jsxref("undefined")}}.

### Errors

If an error occurs and an `errorCallback` was specified, it gets called with
a single parameter: a {{domxref("DOMException")}} object describing the error. The
name of the {{domxref("DOMException")}} indicates what type of error occurred, as follows:

- `NotFoundError`
  - : The `create` option was not specified (or was specified as
    `false`), and the directory doesn't exist.
- `SecurityError`
  - : The request to access the directory was denied for security reasons.
- `TypeMismatchError`
  - : The path specified is not a directory; it's probably a file, but might be an
    unsupported file descriptor such as a pipe; this depends on the user agent to some
    extent.

## FileSystemFlags

The `options` parameter is an object which is based on the
{{domxref("FileSystemFlags")}} dictionary; it provides flags which make it possible to
adjust the behavior of the `getDirectory()` method.

{{page("/en-US/docs/Web/API/FileSystemFlags", "Properties")}}

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
- {{domxref("FileSystemDirectoryEntry")}}
