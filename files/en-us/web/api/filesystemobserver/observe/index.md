---
title: "FileSystemObserver: observe() method"
short-title: observe()
slug: Web/API/FileSystemObserver/observe
page-type: web-api-instance-method
browser-compat: api.FileSystemObserver.observe
---

{{securecontext_header}}{{APIRef("File System API")}}

The **`observe()`** method of the
{{domxref("FileSystemObserver")}} interface asks the observer to start observing changes to a given file or directory.

## Syntax

```js-nolint
observe(handle)
observe(handle, options)
```

### Parameters

- `handle`

  - : The handle of the file system entry representing the file or directory to observe.

    - For the user-observable file system, this can be a {{domxref("FileSystemFileHandle")}} or a {{domxref("FileSystemDirectoryHandle")}}.
    - For the [Origin Private File System](/en-US/docs/Web/API/File_System_API/Origin_private_file_system) (OPFS), it can be a {{domxref("FileSystemFileHandle")}}, a {{domxref("FileSystemDirectoryHandle")}}, or a {{domxref("FileSystemSyncAccessHandle")}}.

- `options` {{optional_inline}}

  - : An object specifying options for the `observe()` call. This can contain the following properties:

    - `recursive`

      - : A boolean specifying whether you want to observe changes to a directory recursively. If set to `true`, changes are observed in the directory itself and all contained subdirectories and files. If set to `false`, changes are only observed in the directory itself and directly contained files (that is, files in subdirectories are excluded). Defaults to `false`.

        This property has no effect if `handle` represents a file.

### Return value

A {{jsxref("Promise")}} that resolves to {{jsxref('undefined')}}.

### Exceptions

- `NotFoundError` {{domxref("DOMException")}}
  - : Thrown if the file or directory represented by `handle` could not be found.

## Examples

### Observe a file or directory

Assuming a `FileSystemObserver` instance is available, you can start observing changes to a file system entry by calling `observe()`.

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
