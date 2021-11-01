---
title: FileSystemDirectoryEntry
slug: Web/API/FileSystemDirectoryEntry
tags:
  - API
  - File API
  - File and Directory Entries API
  - FileSystemDirectoryEntry
  - Files
  - Interface
  - NeedsMarkupWork
  - Offline
  - Reference
browser-compat: api.FileSystemDirectoryEntry
---
{{APIRef("File and Directory Entries API")}}

The **`FileSystemDirectoryEntry`** interface of the [File and Directory Entries API](/en-US/docs/Web/API/File_and_Directory_Entries_API) represents a directory in a file system. It provides methods which make it possible to access and manipulate the files in a directory, as well as to access the entries within the directory.

## Basic concepts

You can create a new directory by calling {{domxref("FileSystemDirectoryEntry.getDirectory", "getDirectory()")}}. If you want to create subdirectories, create each child directory in sequence. If you try creating a directory using a full path that includes parent directories that do not exist yet, an error is returned. So create the hierarchy by recursively adding a new path after creating the parent directory.

### Example

In the following code snippet, we create a directory called "Documents."

```js
// Taking care of the browser-specific prefixes.
window.requestFileSystem = window.requestFileSystem || window.webkitRequestFileSystem;
window.directoryEntry = window.directoryEntry || window.webkitDirectoryEntry;

...

function onFs(fs){
  fs.root.getDirectory('Documents', {create:true}, function(directoryEntry){
    //directoryEntry.isFile === false
    //directoryEntry.isDirectory === true
    //directoryEntry.name === 'Documents'
    //directoryEntry.fullPath === '/Documents'

    }, onError);

  }

// Opening a file system with temporary storage
window.requestFileSystem(TEMPORARY, 1024*1024 /*1MB*/, onFs, onError);
```

## Properties

_This interface has no properties of its own, but inherits properties from its parent interface, {{domxref("FileSystemEntry")}}._

## Methods

_This interface inherits methods from its parent interface, {{domxref("FileSystemEntry")}}._

- {{domxref("FileSystemDirectoryEntry.createReader", "createReader()")}}
  - : Creates a {{domxref("FileSystemDirectoryReader")}} object which can be used to read the entries in this directory.
- {{domxref("FileSystemDirectoryEntry.getDirectory", "getDirectory()")}}
  - : Returns a {{domxref("FileSystemDirectoryEntry")}} object representing a directory located at a given path, relative to the directory on which the method is called.
- {{domxref("FileSystemDirectoryEntry.getFile", "getFile()")}}
  - : Returns a {{domxref("FileSystemFileEntry")}} object representing a file located within the directory's hierarchy, given a path relative to the directory on which the method is called.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [File and Directory Entries API](/en-US/docs/Web/API/File_and_Directory_Entries_API)
- [Introduction to the File System API](/en-US/docs/Web/API/File_and_Directory_Entries_API/Introduction)
- {{domxref("FileSystemDirectoryReader")}}
- {{domxref("FileSystemEntry")}}
- {{domxref("FileSystemFileEntry")}}
