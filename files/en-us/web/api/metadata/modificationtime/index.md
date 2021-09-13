---
title: Metadata.modificationTime
slug: Web/API/Metadata/modificationTime
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
  - modificationTime
browser-compat: api.Metadata.modificationTime
---
{{APIRef("File System API")}}{{Non-standard_header}}

The read-only **`modificationTime`**
property of the {{domxref("Metadata")}} interface is a {{jsxref("Date")}} object which
specifies the date and time the file system entry (or the data referenced by the
entry) was last modified. A file system entry is considered to have been
modified if the metadata or the contents of the referenced file (or directory, or
whatever other kind of file system entry might exist on the platform in use) has
changed.

## Syntax

```js
var modificationTime = Metadata.modificationTime;
```

### Value

A {{jsxref("Date")}} timestamp indicating when the file system entry was last changed.

## Example

This example tries to get a particular working file at `tmp/workfile.json`.
Once that file has been found, its metadata is obtained and the file's modification
timestamp year is compared to the current year. If it was last modified in a year at
least five prior to the current year, the file is removed and a new one is created.

```js
workingDirectory.getFile("tmp/workfile.json", { create: true }, function(fileEntry) {
  fileEntry.getMetadata(function(metadata) {
    if ((new Date().getFullYear() - metadata.modificationTime.getFullYear()) >= 5) {
      fileEntry.remove(function() {
        workingDirectory.getFile("tmp/workfile.json", { create: true }, function(newEntry) {
          fileEntry = newEntry;
        });
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
