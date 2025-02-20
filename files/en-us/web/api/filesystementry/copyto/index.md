---
title: "FileSystemEntry: copyTo() method"
short-title: copyTo()
slug: Web/API/FileSystemEntry/copyTo
page-type: web-api-instance-method
status:
  - deprecated
  - non-standard
browser-compat: api.FileSystemEntry.copyTo
---

{{APIRef("File and Directory Entries API")}}{{Deprecated_Header}}{{Non-standard_Header}}

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

```js-nolint
copyTo(newParent)
copyTo(newParent, newName)
copyTo(newParent, newName, successCallback)
copyTo(newParent, newName, successCallback, errorCallback)
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

None ({{jsxref("undefined")}}).

### Exceptions

- `FileError.INVALID_MODIFICATION_ERR`
  - : The requested operation involves an impossible change, such as moving a directory
    inside itself or one of its own child directories, or copying an item within the same
    directory without renaming it.
- `FileError.QUOTA_EXCEEDED_ERR`
  - : The operation exceeded the user's storage quota, or there isn't enough storage space
    left to complete the operation.

## Examples

This example shows how a temporary log file might be moved into a more permanent "log"
directory.

```js
workingDirectory.getFile(
  "tmp/log.txt",
  {},
  (fileEntry) => {
    workingDirectory.getDirectory(
      "log",
      {},
      (dirEntry) => {
        fileEntry.copyTo(dirEntry);
      },
      handleError,
    );
  },
  handleError,
);
```

## Browser compatibility

{{Compat}}

## See also

- [File and Directory Entries API](/en-US/docs/Web/API/File_and_Directory_Entries_API)
