---
title: Metadata.size
slug: Web/API/Metadata/size
tags:
  - API
  - File System API
  - File and Directory Entries API
  - Files
  - Non-standard
  - Offline
  - Property
  - Reference
  - metadata
  - size
browser-compat: api.Metadata.size
---
{{APIRef("File System API")}}{{Non-standard_header}}

The read-only **`size`** property of
the {{domxref("Metadata")}} interface specifies the size, in bytes, of the referenced
file or other file system object on disk.

## Syntax

```js
var size = Metadata.size;
```

### Value

A number indicating the size of the file in bytes.

## Example

This example checks the size of a log file and removes it if it's larger than a
megabyte.

```js
workingDirectory.getFile("log/important.log", {}, function(fileEntry) {
  fileEntry.getMetadata(function(metadata) {
    if (metadata.size > 1048576) {
      fileEntry.remove(function() {
        /* log file removed; do something clever here */
      });
    }
  });
}, handleError);
```

## Specifications

This API has no official W3C or WHATWG specification.

## Browser compatibility

{{Compat}}

## See also

- [File and Directory
  Entries API](/en-US/docs/Web/API/File_and_Directory_Entries_API)
- [Introduction
  to the File System API](/en-US/docs/Web/API/File_and_Directory_Entries_API/Introduction)
- {{domxref("Metadata")}}
- {{domxref("FileSystemEntry.getMetadata()")}}
- {{domxref("FileSystemFileEntry")}}
