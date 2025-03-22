---
title: "FileReader: readAsArrayBuffer() method"
short-title: readAsArrayBuffer()
slug: Web/API/FileReader/readAsArrayBuffer
page-type: web-api-instance-method
browser-compat: api.FileReader.readAsArrayBuffer
---

{{APIRef("File API")}}{{AvailableInWorkers}}

The **`readAsArrayBuffer()`** method of the {{domxref("FileReader")}} interface is used to start reading the
contents of a specified {{domxref("Blob")}} or {{domxref("File")}}. When the read
operation is finished, the {{domxref("FileReader.readyState","readyState")}} property becomes
`DONE`, and the {{domxref("FileReader/loadend_event", "loadend")}} event is
triggered. At that time, the {{domxref("FileReader.result","result")}} property
contains an {{jsxref("ArrayBuffer")}} representing the file's data.

> [!NOTE]
> The {{domxref("Blob.arrayBuffer()")}} method is a newer promise-based API to read a
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
