---
title: "FileSystemEntry: moveTo() method"
short-title: moveTo()
slug: Web/API/FileSystemEntry/moveTo
page-type: web-api-instance-method
status:
  - deprecated
  - non-standard
browser-compat: api.FileSystemEntry.moveTo
---

{{APIRef("File and Directory Entries API")}}{{Deprecated_Header}}{{Non-standard_Header}}

The {{domxref("FileSystemEntry")}} interface's method
**`moveTo()`** moves the file
specified by the entry to a new location on the file system, or renames the file if
the destination directory is the same as the source.

There are some typical
restrictions on what you can do:

- A directory can't be moved into itself.
- An entry can't be moved into its parent directory unless you specify a new name.
  Specifying a new name lets `moveTo()` double as a rename operation.
- When moving a directory, the move is always recursive; you can't leave out
  subfolders.
- You can't move a file such that it replaces an existing directory, and you can't
  move a directory such that it replaces an existing file. However, a file can replace a
  file and a directory can replace a directory.
- You can only overwrite a directory if it's empty.

## Syntax

```js-nolint
moveTo(newParent, newName)
moveTo(newParent, newName, successCallback)
moveTo(newParent, newName, successCallback, errorCallback)
```

### Parameters

- `newParent`
  - : A {{domxref("FileSystemDirectoryEntry")}} object specifying the destination
    directory for the move operation.
- `newName` {{optional_inline}}
  - : If this parameter is provided, the entry is renamed to have this string as its new
    file or directory name.
- `successCallback` {{optional_inline}}
  - : A function which is called when the move operation is successfully completed.
    Receives a single input parameter: a {{domxref("FileSystemEntry")}} based object
    providing the moved item's new details.
- `errorCallback` {{optional_inline}}
  - : An optional callback which is executed if an error occurs while moving the items.
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
directory when it exceeds a megabyte in size.

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
- {{domxref("FileSystemEntry.copyTo()")}}
