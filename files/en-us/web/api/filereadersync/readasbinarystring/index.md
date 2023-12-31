---
title: "FileReaderSync: readAsBinaryString() method"
short-title: readAsBinaryString()
slug: Web/API/FileReaderSync/readAsBinaryString
page-type: web-api-instance-method
status:
  - deprecated
browser-compat: api.FileReaderSync.readAsBinaryString
---

{{APIRef("File API")}}{{deprecated_header}}

> **Note:** This method is deprecated in favor of {{DOMxRef("FileReaderSync.readAsArrayBuffer","readAsArrayBuffer()")}}.

The **`readAsBinaryString()`** method of the {{DOMxRef("FileReaderSync")}} interface allows to read {{DOMxRef("File")}} or {{DOMxRef("Blob")}} objects in a synchronous way into a string. This interface is [only available](/en-US/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers) in [workers](/en-US/docs/Web/API/Worker) as it enables synchronous I/O that could potentially block.

{{AvailableInWorkers}}

## Syntax

```js-nolint
readAsBinaryString(File)
readAsBinaryString(Blob)
```

### Parameters

- `blob`
  - : The {{DOMxRef("File")}} or {{DOMxRef("Blob")}} to read.

### Return value

A string representing the input data.

## Exceptions

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

- [File API](/en-US/docs/Web/API/File_API)
- {{DOMxRef("File")}}
- {{DOMxRef("FileReaderSync")}}
- {{DOMxRef("FileReader")}}
- {{ domxref("Blob") }}
