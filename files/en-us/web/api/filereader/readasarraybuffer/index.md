---
title: "FileReader: readAsArrayBuffer() method"
short-title: readAsArrayBuffer()
slug: Web/API/FileReader/readAsArrayBuffer
page-type: web-api-instance-method
browser-compat: api.FileReader.readAsArrayBuffer
---

{{APIRef("File API")}}

The {{domxref("FileReader")}} interface's
**`readAsArrayBuffer()`** method is used to start reading the
contents of a specified {{domxref("Blob")}} or {{domxref("File")}}. When the read
operation is finished, the {{domxref("FileReader.readyState","readyState")}} becomes
`DONE`, and the {{domxref("FileReader/loadend_event", "loadend")}} is
triggered. At that time, the {{domxref("FileReader.result","result")}} attribute
contains an {{jsxref("ArrayBuffer")}} representing the file's data.

> **Note:** The {{domxref("Blob.arrayBuffer()")}} method is a newer promise-based API to read a
> file as an array buffer.

## Syntax

```js-nolint
readAsArrayBuffer(blob)
```

### Parameters

- `blob`
  - : The {{domxref("Blob")}} or {{domxref("File")}} from which to read.

### Return value

None ({{jsxref("undefined")}}).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("FileReader")}}
