---
title: "FileSystemObserver: FileSystemObserver() constructor"
short-title: FileSystemObserver()
slug: Web/API/FileSystemObserver/FileSystemObserver
page-type: web-api-constructor
status:
  - experimental
  - non-standard
browser-compat: api.FileSystemObserver.FileSystemObserver
---

{{APIRef("File System API")}}{{SeeCompatTable}}{{non-standard_header}}

The **`FileSystemObserver()`** constructor creates a new {{domxref("FileSystemObserver")}} object instance.

## Syntax

```js-nolint
new FileSystemObserver(callback)
```

### Parameters

- `callback`
  - : A user-defined callback function that will be called when the observer has observed a change in the file system entry it has been asked to observe (via {{domxref("FileSystemObserver.observe()")}}). The callback function will be passed the following two parameters:
    - `records`
      - : An array of {{domxref("FileSystemChangeRecord")}} objects that contain details of all the observed changes.
    - `observer`
      - : A reference to the current `FileSystemObserver` object, which is made available in case, for example, you want to stop observations after the current records have been received using the {{domxref('FileSystemObserver.disconnect()')}} method.

### Return value

A new {{domxref("FileSystemObserver")}} object.

## Examples

> [!NOTE]
> For a complete working example, check out [File System Observer Demo](https://mdn.github.io/dom-examples/filesystemobserver/) ([source code](https://github.com/mdn/dom-examples/tree/main/filesystemobserver)).

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
