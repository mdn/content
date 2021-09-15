---
title: BarcodeDetector.getSupportedFormats()
slug: Web/API/BarcodeDetector/getSupportedFormats
tags:
  - Barcode Detection API
  - BarcodeDetector
  - Method
  - barcode
  - shape detection
browser-compat: api.BarcodeDetector.getSupportedFormats
---
{{draft}}{{securecontext_header}}{{DefaultAPISidebar("Barcode Detector API")}}

The **`getSupportedFormats()`** static method
of the {{domxref("BarcodeDetector")}} interface returns a {{jsxref('Promise')}} which
fulfills with an {{jsxref('Array')}} of supported barcode format types.

## Syntax

```js
var supportedFormats = BarcodeDetector.getSupportedFormats();
```

### Parameters

This method receives no parameters.

### Return value

An {{jsxref('Array')}} of [supported
barcode format types](/en-US/docs/Web/API/Barcode_Detection_API#supported_barcode_formats).

### Exceptions

No exceptions are thrown.

## Examples

The following example calls the `getSupportFormat()` static method and logs
the results to the console.

```js
// check supported types
BarcodeDetector.getSupportedFormats()
  .then(supportedFormats => {
    supportedFormats.forEach(format => console.log(format));
  });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
