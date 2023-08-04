---
title: "Metadata: size property"
short-title: size
slug: Web/API/Metadata/size
page-type: web-api-instance-property
status:
  - experimental
  - non-standard
browser-compat: api.Metadata.size
---

{{APIRef("File and Directory Entries API")}}{{Non-standard_header}}{{SeeCompatTable}}

The read-only **`size`** property of
the {{domxref("Metadata")}} interface specifies the size, in bytes, of the referenced
file or other file system object on disk.

## Value

A number indicating the size of the file in bytes.

## Examples

This example checks the size of a log file and removes it if it's larger than a
megabyte.

```js
workingDirectory.getFile(
  "log/important.log",
  {},
  (fileEntry) => {
    fileEntry.getMetadata((metadata) => {
      if (metadata.size > 1048576) {
        fileEntry.remove(() => {
          /* log file removed; do something clever here */
        });
      }
    });
  },
  handleError,
);
```

## Specifications

This feature has been removed from all specification and is not in the process of being standardized.

## Browser compatibility

{{Compat}}

## See also

- [File and Directory Entries API](/en-US/docs/Web/API/File_and_Directory_Entries_API)
- [Introduction to the File and Directory Entries API](/en-US/docs/Web/API/File_and_Directory_Entries_API/Introduction)
- {{domxref("Metadata")}}
- {{domxref("FileSystemEntry.getMetadata()")}}
- {{domxref("FileSystemFileEntry")}}
