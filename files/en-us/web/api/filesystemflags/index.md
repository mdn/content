---
title: FileSystemFlags
slug: Web/API/FileSystemFlags
tags:
  - API
  - Dictionary
  - File and Directory Entries API
  - FileSystemFlags
  - Files
  - Interface
  - Reference
browser-compat: api.FileSystemFlags
---
{{APIRef("File and Directory Entries API")}}

The **`FileSystemFlags`** dictionary defines a set of values which are used when specifying option flags when calling certain methods in the [File and Directory Entries API](/en-US/docs/Web/API/File_and_Directory_Entries_API).
Methods which accept an options parameter of this type may specify zero or more of these flags as fields in an object, like this:

```js
dataDirectoryEntry.getDirectory("Workspace", { create: true }, function(entry) {
});
```

Here, we see that the `create` property is provided, with a value of `true`, indicating that the directory should be created if it's not already there.

> **Note:** These option flags currently don't have any useful meaning when used in the scope of Web content, where security precautions prevent the creation of new files or the replacement of existing ones.

## Properties

- `create` {{optional_inline}}
  - : If this property is `true`, and the requested file or directory doesn't exist, the user agent should create it.
    The default is `false`.
    The parent directory must already exist.
- `exclusive` {{optional_inline}}
  - : If `true`, and the `create` option is also `true`, the file must not exist prior to issuing the call.
    Instead, it must be possible for it to be created newly at call time.
    The default is `false`.

### Values and results

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
      <th scope="col"><code>create</code></th>
      <th scope="col"><code>exclusive</code></th>
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
- {{domxref("FileSystemDirectoryEntry")}}
- {{domxref("FileSystemFileEntry")}}
