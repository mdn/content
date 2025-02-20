---
title: File and Directory Entries API
slug: Web/API/File_and_Directory_Entries_API
page-type: web-api-overview
browser-compat: api.FileSystem
---

{{DefaultAPISidebar("File and Directory Entries API")}}

The File and Directory Entries API provides a way to process directories and file lists provided by the user via a form input or a drag-and-drop operation. It is a more advanced version of the [File API](/en-US/docs/Web/API/File), which allows you to work with a single file. It was originally intended to support a full virtual file system, but now only supports read operations on user-provided data.

See [Relationship to other file-related APIs](/en-US/docs/Web/API/File_API#relationship_to_other_file-related_apis) for a comparison between this API, the [File System API](/en-US/docs/Web/API/File_System_API), and the [File API](/en-US/docs/Web/API/File_API).

## Getting access to a file system

There are two ways to get access to file systems defined in the current specification draft:

- When handling a {{domxref("HTMLElement/drop_event", "drop")}} event for drag and drop, you can call {{domxref("DataTransferItem.webkitGetAsEntry()")}} to get the {{domxref("FileSystemEntry")}} for a dropped item. If the result isn't `null`, then it's a dropped file or directory, and you can use file system calls to work with it.
- The {{domxref("HTMLInputElement.webkitEntries")}} property lets you access the {{domxref("FileSystemFileEntry")}} objects for the currently selected files, but only if they are dragged-and-dropped onto the file chooser ([Firefox bug 1326031](https://bugzil.la/1326031)). If {{domxref("HTMLInputElement.webkitdirectory")}} is `true`, the {{HTMLElement("input")}} element is instead a directory picker, and you get {{domxref("FileSystemDirectoryEntry")}} objects for each selected directory.

## History

The original File System API was created to let browsers implement support for accessing a sandboxed virtual file system on the user's storage device. Work to standardize the specification was abandoned back in 2012, but by that point, Google Chrome included its own implementation of the API. Over time, a number of popular sites and Web applications came to use it, often without providing any means of falling back to standard APIs or even checking to be sure the API is available before using it. Mozilla instead opted to implement other APIs which can be used to solve many of the same problems, such as [IndexedDB](/en-US/docs/Web/API/IndexedDB_API); see the blog post [Why no FileSystem API in Firefox?](https://hacks.mozilla.org/2012/07/why-no-filesystem-api-in-firefox/) for more insights.

As a result, a number of popular websites did not work properly on browsers other than Chrome. To resolve that, the features of Google's API for which consensus could be reached were standardized as the File and Directory Entries API, and this was then implemented in other browsers.

## Interfaces

The File and Directory Entries API includes the following interfaces:

- {{domxref("FileSystem")}}
  - : Represents a file system.
- {{domxref("FileSystemEntry")}}
  - : The basic interface representing a single entry in a file system. This is implemented by other interfaces which represent files or directories.
- {{domxref("FileSystemFileEntry")}}
  - : Represents a single file in a file system.
- {{domxref("FileSystemDirectoryEntry")}}
  - : Represents a single directory in a file system.
- {{domxref("FileSystemDirectoryReader")}}
  - : Created by calling {{domxref("FileSystemDirectoryEntry.createReader()")}}, this interface provides the functionality which lets you read the contents of a directory.

### Extensions to other interfaces

- {{domxref("DataTransferItem.webkitGetAsEntry()")}}
  - : Returns an object based on {{domxref("FileSystemEntry")}} representing the selected file's entry in its file system. This will generally be either a {{domxref("FileSystemFileEntry")}} or {{domxref("FileSystemDirectoryEntry")}} object.
- {{domxref("File.webkitRelativePath")}}
  - : Returns the path the URL of the `File` is relative to.
- {{domxref("HTMLInputElement.webkitdirectory")}}
  - : A boolean that represents the [`webkitdirectory`](/en-US/docs/Web/HTML/Element/input#webkitdirectory) attribute. If `true`, the file-system-picker interface only accepts directories instead of files.
- {{domxref("HTMLInputElement.webkitEntries")}}
  - : Describes the currently selected files or directories.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [File API](/en-US/docs/Web/API/File_API)
- [File System API](/en-US/docs/Web/API/File_System_API)
