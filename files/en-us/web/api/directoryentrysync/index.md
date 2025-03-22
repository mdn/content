---
title: DirectoryEntrySync
slug: Web/API/DirectoryEntrySync
page-type: web-api-interface
status:
  - deprecated
  - non-standard
browser-compat: api.DirectoryEntrySync
---

{{APIRef("File and Directory Entries API")}}{{Non-standard_Header}}{{Deprecated_Header}}

The `DirectoryEntrySync` interface represents a directory in a file system. It includes methods for creating, reading, looking up, and recursively removing files in a directory.

> [!WARNING]
> This interface is deprecated and is no more on the standard track.
> _Do not use it anymore._ Use the [File and Directory Entries API](/en-US/docs/Web/API/File_and_Directory_Entries_API) instead.

## Basic concepts

If you want to create subdirectories, you have to create each child directory in sequence. If you try to create a directory using a full path that includes parent directories that do not exist yet, you get an error. So create the hierarchy by recursively adding a new path after creating the parent directory.

### Example

The `getFile()` method returns a `FileEntrySync`, which represents a file in the file system. The following creates an empty file called `logs.txt` in the root directory.

```js
const fileEntry = fs.root.getFile("logs.txt", { create: true });
```

The `getDirectory()` method returns a `DirectoryEntrySync`, which represents a file in the file system. The following creates a new directory called `project_dir` in the root directory.

```js
const dirEntry = fs.root.getDirectory("project_dir", { create: true });
```

## Method overview

- <a href="#createreader">createReader()</a>
- <a href="#getfile">getFile()</a>
- <a href="#getdirectory">getDirectory()</a>
- <a href="#removerecursively">removeRecursively()</a>

## Instance methods

### createReader()

Creates a new `DirectoryReaderSync` to read entries from this directory.

#### Syntax

```js-nolint
createReader()
```

##### Parameters

None.

##### Return value

- [`DirectoryReaderSync`](/en-US/docs/Web/API/DirectoryReaderSync)
  - : Represents a directory in a file system.

##### Exceptions

This method can raise a {{domxref("DOMException")}} with the following codes:

| Exception       | Description                                                                                |
| --------------- | ------------------------------------------------------------------------------------------ |
| `NOT_FOUND_ERR` | The directory does not exist.                                                              |
| `SECURITY_ERR`  | The browser determined that it was not safe to look up the metadata. [ todo: Explain why ] |

### getFile()

Depending on how you've set the `options` parameter, the method either creates a file or looks up an existing file.

#### Syntax

```js-nolint
getFile(path)
getFile(path, options)
```

##### Parameters

- `path`
  - : Either an absolute path or a relative path from the directory to the file to be looked up or created. You cannot create a file whose immediate parent does not exist. Create the parent directory first.
- `options`
  - : (optional) An object literal describing the behavior of the method. If the file does not exist, it is created.

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

##### Return value

- [`FileEntrySync`](/en-US/docs/Web/API/FileEntrySync)
  - : Represents a file in a file system.

##### Exceptions

This method can raise a {{domxref("DOMException")}} with the following codes:

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

#### Syntax

```js-nolint
getDirectory(path)
getDirectory(path, options)
```

##### Parameters

- `path`
  - : Either an absolute path or a relative path from the directory to the file to be looked up or created. You cannot create a file whose immediate parent does not exist. Create the parent directory first.
- `options`
  - : (optional) An object literal describing the behavior of the method if the file does not exist.

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

##### Return value

- [`DirectoryEntrySync`](/en-US/docs/Web/API/DirectoryReaderSync)
  - : Represents a directory in a file system.

##### Exceptions

This method can raise a {{domxref("DOMException")}} with the following codes:

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

#### Syntax

```js-nolint
removeRecursively()
```

##### Parameters

None.

##### Return value

{{jsxref('undefined')}}

##### Exceptions

This method can raise a {{domxref("DOMException")}} with the following codes:

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

## Specifications

This feature is not part of any current specification. It is no longer on track to become a standard.
Use the [File and Directory Entries API](/en-US/docs/Web/API/File_and_Directory_Entries_API) instead.

## Browser compatibility

{{Compat}}

## See also

- [File and Directory Entries API](/en-US/docs/Web/API/File_and_Directory_Entries_API)
