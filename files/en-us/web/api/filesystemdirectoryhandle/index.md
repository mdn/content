---
title: FileSystemDirectoryHandle
slug: Web/API/FileSystemDirectoryHandle
page-type: web-api-interface
browser-compat: api.FileSystemDirectoryHandle
---

{{securecontext_header}}{{APIRef("File System Access API")}}

The **`FileSystemDirectoryHandle`** interface of the {{domxref('File System Access API')}} provides a handle to a file system directory.

The interface can be accessed via the {{domxref('window.showDirectoryPicker()')}}, {{domxref('StorageManager.getDirectory()')}}, {{domxref('DataTransferItem.getAsFileSystemHandle()')}}, and {{domxref('FileSystemDirectoryHandle.getDirectoryHandle()')}} methods.

{{InheritanceDiagram}}

## Instance properties

_Inherits properties from its parent, {{DOMxRef("FileSystemHandle")}}._

## Instance methods

_Inherits methods from its parent, {{DOMxRef("FileSystemHandle")}}._

- {{domxref('FileSystemDirectoryHandle.entries()')}}
  - : Returns a new _async iterator_ of a given object's own enumerable property `[key, value]` pairs
- {{domxref('FileSystemDirectoryHandle.getFileHandle()')}}
  - : Returns a {{jsxref('Promise')}} fulfilled with a {{domxref('FileSystemFileHandle')}} for a file with the specified name, within the directory the method is called.
- {{domxref('FileSystemDirectoryHandle.getDirectoryHandle()')}}
  - : Returns a {{jsxref('Promise')}} fulfilled with a {{domxref('FileSystemDirectoryHandle')}} for a subdirectory with the specified name within the directory handle on which the method is called.
- {{domxref('FileSystemDirectoryHandle.keys()')}}
  - : Returns a new _async iterator_ containing the keys for each item in `FileSystemDirectoryHandle`.
- {{domxref('FileSystemDirectoryHandle.removeEntry()')}}
  - : Attempts to asynchronously remove an entry if the directory handle contains a file or directory called the name specified.
- {{domxref('FileSystemDirectoryHandle.resolve()')}}
  - : Returns a {{jsxref('Promise')}} fulfilled with an {{jsxref('Array')}} of directory names from the parent handle to the specified child entry, with the name of the child entry as the last array item.
- {{domxref('FileSystemDirectoryHandle.values()')}}
  - : Returns a new _async iterator_ containing the values for each index in the `FileSystemDirectoryHandle` object.
- [`FileSystemDirectoryHandle[@@asyncIterator]()`](/en-US/docs/Web/API/FileSystemDirectoryHandle/entries)
  - : Returns the `entries` function by default.

## Examples

The following example returns a directory handle with the specified name, if the directory does not exist it is created.

```js
const dirName = "directoryToGetName";

// assuming we have a directory handle: 'currentDirHandle'
const subDir = currentDirHandle.getDirectoryHandle(dirName, { create: true });
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

The following example scans recursively through a directory to return {{domxref('FileSystemFileHandle')}} objects for each file in that directory:

```js
async function* getFilesRecursively(entry) {
  if (entry.kind === "file") {
    const file = await entry.getFile();
    if (file !== null) {
      file.relativePath = getRelativePath(entry);
      yield file;
    }
  } else if (entry.kind === "directory") {
    for await (const handle of entry.values()) {
      yield* getFilesRecursively(handle);
    }
  }
}
for await (const fileHandle of getFilesRecursively(directoryHandle)) {
  console.log(fileHandle);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [File System Access API](/en-US/docs/Web/API/File_System_Access_API)
- [The File System Access API: simplifying access to local files](https://web.dev/file-system-access/)
