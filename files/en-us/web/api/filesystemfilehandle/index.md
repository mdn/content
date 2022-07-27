---
title: FileSystemFileHandle
slug: Web/API/FileSystemFileHandle
page-type: web-api-interface
tags:
  - Directory
  - File
  - File System Access API
  - FileSystemFileHandle
  - Interface
  - working with files
browser-compat: api.FileSystemFileHandle
---
{{securecontext_header}}{{DefaultAPISidebar("File System Access API")}}

The **`FileSystemFileHandle`** interface of the {{domxref('File System Access API')}} represents a handle to a file system entry. The interface is accessed through the {{domxref('window.showOpenFilePicker()')}} method.

Note that read and write operations depend on file-access permissions that do not persist after a page refresh if no other tabs for that origin remain open. The {{domxref("FileSystemHandle.queryPermission()", "queryPermission")}} method of the {{domxref("FileSystemHandle")}} interface can be used to verify permission state before accessing a file.

{{InheritanceDiagram}}

## Properties

_Inherits properties from its parent, {{DOMxRef("FileSystemHandle")}}._

## Methods

_Inherits methods from its parent, {{DOMxRef("FileSystemHandle")}}._

- {{domxref('FileSystemFileHandle.getFile', 'getFile()')}}
  - : Returns a {{jsxref('Promise')}} which resolves to a {{domxref('File')}} object
      representing the state on disk of the entry represented by the handle.
- {{domxref('FileSystemFileHandle.createWritable', 'createWritable()')}}
  - : Returns a {{jsxref('Promise')}} which resolves to a newly created {{domxref('FileSystemWritableFileStream')}}
      object that can be used to write to a file.

## Examples

### Reading a File

The following asynchronous function presents a file picker and once a file is chosen, uses the `getFile()` method to retrieve the contents.

```js
async function getTheFile() {
  const pickerOpts = {
    types: [
      {
        description: 'Images',
        accept: {
          'image/*': ['.png', '.gif', '.jpeg', '.jpg'],
        },
      },
    ],
    excludeAcceptAllOption: true,
    multiple: false,
  };

  // open file picker
  const [fileHandle] = await window.showOpenFilePicker(pickerOpts);
  // get file contents
  const fileData = await fileHandle.getFile();
  return fileData;
}
```

### Writing a File

The following asynchronous function writes the given contents to the file handle, and thus to disk.

```js
async function writeFile(fileHandle, contents) {
  // Create a FileSystemWritableFileStream to write to.
  const writable = await fileHandle.createWritable();

  // Write the contents of the file to the stream.
  await writable.write(contents);

  // Close the file and write the contents to disk.
  await writable.close();
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [File System Access API](/en-US/docs/Web/API/File_System_Access_API)
- [The File System Access API: simplifying access to local files](https://web.dev/file-system-access/)
