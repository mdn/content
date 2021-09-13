---
title: FileEntrySync
slug: Web/API/FileEntrySync
tags:
  - API
  - File
  - File System API
  - Interface
  - Non-standard
  - Reference
browser-compat: api.FileEntrySync
---
{{APIRef("File System API")}} {{Non-standard_header}}

The `FileEntrySync` interface of the [File System API](/en-US/docs/Web/API/File_and_Directory_Entries_API/Introduction) represents a file in a file system. It lets you write content to a file.

Inherits from: [EntrySync](/en-US/docs/Web/API/FileSystemEntrySync)

## About this document

This document was last updated on March 2, 2012 and follows the [W3C Specifications (Working Draft)](https://www.w3.org/TR/file-system-api/) drafted on April 19, 2011.

This specification is more or less abandoned as it didn't get significant traction among browser makers.

## Basic concepts

To write content to file, create a FileWriter object by calling [`createWriter()`](#createwriter).

## Method overview

<table class="standard-table">
  <tbody>
    <tr>
      <td>
        <code
          >FileWriterSync
          <a href="#createreader" title="#createWriter">createWriter</a> ()
          raises (<a href="/en-US/docs/Web/API/FileException">FileException</a
          >);</code
        >
      </td>
    </tr>
    <tr>
      <td>
        <code
          >File <a href="#file">file</a> () raises (<a
            href="/en-US/docs/Web/API/FileException"
            >FileException</a
          >);</code
        >
      </td>
    </tr>
  </tbody>
</table>

## Methods

### createWriter()

Creates a new `FileWriter` associated with the file that the `FileEntry` represents.

    void createWriter (
    ) raises (FileException);

#### Parameter

None.

#### Returns

A `FileWriterSync` object.

#### Exceptions

This method can raise a [FileException](/en-US/docs/Web/API/FileException) with the following codes:

| Exception           | Description                                                                    |
| ------------------- | ------------------------------------------------------------------------------ |
| `NOT_FOUND_ERR`     | The file does not exist.                                                       |
| `INVALID_STATE_ERR` | The file is no longer valid for some reason other than it having been deleted. |

### file()

Returns a File that represents the current state of the file that this `FileEntry` represents.

    void file (
    ) raises (FileException);

##### Parameter

None.

##### Returns

A `File` object.

##### Exceptions

This method can raise a [FileException](/en-US/docs/Web/API/FileException) with the following codes:

| Exception           | Description                                                                    |
| ------------------- | ------------------------------------------------------------------------------ |
| `NOT_FOUND_ERR`     | The file does not exist.                                                       |
| `INVALID_STATE_ERR` | The file is no longer valid for some reason other than it having been deleted. |

## Browser compatibility

{{Compat}}

## See also

Specification:{{ spec("http://dev.w3.org/2009/dap/file-system/pub/FileSystem/", "File API: Directories and System Specification", "WD") }}

Reference: [File System API](/en-US/docs/Web/API/File_and_Directory_Entries_API/Introduction)

Introduction: [Basic Concepts About the File System API](/en-US/docs/Web/API/File_and_Directory_Entries_API/Introduction)
