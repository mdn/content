---
title: FileSystemEntry.toURL()
slug: Web/API/FileSystemEntry/toURL
tags:
  - API
  - File System API
  - File and Directory Entries API
  - FileSystemEntry
  - Files
  - Method
  - Non-standard
  - Reference
  - toURL
  - Deprecated
browser-compat: api.FileSystemEntry.toURL
---
{{APIRef("File System API")}}{{deprecated_header}}

The {{domxref("FileSystemEntry")}} interface's method
**`toURL()`** creates and
returns a string containing a URL which can be used to identify the file system entry.
This is done by exposing a new URL scheme—`filesystem:`—that can be used as
the value of `src` and `href` attributes.

## Syntax

```js
FileSystemEntry.toURL([mimeType]);
```

### Parameters

- `mimeType` {{optional_inline}}
  - : An optional string specifying the MIME type to use when interpreting the file. This
    can be used to help deal with files whose types aren't recognized automatically by the
    user agent. If this parameter is omitted, the user agent uses its standard algorithms
    to identify the file.

### Return value

A {{domxref("DOMString")}} containing a URL that can then be used as a document
reference in HTML content, or an empty string if the URL can't be generated (such as if
the file system implementation doesn't support `toURL()`).

## Example

If you have a {{domxref("FileSystemFileEntry")}} corresponding to an image file in a
file system available to your Web site or app, you can call `toURL()` to get
its URL for use in HTML. If your site is located at
`http://my-awesome-website.woot`, and you have a temporary file system that
contains an image file named `awesomesauce.jpg`, the URL returned by
`toURL()` might be (depending on the browser's implementation) something like
`"filesystem:http://my-awesome-website.woot/temporary/awesomesauce.jpg"`.

Code that makes use of this might look like this:

```js
let img = document.createElement("img");

img.src = imageFileEntry.toURL();
document.body.appendChild(img);
```

Assuming the scenario mentioned before the code, the result would be HTML that looks
like this being appended to the end of the document:

```html
<img src="filesystem:http://my-awesome-website.woot/temporary/awesomesauce.jpg">
```

## Browser compatibility

{{Compat}}

## See also

- [File and Directory
  Entries API](/en-US/docs/Web/API/File_and_Directory_Entries_API)
- [Introduction
  to the File System API](/en-US/docs/Web/API/File_and_Directory_Entries_API/Introduction)
- {{domxref("FileSystemDirectoryEntry.removeRecursively()")}}
