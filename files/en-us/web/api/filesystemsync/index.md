---
title: FileSystemSync
slug: Web/API/FileSystemSync
page-type: web-api-interface
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

> **Warning:** This interface is deprecated and is no more on the standard track.
> _Do not use it anymore._ Use the [File and Directory Entries API](/en-US/docs/Web/API/File_and_Directory_Entries_API) instead.

## Basic concepts

The `FileSystemSync` object is your gateway to the entire API and you will use it a lot. So once you have a reference, cache the object in a global variable or class property.

## Attributes

| Attribute | Type                      | Description                                                                               |
| --------- | ------------------------- | ----------------------------------------------------------------------------------------- |
| `name`    | `readonly DOMString`      | Name of the file system. The name must be unique across the list of exposed file systems. |
| `root`    | `readonly DirectoryEntry` | The root directory of the file system.                                                    |

## Specifications

This feature is not part of any specification anymore. It is no longer on track to become a standard.

## Browser compatibility

{{Compat}}

## See also

- [File and Directory Entries API](/en-US/docs/Web/API/File_and_Directory_Entries_API)
- [Introduction to the File and Directory Entries API](/en-US/docs/Web/API/File_and_Directory_Entries_API/Introduction)
