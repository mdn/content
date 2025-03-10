---
title: "FileReader: readAsBinaryString() method"
short-title: readAsBinaryString()
slug: Web/API/FileReader/readAsBinaryString
page-type: web-api-instance-method
status:
  - deprecated
browser-compat: api.FileReader.readAsBinaryString
---

{{APIRef("File API")}}{{AvailableInWorkers}}{{Deprecated_Header}}

> [!NOTE]
> This method is deprecated in favor of {{DOMxRef("FileReader.readAsArrayBuffer","readAsArrayBuffer()")}}.

The **`readAsBinaryString()`** method of the {{domxref("FileReader")}} interface is used to start reading the contents of the
specified {{domxref("Blob")}} or {{domxref("File")}}. When the read operation is
finished, the {{domxref("FileReader.readyState","readyState")}} property becomes
`DONE`, and the {{domxref("FileReader/loadend_event", "loadend")}} event is triggered. At that time, the
{{domxref("FileReader.result","result")}} property contains the raw binary data from
the file.

Note that this method was once removed from the File API specification, but
re-introduced for backward compatibility.
Using {{domxref("FileReader.readAsArrayBuffer()")}} is recommended.

## Syntax

```js-nolint
readAsBinaryString(blob)
```

### Parameters

- `blob`
  - : The {{domxref("Blob")}} or {{domxref("File")}} from which to read.

### Return value

None ({{jsxref("undefined")}}).

## Examples

```js
const canvas = document.createElement("canvas");
const height = 200;
const width = 200;

canvas.width = width;
canvas.height = height;

const ctx = canvas.getContext("2d");

ctx.strokeStyle = "#090";
ctx.beginPath();
ctx.arc(width / 2, height / 2, width / 2 - width / 10, 0, Math.PI * 2);
ctx.stroke();

canvas.toBlob((blob) => {
  const reader = new FileReader();

  reader.onload = () => {
    console.log(reader.result);
  };

  reader.readAsBinaryString(blob);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("FileReader")}}
