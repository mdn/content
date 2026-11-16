---
title: "DirectoryEntrySync: removeRecursively() method"
short-title: removeRecursively()
slug: Web/API/DirectoryEntrySync/removeRecursively
page-type: web-api-instance-method
status:
  - deprecated
  - non-standard
browser-compat: api.DirectoryEntrySync.removeRecursively
---

{{APIRef("File and Directory Entries API")}}{{Non-standard_Header}}

The **`removeRecursively()`** method of the {{domxref("DirectoryEntrySync")}} interface deletes a directory and all of its contents. You cannot delete the root directory of a file system.

## Syntax

```js-nolint
removeRecursively()
```

### Parameters

None.

### Return value

None ({{jsxref('undefined')}}).

### Exceptions

- `NotFoundError` {{domxref("DOMException")}}
  - : Thrown if the target directory does not exist.
- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if this directory is not longer valid for some reason other than being deleted.
- `NoModificationAllowedError` {{domxref("DOMException")}}
  - : Thrown if one of the following is not writable: the directory, its parent directory, and some of the content in the directory.
- `SecurityError` {{domxref("DOMException")}}
  - : Thrown if the application does not have permission to access the target directory, its parent, or some of its contents.

## Description

If you delete a directory that contains a file that cannot be removed or if an error occurs while the deletion is in progress, some of the contents might not be deleted. Catch these cases with error callbacks and retry the deletion.

## Specifications

This feature is not part of any current specification. It is no longer on track to become a standard.
Use the [File and Directory Entries API](/en-US/docs/Web/API/File_and_Directory_Entries_API) instead.

## Browser compatibility

{{Compat}}

## See also

- {{domxref("DirectoryEntrySync")}}
- [File and Directory Entries API](/en-US/docs/Web/API/File_and_Directory_Entries_API)
