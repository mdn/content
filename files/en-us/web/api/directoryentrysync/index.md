---
title: DirectoryEntrySync
slug: Web/API/DirectoryEntrySync
tags:
  - API
  - File API
  - File System API
  - Offline
  - Reference
  - filesystem
browser-compat: api.DirectoryEntrySync
---
{{APIRef("File System API")}}{{Non-standard_header}}

The `DirectoryEntrySync` interface of the [File System API](/en-US/docs/Web/API/File_and_Directory_Entries_API/Introduction) represents a directory in a file system. It includes methods for creating, reading, looking up, and recursively removing files in a directory.

> **Note:** This interface has been abandoned: it was on a standard track and it proves not a good idea. Do not use it anymore.

## About this document

This document was last updated on March 2, 2012 and follows the [W3C Specifications (Working Draft)](https://www.w3.org/TR/file-system-api/) drafted on April 19, 2011.

This specification is pretty much abandoned, having failed to reach any substantial traction.

## Basic concepts

If you want to create subdirectories, you have to create each child directory in sequence. If you try to create a directory using a full path that includes parent directories that do not exist yet, you get an error. So create the hierarchy by recursively adding a new path after creating the parent directory.

#### Example

The `getFile()` method returns a `FileEntrySync`, which represents a file in the file system.  The following creates an empty file called `seekrits.txt` in the root directory.

```js
var fileEntry = fs.root.getFile('seekrits.txt', {create: true});
```

The `getDirectory()` method returns a `DirectoryEntrySync`, which represents a file in the file system. The following creates a new directory called `superseekrit` in the root directory.

    var dirEntry = fs.root.getDirectory('superseekrit', {create: true});

## Method overview

<table class="no-markdown">
  <tbody>
    <tr>
      <td>
        <code
          >DirectoryReaderSync <a href="#createreader">createReader</a> ()
          raises (<a href="/en-US/docs/Web/API/FileException">FileException</a
          >);</code
        >
      </td>
    </tr>
    <tr>
      <td>
        <code
          ><a href="/en-US/docs/Web/API/FileEntrySync">FileEntrySync</a>
          <a href="#getfile">getFile</a> (in DOMString <em>path</em>, in
          optional Flags <em>options</em>) raises (<a
            href="/en-US/docs/Web/API/FileException"
            >FileException</a
          >);</code
        >
      </td>
    </tr>
    <tr>
      <td>
        <code
          >DirectoryEntrySync <a href="#getdirectory">getDirectory</a> (in
          DOMString path, in optional Flags <em>options</em>) raises (<a
            href="/en-US/docs/Web/API/FileException"
            >FileException</a
          >);</code
        >
      </td>
    </tr>
    <tr>
      <td>
        <code
          >void <a href="#removerecursively">removeRecursively</a> () raises (<a
            href="/en-US/docs/Web/API/FileException"
            >FileException</a
          >);</code
        >
      </td>
    </tr>
  </tbody>
</table>

## Methods

### createReader()

Creates a new `DirectoryReaderSync` to read entries from this directory.

    DirectoryReaderSync createReader (
    ) raises (FileException);

##### Returns

- [`DirectoryReaderSync`](/en-US/docs/Web/API/DirectoryReaderSync)
  - : Represents a directory in a file system.

##### Parameter

None

##### Exceptions

This method can raise a [FileException](/en-US/docs/Web/API/FileException) with the following codes:

| Exception       | Description                                                                                |
| --------------- | ------------------------------------------------------------------------------------------ |
| `NOT_FOUND_ERR` | The directory does not exist.                                                              |
| `SECURITY_ERR`  | The browser determined that it was not safe to look up the metadata. [ todo: Explain why ] |

### getFile()

Depending on how you've set the `options` parameter, the method either creates a file or looks up an existing file.

    void getFile (
      in DOMString path, in optional Flags options
    ) raises (FileException);

##### Parameter

- path
  - : Either an absolute path or a relative path from the directory to the file to be looked up or created. You cannot create a file whose immediate parent does not exist. Create the parent directory first.
- options
  - : An object literal describing the behavior of the method. If the file does not exist, it is created.

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Object literal</th>
      <th scope="col">Condition</th>
      <th scope="col">Result</th>
    </tr>
    <tr>
      <td><code>create: true</code><br /><code>exclusive: true</code></td>
      <td>Path already exists</td>
      <td>An error is thrown.</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>create: true</code><br /><code>exclusive: false</code></td>
      <td>Path doesn't exist and no other error occurs</td>
      <td>A file is created. If a file already exists, no error is thrown.</td>
    </tr>
    <tr>
      <td>
        <code>create: false</code><br />(<code>exclusive</code> is ignored)
      </td>
      <td>Path exists</td>
      <td>The file is returned.</td>
    </tr>
    <tr>
      <td>
        <code>create: false</code><br />(<code>exclusive</code> is ignored)
      </td>
      <td>Path doesn't exist</td>
      <td>An error is thrown.</td>
    </tr>
    <tr>
      <td>
        <code>create: false</code><br />(<code>exclusive</code> is ignored)
      </td>
      <td>Path exists, but is a directory</td>
      <td>An error is thrown.</td>
    </tr>
  </tbody>
</table>

##### Returns

- [`FileEntrySync`](/en-US/docs/Web/API/FileEntrySync)
  - : Represents a file in a file system.

##### Exceptions

This method can raise a [FileException](/en-US/docs/Web/API/FileException) with the following codes:

| Exception                     | Description                                                                                               |
| ----------------------------- | --------------------------------------------------------------------------------------------------------- |
| `ENCODING_ERR`                | The path supplied is invalid.                                                                             |
| `NOT_FOUND_ERR`               | The path was structurally correct, but refers to a resource that does not exist.                          |
| `NO_MODIFICATION_ALLOWED_ERR` | This is a permission issue. The target directory or file is not writable.                                 |
| `PATH_EXISTS_ERR`             | The file already exists. You cannot create another one with the same path.                                |
| `QUOTA_EXCEEDED_ERROR`        | The operation would cause the application to exceed its storage quota.                                    |
| `SECURITY_ERR`                | The application does not have permission to access the element referred to by path. [ todo: Explain why ] |
| `TYPE_MISMATCH_ERR`           | The path supplied exists, but it is not a directory.                                                      |

### getDirectory()

Creates or looks up a directory. The method is similar to `getFile()` with DirectoryEntrySync being passed.

    void getDirectory (
      in DOMString path, in optional Flags options
    ) raises (FileException);

##### Parameter

- path
  - : Either an absolute path or a relative path from the directory to the file to be looked up or created. You cannot create a file whose immediate parent does not exist. Create the parent directory first.
- options
  - : An object literal describing the behavior of the method if the file does not exist.

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Object literal</th>
      <th scope="col">Condition</th>
      <th scope="col">Result</th>
    </tr>
    <tr>
      <td><code>create: true</code><br /><code>exclusive: true</code></td>
      <td>Path already exists</td>
      <td>An error is thrown.</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>create: true</code><br /><code>exclusive: false</code></td>
      <td>Path doesn't exist and no other error occurs</td>
      <td>
        A directory is created. If a file already exists, no error is thrown.
      </td>
    </tr>
    <tr>
      <td>
        <code>create: false</code><br />(<code>exclusive</code> is ignored)
      </td>
      <td>Path exists</td>
      <td>The directory is returned.</td>
    </tr>
    <tr>
      <td>
        <code>create: false</code><br />(<code>exclusive</code> is ignored)
      </td>
      <td>Path doesn't exist</td>
      <td>An error is thrown.</td>
    </tr>
    <tr>
      <td>
        <code>create: false</code><br />(<code>exclusive</code> is ignored)
      </td>
      <td>Path exists, but is a directory</td>
      <td>An error is thrown.</td>
    </tr>
  </tbody>
</table>

##### Returns

- [`DirectoryEntrySync`](/en-US/docs/Web/API/DirectoryReaderSync)
  - : Represents a directory in a file system.

##### Exceptions

This method can raise a [FileException](/en-US/docs/Web/API/FileException) with the following codes:

| Exception                     | Description                                                                                               |
| ----------------------------- | --------------------------------------------------------------------------------------------------------- |
| `ENCODING_ERR`                | The path supplied is invalid.                                                                             |
| `NOT_FOUND_ERR`               | The path was structurally correct, but refers to a resource that does not exist.                          |
| `NO_MODIFICATION_ALLOWED_ERR` | This is a permission issue. The target directory or file is not writable.                                 |
| `PATH_EXISTS_ERR`             | The file already exists. You cannot create another one with the same path.                                |
| `QUOTA_EXCEEDED_ERROR`        | The operation would cause the application to exceed its storage quota.                                    |
| `SECURITY_ERR`                | The application does not have permission to access the element referred to by path. [ todo: Explain why ] |
| `TYPE_MISMATCH_ERR`           | The path supplied exists, but it is not a directory.                                                      |

### removeRecursively()

Deletes a directory and all of its contents. You cannot delete the root directory of a file system.

If you delete a directory that contains a file that cannot be removed or if an error occurs while the deletion is in progress, some of the contents might not be deleted. Catch these cases with error callbacks and retry the deletion.

    void removeRecursively (
    )  raises (FileException);

##### Parameter

None

##### Returns

{{jsxref('undefined')}}

##### Exceptions

This method can raise a [FileException](/en-US/docs/Web/API/FileException) with the following codes:

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Exception</th>
      <th scope="col">Description</th>
    </tr>
    <tr>
      <td><code>NOT_FOUND_ERR</code></td>
      <td>The target directory does not exist.</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>INVALID_STATE_ERR</code></td>
      <td>
        This directory is not longer valid for some reason other than being
        deleted.
        <p>[todo: Explain more ]</p>
      </td>
    </tr>
    <tr>
      <td><code>NO_MODIFICATION_ALLOWED_ERR</code></td>
      <td>
        One of the following is not writable: the directory, its parent
        directory, and some of the content in the directory.
      </td>
    </tr>
    <tr>
      <td><code>SECURITY_ERR</code></td>
      <td>
        The application does not have permission to access the target directory,
        its parent, or some of its contents.
      </td>
    </tr>
  </tbody>
</table>

## Browser compatibility

{{Compat}}

## See also

Specification: {{ spec("http://dev.w3.org/2009/dap/file-system/pub/FileSystem/", "File API: Directories and System Specification", "WD") }}

Reference: [File System API](/en-US/docs/Web/API/File_and_Directory_Entries_API/Introduction)

Introduction: [Basic Concepts About the File System API](/en-US/docs/Web/API/File_and_Directory_Entries_API/Introduction)
