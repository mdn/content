---
title: FileSystemEntry.copyTo()
slug: Web/API/FileSystemEntry/copyTo
tags:
  - API
  - File System API
  - File and Directory Entries APIs
  - FileSystemEntry
  - Files
  - Method
  - Non-standard
  - Reference
  - copyTo
  - Deprecated
browser-compat: api.FileSystemEntry.copyTo
---
{{APIRef("File System API")}}{{deprecated_header}}

The {{domxref("FileSystemEntry")}} interface's method
**`copyTo()`** copies the file
specified by the entry to a new location on the file system.

There are some
typical restrictions on what you can do:

- A directory can't be copied into itself.
- An entry can't be copied into its parent directory unless you specify a new name.
- When copying a directory, the copy is always recursive; you can't leave out
  subfolders.

## Syntax

```js
FileSystemEntry.copyTo(newParent[, newName][, successCallback][, errorCallback]);
```

### Parameters

- `newParent`
  - : A {{domxref("FileSystemDirectoryEntry")}} object specifying the destination
    directory for the copy operation.
- `newName` {{optional_inline}}
  - : If this parameter is provided, the copy is given this string as its new file or
    directory name.
- `successCallback` {{optional_inline}}
  - : A function which is called when the copy operation is successfully completed.
    Receives a single input parameter: a {{domxref("FileSystemEntry")}} based object
    providing the copied item's new details.
- `errorCallback` {{optional_inline}}
  - : An optional callback which is executed if an error occurs while copying the items.
    There's a single parameter: a {{domxref("FileError")}} describing what went wrong.

### Return value

{{jsxref("undefined")}}.

### Errors

- `FileError.INVALID_MODIFICATION_ERR`
  - : The requested operation involves an impossible change, such as moving a directory
    inside itself or one of its own child directories, or copying an item within the same
    directory without renaming it.
- `FileError.QUOTA_EXCEEDED_ERR`
  - : The operation exceeded the user's storage quota, or there isn't enough storage space
    left to complete the operation.

## Example

This example shows how a temporary log file might be moved into a more permanent "log"
directory.

```js
workingDirectory.getFile("tmp/log.txt", {}, function(fileEntry) {
  workingDirectory.getDirectory("log", {}, function(dirEntry) {
    fileEntry.copyTo(dirEntry);
  }, handleError);
}, handleError);
```

## Browser compatibility

{{Compat}}

## See also

- [File and Directory
  Entries API](/en-US/docs/Web/API/File_and_Directory_Entries_API)
- [Introduction
  to the File System API](/en-US/docs/Web/API/File_and_Directory_Entries_API/Introduction)
