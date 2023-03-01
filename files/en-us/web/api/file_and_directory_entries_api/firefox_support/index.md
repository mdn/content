---
title: File and Directory Entries API support in Firefox
slug: Web/API/File_and_Directory_Entries_API/Firefox_support
page-type: guide
---

{{DefaultAPISidebar("File and Directory Entries API")}}

The original File System API was created to let browsers implement support for accessing a sandboxed virtual file system on the user's storage device. Work to standardize the specification was abandoned back in 2012, but by that point, Google Chrome included its own implementation of the API. Over time, a number of popular sites and Web applications came to use it, often without providing any means of falling back to standard APIs or even checking to be sure the API is available before using it. Mozilla instead opted to implement other APIs which can be used to solve many of the same problems, such as [IndexedDB](/en-US/docs/Web/API/IndexedDB_API); see the blog post [Why no FileSystem API in Firefox?](https://hacks.mozilla.org/2012/07/why-no-filesystem-api-in-firefox/) for more insights.

This has caused a number of popular websites not to work properly on browsers other than Chrome. Because of that, an attempt was made to create a spec offering the features of Google's API which consensus could be reached on. The result was the [File and Directory Entries API](/en-US/docs/Web/API/File_and_Directory_Entries_API). This subset of the API provided by Chrome is still not fully specified; however, for web compatibility reasons, it was decided to implement a subset of the API in Firefox; this was introduced in Firefox 50.

This article describes how the Firefox implementation of the File and Directory Entries API differs from other implementations and/or the specification.

## Chrome deviations from the specification

The largest compatibility issue still remaining is that Chrome is still using older names for many of the interfaces in the API, since they implemented a related but different specification:

<table class="standard-table">
  <thead>
    <tr>
      <th scope="row">Name in specification</th>
      <th scope="col">Name in Google Chrome</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>FileSystemDirectoryEntry</code></td>
      <td><code>DirectoryEntry</code></td>
    </tr>
    <tr>
      <td><code>FileSystemDirectoryEntrySync</code></td>
      <td><code>DirectoryEntrySync</code></td>
    </tr>
    <tr>
      <td><code>FileSystemDirectoryReader</code></td>
      <td><code>DirectoryReader</code></td>
    </tr>
    <tr>
      <td><code>FileSystemDirectoryReaderSync</code></td>
      <td><code>DirectoryReaderSync</code></td>
    </tr>
    <tr>
      <td><code>FileSystemEntry</code></td>
      <td><code>Entry</code></td>
    </tr>
    <tr>
      <td><code>FileSystemEntrySync</code></td>
      <td><code>EntrySync</code></td>
    </tr>
    <tr>
      <td><code>FileSystemFileEntry</code></td>
      <td><code>FileEntry</code></td>
    </tr>
    <tr>
      <td><code>FileSystemFileEntrySync</code></td>
      <td><code>FileEntrySync</code></td>
    </tr>
  </tbody>
</table>

Be sure to account for this in your code by allowing for both names. Hopefully Chrome will be updated soon to use the newer names!

To ensure your code will work in both Chrome and other browsers, you can include code similar to the following:

```js
const FileSystemDirectoryEntry =
  window.FileSystemDirectoryEntry || window.DirectoryEntry;
const FileSystemEntry = window.FileSystemEntry || window.Entry;
```

## Limitations in Firefox

Next, let's look at limitations of the Firefox implementation of the API. In broad strokes, those limitations can be summarized as follows:

- Content scripts can't create file systems or initiate access to a file system. There are only two ways to get access to file system entries at this time:

  - The {{HTMLElement("input")}} element, using the {{domxref("HTMLInputElement.webkitEntries")}} property to access an array of {{domxref("FileSystemEntry")}} objects describing file system entries you can then read.
  - Using drag and drop by calling the {{domxref("DataTransferItem.webkitGetAsEntry")}} method, which lets you get a {{domxref("FileSystemFileEntry")}} or {{domxref("FileSystemDirectoryEntry")}} for files dropped on a drop zone.

- Firefox doesn't support the `"filesystem:"` URL scheme.

## See also

- [File and Directory Entries API](/en-US/docs/Web/API/File_and_Directory_Entries_API)
- [Introduction to the File and Directory Entries API](/en-US/docs/Web/API/File_and_Directory_Entries_API/Introduction)
- [File and Directory Entries API](https://wicg.github.io/entries-api/) specification
- Original specification for the [File API: Directories and System](https://dev.w3.org/2009/dap/file-system/file-dir-sys.html) (often called the "FileSystem API"); Google Chrome was the only browser to implement this **abandoned** API.
