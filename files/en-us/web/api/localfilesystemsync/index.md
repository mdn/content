---
title: LocalFileSystemSync
slug: Web/API/LocalFileSystemSync
tags:
  - API
  - File API
  - File System API
  - Offline
  - Reference
  - filesystem
browser-compat: api.LocalFileSystemSync
---
{{APIRef("File System API")}}{{non-standard_header()}}

The `LocalFileSystemSync` interface of the [File System API](/en-US/docs/Web/API/File_and_Directory_Entries_API/Introduction) gives you access to a sandboxed file system. It is intended to be used with [WebWorkers](/en-US/docs/Web/API/Worker). The methods are implemented by [worker](/en-US/docs/Web/API/Worker) objects.

## About this document

This document was last updated on March 2, 2012 and follows the [W3C Specifications (Working Draft)](https://www.w3.org/TR/file-system-api/) drafted on April 19, 2011.

This specification is more or less abandoned, failing to get significant traction.

## Basic concepts

You can request access to a sandboxed file system by requesting `LocalFileSystemSync` object from within a web worker. The global methods in the `window` object `requestFileSystemSync()` and `resolveLocalFileSystemSyncURL()` methods are exposed to the Worker's global scope. Calling `window.requestFileSystemSync()` for creates new storage for your web app.

For more concepts, see the counterpart [article for the asynchronous API](/en-US/docs/Web/API/LocalFileSystem#basic_concepts).

### Example

```js
//Taking care of the browser-specific prefix
window.requestFileSystemSync  = window.requestFileSystemSync || window.webkitRequestFileSystemSync;

// The first parameter defines the type of storage: persistent or temporary
// Next, set the size of space needed (in bytes)
// initFs is the success callback
// And the last one is the error callback
// for denial of access and other errors.

var fs = requestFileSystemSync(TEMPORARY, 1024*1024 /*1MB*/);
```

Because you are using a synchronous API, you don't need success and error callbacks.

## Method overview

<table class="no-markdown">
  <tbody>
    <tr>
      <td>
        <code
          >FileSystemSync
          <a href="#requestfilesystemsync">requestFileSystemSync</a> (in
          unsigned short <em>type</em>, in long long <em>size</em>) raises
          <a href="/en-US/docs/Web/API/FileException">FileException</a>;</code
        >
      </td>
    </tr>
    <tr>
      <td>
        <code
          >EntrySync
          <a href="#resolvelocalfilesystemsyncurl"
            >resolveLocalFileSystemSyncURL</a
          >
          (in DOMString <em>url</em>) raises
          <a href="/en-US/docs/Web/API/FileException">FileException</a>;</code
        >
      </td>
    </tr>
  </tbody>
</table>

## Constants

<table>
  <thead>
    <tr>
      <th scope="col">Constant</th>
      <th scope="col">Value</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>TEMPORARY</code></td>
      <td><code>0</code></td>
      <td>
        <p>
          Transient storage that can be removed by the browser at its
          discretion.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>PERSISTENT</code></td>
      <td><code>1</code></td>
      <td>
        Storage that stays in the browser unless the user or the app expunges
        it.
      </td>
    </tr>
  </tbody>
</table>

## Methods

### requestFileSystemSync()

Requests a file system where data should be stored. You access a sandboxed file system by requesting a `LocalFileSystemSync` object from within a web worker using this global method, `window.requestFileSystemSync()`. \[ RESEARCH ]

    FileSystemSync requestFileSystemSync(
      in unsigned short type,
      in unsigned long long size
    );

##### Parameters

- type
  - : The storage type of the file system. The values can be either [`TEMPORARY` or `PERSISTENT`](#Constants).
- size
  - : The storage space—in bytes—that you need for your app.

##### Returns

- [`FileSystemSync`](/en-US/docs/Web/API/FileSystemSync)
  - : An object that represents the file system.

##### Exceptions

This method can raise an [FileException](/en-US/docs/Web/API/FileException) with the following code:

| Exception        | Description                                                                                                                                                                                                                                                                                |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `SECURITY_ERROR` | The application does not have permission to access the file system interface. For example, you cannot run from `file://`. For more details, see the [article on basic concepts](/en-US/docs/Web/API/File_and_Directory_Entries_API/Introduction#you_cannot_run_your_app_from_file:.2f.2f). |

### resolveLocalFileSystemSyncURL()

Allows the user to look up the `Entry` for a file or directory referred to by a local URL.

    void resolveLocalFileSystemURL(
      in DOMString url
    );

##### Parameter

- url
  - : The URL of a local file in the file system.

##### Returns

- [`EntrySync`](/en-US/docs/Web/API/FileSystemEntrySync)
  - : An object that represents entries in the file system.

##### Exceptions

This method can raise a [FileException](/en-US/docs/Web/API/FileException) with the following codes:

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Exception</th>
      <th scope="col">Description</th>
    </tr>
    <tr>
      <td><code>ENCODING_ERR</code></td>
      <td>The syntax of the URL was invalid.</td>
    </tr>
    <tr>
      <td><code>NOT_FOUND_ERR</code></td>
      <td>
        The URL was structurally correct, but refers to a resource that does not
        exist.
      </td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>SECURITY_ERR</code></td>
      <td>
        The application does not have permission to access the file system
        interface.
      </td>
    </tr>
  </tbody>
</table>

## Browser compatibility

{{Compat}}

## See also

Specification:{{ spec("http://dev.w3.org/2009/dap/file-system/pub/FileSystem/", "File API: Directories and System Specification", "WD") }}

Reference: [File System API](/en-US/docs/Web/API/File_and_Directory_Entries_API/Introduction)

Introduction: [Basic Concepts About the File System API](/en-US/docs/Web/API/File_and_Directory_Entries_API/Introduction)
