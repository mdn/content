---
title: Introduction to the File and Directory Entries API
slug: Web/API/File_and_Directory_Entries_API/Introduction
page-type: guide
browser-compat: api.FileSystem
---

{{DefaultAPISidebar("File and Directory Entries API")}}

The [File and Directory Entries API](/en-US/docs/Web/API/File_and_Directory_Entries_API) simulates a local file system that web apps can navigate around. You can develop apps that can read, write, and create files and directories in a sandboxed, virtual file system.

The File and Directory Entries API interacts with other related APIs. It was built on the File Writer API, which, in turn, was built on File API. Each of the APIs adds different functionality. These APIs are a giant evolutionary leap for web apps, which can now cache and process large amounts of data.

## About this document

This introduction discusses essential concepts and terminology in the File and Directory Entries API. It gives you the big picture and orients you to [key concepts](#big_concepts). It also describes [restrictions](#restrictions) that raise security errors if you ignore them. To learn more about terminology used in this API, see the [Definitions](#definitions) section.

For the reference documentation on the File and Directory Entries API, see the [reference](/en-US/docs/Web/API/FileSystem) landing page and its subpages.

The specification is still being defined and is subject to change.

## Overview

The File and Directory Entries API includes both [asynchronous and synchronous versions](#asynchronous_and_synchronous_versions) of the interfaces. The asynchronous API can be used in cases where you don't want an outstanding operation to block the UI. The synchronous API, on the other hand, allows for simpler programming model, but it must be used with [WebWorkers](/en-US/docs/Web/API/Web_Workers_API/Using_web_workers).

### Usefulness of the API

The File and Directory Entries API is an important API for the following reasons:

- It lets apps have offline and storage features that involve large binary blobs.
- It can improve performance by letting an app pre-fetch assets in the background and cache locally.
- It lets users of your web app directly edit a binary file that's in their local file directory.
- It provides a storage API that is already familiar to your users, who are used to working with file systems.

For examples of features you can create with this app, see the [Sample use cases](#sample_use_cases) section.

### The File and Directory Entries API and other storage APIs

The File and Directory Entries API is an alternative to other storage APIs such as [IndexedDB](/en-US/docs/Web/API/IndexedDB_API/Basic_Terminology). The API is a better choice for apps that deal with blobs for the following reasons:

- The File and Directory Entries API offers client-side storage for use cases that are not addressed by databases. If you want to have large mutable chunks of data, the File and Directory Entries API is a much more efficient storage solution than a database.
- While Firefox supports blob storage for IndexedDB, Chrome currently does not (Chrome is still implementing support for blob storage in IndexedDB). If you are targeting Chrome for your app and you want to store blobs, the File and Directory Entries API and App Cache are your only choices. However, AppCache storage isn't locally mutable, and doesn't allow for fine-grained client-side management.
- In Chrome, you can use the File and Directory Entries API with the [Quota Management API](https://developer.chrome.com/docs/apps/offline_storage/), which lets you ask for more storage and manage your storage quota.

### Sample use cases

The following are just a few examples of how you can use the File and Directory Entries API:

- Apps with persistent uploader

  - When a file or directory is selected for upload, you can copy the file into a local sandbox and upload a chunk at a time.
  - The app can restart uploads after an interruption, such as the browser being closed or crashing, connectivity getting interrupted, or the computer getting shut down.

- Video game or other apps with lots of media assets

  - The app downloads one or several large tarballs and expands them locally into a directory structure.
  - The app pre-fetches assets in the background, so the user can go to the next task or game level without waiting for a download.

- Audio or photo editor with offline access or local cache (great for performance and speed)

  - The app can write to files in place (for example, overwriting just the ID3/EXIF tags and not the entire file).

- Offline video viewer

  - The app can download large files (>1GB) for later viewing.
  - The app can access partially downloaded files (so that you can watch the first chapter of your DVD, even if the app is still downloading the rest of the content or if the app didn't complete the download because you had to run to catch a train).

- Offline web mail client

  - The client downloads attachments and stores them locally.
  - The client caches attachments for later upload.

## Big concepts

Before using the File and Directory Entries API, you must understand a few concepts.

### Virtualized file system

The API doesn't give you access to the local file system, nor is the sandbox really a section of the file system. Instead, it is a virtualized file system that looks like a full-fledged file system to the web app. It does not necessarily have a relationship to the local file system outside the browser.

What this means is that a web app and a desktop app cannot share the same file at the same time. The API does not let your web app reach outside the browser to files that desktop apps can also work on. You can, however, export a file from a web app to a desktop app. For example, you can use the File API, create a blob, redirect an iframe to the blob, and invoke the download manager.

### Different storage types

An application can request temporary or persistent storage. Temporary storage is easier to get, because the browser just gives it to you, but it is limited and can be deleted by the browser when it runs out of space. Persistent storage, on the other hand, might offer you larger space that can only be deleted by the user, but it requires the user to grant you permission.

Use temporary storage for caching and persistent storage for data that you want your app to keep—such as user-generated or unique data.

### Storage quotas

To prevent a web app from using up the entire disk, browsers might impose a quota for each app and allocate storage among web apps.

How storage space is granted or allocated and how you can manage storage are idiosyncratic to the browser, so you need to check the respective documentation of the browser. Google Chrome, for example, allows temporary storage beyond the 5 MB required in the specifications and supports the Quota Management API. To learn more about the Chrome-specific implementation, see [Managing HTML Offline Storage](https://developer.chrome.com/docs/apps/offline_storage/).

### Asynchronous and synchronous versions

The File and Directory Entries API comes with asynchronous and synchronous versions. Both versions of the API offer the same capabilities and features. In fact, they are almost alike, except for a few differences.

- WebWorkers
  - : The asynchronous API can be used in either the document or [WebWorkers](/en-US/docs/Web/API/Web_Workers_API/Using_web_workers) context, while the synchronous API is for use with WebWorkers only.
- Callbacks
  - : The asynchronous API doesn't give you data by returning values; instead, you have to pass a callback function. You send requests for operations to happen, and get notified by callbacks. In contrast, the synchronous API does not use callbacks because the API methods return values.
- Global methods of the asynchronous and synchronous APIs
  - : The asynchronous API has the following global methods: `requestFileSystem()` and `resolveLocalFileSystemURL()`. These methods are members of both the window object and the worker global scope. The synchronous API, on the other hand, uses the following methods: `requestFileSystemSync()` and `resolveLocalFileSystemSyncURL()`. These synchronous methods are members of the worker's global scope only, not the window object.

The synchronous API can be simpler for some tasks. Its direct, in-order programming model can make code easier to read. The drawback of synchronous API has to do with its interactions with Web Workers, which has some limitations.

### Using the error callbacks for asynchronous API

When using the asynchronous API, always use the error callbacks. Although the error callbacks for the methods are optional parameters, they are not optional for your sanity. You want to know why your calls failed. At minimum, handle the errors to provide error messages, so you'll have an idea of what's going on.

### Interacting with other APIs

The File and Directory Entries API is designed to be used with other APIs and elements on the web platform. For example, you are likely to use one of the following:

- XMLHttpRequest (such as the `send()` method for file and blob objects)
- Drag and Drop API
- Web Workers (for the synchronous version of the File and Directory Entries API)
- The `input` element (to programmatically obtain a list of files from the element)

### Case-sensitive

The filesystem API is case-sensitive, and case-preserving.

## Restrictions

For security reasons, browsers impose restrictions on file access. If you ignore them, you will get security errors.

### Adhering to the same-origin policy

An origin is the domain, application layer protocol, and port of a URL of the document where the script is being executed. Each origin has its own associated set of file systems.

The security boundary imposed on file system prevents applications from accessing data with a different origin. This protects private data by preventing access and deletion. For example, while an app or a page in `http://www.example.com/app/` can access files from `http://www.example.com/dir/`, because they have the same origin, it cannot retrieve files from `http://www.example.com:8080/dir/` (different port) or `https://www.example.com/dir/` (different protocol).

### Unable to create and rename executable files

To prevent malicious apps from running hostile executables, you cannot create executable files within the sandbox of the File and Directory Entries API.

### Sandboxed file system

Because the file system is sandboxed, a web app cannot access another app's files. You also cannot read or write files to an arbitrary folder (for example, My Pictures and My Documents) on the user's hard drive.

### You cannot run your app from file://

You cannot run your app locally from `file://`. If you do so, the browser throws errors or your app fails silently. This restriction also applies to many of the file APIs, including Blob and FileReader.

For testing purposes, you can bypass the restriction on Chrome by starting the browser with the `--allow-file-access-from-files` flag. Use this flag only for this purpose.

## Definitions

This section defines and explains terms used in the File and Directory Entries API.

- blob
  - : Stands for binary large object. A blob is a set of binary data that is stored as a single object. It is a general-purpose way to reference binary data in web applications. A blob can be an image or an audio file.
- Blob
  - : Blob—with a capital B—is a data structure that is immutable, which means that binary data referenced by a Blob cannot be modified directly. This makes Blobs act predictably when they are passed to asynchronous APIs.
- persistent storage
  - : Persistent storage is storage that stays in the browser unless the user expunges it or the app deletes it.
- temporary storage
  - : Transient storage is available to any web app. It is automatic and does not need to be requested, but the browser can delete the storage without warning.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [File and Directory Entries API](/en-US/docs/Web/API/File_and_Directory_Entries_API)
- [Read files in JavaScript](https://web.dev/read-files/) (web.dev)
