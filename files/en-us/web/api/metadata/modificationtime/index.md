---
title: "Metadata: modificationTime property"
short-title: modificationTime
slug: Web/API/Metadata/modificationTime
page-type: web-api-instance-property
status:
  - experimental
  - non-standard
browser-compat: api.Metadata.modificationTime
---

{{APIRef("File and Directory Entries API")}}{{Non-standard_header}}{{SeeCompatTable}}

The read-only **`modificationTime`**
property of the {{domxref("Metadata")}} interface is a {{jsxref("Date")}} object which
specifies the date and time the file system entry (or the data referenced by the
entry) was last modified. A file system entry is considered to have been
modified if the metadata or the contents of the referenced file (or directory, or
whatever other kind of file system entry might exist on the platform in use) has
changed.

## Value

A {{jsxref("Date")}} timestamp indicating when the file system entry was last changed.

## Examples

This example tries to get a particular working file at `tmp/workfile.json`.
Once that file has been found, its metadata is obtained and the file's modification
timestamp year is compared to the current year. If it was last modified in a year at
least five prior to the current year, the file is removed and a new one is created.

```js
workingDirectory.getFile(
  "tmp/workfile.json",
  { create: true },
  (fileEntry) => {
    fileEntry.getMetadata((metadata) => {
      if (
        new Date().getFullYear() - metadata.modificationTime.getFullYear() >=
        5
      ) {
        fileEntry.remove(() => {
          workingDirectory.getFile(
            "tmp/workfile.json",
            { create: true },
            (newEntry) => {
              fileEntry = newEntry;
            },
          );
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
