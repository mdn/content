---
title: "FileReaderSync: readAsArrayBuffer() method"
short-title: readAsArrayBuffer()
slug: Web/API/FileReaderSync/readAsArrayBuffer
page-type: web-api-instance-method
browser-compat: api.FileReaderSync.readAsArrayBuffer
---

{{APIRef("File API")}} {{AvailableInWorkers}}

The **`readAsArrayBuffer()`** method of the {{DOMxRef("FileReaderSync")}} interface allows to read {{DOMxRef("File")}} or {{DOMxRef("Blob")}} objects in a synchronous way into an {{jsxref("ArrayBuffer")}}. This interface is [only available](/en-US/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers) in [workers](/en-US/docs/Web/API/Worker) as it enables synchronous I/O that could potentially block.

## Syntax

```js-nolint
readAsArrayBuffer(blob)
```

### Parameters

- `blob`
  - : The {{DOMxRef("File")}} or {{DOMxRef("Blob")}} to read into the {{DOMxRef("File")}} or {{jsxref("ArrayBuffer")}}.

### Return value

An {{jsxref("ArrayBuffer")}} representing the file's data.

## Exceptions

The following exceptions can be raised by this method:

- `NotFoundError` {{domxref("DOMException")}}
  - : Thrown if the resource represented by the DOM {{DOMxRef("File")}} or {{DOMxRef("Blob")}} cannot be found, e.g. because it has been erased.
- `SecurityError` {{domxref("DOMException")}}
  - : Thrown if one of the following problematic situation is detected:
    - the resource has been modified by a third party;
    - too many read are performed simultaneously;
    - the file pointed by the resource is unsafe for a use from the Web (like it is a system file).
- `NotReadableError` {{domxref("DOMException")}}
  - : Thrown if the resource cannot be read due to a permission problem, like a concurrent lock.
- `EncodingError` {{domxref("DOMException")}}
  - : Thrown if the resource is a data URL and exceed the limit length defined by each browser.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{DOMxRef("File API", "", "", "nocode")}}
- {{DOMxRef("File")}}
- {{DOMxRef("FileReaderSync")}}
- {{DOMxRef("FileReader")}}
- {{DOMxRef("Blob")}}
