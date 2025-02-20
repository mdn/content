---
title: FileSystemFileEntry
slug: Web/API/FileSystemFileEntry
page-type: web-api-interface
browser-compat: api.FileSystemFileEntry
---

{{APIRef("File and Directory Entries API")}}

The **`FileSystemFileEntry`** interface of the [File and Directory Entries API](/en-US/docs/Web/API/File_and_Directory_Entries_API) represents a file in a file system. It offers properties describing the file's attributes, as well as the {{domxref("FileSystemFileEntry.file", "file()")}} method, which creates a {{domxref("File")}} object that can be used to read the file.

{{InheritanceDiagram}}

## Instance properties

_Inherits the properties of its parent interface, {{domxref("FileSystemEntry")}}, but has no properties unique to this interface._

## Instance methods

- {{domxref("FileSystemFileEntry.createWriter", "createWriter()")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Returns a {{domxref("FileWriter")}} object which can be used to write data into the file represented by the directory entry.
- {{domxref("FileSystemFileEntry.file", "file()")}}
  - : Creates a new {{domxref("File")}} object which can be used to read the file.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [File and Directory Entries API](/en-US/docs/Web/API/File_and_Directory_Entries_API)
