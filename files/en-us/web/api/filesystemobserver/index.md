---
title: FileSystemObserver
slug: Web/API/FileSystemObserver
page-type: web-api-interface
browser-compat: api.FileSystemObserver
---

{{securecontext_header}}{{APIRef("File System API")}}

The **`FileSystemObserver`** interface of the {{domxref("File System API", "File System API", "", "nocode")}} provides a mechanism to observe changes to the underlying file systems behind the File API, both the user-observable file system and the [Origin Private File System](/en-US/docs/Web/API/File_System_API/Origin_private_file_system) (OPFS). Previous to this, sites had to recursively poll the file system to find changes in the files or folder structure. This can be time-consuming and wasteful, especially for large directories.

## Constructor

- {{domxref("FileSystemObserver.FileSystemObserver", "FileSystemObserver()")}} {{Experimental_Inline}}
  - : Creates a new `FileSystemObserver` object instance.

## Instance methods

- {{domxref("FileSystemObserver.disconnect", "disconnect()")}} {{Experimental_Inline}}
  - : Stop observing the filesystem.
- {{domxref("FileSystemObserver.observe", "observe()")}} {{Experimental_Inline}}
  - : Start observing changes to a given file or directory.

## Examples

> [!NOTE]
> For a complete working example, check out [File System Observer Demo](https://file-system-observer.glitch.me/).

### Initialize a `FileSystemObserver`

Before you can start observing file or directory changes, you need to initialize a `FileSystemObserver` to handle the observations. This is done using the {{domxref("FileSystemObserver.FileSystemObserver", "FileSystemObserver()")}} constructor, which takes a callback function as an argument:

```js
const observer = new FileSystemObserver(callback);
```

The [callback function](/en-US/docs/Web/API/FileSystemObserver/FileSystemObserver#callback) body can be specified to return and process file change observations in any way you want:

```js
const callback = (records, observer) => {
  for (const record of records) {
    console.log("Change detected:", record);
    const reportContent = `Change observed to ${record.changedHandle.kind} ${record.changedHandle.name}. Type: ${record.type}.`;
    sendReport(reportContent); // Some kind of user-defined reporting function
  }

  observer.disconnect();
};
```

The callback always includes two parameters:

- `records`
  - : An array of [`FileSystemChangeRecord`](/en-US/docs/Web/API/FileSystemObserver/FileSystemObserver#filesystemchangerecord_structure) objects that contain details of all the observed changes.
- `observer`
  - : A reference to the current `FileSystemObserver` object, which is made available in case, for example, you want to stop observations after the current records have been received using the {{domxref('FileSystemObserver.disconnect', 'disconnect()')}} method, as shown above.

### Observe a file or directory

Once a `FileSystemObserver` instance is available, you can start observing changes to a file system entry by running the {{domxref("FileSystemObserver.observe()")}} method, passing it the handle of the entry to observe. This can be a {{domxref("FileSystemFileHandle")}} or {{domxref("FileSystemDirectoryHandle")}} for the user-observable file system:

```js
// Observe a file
async function observeFile() {
  const fileHandle = await window.showSaveFilePicker();

  await observer.observe(fileHandle);
}

// Observe a directory
async function observeDirectory() {
  const directoryHandle = await window.showDirectoryPicker();

  await observer.observe(directoryHandle);
}
```

or a {{domxref("FileSystemSyncAccessHandle")}} for the [Origin Private File System](/en-US/docs/Web/API/File_System_API/Origin_private_file_system) (OPFS):

```js
// Observe an OPFS file system entry
async function observeOPFSFile() {
  const root = await navigator.storage.getDirectory();
  const draftHandle = await root.getFileHandle("draft.txt", { create: true });
  const opfsHandle = await draftHandle.createSyncAccessHandle();

  await observer.observe(opfsHandle);
}
```

### Stop observing the file system

When you want to stop observing changes to the file system entry, you can call {{domxref("FileSystemObserver.disconnect()")}}:

```js
observer.disconnect();
```

## Specifications

Not currently part of a specification. See [https://github.com/whatwg/fs/pull/165](https://github.com/whatwg/fs/pull/165) for the relevant specification PR.

## Browser compatibility

{{Compat}}

## See also

- [File System API](/en-US/docs/Web/API/File_System_API)
- [The File System Observer API origin trial](https://developer.chrome.com/blog/file-system-observer#stop-observing-the-file-system) on developer.chrome.com (2024)
