---
title: File System API
slug: Web/API/File_System_API
page-type: web-api-overview
browser-compat:
  - api.FileSystemHandle
  - api.FileSystemFileHandle
---

{{securecontext_header}}{{DefaultAPISidebar("File System API")}}

The File System API — with extensions provided via the [File System Access API](https://wicg.github.io/file-system-access/) to access files on the device file system — allows read, write and file management capabilities.

## Concepts and Usage

This API allows interaction with files on a user's local device, or on a user-accessible network file system. Core functionality of this API includes reading files, writing or saving files, and access to directory structure.

Most of the interaction with files and directories is accomplished through handles. A parent {{domxref('FileSystemHandle')}} class helps define two child classes: {{domxref('FileSystemFileHandle')}} and {{domxref('FileSystemDirectoryHandle')}}, for files and directories respectively.

The handles represent a file or directory on the user's system. You can first gain access to them by showing the user a file or directory picker using methods such as {{domxref('window.showOpenFilePicker()')}} and {{domxref('window.showDirectoryPicker()')}}. Once these are called, the file picker presents itself and the user selects either a file or directory. Once this happens successfully, a handle is returned.

You can also gain access to file handles via:

- The {{domxref('DataTransferItem.getAsFileSystemHandle()')}} method of the {{domxref('HTML Drag and Drop API', 'HTML Drag and Drop API', '', 'nocode')}}.
- The [File Handling API](https://developer.chrome.com/en/articles/file-handling/).

Each handle provides its own functionality and there are a few differences depending on which one you are using (see the [interfaces](#interfaces) section for specific details). You then can access file data, or information (including children) of the directory selected. This API opens up potential functionality the web has been lacking. Still, security has been of utmost concern when designing the API, and access to file/directory data is disallowed unless the user specifically permits it (note that this is not the case with the [Origin private file system](#origin_private_file_system), because it is not visible to the user).

> **Note:** The different exceptions that can be thrown when using the features of this API are listed on relevant pages as defined in the spec. However, the situation is made more complex by the interaction of the API and the underlying operating system. A proposal has been made to [list the error mappings in the spec](https://github.com/whatwg/fs/issues/57), which includes useful related information.

> **Note:** Objects based on {{domxref("FileSystemHandle")}} can also be serialized into an {{domxref("IndexedDB API", "IndexedDB", "", "nocode")}} database instance, or transferred via {{domxref("window.postMessage", "postMessage()")}}.

### Origin private file system

The origin private file system (OPFS) is a storage endpoint provided as part of the File System API, which is private to the origin of the page and not visible to the user like the regular file system. It provides access to a special kind of file that is highly optimized for performance and offers in-place write access to its content.

Read our [Origin private file system](/en-US/docs/Web/API/File_System_API/Origin_private_file_system) for instructions on how to use it.

### Saving files

- In the case of the asynchronous handles, use the {{domxref('FileSystemWritableFileStream')}} interface. Once the data you'd like to save is in a format of {{domxref('Blob')}}, {{jsxref("String")}} object, string literal or {{jsxref('ArrayBuffer', 'buffer')}}, you can open a stream and save the data to a file. This can be the existing file or a new file.
- In the case of the synchronous {{domxref('FileSystemSyncAccessHandle')}}, you write changes to a file using the {{domxref('FileSystemSyncAccessHandle.write', 'write()')}} method. You can optionally also call {{domxref('FileSystemSyncAccessHandle.flush', 'flush()')}} if you need the changes committed to disk at a specific time (otherwise you can leave the underlying operating system to handle this when it sees fit, which should be OK in most cases).

## Interfaces

- {{domxref("FileSystemHandle")}}
  - : The **`FileSystemHandle`** interface is an object which represents an entry. Multiple handles can represent the same entry. For the most part you do not work with `FileSystemHandle` directly but rather its child interfaces {{domxref('FileSystemFileHandle')}} and {{domxref('FileSystemDirectoryHandle')}}.
- {{domxref("FileSystemFileHandle")}}
  - : Provides a handle to a file system entry.
- {{domxref("FileSystemDirectoryHandle")}}
  - : provides a handle to a file system directory.
- {{domxref("FileSystemSyncAccessHandle")}}
  - : Provides a synchronous handle to a file system entry, which operates in-place on a single file on disk. The synchronous nature of the file reads and writes allows for higher performance for critical methods in contexts where asynchronous operations come with high overhead, e.g., [WebAssembly](/en-US/docs/WebAssembly). This class is only accessible inside dedicated [Web Workers](/en-US/docs/Web/API/Web_Workers_API) for files within the [origin private file system](#origin_private_file_system).
- {{domxref("FileSystemWritableFileStream")}}
  - : is a {{domxref('WritableStream')}} object with additional convenience methods, which operates on a single file on disk.

## Examples

### Accessing files

The below code allows the user to choose a file from the file picker.

```js
async function getFile() {
  // Open file picker and destructure the result the first handle
  const [fileHandle] = await window.showOpenFilePicker();
  const file = await fileHandle.getFile();
  return file;
}
```

The following asynchronous function presents a file picker and once a file is chosen, uses the `getFile()` method to retrieve the contents.

```js
const pickerOpts = {
  types: [
    {
      description: "Images",
      accept: {
        "image/*": [".png", ".gif", ".jpeg", ".jpg"],
      },
    },
  ],
  excludeAcceptAllOption: true,
  multiple: false,
};

async function getTheFile() {
  // Open file picker and destructure the result the first handle
  const [fileHandle] = await window.showOpenFilePicker(pickerOpts);

  // get file contents
  const fileData = await fileHandle.getFile();
}
```

### Accessing directories

The following example returns a directory handle with the specified name. If the directory does not exist, it is created.

```js
const dirName = "directoryToGetName";

// assuming we have a directory handle: 'currentDirHandle'
const subDir = currentDirHandle.getDirectoryHandle(dirName, { create: true });
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

### Synchronously reading and writing files in OPFS

This example synchronously reads and writes a file to the [origin private file system](#origin_private_file_system).

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

  // Get handle to draft file in OPFS
  const root = await navigator.storage.getDirectory();
  const draftHandle = await root.getFileHandle("draft.txt", { create: true });
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
};
```

> **Note:** In earlier versions of the spec, {{domxref("FileSystemSyncAccessHandle.close()", "close()")}}, {{domxref("FileSystemSyncAccessHandle.flush()", "flush()")}}, {{domxref("FileSystemSyncAccessHandle.getSize()", "getSize()")}}, and {{domxref("FileSystemSyncAccessHandle.truncate()", "truncate()")}} were unergonomically specified as asynchronous methods. This has now been [amended](https://github.com/whatwg/fs/issues/7), but some browsers still support the asynchronous versions.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [The File System Access API: simplifying access to local files](https://web.dev/file-system-access/) on web.dev
- [The origin private file system](https://web.dev/origin-private-file-system/) on web.dev
