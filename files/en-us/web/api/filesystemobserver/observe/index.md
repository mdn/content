---
title: "FileSystemObserver: observe() method"
short-title: observe()
slug: Web/API/FileSystemObserver/observe
page-type: web-api-instance-method
browser-compat: api.FileSystemObserver.observe
---

{{securecontext_header}}{{APIRef("File System API")}}

The **`observe()`** method of the
{{domxref("FileSystemObserver")}} interface starts the observer observing changes to a given file or directory.

## Syntax

```js-nolint
observe(handle)
observe(handle, options)
```

### Parameters

- `handle`
  - : The handle of the file system entry representing the file or directory to observe. This can be a {{domxref("FileSystemFileHandle")}} or {{domxref("FileSystemDirectoryHandle")}} for the user-observable file system and the [Origin Private File System](/en-US/docs/Web/API/File_System_API/Origin_private_file_system) (OPFS), or a {{domxref("FileSystemSyncAccessHandle")}} for the OPFS.
- `options` {{optional_inline}}

  - : An object specifying options for the `observe()` call. This can contain the following properties:

    - `recursive`

      - : A boolean specifying whether you want to observe changes to a directory recursively. If set to `true`, changes are observed in the directory itself and all contained subdirectories and files. If set to `false`, changes are only observed in the directory itself and directly contained files (that is, not files in subdirectories). Defaults to `false`.

        This property has no effect if `handle` represents a file.

### Return value

A {{jsxref("Promise")}} that resolves to {{jsxref('undefined')}}.

### Exceptions

- `NotFoundError` {{domxref("DOMException")}}
  - : Thrown if the file or directory represented by `handle` could not be found.

## Examples

### Observe a file or directory

Assuming a `FileSystemObserver` instance is available, you can start observing changes to a file system entry by calling the `observe()` method on it, passing it the handle of the entry to observe. This can be a {{domxref("FileSystemFileHandle")}} or {{domxref("FileSystemDirectoryHandle")}} for the user-observable file system and the [Origin Private File System](/en-US/docs/Web/API/File_System_API/Origin_private_file_system) (OPFS):

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

or a {{domxref("FileSystemSyncAccessHandle")}} for the OPFS:

```js
// Observe an OPFS file system entry
async function observeOPFSFile() {
  const root = await navigator.storage.getDirectory();
  const draftHandle = await root.getFileHandle("draft.txt", { create: true });
  const syncHandle = await draftHandle.createSyncAccessHandle();

  await observer.observe(syncHandle);
}
```

### Observe a directory recursively

To observe a directory recursively, call `observe()` with the `recursive` option set to `true`:

```js
// Observe a directory recursively
async function observeDirectory() {
  const directoryHandle = await window.showDirectoryPicker();

  await observer.observe(directoryHandle, { recursive: true });
}
```

## Specifications

Not currently part of a specification. See [https://github.com/whatwg/fs/pull/165](https://github.com/whatwg/fs/pull/165) for the relevant specification PR.

## Browser compatibility

{{Compat}}

## See also

- [File System API](/en-US/docs/Web/API/File_System_API)
- [The File System Observer API origin trial](https://developer.chrome.com/blog/file-system-observer#stop-observing-the-file-system) on developer.chrome.com (2024)
