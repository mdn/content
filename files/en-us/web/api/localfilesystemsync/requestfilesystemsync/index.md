---
title: LocalFileSystemSync.requestFileSystemSync()
slug: Web/API/LocalFileSystemSync/requestFileSystemSync
browser-compat: api.LocalFileSystemSync.requestFileSystemSync
---
{{APIRef("File System API")}}{{SeeCompatTable}}{{deprecated_header}}

The **`requestFileSystemSync`** method of the `LocalFileSystemSync` interface of the [File System API](/en-US/docs/Web/API/File_and_Directory_Entries_API/Introduction) creates a new a sandboxed file system. It is intended to be used with [WebWorkers](/en-US/docs/Web/API/Worker). The methods are implemented by [worker](/en-US/docs/Web/API/Worker) objects.

> **Warning:** This document was last updated on March 2, 2012 and follows the [W3C Specifications (Working Draft)](https://www.w3.org/TR/file-system-api/) drafted on April 19, 2011.
>
> This specification is more or less abandoned, failing to get significant traction.

## Syntax

```js
LocalFileSystemSync.requestFileSystemSync(
  unsigned short type,
  unsigned long long size
);
```

### Parameters

- `type`
  - : The storage type of the file system. The values can be either `TEMPORARY` or `PERSISTENT`.
- `size`
  - : The storage space — in bytes — that you need for your app.

### Returns

- {{domxref("FileSystemSync")}}
  - : An object that represents the file system.

## Exceptions

This method can raise an [FileException](/en-US/docs/Web/API/FileException) with the following code:

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Exception</th>
      <th scope="col">Description</th>
    </tr>
    <tr>
      <td><code>SECURITY_ERROR</code></td>
      <td>
        The application does not have permission to access the file system
        interface. For example, you cannot run from <code>file://</code>. For
        more details, see the <a
          href="/en-US/docs/Web/API/File_and_Directory_Entries_API/Introduction#you_cannot_run_your_app_from_file:.2f.2f"
          >article on basic concepts</a
        >.
      </td>
    </tr>
  </thead>
</table>

## Examples

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

Since this interface is synchronous, it doesn't need success and error callbacks.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("LocalFileSystem.requestFileSystem")}}, asynchronous equivalent of this interface
- [File System API](/en-US/docs/Web/API/File_and_Directory_Entries_API/Introduction)
- [Basic Concepts About the File System API](/en-US/docs/Web/API/File_and_Directory_Entries_API/Introduction)
