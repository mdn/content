---
title: File and Directory Entries API
slug: Web/API/File_and_Directory_Entries_API
page-type: web-api-overview
tags:
  - API
  - File and Directory Entries API
  - Files
  - Overview
  - Reference
browser-compat: api.FileSystem
---
{{DefaultAPISidebar("File and Directory Entries API")}}

The File and Directory Entries API simulates a local file system that web apps can navigate within and access files in. You can develop apps which read, write, and create files and/or directories in a virtual, sandboxed file system.

## Getting access to a file system

There are two ways to get access to file systems defined in the current specification draft:

- When handling a {{domxref("HTMLElement/drop_event", "drop")}} event for drag and drop, you can call {{domxref("DataTransferItem.webkitGetAsEntry()")}} to get the {{domxref("FileSystemEntry")}} for a dropped item. If the result isn't `null`, then it's a dropped file or directory, and you can use file system calls to work with it.
- The {{domxref("HTMLInputElement.webkitEntries")}} property lets you access the {{domxref("FileSystemFileEntry")}} objects for the currently selected files, but only if they are dragged-and-dropped onto the file chooser ({{bug(1326031)}}). If {{domxref("HTMLInputElement.webkitdirectory")}} is `true`, the {{HTMLElement("input")}} element is instead a directory picker, and you get {{domxref("FileSystemDirectoryEntry")}} objects for each selected directory.

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

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Introduction to the File and Directory Entries API](/en-US/docs/Web/API/File_and_Directory_Entries_API/Introduction)
- [File and Directory Entries API support in Firefox](/en-US/docs/Web/API/File_and_Directory_Entries_API/Firefox_support)
