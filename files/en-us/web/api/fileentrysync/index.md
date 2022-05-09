---
title: FileEntrySync
slug: Web/API/FileEntrySync
tags:
  - API
  - File
  - File and Directory Entries API
  - Interface
  - Non-standard
  - Reference
browser-compat: api.FileEntrySync
---
{{APIRef("File and Directory Entries API")}} {{Non-standard_header}}

The `FileEntrySync` interface of the [File and Directory Entries API](/en-US/docs/Web/API/File_and_Directory_Entries_API/Introduction) represents a file in a file system. It lets you write content to a file.

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
        <code>FileWriterSync
          <a href="#createreader" title="#createWriter">createWriter</a> ());
        </code>
      </td>
    </tr>
    <tr>
      <td>
        <code>File <a href="#file">file</a> ());</code>
      </td>
    </tr>
  </tbody>
</table>

## Methods

### createWriter()

Creates a new `FileWriter` associated with the file that the `FileEntry` represents.

```
void createWriter ();
```

#### Parameter

None.

#### Returns

A `FileWriterSync` object.

#### Exceptions

This method can raise a [DOMException](/en-US/docs/Web/API/DOMException) with the following codes:

| Exception           | Description                                                                    |
| ------------------- | ------------------------------------------------------------------------------ |
| `NOT_FOUND_ERR`     | The file does not exist.                                                       |
| `INVALID_STATE_ERR` | The file is no longer valid for some reason other than it having been deleted. |

### file()

Returns a File that represents the current state of the file that this `FileEntry` represents.

```
void file ();
```

##### Parameter

None.

##### Returns

A `File` object.

##### Exceptions

This method can raise a [DOMException](/en-US/docs/Web/API/DOMException) with the following codes:

| Exception           | Description                                                                    |
| ------------------- | ------------------------------------------------------------------------------ |
| `NOT_FOUND_ERR`     | The file does not exist.                                                       |
| `INVALID_STATE_ERR` | The file is no longer valid for some reason other than it having been deleted. |

## Specifications

This feature is not part of any specification anymore. It is no longer on track to become a standard.

## Browser compatibility

{{Compat}}

## See also

- [File and Directory Entries API](/en-US/docs/Web/API/File_and_Directory_Entries_API/Introduction)
- [Basic Concepts About the File and Directory Entries API](/en-US/docs/Web/API/File_and_Directory_Entries_API/Introduction)
