---
title: FileSystemDirectoryHandle
slug: Web/API/FileSystemDirectoryHandle
tags:
  - Directories
  - Directory
  - File System Access API
  - FileSystemDirectoryHandle
  - Files
  - Interface
  - working with directories
browser-compat: api.FileSystemDirectoryHandle
---
{{draft}}{{securecontext_header}}{{DefaultAPISidebar("File System Access API")}}

The **`FileSystemDirectoryHandle`** interface of the {{domxref('File System Access API')}} provides a handle to a file system directory. The interface is accessed via the {{domxref('window.showDirectoryPicker()')}} method.

## Properties

_Inherits properties from its parent, {{DOMxRef("FileSystemHandle")}}._

## Methods

_Inherits methods from its parent, {{DOMxRef("FileSystemHandle")}}._

- {{domxref('FileSystemDirectoryHandle.entries()')}}
  - : Returns an {{jsxref('Array')}} of a given object's own enumerable property `[key, value]` pairs
- {{domxref('FileSystemDirectoryHandle.getFileHandle()')}}
  - : Returns a {{domxref('FileSystemFileHandle')}} for a file with the specified name, within the directory the method is called.
- {{domxref('FileSystemDirectoryHandle.getDirectoryHandle()')}}
  - : Returns a {{domxref('FileSystemDirectoryHandle')}} for a subdirectory with the specified name within the directory handle on which the method is called.
- {{domxref('FileSystemDirectoryHandle.keys()')}}
  - : Returns a new _array iterator_ containing the keys for each item in `FileSystemDirectoryHandle`.
- {{domxref('FileSystemDirectoryHandle.removeEntry()')}}
  - : Attempts to remove an entry if the directory handle contains a file or directory called the name specified.
- {{domxref('FileSystemDirectoryHandle.resolve()')}}
  - : Returns an {{jsxref('Array')}} of directory names from the parent handle to the specified child entry, with the name of the child entry as the last array item.
- {{domxref('FileSystemDirectoryHandle.values()')}}
  - : Returns a new _array iterator_ containing the values for each index in the `FileSystemDirectoryHandle` object.

## Examples

The following example returns a directory handle with the specified name, if the directory does not exist it is created.

```js
const dirName = 'directoryToGetName';

// assuming we have a directory handle: 'currentDirHandle'
const subDir = currentDirHandle.getDirectoryHandle(dirName, {create: true});
```

The following asynchronous function uses `resolve()` to find the path to a chosen file, relative to a specified directory handle.

```js
async function returnPathDirectories(directoryHandle) {

  // Get a file handle by showing a file picker:
  const handle = await self.showOpenFilePicker();
  if (!handle) {
    // User cancelled, or otherwise failed to open a file.
    return;
  }

  // Check if handle exists inside directory our directory handle
  const relativePaths = await directoryHandle.resolve(handle);

  if (relativePath === null) {
    // Not inside directory handle
  } else {
    // relativePath is an array of names, giving the relative path

    for (const name of relativePaths) {
      // log each entry
      console.log(name);
    }
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [File System Access API](/en-US/docs/Web/API/File_System_Access_API)
- [The File System Access API: simplifying access to local files](https://web.dev/file-system-access/)
