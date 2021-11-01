---
title: Blob.type
slug: Web/API/Blob/type
tags:
  - API
  - Blob
  - DOM
  - File
  - File API
  - Format
  - MIME
  - MIME Type
  - Property
  - Reference
  - Type
browser-compat: api.Blob.type
---
{{APIRef("File API")}}

The **`type`** property of a
{{domxref("Blob")}} object returns the {{Glossary("MIME type")}} of the file.

## Syntax

```js
var mimetype = blob.type
```

### Value

A {{domxref("DOMString")}} containing the file's MIME type, or an empty string if the
type could not be determined.

## Example

This example asks the user to select a number of files, then checks each file to make
sure it's one of a given set of image file types.

```js
var i, fileInput, files, allowedFileTypes;

// fileInput is a HTMLInputElement: <input type="file" multiple id="myfileinput">
fileInput = document.getElementById("myfileinput");

// files is a FileList object (similar to NodeList)
files = fileInput.files;

// our application only allows GIF, PNG, and JPEG images
allowedFileTypes = ["image/png", "image/jpeg", "image/gif"];

for (i = 0; i < files.length; i++) {
  // Test if file.type is an allowed file type.
  if (allowedFileTypes.indexOf(files[i].type) > -1) {
    // file type matched is one of allowed file types. Do something here.
  }
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Blob")}}
- [Using files
  from web applications](/en-US/docs/Web/API/File/Using_files_from_web_applications)
