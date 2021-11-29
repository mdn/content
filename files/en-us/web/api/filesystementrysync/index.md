---
title: FileSystemEntrySync
slug: Web/API/FileSystemEntrySync
tags:
  - API
  - EntrySync
  - File API
  - File System API
  - File and Directory Entries API
  - FileSystemEntrySync
  - Interface
  - Non-standard
  - Offline
  - Reference
  - filesystem
browser-compat: api.FileSystemEntrySync
---
{{APIRef("File System API")}}{{Non-standard_header()}}

The `FileSystemEntrySync` interface of the File and Directory Entries API represents an entry in a file system; it can be either a {{domxref("FileEntrySync")}} or {{domxref("FileSystemDirectoryEntry")}}.

This interface includes methods for working with files—including copying, moving, removing, and reading files—as well as information about the file it points to—including the file name and its path from the root to the entry.

> **Warning:** This API was never accepted and never became standardized. Various browsers implement pieces of the [File and Directory Entries API](/en-US/docs/Web/API/File_and_Directory_Entries_API) (otherwise known as the File System API) but you should try to avoid using it.

## Basic concepts

The `FileSystemEntrySync` interface includes methods that you would expect for manipulating files and directories, but it also include a really handy method for getting a URL of the entry: [`toURL()`](#tourl). It also introduces a new URL scheme: `filesystem:`.

You can use the `filesystem:` scheme on Google Chrome to see all the files and folders that are stored in the origin of your app. Just use `filesystem:` scheme for the root directory of the origin of the app. For example, if your app is in [`https://www.html5rocks.com/en/`](https://www.html5rocks.com/en/), open `filesystem:http://www.html5rocks.com/temporary/` in a tab. Chrome shows a read-only list of all the files and folders stored the origin of your app.

## Method overview

<table class="standard-table">
  <tbody>
    <tr>
      <td>
        <code
          >Metadata <a href="#getmetada">getMetadata</a> () raises (<a
            href="/en-US/docs/Web/API/FileException"
            >FileException</a
          >);</code
        >
      </td>
    </tr>
    <tr>
      <td>
        <code
          >FileSystemEntrySync <a href="#moveto">moveTo</a> (in
          <a href="/en-US/docs/Web/API/DirectoryEntrySync"
            >DirectoryEntrySync</a
          >
          <em>parent</em>, optional DOMString <em>newName</em>) raises (<a
            href="/en-US/docs/Web/API/FileException"
            >FileException</a
          >);</code
        >
      </td>
    </tr>
    <tr>
      <td>
        <code
          >FileSystemEntrySync <a href="#copyto">copyTo</a>(in
          <a href="/en-US/docs/Web/API/DirectoryEntrySync"
            >DirectoryEntrySync</a
          >
          <em>parent</em>, optional DOMString <em>newName</em>) raises (<a
            href="/en-US/docs/Web/API/FileException"
            >FileException</a
          >);</code
        >
      </td>
    </tr>
    <tr>
      <td>
        <code>DOMString <a href="#tourl">toURL</a>();</code>
      </td>
    </tr>
    <tr>
      <td>
        <code
          >void <a href="#remove">remove</a>() raises (<a
            href="/en-US/docs/Web/API/FileException"
            >FileException</a
          >);</code
        >
      </td>
    </tr>
    <tr>
      <td>
        <code>DirectoryEntrySync <a href="#getparent">getParent</a>();</code>
      </td>
    </tr>
  </tbody>
</table>

## Attributes

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Attribute</th>
      <th scope="col">Type</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>filesystem</code></td>
      <td><code>readonly FileSystemSync</code></td>
      <td>The file system where the entry resides.</td>
    </tr>
    <tr>
      <td><code>fullpath</code></td>
      <td><code>readonly DOMString</code></td>
      <td>
        <p>The full absolute path from the root to the entry.</p>
        <p>
          An absolute path is a relative path from the root directory, prepended
          with a '<code>/</code>'.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>isDirectory</code></td>
      <td><code>readonly boolean</code></td>
      <td>True if FileSystemEntrySync is a directory.</td>
    </tr>
    <tr>
      <td><code>isFile</code></td>
      <td><code>readonly boolean</code></td>
      <td>True if the FileSystemEntrySync is a file.</td>
    </tr>
    <tr>
      <td><code>name</code></td>
      <td><code>readonly DOMString</code></td>
      <td>The name of the entry, excluding the path leading to it.</td>
    </tr>
  </tbody>
</table>

## Methods

### getMetadata()

Look up metadata about this entry. \[ todo: specify what kind of metadata ]

    Metadata getMetada ()
      raises (FileException);

#### Parameter

None

#### Returns

A `Metadata` object.

#### Exceptions

This method can raise a [FileException](/en-US/docs/Web/API/FileException) with the following codes:

| Exception           | Description                                                                  |
| ------------------- | ---------------------------------------------------------------------------- |
| `NOT_FOUND_ERR`     | The entry does not exist.                                                    |
| `INVALID_STATE_ERR` | The FileSystemSync is no longer valid for some reason besides being deleted. |

### moveTo()

Move an entry to a different location on the file system. Moving a file over an existing file replaces that existing file. Moving a directory over an existing empty directory replaces that directory. \[todo: What if the directory is not empty? ]

\[todo: Verify ] This is the same method for renaming files. You can keep it in the same location and then define the `newName` parameter.

You cannot do the following:

- Move a directory inside itself or to any child at any depth
- Move an entry into its parent if a name different from its current one isn't provided
- Move a file to a path occupied by a directory or move a directory to a path occupied by a file
- Move any element to a path occupied by a directory that is not empty.

<!---->

    FileSystemEntrySync moveTo (
      in DirectoryEntrySync parent, optional DOMString newName
    ) raises (FileException);

#### Parameters

- parent
  - : The directory to which to move the entry.
- newName
  - : The new name of the entry. If you do not specify a name, the browser preserves the entry's current name.

#### Returns

A `FileSystemEntrySync` object.

#### Exceptions

This method can raise a [FileException](/en-US/docs/Web/API/FileException) with the following codes:

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Exception</th>
      <th scope="col">Description</th>
    </tr>
    <tr>
      <td><code>ENCODING_ERR</code></td>
      <td>
        The name supplied is invalid, because at least one of the characters is
        reserved or illegal. Examples include a backslash (\), dot (.), and two
        dots (..).
      </td>
    </tr>
    <tr>
      <td><code>NOT_FOUND_ERR</code></td>
      <td>The target directory does not exist.</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>INVALID_MODIFICATION_ERR</code></td>
      <td>
        <p>You tried one of the following disallowed operations:</p>
        <ul>
          <li>Moving an entry into its parent without changing its name</li>
          <li>
            Moving a parent directory into one of its child directories. [todo:
            verify ]
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><code>NO_MODIFICATION_ALLOWED_ERR</code></td>
      <td>
        One of the following is not writable: the source entry, its parent
        directory, and the target directory.
      </td>
    </tr>
  </tbody>
</table>

### copyTo()

Copy an entry to a different location on the file system. You cannot copy an entry inside itself if it is a directory, nor can you copy it into its parent without providing a new name. Directory copies are always recursive—that is, all contents of the directory are copied. You cannot change this behavior. Files are duplicated.

    void copyTo (
      in DirectoryEntrySync parent, optional DOMString newName
    ) raises (FileException);

#### Parameters

- parent
  - : The directory where you want the entry to move to.
- newName
  - : The new name of the entry. If you do not specify a name, the browser preserves the FileSystemEntrySync's current name.

#### Returns

A `FileSystemEntrySync` object.

#### Exceptions

This method can raise a [FileException](/en-US/docs/Web/API/FileException) with the following codes:

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Exception</th>
      <th scope="col">Description</th>
    </tr>
    <tr>
      <td><code>ENCODING_ERR</code></td>
      <td>
        The name supplied is invalid, because at least one of the characters is
        reserved or illegal. Examples include a backslash (\), dot (.), and two
        dots (..).
      </td>
    </tr>
    <tr>
      <td><code>NOT_FOUND_ERR</code></td>
      <td>The target directory does not exist.</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>INVALID_MODIFICATION_ERR</code></td>
      <td>
        <p>You tried one of the following disallowed operations:</p>
        <ul>
          <li>Moving an entry into its parent without changing its name</li>
          <li>Moving a parent directory into one of its child directories. </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><code>NO_MODIFICATION_ALLOWED_ERR</code></td>
      <td>
        One of the following is not writable: the source entry, its parent
        directory, and the target directory.
      </td>
    </tr>
    <tr>
      <td><code>QUOTA_EXCEEDED_ERR</code></td>
      <td>
        The operation would cause the application to exceed its storage quota.
        You can ask for a larger persistent storage, which your user must
        explicitly grant. For more information, see the article on
        <a
          href="/en-US/docs/Web/API/File_and_Directory_Entries_API/Introduction"
          >basic concepts</a
        >.
      </td>
    </tr>
  </tbody>
</table>

### toURL()

Returns a URL that can be used to identify this entry. It exposes a new URL scheme—`filesystem:`—that you can use to fill `src` or `href` attributes. For example, if you wanted to display an image and have its [fileEntry](/en-US/docs/Web/API/FileSystemFileEntry), calling `toURL()` gives you the image file's file system URL. You get something like: `filesystem:http://example.com/temporary/lolcat.png.`

The file system URL does not expire. Because the method describes a location on disk, the URL is valid for as long as that location exists. You can delete the file and recreate it, and it's all good.

You can supply the `mimeType` to simulate the optional MIME type header associated with HTTP downloads.

    DOMString toURL ();

#### Parameter

None.

#### Returns

A `DOMString` object.

#### Exceptions

None

### remove()

Deletes a file or directory. You cannot delete an empty directory or the root directory of a file system. If you want to remove an empty directory, use [`removeRecursively()`](</en-US/docs/Web/API/DirectoryEntrySync#removerecursively()>) instead.

    void remove (
    ) raises (FileException);

#### Parameter

None

#### Returns

None.

#### Exceptions

This method can raise a [FileException](/en-US/docs/Web/API/FileException) with the following codes:

<table class="standard-table">
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
      <td><code>INVALID_MODIFICATION_ERR</code></td>
      <td>
        <p>
          You tried to remove a directory that is not empty. If you want to
          remove an empty directory, use
          <a href="/en-US/docs/Web/API/DirectoryEntrySync#removerecursively()"
            ><code>removeRecursively()</code></a
          >
          instead.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>NO_MODIFICATION_ALLOWED_ERR</code></td>
      <td>
        One of the following is not writable: the source entry, its parent
        directory, and the target directory.
      </td>
    </tr>
  </tbody>
</table>

### getParent()

Look up the parent [`DirectoryEntrySync`](/en-US/docs/Web/API/DirectoryEntrySync) containing the entry. If this entry is the root of its file system, then the parent is itself.

    void getParent ();

#### Parameter

None

#### Returns

- [`DirectoryEntrySync`](/en-US/docs/Web/API/DirectoryEntrySync)
  - : An object that represents a directory in the file system.

#### Exceptions

None.

## Browser compatibility

{{Compat}}

## See also

Specification:{{ spec("http://dev.w3.org/2009/dap/file-system/pub/FileSystem/", "File API: Directories and System Specification", "WD") }}

Reference: [File System API](/en-US/docs/Web/API/File_and_Directory_Entries_API/Introduction)

Introduction: [Basic Concepts About the File System API](/en-US/docs/Web/API/File_and_Directory_Entries_API/Introduction)
