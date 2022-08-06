---
title: FileReader.readAsBinaryString()
slug: Web/API/FileReader/readAsBinaryString
page-type: web-api-instance-method
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
Using {{domxref("FileReader.readAsArrayBuffer()")}} is recommended.

## Syntax

```js
readAsBinaryString(blob)
```

### Parameters

- `blob`
  - : The {{domxref("Blob")}} or {{domxref("File")}} from which to read.

### Return value

None ({{jsxref("undefined")}}).

## Examples

```js
const canvas = document.createElement('canvas');
const height = 200;
const width  = 200;

canvas.width  = width;
canvas.height = height;

const ctx = canvas.getContext('2d');

ctx.strokeStyle = '#090';
ctx.beginPath();
ctx.arc(width/2, height/2, width/2 - width/10, 0, Math.PI*2);
ctx.stroke();

canvas.toBlob((blob) => {
  const reader = new FileReader();

  reader.onload = () => {
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
