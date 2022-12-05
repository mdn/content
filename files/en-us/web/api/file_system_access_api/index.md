---
title: File System Access API
slug: Web/API/File_System_Access_API
page-type: web-api-overview
tags:
  - API
  - Directory
  - File
  - File Access
  - File System Access
  - File System Access API
  - Landing
  - Overview
  - working with files
browser-compat:
  - api.FileSystemHandle
  - api.FileSystemFileHandle
---

{{securecontext_header}}{{DefaultAPISidebar("File System Access API")}}

The File System Access API allows read, write and file management capabilities.

## Concepts and Usage

This API allows interaction with files on a user's local device, or on a user-accessible network file system. Core functionality of this API includes reading files, writing or saving files, and access to directory structure.

Most of the interaction with files and directories is accomplished through handles. A parent {{domxref('FileSystemHandle')}} class helps define two child classes: {{domxref('FileSystemFileHandle')}} and {{domxref('FileSystemDirectoryHandle')}}, for files and directories respectively.

The handles represent a file or directory on the user's system. You can first gain access to them by showing the user a file or directory picker. The methods which allow this are {{domxref('window.showOpenFilePicker')}} and {{domxref('window.showDirectoryPicker')}}. Once these are called, the file picker presents itself and the user selects either a file or directory. Once this happens successfully, a handle is returned. You can also gain access to file handles via the {{domxref('DataTransferItem.getAsFileSystemHandle()')}} method of the {{domxref('HTML Drag and Drop API')}}.

