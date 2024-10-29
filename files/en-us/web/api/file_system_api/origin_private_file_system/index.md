---
title: Origin private file system
slug: Web/API/File_System_API/Origin_private_file_system
page-type: guide
---

{{securecontext_header}}{{DefaultAPISidebar("File System API")}}{{AvailableInWorkers}}

The **origin private file system** (OPFS) is a storage endpoint provided as part of the [File System API](/en-US/docs/Web/API/File_System_API), which is private to the origin of the page and not visible to the user like the regular file system. It provides access to a special kind of file that is highly optimized for performance and offers in-place write access to its content.

## Working with files using the File System Access API

The [File System Access API](https://wicg.github.io/file-system-access/), which extends the [File System API](/en-US/docs/Web/API/File_System_API), provides access to files using picker methods. For example:

1. {{domxref("Window.showOpenFilePicker()")}} allows the user to choose a file to access, which results in a {{domxref("FileSystemFileHandle")}} object being returned.
2. {{domxref("FileSystemFileHandle.getFile()")}} is called to get access to the file's contents, the content is modified using {{domxref("FileSystemFileHandle.createWritable()")}} / {{domxref("FileSystemWritableFileStream.write()")}}.
3. {{domxref("FileSystemHandle.requestPermission()", "FileSystemHandle.requestPermission({mode: 'readwrite'})")}} is used to request the user's permission to save the changes.
4. If the user accepts the permission request, the changes are saved back to the original file.

This works, but it has some restrictions. These changes are being made to the user-visible file system, so there are a lot of security checks in place (for example, [safe browsing](https://developers.google.com/safe-browsing) in Chrome) to guard against malicious content being written to that file system. These writes are not in-place, and instead use a temporary file. The original is not modified unless it passes all the security checks.

As a result, these operations are fairly slow. It is not so noticeable when you are making small text updates, but the performance suffers when making more significant, large-scale file updates such as [SQLite](https://www.sqlite.org/wasm) database modifications.

## How does the OPFS solve such problems?

The OPFS offers low-level, byte-by-byte file access, which is private to the origin of the page and not visible to the user. As a result, it doesn't require the same series of security checks and permission grants and is therefore faster than File System Access API calls. It also has a set of synchronous calls available (other File System API calls are asynchronous) that can be run inside web workers only so as not to block the main thread.

To summarize how the OPFS differs from the user-visible file system:

- The OPFS is subject to [browser storage quota restrictions](/en-US/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria), just like any other origin-partitioned storage mechanism (for example {{domxref("IndexedDB API", "IndexedDB API", "", "nocode")}}). You can access the amount of storage space the OPFS is using via {{domxref("StorageManager.estimate()", "navigator.storage.estimate()")}}.
- Clearing storage data for the site deletes the OPFS.
- Permission prompts and security checks are not required to access files in the OPFS.
- Browsers persist the contents of the OPFS to disk somewhere, but you cannot expect to find the created files matched one-to-one. The OPFS is not intended to be visible to the user.

## How do you access the OPFS?

To access the OPFS in the first place, you call the {{domxref("StorageManager.getDirectory()", "navigator.storage.getDirectory()")}} method. This returns a reference to a {{domxref("FileSystemDirectoryHandle")}} object that represents the root of the OPFS.

## Manipulating the OPFS from the main thread

When accessing the OPFS from the main thread, you will use asynchronous, {{jsxref("Promise")}}-based APIs. You can access file ({{domxref("FileSystemFileHandle")}}) and directory ({{domxref("FileSystemDirectoryHandle")}}) handles by calling {{domxref("FileSystemDirectoryHandle.getFileHandle()")}} and {{domxref("FileSystemDirectoryHandle.getDirectoryHandle()")}} respectively on the {{domxref("FileSystemDirectoryHandle")}} object representing the OPFS root (and child directories, as they are created).

> [!NOTE]
> Passing `{ create: true }` into the above methods causes the file or folder to be created if it doesn't exist.

```js
// Create a hierarchy of files and folders
const fileHandle = await opfsRoot.getFileHandle("my first file", {
  create: true,
});
const directoryHandle = await opfsRoot.getDirectoryHandle("my first folder", {
  create: true,
});
const nestedFileHandle = await directoryHandle.getFileHandle(
  "my first nested file",
  { create: true },
);
const nestedDirectoryHandle = await directoryHandle.getDirectoryHandle(
  "my first nested folder",
  { create: true },
);

// Access existing files and folders via their names
const existingFileHandle = await opfsRoot.getFileHandle("my first file");
const existingDirectoryHandle =
  await opfsRoot.getDirectoryHandle("my first folder");
```

### Reading a file

1. Make a {{domxref("FileSystemDirectoryHandle.getFileHandle()")}} call to return a {{domxref("FileSystemFileHandle")}} object.
2. Call the {{domxref("FileSystemFileHandle.getFile()")}} object to return a {{domxref("File")}} object. This is a specialized type of {{domxref("Blob")}}, and as such can be manipulated just like any other `Blob`. For example, you could access the text content directly via {{domxref("Blob.text()")}}.

### Writing a file

1. Make a {{domxref("FileSystemDirectoryHandle.getFileHandle()")}} call to return a {{domxref("FileSystemFileHandle")}} object.
2. Call {{domxref("FileSystemFileHandle.createWritable()")}} to return a {{domxref("FileSystemWritableFileStream")}} object, which is a specialized type of {{domxref("WritableStream")}}.
3. Write contents to it using a {{domxref("FileSystemWritableFileStream.write()")}} call.
4. Close the stream using {{domxref("WritableStream.close()")}}.

### Deleting a file or folder

You can call {{domxref("FileSystemDirectoryHandle.removeEntry()")}} on the parent directory, passing it the name of the item you want to remove:

```js
directoryHandle.removeEntry("my first nested file");
```

You can also call {{domxref("FileSystemHandle.remove()")}} on the {{domxref("FileSystemFileHandle")}} or {{domxref("FileSystemDirectoryHandle")}} representing the item you want to remove. To delete a folder including all subfolders, pass the `{ recursive: true }` option.

```js
await fileHandle.remove();
await directoryHandle.remove({ recursive: true });
```

The following provides a quick way to clear the entire OPFS:

```js
await (await navigator.storage.getDirectory()).remove({ recursive: true });
```

### Listing the contents of a folder

{{domxref("FileSystemDirectoryHandle")}} is an [asynchronous iterator](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols). As such, you can iterate over it with a [`for await...of`](/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of) loop and standard methods such as [`entries()`](/en-US/docs/Web/API/FileSystemDirectoryHandle/entries), [`values()`](/en-US/docs/Web/API/FileSystemDirectoryHandle/entries), and [`keys()`](/en-US/docs/Web/API/FileSystemDirectoryHandle/entries).

For example:

```js
for await (let [name, handle] of directoryHandle) {
}
for await (let [name, handle] of directoryHandle.entries()) {
}
for await (let handle of directoryHandle.values()) {
}
for await (let name of directoryHandle.keys()) {
}
```

## Manipulating the OPFS from a web worker

Web Workers don't block the main thread, which means you can use the synchronous file access APIs in this context. Synchronous APIs are faster as they avoid having to deal with promises.

You can synchronously access a file by calling {{domxref("FileSystemFileHandle.createSyncAccessHandle()")}} on a regular {{domxref("FileSystemFileHandle")}}:

> [!NOTE]
> Despite having "Sync" in its name, the `createSyncAccessHandle()` method itself is asynchronous.

```js
const opfsRoot = await navigator.storage.getDirectory();
const fileHandle = await opfsRoot.getFileHandle("my-high-speed-file.txt", {
  create: true,
});
const syncAccessHandle = await fileHandle.createSyncAccessHandle();
```

There are a number of _synchronous_ methods available on the returned {{domxref("FileSystemSyncAccessHandle")}}:

- {{domxref("FileSystemSyncAccessHandle.getSize", "getSize()")}}: Returns the size of the file in bytes.
- {{domxref("FileSystemSyncAccessHandle.write", "write()")}}: Writes the content of a buffer into the file, optionally at a given offset, and returns the number of written bytes. Checking the returned number of written bytes allows callers to detect and handle errors and partial writes.
- {{domxref("FileSystemSyncAccessHandle.read", "read()")}}: Reads the contents of the file into a buffer, optionally at a given offset.
- {{domxref("FileSystemSyncAccessHandle.truncate", "truncate()")}}: Resizes the file to the given size.
- {{domxref("FileSystemSyncAccessHandle.flush", "flush()")}}: Ensures that the file contents contain all the modifications done through `write()`.
- {{domxref("FileSystemSyncAccessHandle.close", "close()")}}: Closes the access handle.

Here is an example that uses all the methods mentioned above:

```js
const opfsRoot = await navigator.storage.getDirectory();
const fileHandle = await opfsRoot.getFileHandle("fast", { create: true });
const accessHandle = await fileHandle.createSyncAccessHandle();

const textEncoder = new TextEncoder();
const textDecoder = new TextDecoder();

// Initialize this variable for the size of the file.
let size;
// The current size of the file, initially `0`.
size = accessHandle.getSize();
// Encode content to write to the file.
const content = textEncoder.encode("Some text");
// Write the content at the beginning of the file.
accessHandle.write(content, { at: size });
// Flush the changes.
accessHandle.flush();
// The current size of the file, now `9` (the length of "Some text").
size = accessHandle.getSize();

// Encode more content to write to the file.
const moreContent = textEncoder.encode("More content");
// Write the content at the end of the file.
accessHandle.write(moreContent, { at: size });
// Flush the changes.
accessHandle.flush();
// The current size of the file, now `21` (the length of
// "Some textMore content").
size = accessHandle.getSize();

// Prepare a data view of the length of the file.
const dataView = new DataView(new ArrayBuffer(size));

// Read the entire file into the data view.
accessHandle.read(dataView, { at: 0 });
// Logs `"Some textMore content"`.
console.log(textDecoder.decode(dataView));

// Read starting at offset 9 into the data view.
accessHandle.read(dataView, { at: 9 });
// Logs `"More content"`.
console.log(textDecoder.decode(dataView));

// Truncate the file after 4 bytes.
accessHandle.truncate(4);
```

## See also

- [The origin private file system](https://web.dev/articles/origin-private-file-system) on web.dev
