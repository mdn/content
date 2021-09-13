---
title: File.getAsText()
slug: Web/API/File/getAsText
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

The `getAsText` method provides the file's data interpreted as text using a given encoding.

> **Note:** This method is obsolete; you should use the {{domxref("FileReader")}} method {{domxref("FileReader.readAsText()","readAsText()")}} instead.

## Syntax

    var str = instanceOfFile.getAsText(encoding);

### Parameters

- _encoding_
  - : A string indicating the encoding to use for the returned data. If this string is empty, UTF-8 is assumed.

### Returns

A string containing the file's data interpreted as text in the specified `encoding`.

## Example

```js
// fileInput is a HTMLInputElement: <input type="file" id="myfileinput" multiple>
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
    if (accept.text.indexOf(file.mediaType) > -1) {
      // file is of type text, which we accept
      // make sure it's encoded as utf-8
      var data = file.getAsText("utf-8");
      // modify data with string methods

    } else if (accept.binary.indexOf(file.mediaType) > -1) {
      // binary
    }
  }
}
```

## Specifications

Not part of any specification.

## See also

- {{domxref("File")}}
- {{domxref("FileReader")}}
