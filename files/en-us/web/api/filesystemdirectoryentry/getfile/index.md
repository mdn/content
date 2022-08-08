---
title: FileSystemDirectoryEntry.getFile()
slug: Web/API/FileSystemDirectoryEntry/getFile
page-type: web-api-instance-method
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
getFile()
getFile(path)
getFile(path, options)
getFile(path, options, successCallback)
getFile(path, options, successCallback, errorCallback)
```

### Parameters

- `path` {{optional_inline}}
  - : A string specifying the path, relative to the directory on which
    the method is called, describing which file's entry to return.
- `options` {{optional_inline}}
  - : An object which allows you
    to specify whether or not to create the entry if it's missing and if it's an error if
    the file already exists. These options are currently not useful in Web contexts.
    See the [options parameter](#options_parameter) section for more details.
- `successCallback` {{optional_inline}}
  - : A method to be called once the {{domxref("FileSystemFileEntry")}} has been created.
    The method receives a single parameter: the `FileSystemFileEntry` object
    representing the file in question.
- `errorCallback` {{optional_inline}}
  - : A method to be called if an error occurs. Receives as its sole input parameter a
    {{domxref("DOMException")}} object describing the error which occurred.

#### `options` parameter

The `options` parameter object accepts the following parameters:

- `create` {{optional_inline}}
  - : If this property is `true`, and the requested file doesn't exist, the user agent should create it.
    The default is `false`.
    The parent directory must already exist.
- `exclusive` {{optional_inline}}
  - : If `true`, and the `create` option is also `true`, the file must not exist prior to issuing the call.
    Instead, it must be possible for it to be created newly at call time.
    The default is `false`. This parameter is ignored if `create` is `false`.

The table below describes the result of each possible combination of these flags depending on whether or not the target file path already exists.

| `create` option | `exclusive` option | Path condition | Result |
| --- | --- | --- | --- |
| `false` | _Ignored_ | Path exists and is a file | The `successCallback` is called with a {{domxref("FileSystemFileEntry")}}.
| `false` | _Ignored_ | Path exists but is a directory | The `errorCallback` is called with an appropriate error code (if the callback was provided).
| `true` | `false` | Path exists | The existing file is removed and replaced with a new one, then the `successCallback` is called with a {{domxref("FileSystemFileEntry")}}.
| `true` | `false` | Path doesn't exist | The file is created, then a {{domxref("FileSystemFileEntry")}} is passed to the `successCallback`.
| `true` | `true` | Path exists | The `errorCallback` is called with an appropriate error, such as `FileError.PATH_EXISTS_ERR`.
| `true` | `true` | Path doesn't exist | The file is created, then a {{domxref("FileSystemFileEntry")}} is passed to the `successCallback`.

### Return value

None ({{jsxref("undefined")}}).

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

## Examples

In this example, a function is presented whose job it is to locate within a user's app
data directory a JSON file containing a user dictionary for a specified language, then
load that dictionary.

```js
let dictionary = null;

function loadDictionaryForLanguage(appDataDirEntry, lang) {
  dictionary = null;

  appDataDirEntry.getDirectory("Dictionaries", {}, (dirEntry) => {
    dirEntry.getFile(`${lang}-dict.json`, {}, (fileEntry) => {
      fileEntry.file((dictFile) => {
        let reader = new FileReader();

        reader.addEventListener("loadend", () => {
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
{{domxref("FileReader/loadend_event", "loadend")}} event being fired), the loaded text is passed into
{{jsxref("JSON.parse()")}} to be reconstituted into a JavaScript object.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [File and Directory Entries API](/en-US/docs/Web/API/File_and_Directory_Entries_API)
- [Introduction to the File and Directory Entries API](/en-US/docs/Web/API/File_and_Directory_Entries_API/Introduction)
- {{domxref("FileSystemFileEntry")}}
