---
title: FileSystemFlags.exclusive
slug: Web/API/FileSystemFlags/exclusive
tags:
  - API
  - File and Directory Entries API
  - FileSystemFlags
  - Files
  - Offline
  - Property
  - Reference
  - exclusive
  - Experimental
browser-compat: api.FileSystemFlags.exclusive
---
{{APIRef("File and Directory Entries API")}}{{SeeCompatTable}}

The **`exclusive`** property on the {{domxref("FileSystemFlags")}} dictionary is used in tandem with the create property
to determine whether or not it's acceptable to require that the file not already exist when the reference to it is created by calling {{domxref("FileSystemDirectoryEntry.getFile()")}} or {{domxref("FileSystemDirectoryEntry.getDirectory()")}}.

## Values

The table below describes the result of each possible combination of these flags depending on whether or not the target file or directory path already exists.

Note that, when `create` is `false`, the value of `exclusive` is irrelevant and ignored.

<table class="standard-table">
  <thead>
    <tr>
      <th colspan="2" scope="col">Option values</th>
      <th rowspan="2" scope="col">File/directory condition</th>
      <th rowspan="2" scope="col">Result</th>
    </tr>
    <tr>
      <th scope="col">
        {{domxref("FileSystemFlags.create", "create")}}
      </th>
      <th scope="col">
        {{domxref("FileSystemFlags.exclusive", "exclusive")}}
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>false</code></td>
      <td>n/a</td>
      <td>
        Path exists and matches the desired type (depending on whether the function called is <code>getFile()</code> or <code>getDirectory()</code>
      </td>
      <td>
        The <code>successCallback</code> is called with a
        {{domxref("FileSystemFileEntry")}} if <code>getFile()</code> was called or a
        {{domxref("FileSystemDirectoryEntry")}} if <code>getDirectory()</code> was called.
      </td>
    </tr>
    <tr>
      <td><code>false</code></td>
      <td>n/a</td>
      <td>Path exists but doesn't match the desired type</td>
      <td>
        The <code>errorCallback</code> is called with an appropriate error code (if the callback was provided).
      </td>
    </tr>
    <tr>
      <td><code>true</code></td>
      <td><code>false</code></td>
      <td>Path exists</td>
      <td>
        The existing file or directory is removed and replaced with a new one,
        then the <code>successCallback</code> is called with a
        {{domxref("FileSystemFileEntry")}} or a {{domxref("FileSystemDirectoryEntry")}}, as appropriate.
      </td>
    </tr>
    <tr>
      <td><code>true</code></td>
      <td><code>false</code></td>
      <td>Path doesn't exist</td>
      <td>
        The file or directory is created, then a {{domxref("FileSystemFileEntry")}} or a
        {{domxref("FileSystemDirectoryEntry")}} is passed to the
        <code>successCallback</code>, as appropriate.
      </td>
    </tr>
    <tr>
      <td><code>true</code></td>
      <td><code>true</code></td>
      <td>Path exists</td>
      <td>
        The <code>errorCallback</code> is called with an appropriate error, such
        as <code>FileError.PATH_EXISTS_ERR</code>.
      </td>
    </tr>
    <tr>
      <td><code>true</code></td>
      <td><code>true</code></td>
      <td>Path doesn't exist</td>
      <td>
        The file or directory is created, then a {{domxref("FileSystemFileEntry")}} or a
        {{domxref("FileSystemDirectoryEntry")}} is passed to the <code>successCallback</code>, as appropriate.
      </td>
    </tr>
  </tbody>
</table>

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [File and Directory Entries API](/en-US/docs/Web/API/File_and_Directory_Entries_API)
- [Introduction to the File System API](/en-US/docs/Web/API/File_and_Directory_Entries_API/Introduction)
- {{domxref("FileSystemFlags")}}
- {{domxref("FileSystemDirectoryEntry.getFile()")}} and {{domxref("FileSystemDirectoryEntry.getDirectory()")}}
