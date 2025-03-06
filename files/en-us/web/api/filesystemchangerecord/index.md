---
title: FileSystemChangeRecord
slug: Web/API/FileSystemChangeRecord
page-type: web-api-interface
---

{{APIRef("File System API")}}

The **`FileSystemChangeRecord`** dictionary of the {{domxref("File System API", "File System API", "", "nocode")}} contains details of a single change observed by a {{domxref("FileSystemObserver")}}.

The `records` argument passed into the {{domxref("FileSystemObserver.FileSystemObserver", "FileSystemObserver()")}} constructor's callback function is an array of `FileSystemChangeRecord` objects.

## Instance properties

- `changedHandle`

  - : A reference to the file system handle that the change was observed on.

    - For the user-observable file system, this can be a {{domxref("FileSystemFileHandle")}} or a {{domxref("FileSystemDirectoryHandle")}}.
    - For the [Origin Private File System](/en-US/docs/Web/API/File_System_API/Origin_private_file_system) (OPFS), it can be a {{domxref("FileSystemFileHandle")}}, a {{domxref("FileSystemDirectoryHandle")}}, or a {{domxref("FileSystemSyncAccessHandle")}}.

    This property will be `null` for records with a `"disappeared"`, `"errored"`, or `"unknown"` type.

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
      - : An error state occurred in the observed directory. This can result when:
        - The observation is no longer valid. This can occur when the observed handle (that is, the `root` of the observation) is deleted or moved. In this case, a `"disappeared"` observation will be recorded, followed by an `"errored"` observation. In such cases, you may wish to stop observing the file system using {{domxref("FileSystemObserver.disconnect()")}}.
        - The maximum limit of per-origin observations is reached. This limit is dependent on the operating system and not known beforehand. If this happens, the site may decide to retry, though there's no guarantee that the operating system will have freed up enough resources.
        - Permission to access the directory or file handle is removed.
    - `modified`
      - : The file or directory was modified.
    - `moved`
      - : The file or directory was moved within the root file structure.
        > [!NOTE]
        > On Windows, `"moved"` observations aren't supported between directories. They are reported as a `"disappeared"` observation in the source directory and an `"appeared"` observation in the destination directory.
    - `unknown`
      - : Indicates that some observations were missed. If you wish to find out information on what changed in the missed observations, you could fall back to polling the observed directory.

Depending on the operating system, not all observations will be reported with the same level of detail, for example, when the contents of a directory change recursively. At best, the website will receive a detailed change record containing the type of change and a handle to the affected path. At worst, the website will receive a more generic change record (that is, an `"unknown"` type) that still requires it to enumerate the directory to figure out which handle changed.

This is still an improvement over polling, since the directory enumeration can be kicked off on-demand from the callback function, rather than needing to poll for changes periodically.

## Examples

### Initialize a `FileSystemObserver`

Before you can start observing file or directory changes, you need to initialize a `FileSystemObserver` to handle the observations. This is done using the {{domxref("FileSystemObserver.FileSystemObserver", "FileSystemObserver()")}} constructor, which takes a callback function as an argument:

```js
const observer = new FileSystemObserver(callback);
```

The [callback function](/en-US/docs/Web/API/FileSystemObserver/FileSystemObserver#callback) body can be specified to return and process file change observations in any way you want. Each object inside the `records` array is a `FileSystemChangeRecord` object:

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

## See also

- {{domxref("FileSystemObserver.FileSystemObserver", "FileSystemObserver()")}} constructor
- [File System API](/en-US/docs/Web/API/File_System_API)
- [The File System Observer API origin trial](https://developer.chrome.com/blog/file-system-observer#stop-observing-the-file-system) on developer.chrome.com (2024)
