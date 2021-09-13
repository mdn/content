---
title: File.getAsDataURL()
slug: Web/API/File/getAsDataURL
tags:
  - API
  - File API
  - Files
  - Method
  - Non-standard
  - Reference
  - Deprecated
---
{{APIRef("File API") }}

{{non-standard_header}}

{{Deprecated_Header}}

## Summary

The getAsDataURL provides a [`data:`](/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs) URL that encodes the entire contents of the referenced file.

> **Note:** This method is obsolete; you should use the {{domxref("FileReader")}} method {{domxref("FileReader.readAsDataURL","readAsDataURL()")}} instead.

## Syntax

    var url = instanceOfFile.getAsDataURL();

### Returns

A string representing a [`data:`](/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs) URL

## Example

```js
// fileInput is a HTMLInputElement: <input type="file" id="myfileinput" multiple>
var fileInput = document.getElementById("myfileinput");

// files is a FileList object (similar to NodeList)
var files = fileInput.files;

// array with acceptable file types
var accept = ["image/png"];

// img is a HTMLImgElement: <img id="myimg">
var img = document.getElementById("myimg");

// if we accept the first selected file type
if (accept.indexOf(files[0].mediaType) > -1) {
  // display the image
  // same as <img src="data:image/png,<imagedata>">
  img.src = files[0].getAsDataURL();
}
```

## Specifications

Not part of any specification.

## See also

- {{domxref("File")}}
- {{domxref("FileReader")}}
