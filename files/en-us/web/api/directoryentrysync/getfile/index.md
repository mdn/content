---
title: "DirectoryEntrySync: getFile() method"
short-title: getFile()
slug: Web/API/DirectoryEntrySync/getFile
page-type: web-api-instance-method
status:
  - deprecated
  - non-standard
browser-compat: api.DirectoryEntrySync.getFile
---

{{APIRef("File and Directory Entries API")}}{{Non-standard_Header}}

The **`getFile()`** method of the {{domxref("DirectoryEntrySync")}} interface either creates a file or looks up an existing file, depending on how you've set the `options` parameter.

## Syntax

```js-nolint
getFile(path)
getFile(path, options)
```

### Parameters

- `path`
  - : Either an absolute path or a relative path from the directory to the file to be looked up or created. You cannot create a file whose immediate parent does not exist. Create the parent directory first.
- `options` {{optional_inline}}
  - : An object describing the behavior of the method, with the following properties:
    - `create` {{optional_inline}}
      - : If `true`, a file is created if the path doesn't exist and no other error occurs. If `false`, the file is returned if it exists, or an error is thrown if it doesn't exist.
    - `exclusive` {{optional_inline}}
      - : Only used if `create` is `true`. If `true`, an error is thrown if the path already exists. If `false`, an existing file is returned without an error.

### Return value

A {{domxref("FileEntrySync")}} object representing a file in a file system.

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
  - : Thrown if the application does not have permission to access the element referred to by path. [ todo: Explain why ]
- `TypeMismatchError` {{domxref("DOMException")}}
  - : Thrown if the path supplied exists, but it is not a directory.

## Examples

### Creating a file

The `getFile()` method returns a `FileEntrySync`, which represents a file in the file system. The following creates an empty file called `logs.txt` in the root directory.

```js
const fileEntry = fs.root.getFile("logs.txt", { create: true });
```

## Specifications

This feature is not part of any current specification. It is no longer on track to become a standard.
Use the [File and Directory Entries API](/en-US/docs/Web/API/File_and_Directory_Entries_API) instead.

## Browser compatibility

{{Compat}}

## See also

- {{domxref("DirectoryEntrySync")}}
- [File and Directory Entries API](/en-US/docs/Web/API/File_and_Directory_Entries_API)
