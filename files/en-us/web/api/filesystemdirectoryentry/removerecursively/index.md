---
title: "FileSystemDirectoryEntry: removeRecursively() method"
short-title: removeRecursively()
slug: Web/API/FileSystemDirectoryEntry/removeRecursively
page-type: web-api-instance-method
status:
  - deprecated
  - non-standard
browser-compat: api.FileSystemDirectoryEntry.removeRecursively
---

{{APIRef("File and Directory Entries API")}}{{Deprecated_Header}}{{Non-standard_Header}}

The {{domxref("FileSystemDirectoryEntry")}} interface's method
**`removeRecursively()`** removes
the directory as well as all of its content, hierarchically iterating over its entire
subtree of descendant files and directories.

To remove a single file, or an empty directory, you can also use
{{domxref("FileSystemEntry.remove()")}}.

## Syntax

```js-nolint
removeRecursively(successCallback)
removeRecursively(successCallback, errorCallback)
```

### Parameters

- `successCallback`
  - : A function to call once the directory removal process has completed. The callback
    has no parameters.
- `errorCallback` {{optional_inline}}
  - : A function to be called if an error occurs while attempting to remove the directory
    subtree. Receives a {{domxref("FileError")}} describing the error which occurred as
    input.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

If an error occurs and an `errorCallback` was specified, it gets called with
a single parameter: a {{domxref("FileError")}} object describing the error. The
{{domxref("FileError.code")}} specifies what type of error occurred, as follows:

- `FileError.INVALID_MODIFICATION_ERR`
  - : An attempt was made to remove the root directory; this is not permitted.
- `FileError.NO_MODIFICATION_ALLOWED_ERR`
  - : The file system's state doesn't permit modification.
- `FileError.NOT_FOUND_ERR`
  - : The directory represented by the {{domxref("FileSystemDirectoryEntry")}} no longer
    exists.
- `FileError.NOT_READABLE_ERR`
  - : The directory is not accessible; perhaps it's in use by another application or is
    locked at the operating system level.
- `FileError.SECURITY_ERR`

  - : The directory could not be removed for security reasons. Possible reasons include:

    - The directory and/or its contents may not be safe to access from a Web
      application.
    - Too many file system calls are being made.
    - Other security concerns as raised by the user agent or the operating system.

> [!NOTE]
> If you try to delete a directory which contains one or more files that can't be
> removed, or if an error occurs while deletion of a number of files is underway, some
> files may not be deleted. You should provide an `errorCallback` to watch
> for and handle this, perhaps by trying again.

## Examples

```js
directory.removeRecursively(
  () => {
    /* The directory was removed successfully */
  },
  () => {
    /* an error occurred while removing the directory */
  },
);
```

## Browser compatibility

{{Compat}}

## See also

- [File and Directory Entries API](/en-US/docs/Web/API/File_and_Directory_Entries_API)
- {{domxref("FileSystemDirectoryEntry")}}
- {{domxref("FileSystemEntry.remove()")}}
