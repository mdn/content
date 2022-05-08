---
title: FileSystemSync
slug: Web/API/FileSystemSync
tags:
  - API
  - File API
  - File and Directory Entries API
  - Files
  - Offline
  - filesystem
browser-compat: api.FileSystemSync
---
{{APIRef("File and Directory Entries API")}} {{non-standard_header}}

In the [File and Directory Entries API](/en-US/docs/Web/API/File_and_Directory_Entries_API/Introduction), a `FileSystemSync` object represents a file system. It has two properties.

## About this document

This document was last updated on March 2, 2012 and follows the [W3C Specifications (Working Draft)](https://www.w3.org/TR/file-system-api/) drafted on April 19, 2011.

The specification is abandoned for the moment, failing to get significant traction.

## Basic concepts

The `FileSystemSync` object is your gateway to the entire API and you will use it a lot. So once you have a reference, cache the object in a global variable or class property.

## Attributes

| Attribute | Type                      | Description                                                                               |
| --------- | ------------------------- | ----------------------------------------------------------------------------------------- |
| `name`    | `readonly DOMString`      | Name of the file system. The name must be unique across the list of exposed file systems. |
| `root`    | `readonly DirectoryEntry` | The root directory of the file system.                                                    |

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [File and Directory Entries API](/en-US/docs/Web/API/File_and_Directory_Entries_API)
- [Introduction to the File and Directory Entries API](/en-US/docs/Web/API/File_and_Directory_Entries_API/Introduction)
