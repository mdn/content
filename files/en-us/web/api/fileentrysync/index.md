---
title: FileEntrySync
slug: Web/API/FileEntrySync
page-type: web-api-interface
status:
  - deprecated
  - non-standard
browser-compat: api.FileEntrySync
---

{{APIRef("File and Directory Entries API")}} {{Non-standard_header}}{{Deprecated_Header}}

The `FileEntrySync` interface represents a file in a file system. It lets you write content to a file.

> **Warning:** This interface is deprecated and is no more on the standard track.
> _Do not use it anymore._ Use the [File and Directory Entries API](/en-US/docs/Web/API/File_and_Directory_Entries_API) instead.

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

## Instance methods

### createWriter()

Creates a new `FileWriter` associated with the file that the `FileEntry` represents.

```webidl
void createWriter();
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

```webidl
void file();
```

#### Parameter

None.

#### Returns

A `File` object.

#### Exceptions

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
