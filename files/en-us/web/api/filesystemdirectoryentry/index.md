---
title: FileSystemDirectoryEntry
slug: Web/API/FileSystemDirectoryEntry
page-type: web-api-interface
browser-compat: api.FileSystemDirectoryEntry
---

{{APIRef("File and Directory Entries API")}}

The **`FileSystemDirectoryEntry`** interface of the [File and Directory Entries API](/en-US/docs/Web/API/File_and_Directory_Entries_API) represents a directory in a file system. It provides methods which make it possible to access and manipulate the files in a directory, as well as to access the entries within the directory.

{{InheritanceDiagram}}

## Basic concepts

You can create a new directory by calling {{domxref("FileSystemDirectoryEntry.getDirectory", "getDirectory()")}}. If you want to create subdirectories, create each child directory in sequence. If you try creating a directory using a full path that includes parent directories that do not exist yet, an error is returned. So create the hierarchy by recursively adding a new path after creating the parent directory.

### Example

In the following code snippet, we create a directory called "Documents."

```js
// Taking care of the browser-specific prefixes.
window.requestFileSystem =
  window.requestFileSystem || window.webkitRequestFileSystem;
window.directoryEntry = window.directoryEntry || window.webkitDirectoryEntry;

// …

function onFs(fs) {
  fs.root.getDirectory(
    "Documents",
    { create: true },
    (directoryEntry) => {
      //directoryEntry.isFile === false
      //directoryEntry.isDirectory === true
      //directoryEntry.name === 'Documents'
      //directoryEntry.fullPath === '/Documents'
    },
    onError,
  );
}

// Opening a file system with temporary storage
window.requestFileSystem(TEMPORARY, 1024 * 1024 /*1MB*/, onFs, onError);
```

## Instance properties

_This interface has no properties of its own, but inherits properties from its parent interface, {{domxref("FileSystemEntry")}}._

## Instance methods

_This interface inherits methods from its parent interface, {{domxref("FileSystemEntry")}}._

- {{domxref("FileSystemDirectoryEntry.createReader", "createReader()")}}
  - : Creates a {{domxref("FileSystemDirectoryReader")}} object which can be used to read the entries in this directory.
- {{domxref("FileSystemDirectoryEntry.getDirectory", "getDirectory()")}}
  - : Returns a `FileSystemDirectoryEntry` object representing a directory located at a given path, relative to the directory on which the method is called.
- {{domxref("FileSystemDirectoryEntry.getFile", "getFile()")}}
  - : Returns a {{domxref("FileSystemFileEntry")}} object representing a file located within the directory's hierarchy, given a path relative to the directory on which the method is called.
- {{domxref("FileSystemDirectoryEntry.removeRecursively", "removeRecursively()")}} {{Deprecated_inline}} {{Non-standard_inline}}
  - : Removes the directory as well as all of its content, hierarchically iterating over its entire subtree of descendant files and directories.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [File and Directory Entries API](/en-US/docs/Web/API/File_and_Directory_Entries_API)
- {{domxref("FileSystemDirectoryReader")}}
- {{domxref("FileSystemEntry")}}
- {{domxref("FileSystemFileEntry")}}
