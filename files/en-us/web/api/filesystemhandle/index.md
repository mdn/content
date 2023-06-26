---
title: FileSystemHandle
slug: Web/API/FileSystemHandle
page-type: web-api-interface
browser-compat: api.FileSystemHandle
---

{{securecontext_header}}{{APIRef("File System API")}}

The **`FileSystemHandle`** interface of the {{domxref('File System API')}} is an object which represents a file or directory entry. Multiple handles can represent the same entry. For the most part you do not work with `FileSystemHandle` directly but rather its child interfaces {{domxref('FileSystemFileHandle')}} and {{domxref('FileSystemDirectoryHandle')}}.

## Interfaces based on FileSystemHandle

Below is a list of interfaces based on the FileSystemHandle interface.

- {{domxref("FileSystemFileHandle")}}
  - : Represents a handle to a file entry.
- {{domxref("FileSystemDirectoryHandle")}}
  - : Provides a handle to a directory entry.

## Instance properties

- {{domxref('FileSystemHandle.kind','kind')}} {{ReadOnlyInline}}
  - : Returns the type of entry. This is `'file'` if the associated entry is a file or `'directory'`.
- {{domxref('FileSystemHandle.name', 'name')}} {{ReadOnlyInline}}
  - : Returns the name of the associated entry.

## Instance methods

- {{domxref('FileSystemHandle.isSameEntry()', 'isSameEntry()')}}
  - : Compares two {{domxref("FileSystemHandle", "handles")}} to see if the associated entries (either a file or directory) match.
- {{domxref('FileSystemHandle.queryPermission()', 'queryPermission()')}} {{Experimental_Inline}}
  - : Queries the current permission state of the current handle.
- {{domxref('FileSystemHandle.remove', 'remove()')}} {{Experimental_Inline}} {{Non-standard_Inline}}
  - : Requests removal of the entry represented by the handle from the underlying file system.
- {{domxref('FileSystemHandle.requestPermission', 'requestPermission()')}} {{Experimental_Inline}}
  - : Requests read or readwrite permissions for the file handle.

## Examples

### Checking Type

The below code allows the user to choose a file from the file picker and then tests to see whether the handle returned is a file or directory

```js
// store a reference to our file handle
let fileHandle;

async function getFile() {
  // open file picker
  [fileHandle] = await window.showOpenFilePicker();

  if (fileHandle.kind === "file") {
    // run file code
  } else if (fileHandle.kind === "directory") {
    // run directory code
  }
}
```

### Query/Request Permissions

The following asynchronous function returns true if user has granted read or readwrite permissions to the file handle. Permission is requested if not.

```js
// fileHandle is a FileSystemFileHandle
// withWrite is a boolean set to true if write

async function verifyPermission(fileHandle, withWrite) {
  const opts = {};
  if (withWrite) {
    opts.mode = "readwrite";
  }

  // Check if we already have permission, if so, return true.
  if ((await fileHandle.queryPermission(opts)) === "granted") {
    return true;
  }

  // Request permission to the file, if the user grants permission, return true.
  if ((await fileHandle.requestPermission(opts)) === "granted") {
    return true;
  }

  // The user did not grant permission, return false.
  return false;
}
```

### Comparing Entries

The following function compares a single entry with an array of entries, and returns a new array with any matching entries removed.

```js
function removeMatches(fileEntry, entriesArr) {
  const newArr = entriesArr.filter((entry) => !fileEntry.isSameEntry(entry));

  return newArr;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [File System API](/en-US/docs/Web/API/File_System_API)
- [The File System Access API: simplifying access to local files](https://web.dev/file-system-access/)
