---
title: "FileSystemEntry: remove() method"
short-title: remove()
slug: Web/API/FileSystemEntry/remove
page-type: web-api-instance-method
status:
  - deprecated
  - non-standard
browser-compat: api.FileSystemEntry.remove
---

{{APIRef("File and Directory Entries API")}}{{Deprecated_Header}}{{Non-standard_Header}}

The {{domxref("FileSystemEntry")}} interface's method
**`remove()`** deletes the file
or directory from the file system. Directories must be empty before they can be
removed.

To recursively remove a directory as well as all of its contents and its
subdirectories, call {{domxref("FileSystemDirectoryEntry.removeRecursively()")}}
instead.

## Syntax

```js-nolint
remove(successCallback)
remove(successCallback, errorCallback)
```

### Parameters

- `successCallback`
  - : A function which is called once the file has been successfully removed.
- `errorCallback` {{optional_inline}}
  - : An optional callback which is called if the attempt to remove the file fails.

### Return value

None ({{jsxref("undefined")}}).

### Errors

- `FileError.INVALID_MODIFICATION_ERR`
  - : The specified entry was the file system's root directory, or the specified entry is
    a directory which isn't empty.
- `FileError.INVALID_STATE_ERR`
  - : The file system's cached state is inconsistent with its state on disk, so the file
    could not be deleted for safety reasons.
- `FileError.NO_MODIFICATION_ALLOWED_ERR`
  - : The file system's state doesn't permit removing the file or directory.
- `FileError.NOT_FOUND_ERR`
  - : The file or directory doesn't exist.
- `FileError.SECURITY_ERR`
  - : The entry couldn't be removed due to permissions or other access constraints, or
    because there are too many calls being made on file resources.

## Examples

This example deletes a temporary work file.

```js
workingDirectory.getFile(
  "tmp/workfile.json",
  {},
  (fileEntry) => {
    fileEntry.remove(() => {
      /* the file was removed successfully */
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
- {{domxref("FileSystemDirectoryEntry.removeRecursively()")}}
