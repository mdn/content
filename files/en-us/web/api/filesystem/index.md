---
title: FileSystem
slug: Web/API/FileSystem
page-type: web-api-interface
browser-compat: api.FileSystem
---

{{APIRef("File and Directory Entries API")}}

The File and Directory Entries API interface **`FileSystem`** is used to represent a file system. These objects can be obtained from the {{domxref("FileSystemEntry.filesystem", "filesystem")}} property on any file system entry. Some browsers offer additional APIs to create and manage file systems, such as Chrome's {{domxref("Window.requestFileSystem", "requestFileSystem()")}} method.

This interface will not grant you access to the users' filesystem. Instead, you will have a "virtual drive" within the browser sandbox if you want to gain access to the users' file system, you need to invoke the user, for example by installing a Chrome extension. The relevant Chrome API can be found [here](https://developer.chrome.com/docs/apps/reference/fileSystem).

## Basic concepts

There are two ways to get access to a `FileSystem` object:

1. You can directly ask for one representing a sandboxed file system created just for your web app directly by calling `window.requestFileSystem()`. If that call is successful, it executes a callback handler, which receives as a parameter a `FileSystem` object describing the file system.
2. You can get it from a file system entry object, through its {{domxref("FileSystemEntry.filesystem", "filesystem")}} property.

## Instance properties

- {{domxref("FileSystem.name")}} {{ReadOnlyInline}}
  - : A string representing the file system's name. This name is unique among the entire list of exposed file systems.
- {{domxref("FileSystem.root")}} {{ReadOnlyInline}}
  - : A {{domxref("FileSystemDirectoryEntry")}} object which represents the file system's root directory. Through this object, you can gain access to all files and directories in the file system.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [File and Directory Entries API](/en-US/docs/Web/API/File_and_Directory_Entries_API)
- {{domxref("FileSystemEntry")}}, {{domxref("FileSystemFileEntry")}}, and {{domxref("FileSystemDirectoryEntry")}}
