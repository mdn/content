---
title: "DirectoryEntrySync: getDirectory() method"
short-title: getDirectory()
slug: Web/API/DirectoryEntrySync/getDirectory
page-type: web-api-instance-method
status:
  - deprecated
  - non-standard
browser-compat: api.DirectoryEntrySync.getDirectory
---

{{APIRef("File and Directory Entries API")}}{{Non-standard_Header}}

The **`getDirectory()`** method of the {{domxref("DirectoryEntrySync")}} interface creates or looks up a directory. The method is similar to `getFile()` with `DirectoryEntrySync` being passed.

## Syntax

```js-nolint
getDirectory(path)
getDirectory(path, options)
```

### Parameters

- `path`
  - : Either an absolute path or a relative path from the directory to the file to be looked up or created. You cannot create a file whose immediate parent does not exist. Create the parent directory first.
- `options` {{optional_inline}}
  - : An object describing the behavior of the method, with the following properties:
    - `create` {{optional_inline}}
      - : If `true`, a directory is created if the path doesn't exist and no other error occurs. If `false`, the directory is returned if it exists, or an error is thrown if it doesn't exist.
    - `exclusive` {{optional_inline}}
      - : Only used if `create` is `true`. If `true`, an error is thrown if the path already exists. If `false`, an existing directory is returned without an error.

### Return value

A {{domxref("DirectoryEntrySync")}} object representing a directory in a file system.

### Exceptions

- `EncodingError` {{domxref("DOMException")}}
  - : Thrown if the path supplied is invalid.
- `NotFoundError` {{domxref("DOMException")}}
  - : Thrown if the path was structurally correct, but refers to a resource that does not exist.
- `NoModificationAllowedError` {{domxref("DOMException")}}
  - : Thrown if the target directory or file is not writable.
- `PathExistsError` {{domxref("DOMException")}}
  - : Thrown if the file already exists. You cannot create another one with the same path.
- `QuotaExceededError` {{domxref("DOMException")}}
  - : Thrown if the operation would cause the application to exceed its storage quota.
- `SecurityError` {{domxref("DOMException")}}
  - : Thrown if the application does not have permission to access the element referred to by path.
- `TypeMismatchError` {{domxref("DOMException")}}
  - : Thrown if the path supplied exists, but it is not a directory.

## Description

If you want to create subdirectories, you have to create each child directory in sequence. If you try to create a directory using a full path that includes parent directories that do not exist yet, you get an error. So create the hierarchy by recursively adding a new path after creating the parent directory.

## Examples

### Creating a directory

The `getDirectory()` method returns a `DirectoryEntrySync`, which represents a file in the file system. The following creates a new directory called `project_dir` in the root directory.

```js
const dirEntry = fs.root.getDirectory("project_dir", { create: true });
```

## Specifications

This feature is not part of any current specification. It is no longer on track to become a standard.
Use the [File and Directory Entries API](/en-US/docs/Web/API/File_and_Directory_Entries_API) instead.

## Browser compatibility

{{Compat}}

## See also

- {{domxref("DirectoryEntrySync")}}
- [File and Directory Entries API](/en-US/docs/Web/API/File_and_Directory_Entries_API)
