---
title: FileReader.readAsBinaryString()
slug: Web/API/FileReader/readAsBinaryString
tags:
  - API
  - File API
  - Files
  - Method
  - Reference
browser-compat: api.FileReader.readAsBinaryString
---
{{APIRef("File API")}}

The `readAsBinaryString` method is used to start reading the contents of the
specified {{domxref("Blob")}} or {{domxref("File")}}. When the read operation is
finished, the {{domxref("FileReader.readyState","readyState")}} becomes
`DONE`, and the {{domxref("FileReader.loadend_event")}} is triggered. At that time, the
{{domxref("FileReader.result","result")}} attribute contains the raw binary data from
the file.

Note that this method was once removed from the File API specification, but
re-introduced for backward compatibility.
Using {{domxref("FileReader.readAsArrayBuffer()")}} is recommended.

## Syntax

```js
instanceOfFileReader.readAsBinaryString(blob);
```

### Parameters

- `blob`
  - : The {{domxref("Blob")}} or {{domxref("File")}} from which to read.

## Example

```js
var canvas = document.createElement('canvas');
var height = 200;
var width  = 200;

canvas.width  = width;
canvas.height = height;

var ctx = canvas.getContext('2d');

ctx.strokeStyle = '#090';
ctx.beginPath();
ctx.arc(width/2, height/2, width/2 - width/10, 0, Math.PI*2);
ctx.stroke();

canvas.toBlob(function (blob) {
  var reader = new FileReader();

  reader.onload = function () {
    console.log(reader.result);
  }

  reader.readAsBinaryString(blob);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("FileReader")}}
