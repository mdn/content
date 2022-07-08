---
title: FileReaderSync
slug: Web/API/FileReaderSync
page-type: web-api-interface
tags:
  - API
  - NeedsMarkupWork
browser-compat: api.FileReaderSync
---
{{APIRef("File API")}}

The `FileReaderSync` interface allows to read {{DOMxRef("File")}} or {{DOMxRef("Blob")}} objects synchronously.

{{AvailableInWorkers}}

> **Warning:** This interface is **only available** in [workers](/en-US/docs/Web/API/Worker) as it enables synchronous I/O that could potentially block.

## Properties

This interface does not have any properties.

## Methods

- {{DOMxRef("FileReaderSync.readAsArrayBuffer","FileReaderSync.readAsArrayBuffer()")}}
  - : This method converts a specified {{DOMxRef("Blob")}} or a {{DOMxRef("File")}} into an {{jsxref("ArrayBuffer")}} representing the input data as a binary string.
- {{DOMxRef("FileReaderSync.readAsBinaryString","FileReaderSync.readAsBinaryString()")}} {{deprecated_inline}}
  - : This method converts a specified {{DOMxRef("Blob")}} or a {{DOMxRef("File")}} into a string representing the input data as a binary string. This method is deprecated, consider using `readAsArrayBuffer()` instead.
- {{DOMxRef("FileReaderSync.readAsText","FileReaderSync.readAsText()")}}
  - : This method converts a specified {{DOMxRef("Blob")}} or a {{DOMxRef("File")}} into a string representing the input data as a text string. The optional **`encoding`** parameter indicates the encoding to be used (e.g., iso-8859-1 or UTF-8). If not present, the method will apply a detection algorithm for it.
- {{DOMxRef("FileReaderSync.readAsDataURL","FileReaderSync.readAsDataURL()")}}
  - : This method converts a specified {{DOMxRef("Blob")}} or a {{DOMxRef("File")}} into a string representing the input data as a data URL.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{DOMxRef("FileReader")}}
- {{DOMxRef("BlobBuilder")}}, {{DOMxRef("Blob")}}
- {{DOMxRef("File")}}
- {{DOMxRef("FileReader")}}
