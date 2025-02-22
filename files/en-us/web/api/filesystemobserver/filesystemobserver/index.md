---
title: "FileSystemObserver: FileSystemObserver() constructor"
short-title: FileSystemObserver()
slug: Web/API/FileSystemObserver/FileSystemObserver
page-type: web-api-constructor
status:
  - experimental
browser-compat: api.FileSystemObserver.FileSystemObserver
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

The **`FileSystemObserver()`** constructor creates a new {{domxref("FileSystemObserver")}} object instance.

## Syntax

```js-nolint
new FileSystemObserver(callback)
```

### Parameters

- `callback`
  - : A user-defined callback function that will be called when the observer has observed a change in the file system entry it has been tasked to observe (via {{domxref("FileSystemObserver.observe()")}}). The callback function body can be specified to return and process file change observations in any way you want, however, it always includes the following two parameters:
    - `records`
      - : An array of [`FileSystemChangeRecord`](#filesystemchangerecord_structure) objects that contain details of all the observed changes.
    - `observer`
      - : A reference to the current `FileSystemObserver` object, which is made available in case, for example, you want to stop observations after the current records have been received using the {{domxref('FileSystemObserver.disconnect()')}} method.

#### `FileSystemChangeRecord` structure

`FileSystemChangeRecord` objects have the following structure:

- `changedHandle`
  - : A reference to the file system handle that the change was observed on. This can be a {{domxref("FileSystemFileHandle")}} or {{domxref("FileSystemDirectoryHandle")}} for the user-observable file system and the [Origin Private File System](/en-US/docs/Web/API/File_System_API/Origin_private_file_system) (OPFS), or a {{domxref("FileSystemSyncAccessHandle")}} for the OPFS. This property will be `null` for records with a `"disappeared"`, `"errored"`, or `"unknown"` type.
- `relativePathComponents`
  - : An array containing the path components that make up the relative file path from the `root` to the `changedHandle`, including the `changedHandle` filename.
- `relativePathMovedFrom`
  - : An array containing the path components that make up the relative file path from the `root` to the `changedHandle`'s former location, in the case of observations with a `"moved"` type. If the type is not `"moved"`, this property will be `null`.
- `root`
  - : A reference to the root file system handle, that is, the one passed to the `observe()` call that started the observation. Again, this can be a {{domxref("FileSystemFileHandle")}}, {{domxref("FileSystemDirectoryHandle")}}, or {{domxref("FileSystemSyncAccessHandle")}}.
- `type`
  - : A string representing the type of change that was observed. Possible values are:
    - `appeared`
      - : The file or directory was created or moved into the `root` file structure.
    - `disappeared`
      - : The file or directory was deleted or moved out of the `root` file structure. To find out which file or directory disappeared, you can query the `relativePathComponents` property.
    - `errored`
      - : An error state occured in the observed directory. This can result when:
        - The observation is no longer valid. This can occur when the observed handle (that is, the `root` of the observation) is deleted or moved. In this case, a `"disappeared"` observation will be recorded, followed by an `"errored"` observation. In such cases, you may wish to stop observing the file system using {{domxref("FileSystemObserver.disconnect()")}}.
        - The maximum limit of per-origin observations is reached. This limit is dependent on the operating system and not known beforehand. If this happens, the site may decide to retry, though there's no guarantee that the operating system will have freed up enough resources.
        - Permission to access the directory or file handle is removed.
    - `modified`
      - : The file or directory was modified.
    - `moved`
      - : The file or directory was moved within the root file structure.
        > [!NOTE]
        > On Windows, `"moved"` observations aren't supported between directories. They are reported as a `"disappeared"` observation in the source directory and an `"appeared"` observation in the destination directory. They are reported as `"moved"` when the source and destination are both in the same directory.
    - `unknown`
      - : Indicates that some observations were missed. If you wish to find out information on what changed in the missed observations, you could fall back to polling the observed directory.

Depending on the operating system, not all observations will be reported with the same level of detail, for example, when the contents of a directory change recursively. At best, the website will receive a detailed change record containing the type of change and a handle to the affected path. At worst, the website will receive a more generic change record (that is, an `"unknown"` type) that still requires it to enumerate the directory to figure out which handle changed.

This is still an improvement over polling, since the directory enumeration can be kicked off on-demand from the callback function, rather than needing to poll for changes in intervals.

### Return value

A new {{domxref("FileSystemObserver")}} object.

## Examples

> [!NOTE]
> For a complete working example, check out [File System Observer Demo](https://file-system-observer.glitch.me/).

### Initializing a `FileSystemObserver`

Before you can start observing file or directory changes, you need to initialize a `FileSystemObserver` to handle the observations:

```js
const observer = new FileSystemObserver(callback);
```

The callback function body can be specified to return and process file change observations in any way you want:

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

## Specifications

Not currently part of a specification. See [https://github.com/whatwg/fs/pull/165](https://github.com/whatwg/fs/pull/165) for the relevant specification PR.

## Browser compatibility

{{Compat}}

## See also

- [File System API](/en-US/docs/Web/API/File_System_API)
- [The File System Observer API origin trial](https://developer.chrome.com/blog/file-system-observer#stop-observing-the-file-system) on developer.chrome.com (2024)