The interface {{domxref('FileSystemSyncAccessHandle')}} is also available to define a high-performance handle for _synchronous_ read/write operations (the other handle types are asynchronous). The synchronous nature of this class brings performance advantages intended for use in contexts where asynchronous operations come with high overhead (e.g., [WebAssembly](/en-US/docs/WebAssembly)). Note that it is only usable inside dedicated [Web Workers](/en-US/docs/Web/API/Web_Workers_API), for files within the [origin private file system](https://fs.spec.whatwg.org/#origin-private-file-system). {{domxref('FileSystemSyncAccessHandle')}} is accessed via the {{domxref('FileSystemFileHandle.createSyncAccessHandle', 'createSyncAccessHandle()')}} method.

> **Note:** Writes performed using {{domxref('FileSystemSyncAccessHandle.write()')}} are in-place, meaning that changes are written to the actual underlying file at the same time as they are written to the writer. This is not the case with other writing mechanisms available in this API (e.g. {{domxref('FileSystemFileHandle.createWritable()')}}), where changes are not committed to disk until the writing stream is closed.

Each handle provides its own functionality and there are a few differences depending on which one you are using (see the [interfaces](#interfaces) section for specific details). You then can access file data, or information (including children) of the directory selected.

There is also "save" functionality:

- In the case of the asynchronous handles, use the {{domxref('FileSystemWritableFileStream')}} interface. Once the data you'd like to save is in a format of {{domxref('Blob')}}, {{jsxref("String")}} object, string literal or {{jsxref('ArrayBuffer', 'buffer')}}, you can open a stream and save the data to a file. This can be the existing file or a new file.
- In the case of the synchronous {{domxref('FileSystemSyncAccessHandle')}}, you write changes to a file using the {{domxref('FileSystemSyncAccessHandle.write', 'write()')}} method. You can optionally also call {{domxref('FileSystemSyncAccessHandle.flush', 'flush()')}} if you need the changes committed to disk at a specific time (otherwise you can leave the underlying operating system to handle this when it sees fit, which should be OK in most cases).

This API opens up potential functionality the web has been lacking. Still, security has been of utmost concern when designing the API, and access to file/directory data is disallowed unless the user specifically permits it.

> **Note:** The different exceptions that can be thrown when using the features of this API are listed on relevant pages as defined in the spec. However, the situation is made more complex by the interaction of the API and the underlying operating system. A proposal has been made to [list the error mappings in the spec](https://github.com/whatwg/fs/issues/57), which includes useful related information.

## Interfaces

- {{domxref("FileSystemHandle")}}
  - : The **`FileSystemHandle`** interface is an object which represents an entry. Multiple handles can represent the same entry. For the most part you do not work with `FileSystemEntry` directly but rather it's child interfaces {{domxref('FileSystemFileEntry')}} and {{domxref('FileSystemDirectoryEntry')}}.
- {{domxref("FileSystemFileHandle")}}
  - : Provides a handle to a file system entry.
- {{domxref("FileSystemDirectoryHandle")}}
  - : provides a handle to a file system directory.
- {{domxref("FileSystemSyncAccessHandle")}}
  - : Provides a synchronous handle to a file system entry, which operates in-place on a single file on disk. The synchronous nature of the file reads and writes allows for higher performance for critical methods in contexts where asynchronous operations come with high overhead, e.g., [WebAssembly](/en-US/docs/WebAssembly). This class is only accessible inside dedicated [Web Workers](/en-US/docs/Web/API/Web_Workers_API) for files within the [origin private file system](https://fs.spec.whatwg.org/#origin-private-file-system).
- {{domxref("FileSystemWritableFileStream")}}
  - : is a {{domxref('WritableStream')}} object with additional convenience methods, which operates on a single file on disk.

## Examples

### Accessing files

The below code allows the user to choose a file from the file picker and then tests to see whether the handle returned is a file or directory

```js
// store a reference to our file handle
let fileHandle;

async function getFile() {
  // open file picker
  [fileHandle] = await window.showOpenFilePicker();

  if (fileHandle.kind === 'file') {
    // run file code
  } else if (fileHandle.kind === 'directory') {
    // run directory code
  }

}
```

The following asynchronous function presents a file picker and once a file is chosen, uses the `getFile()` method to retrieve the contents.

```js
const pickerOpts = {
  types: [
    {
      description: 'Images',
      accept: {
        'image/*': ['.png', '.gif', '.jpeg', '.jpg']
      }
    },
  ],
  excludeAcceptAllOption: true,
  multiple: false
};

async function getTheFile() {
  // open file picker
  [fileHandle] = await window.showOpenFilePicker(pickerOpts);

  // get file contents
  const fileData = await fileHandle.getFile();
}
```

### Accessing directories

The following example returns a directory handle with the specified name. If the directory does not exist, it is created.

```js
const dirName = 'directoryToGetName';

// assuming we have a directory handle: 'currentDirHandle'
const subDir = currentDirHandle.getDirectoryHandle(dirName, {create: true});
```

The following asynchronous function uses `resolve()` to find the path to a chosen file, relative to a specified directory handle.

```js
async function returnPathDirectories(directoryHandle) {

  // Get a file handle by showing a file picker:
  const [handle] = await self.showOpenFilePicker();
  if (!handle) {
    // User cancelled, or otherwise failed to open a file.
    return;
  }

  // Check if handle exists inside directory our directory handle
  const relativePaths = await directoryHandle.resolve(handle);

  if (relativePaths === null) {
    // Not inside directory handle
  } else {
    // relativePaths is an array of names, giving the relative path

    for (const name of relativePaths) {
      // log each entry
      console.log(name);
    }
  }
}
```

### Writing to files

The following asynchronous function opens the save file picker, which returns a {{domxref('FileSystemFileHandle')}} once a file is selected. A writable stream is then created using the {{domxref('FileSystemFileHandle.createWritable()')}} method.

A user defined {{domxref('Blob')}} is then written to the stream which is subsequently closed.

```js
async function saveFile() {

  // create a new handle
  const newHandle = await window.showSaveFilePicker();

  // create a FileSystemWritableFileStream to write to
  const writableStream = await newHandle.createWritable();

  // write our file
  await writableStream.write(imgBlob);

  // close the file and write the contents to disk.
  await writableStream.close();
}
```

The following show different examples of options that can be passed into the `write()` method.

```js
// just pass in the data (no options)
writableStream.write(data);

// writes the data to the stream from the determined position
writableStream.write({ type: "write", position, data });

// updates the current file cursor offset to the position specified
writableStream.write({ type: "seek", position });

// resizes the file to be size bytes long
writableStream.write({ type: "truncate", size });
```

### Synchronously reading and writing a file

The following asynchronous event handler function is contained inside a Web Worker. On receiving a message from the main thread it:

- Creates a synchronous file access handle.
- Gets the size of the file and creates an {{jsxref("ArrayBuffer")}} to contain it.
- Reads the file contents into the buffer.
- Encodes the message and writes it to the end of the file.
- Persists the changes to disk and closes the access handle.

```js
onmessage = async (e) => {
  // retrieve message sent to work from main script
  const message = e.data;

  // Get handle to draft file
  const root = await navigator.storage.getDirectory();
  const draftHandle = await root.getFileHandle('draft.txt', { create: true });
  // Get sync access handle
  const accessHandle = await draftHandle.createSyncAccessHandle();

  // Get size of the file.
  const fileSize = accessHandle.getSize();
  // Read file content to a buffer.
  const buffer = new DataView(new ArrayBuffer(fileSize));
  const readBuffer = accessHandle.read(buffer, { at: 0 });

  // Write the message to the end of the file.
  const encoder = new TextEncoder();
  const encodedMessage = encoder.encode(message);
  const writeBuffer = accessHandle.write(encodedMessage, { at: readBuffer });

  // Persist changes to disk.
  accessHandle.flush();

  // Always close FileSystemSyncAccessHandle if done.
  accessHandle.close();
}
```

> **Note:** In earlier versions of the spec, {{domxref("FileSystemSyncAccessHandle.close()", "close()")}}, {{domxref("FileSystemSyncAccessHandle.flush()", "flush()")}}, {{domxref("FileSystemSyncAccessHandle.getSize()", "getSize()")}}, and {{domxref("FileSystemSyncAccessHandle.truncate()", "truncate()")}} were wrongly specified as asynchronous methods. This has now been [amended](https://github.com/whatwg/fs/issues/7), but some browsers still support the asynchronous versions.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [The File System Access API: simplifying access to local files](https://web.dev/file-system-access/)
