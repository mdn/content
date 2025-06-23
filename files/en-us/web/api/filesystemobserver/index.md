---
title: FileSystemObserver
slug: Web/API/FileSystemObserver
page-type: web-api-interface
status:
  - experimental
  - non-standard
browser-compat: api.FileSystemObserver
---

{{securecontext_header}}{{APIRef("File System API")}}{{SeeCompatTable}}{{non-standard_header}}

The **`FileSystemObserver`** interface of the {{domxref("File System API", "File System API", "", "nocode")}} provides a mechanism to observe changes to the user-observable file system and the [Origin Private File System](/en-US/docs/Web/API/File_System_API/Origin_private_file_system) (OPFS). This means web applications don't have to poll the file system to find changes in the files or folder structure, which can be time-consuming and wasteful.

## Constructor

- {{domxref("FileSystemObserver.FileSystemObserver", "FileSystemObserver()")}} {{Experimental_Inline}} {{non-standard_inline}}
  - : Creates a new `FileSystemObserver` object instance.

## Instance methods

- {{domxref("FileSystemObserver.disconnect", "disconnect()")}} {{Experimental_Inline}} {{non-standard_inline}}
  - : Stop observing the filesystem.
- {{domxref("FileSystemObserver.observe", "observe()")}} {{Experimental_Inline}} {{non-standard_inline}}
  - : Start observing changes to a given file or directory.

## Examples

> [!NOTE]
> For a complete working example, check out [File System Observer Demo](https://mdn.github.io/dom-examples/filesystemobserver/) ([source code](https://github.com/mdn/dom-examples/tree/main/filesystemobserver)).

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

### Observe a file or directory

Once a `FileSystemObserver` instance is available, you can start observing changes to a file system entry by calling the {{domxref("FileSystemObserver.observe()")}} method.

You can observe a file or directory in the user-observable file system or the [Origin Private File System](/en-US/docs/Web/API/File_System_API/Origin_private_file_system) (OPFS) by passing a {{domxref("FileSystemFileHandle")}} or {{domxref("FileSystemDirectoryHandle")}} to `observe()`. Instances of these objects can be returned, for example, when asking the user to select a file or directory using {{domxref("Window.showSaveFilePicker()")}} or {{domxref("Window.showDirectoryPicker()")}}:

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

You can also observe changes to the OPFS by passing a {{domxref("FileSystemSyncAccessHandle")}} to `observe()`:

```js
// Observe an OPFS file system entry
async function observeOPFSFile() {
  const root = await navigator.storage.getDirectory();
  const draftHandle = await root.getFileHandle("draft.txt", { create: true });
  const syncHandle = await draftHandle.createSyncAccessHandle();

  await observer.observe(syncHandle);
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
