---
title: FileException
slug: Web/API/FileException
tags:
  - API
  - File API
  - File System API
  - Non-standard
  - Offline
  - Reference
  - filesystem
  - Deprecated
browser-compat: api.FileException
---
{{APIRef("File System API")}}{{Non-standard_Header}}{{deprecated_header}}

In the [File System API](/en-US/docs/Web/API/File_and_Directory_Entries_API/Introduction), a `FileException` object represents error conditions that you might encounter while accessing the file system using the synchronous API. It extends the FileException interface described in [File Writer](http://dev.w3.org/2009/dap/file-system/pub/FileSystem/#bib-FILE-WRITER) and adds several new error codes.

## Basic concepts

Synchronous APIs do not have error callbacks, which makes it difficult to catch errors. The added complexity of using [WebWorkers](/en-US/docs/Web/API/Worker) with this API makes debugging even more challenging. To simplify things a bit, wrap your worker code in a try/catch. When errors occur, forward them to the main app using `postMessage()` as in the following:

```js
function onError(e) {
  postMEssage('ERROR:' + e.toString());
}

try {
  //Error is thrown if "log.txt" already exists.
var fileEntry = fs.root.getFile('log.txt', {create: true, exclusive:true}0;
} catch (e) {
  onErrror(e);
}
```

The sample code was borrowed from [HTML5Rocks](http://www.html5rocks.com/en/tutorials/file/filesystem-sync/)

## Attribute

| Attribute | Type             | Description                                        |
| --------- | ---------------- | -------------------------------------------------- |
| `code`    | `unsigned short` | The most appropriate error code for the condition. |

## Constants

> **Note:** Do not rely on the numeric values of the constants, which might change as the specifications continue to change. Use the constant names instead.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Constant</th>
      <th scope="col">Value</th>
      <th scope="col">Description</th>
    </tr>
    <tr>
      <td><code>ENCODING_ERR</code></td>
      <td>5</td>
      <td>
        The URL is malformed. Make sure that the URL is complete and valid.
      </td>
    </tr>
    <tr>
      <td><code>INVALID_MODIFICATION_ERR</code></td>
      <td>9</td>
      <td>
        The modification requested is not allowed. Examples of invalid
        modifications include moving a directory into its own child or moving a
        file into its parent directory without changing its name.
      </td>
    </tr>
    <tr>
      <td><code>INVALID_STATE_ERR</code></td>
      <td>7</td>
      <td>
        The operation cannot be performed on the current state of the interface
        object. For example, the state that was cached in an interface object
        has changed since it was last read from disk.
      </td>
    </tr>
    <tr>
      <td><code>NO_MODIFICATION_ALLOWED_ERR</code></td>
      <td>6</td>
      <td>
        The state of the underlying file system prevents any writing to a file
        or a directory.
      </td>
    </tr>
    <tr>
      <td><code>NOT_FOUND_ERR</code></td>
      <td>1</td>
      <td>
        A required file or directory could not be found at the time an operation
        was processed. For example, a file did not exist but was being opened.
      </td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>NOT_READABLE_ERR</code></td>
      <td>4</td>
      <td>
        <p>
          The file or directory cannot be read, typically due to permission
          problems that occur after a reference to a file has been acquired (for
          example, the file or directory is concurrently locked by another
          application).
        </p>
      </td>
    </tr>
    <tr>
      <td><code>PATH_EXISTS_ERR</code></td>
      <td>12</td>
      <td>The file or directory with the same path already exists.</td>
    </tr>
    <tr>
      <td><code>QUOTA_EXCEEDED_ERR</code></td>
      <td>10</td>
      <td>
        <p>
          Either there's not enough remaining storage space or the storage quota
          was reached and the user declined to give more space to the database.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>SECURITY_ERR</code></td>
      <td>2</td>
      <td>
        <p>Access to the files were denied for one of the following reasons:</p>
        <ul>
          <li>
            The files might be unsafe for access within a Web application.
          </li>
          <li>Too many calls are being made on file resources.</li>
          <li>Other unspecified security error code or situations.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><code>TYPE_MISMATCH_ERR</code></td>
      <td>11</td>
      <td>
        The user has attempted to look up a file or directory, but the Entry
        found is of the wrong type. For example, the app is accessing a
        DirectoryEntry when the user is requesting a FileEntry.
      </td>
    </tr>
  </tbody>
</table>

## Browser compatibility

{{Compat}}

## See also

Specification: {{spec("http://dev.w3.org/2009/dap/file-system/pub/FileSystem/", "File API: Directories and System Specification", "WD")}}

Reference: [File System API](/en-US/docs/Web/API/File_and_Directory_Entries_API/Introduction)

Introduction: [Basic Concepts About the File System API](/en-US/docs/Web/API/File_and_Directory_Entries_API/Introduction)
