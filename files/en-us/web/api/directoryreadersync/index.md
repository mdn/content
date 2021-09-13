---
title: DirectoryReaderSync
slug: Web/API/DirectoryReaderSync
tags:
  - API
  - Reference
browser-compat: api.DirectoryReaderSync
---
{{APIRef("File System API")}}{{Non-standard_header}}

The `DirectoryReaderSync` interface of the [File System API](/en-US/docs/Web/API/File_and_Directory_Entries_API/Introduction) lets you read the entries in a directory.

> **Note:** This interface has been abandoned: it was on a standard track and it proves not a good idea. Do not use it anymore.

## About this document

This document was last updated on March 2, 2012 and follows the [W3C Specifications (Working Draft)](https://www.w3.org/TR/file-system-api/) drafted on April 19, 2011.

This specification is pretty much abandoned, having failed to reach any substantial traction.

## Basic concepts

Before you call the only method in this interface, [`readEntries()`](</#readEntries()> "#readEntries()"), create the [`DirectoryEntrySync`](/en-US/docs/Web/API/DirectoryEntrySync) object. But DirectoryEntrySync (as well as [FileEntrySync](/en-US/docs/Web/API/FileEntrySync)) is not a data type that you can pass between a calling app and Web Worker thread. It's not a big deal, because you don't really need to have the main app and the worker thread see the same JavaScript object; you just need them to access the same files. You can do that by passing a list of  `filesystem:` URLs—which are just strings—instead of a list of entries. You can also use the `filesystem:` URL to look up the entry with [`resolveLocalFileSystemURL()`](</en-US/docs/Web/API/LocalFileSystem#resolvelocalfilesystemurl()>). That gets you back to a DirectoryEntrySync (as well as FileEntrySync) object.

#### Example

In the following code snippet from [HTML5Rocks](http://www.html5rocks.com/en/tutorials/file/filesystem/), we create Web Workers and pass data from it to the main app.

```js
// Taking care of the browser-specific prefixes.
  window.resolveLocalFileSystemURL = window.resolveLocalFileSystemURL ||
                                     window.webkitResolveLocalFileSystemURL;

// Create web workers
  var worker = new Worker('worker.js');
  worker.onmessage = function(e) {
    var urls = e.data.entries;
    urls.forEach(function(url, i) {
      window.resolveLocalFileSystemURL(url, function(fileEntry) {
        // Print out file's name.
        console.log(fileEntry.name);
      });
    });
  };

  worker.postMessage({'cmd': 'list'});
```

The following is Worker.js code that gets the contents of the directory.

```js
// Taking care of the browser-specific prefixes.
self.requestFileSystemSync = self.webkitRequestFileSystemSync ||
                             self.requestFileSystemSync;

// Global for holding the list of entry file system URLs.
var paths = [];

function getAllEntries(dirReader) {
  var entries = dirReader.readEntries();

  for (var i = 0, entry; entry = entries[i]; ++i) {
    // Stash this entry's filesystem in URL
    paths.push(entry.toURL());

    // If this is a directory, traverse.
    if (entry.isDirectory) {
      getAllEntries(entry.createReader());
    }
  }
}

// Forward the error to main app.
function onError(e) {
  postMessage('ERROR: ' + e.toString());
}

self.onmessage = function(e) {
  var data = e.data;

  // Ignore everything else except our 'list' command.
  if (!data.cmd || data.cmd != 'list') {
    return;
  }

  try {
    var fs = requestFileSystemSync(TEMPORARY, 1024*1024 /*1MB*/);

    getAllEntries(fs.root.createReader());

    self.postMessage({entries: paths});
  } catch (e) {
    onError(e);
  }
};
```

## Method overview

<table class="standard-table">
  <tbody>
    <tr>
      <td>
        <code
          >EntrySync
          <a href="#createreader" title="#readEntries">readEntries</a> () raises
          (<a href="/en-US/docs/Web/API/FileException">FileException</a>);</code
        >
      </td>
    </tr>
  </tbody>
</table>

## Method

### readEntries()

Returns a lost of entries from a specific directory. Call this method until an empty array is returned.

    EntrySync readEntries (
    ) raises (FileException);

##### Returns

##### Parameter

None

##### Exceptions

This method can raise a [FileException](/en-US/docs/Web/API/FileException) with the following codes:

| Exception           | Description                                                                        |
| ------------------- | ---------------------------------------------------------------------------------- |
| `NOT_FOUND_ERR`     | The directory does not exist.                                                      |
| `INVALID_STATE_ERR` | The directory has been modified since the first call to readEntries was processed. |
| `SECURITY_ERR`      | The browser determined that it was not safe to look up the metadata.               |

## Browser compatibility

{{Compat}}

## See also

Specification: {{ spec("http://dev.w3.org/2009/dap/file-system/pub/FileSystem/", "File API: Directories and System Specification", "WD") }}

Reference: [File System API](/en-US/docs/Web/API/File_and_Directory_Entries_API/Introduction)

Introduction: [Basic Concepts About the File System API](/en-US/docs/Web/API/File_and_Directory_Entries_API/Introduction)
