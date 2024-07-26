---
title: FileSystemFileHandle
slug: Web/API/FileSystemFileHandle
page-type: web-api-interface
browser-compat: api.FileSystemFileHandle
---

{{securecontext_header}}{{APIRef("File System API")}}{{AvailableInWorkers}}

The **`FileSystemFileHandle`** interface of the {{domxref("File System API", "File System API", "", "nocode")}} represents a handle to a file system entry. The interface is accessed through the {{domxref('window.showOpenFilePicker()')}} method.

Note that read and write operations depend on file-access permissions that do not persist after a page refresh if no other tabs for that origin remain open. The {{domxref("FileSystemHandle.queryPermission()", "queryPermission")}} method of the {{domxref("FileSystemHandle")}} interface can be used to verify permission state before accessing a file.

{{InheritanceDiagram}}

## Instance properties

_Inherits properties from its parent, {{DOMxRef("FileSystemHandle")}}._

## Instance methods

_Inherits methods from its parent, {{DOMxRef("FileSystemHandle")}}._

- {{domxref('FileSystemFileHandle.getFile', 'getFile()')}}
  - : Returns a {{jsxref('Promise')}} which resolves to a {{domxref('File')}} object
    representing the state on disk of the entry represented by the handle.
- {{domxref('FileSystemFileHandle.createSyncAccessHandle', 'createSyncAccessHandle()')}}
  - : Returns a {{jsxref('Promise')}} which resolves to a {{domxref('FileSystemSyncAccessHandle')}} object
    that can be used to synchronously read from and write to a file. The synchronous nature of this method brings performance advantages,
    but it is only usable inside dedicated [Web Workers](/en-US/docs/Web/API/Web_Workers_API).
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
        description: "Images",
        accept: {
          "image/*": [".png", ".gif", ".jpeg", ".jpg"],
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

### Synchronously reading and writing a file

The following asynchronous event handler function is contained inside a Web Worker. On receiving a message from the main thread it:

- Creates a synchronous file access handle.
- Gets the size of the file and creates an {{jsxref("ArrayBuffer")}} to contain it.
- Reads the file contents into the buffer.
- Encodes the message and writes it to the end of the file.
- Persists the changes to disk and closes the access handle.

```js
onmessage = async (e) => {
  // Retrieve message sent to work from main script
  const message = e.data;

  // Get handle to draft file
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

> [!NOTE]
> In earlier versions of the spec, {{domxref("FileSystemSyncAccessHandle.close()", "close()")}}, {{domxref("FileSystemSyncAccessHandle.flush()", "flush()")}}, {{domxref("FileSystemSyncAccessHandle.getSize()", "getSize()")}}, and {{domxref("FileSystemSyncAccessHandle.truncate()", "truncate()")}} were wrongly specified as asynchronous methods, and older versions of some browsers implement them in this way. However, all current browsers that support these methods implement them as synchronous methods.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [File System API](/en-US/docs/Web/API/File_System_API)
- [The File System Access API: simplifying access to local files](https://developer.chrome.com/docs/capabilities/web-apis/file-system-access)
