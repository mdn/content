---
title: File.getAsBinary()
slug: Web/API/File/getAsBinary
tags:
  - API
  - File API
  - Files
  - Method
  - Non-standard
  - Reference
  - Deprecated
---
{{APIRef("File API")}}{{non-standard_header}}{{deprecated_header}}

> **Note:** This method was removed from Firefox 7.0 and onward.

## Summary

The `getAsBinary` method allows to access the file's data in raw binary format.

> **Note:** This method is obsolete; you should use the {{domxref("FileReader")}} method {{domxref("FileReader.readAsBinaryString()","readAsBinaryString()")}} or {{domxref("FileReader.readAsArrayBuffer()","readAsArrayBuffer()")}} instead.

## Syntax

    var binary = instanceOfFile.getAsBinary();

### Returns

A string.

## Example

```js
// fileInput is an HTMLInputElement: <input type="file" id="myfileinput" multiple>
var fileInput = document.getElementById("myfileinput");

// files is a FileList object (similar to NodeList)
var files = fileInput.files;

// object for allowed media types
var accept = {
  binary : ["image/png", "image/jpeg"],
  text   : ["text/plain", "text/css", "application/xml", "text/html"]
};

var file;

for (var i = 0; i < files.length; i++) {
  file = files[i];

  // if file type could be detected
  if (file !== null) {
    if (accept.binary.indexOf(file.type) > -1) {
      // file is a binary, which we accept
      var data = file.getAsBinary();
    } else if (accept.text.indexOf(file.type) > -1) {
      // file is of type text, which we accept
      var data = file.getAsText();
      // modify data with string methods
    }
  }
}
```

## Specifications

Not part of any specification.

## See also

- {{domxref("File")}}
- {{domxref("FileReader")}}
