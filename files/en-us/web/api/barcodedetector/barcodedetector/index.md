---
title: BarcodeDetector()
slug: Web/API/BarcodeDetector/BarcodeDetector
tags:
  - Barcode Detection API
  - BarcodeDetector
  - Constructor
  - barcode
  - barcode detection
  - shape detection
browser-compat: api.BarcodeDetector.BarcodeDetector
---
{{draft}}{{securecontext_header}}{{DefaultAPISidebar("Barcode Detector API")}}

The **`BarcodeDetector()`** constructor creates
a new {{domxref("BarcodeDetector")}} object which detects linear and two-dimensional
barcodes in images.

## Syntax

```js
var BarcodeDetector = new BarcodeDetector();
```

### Parameters

- _barcodeDetectorOptions_ {{optional_inline}}

  - : An options object containing a series of `BarcodeFormats` to search for
    in the subsequent {{domxref('BarcodeDetector.detect()','detect()')}} calls. The
    options are:

    - `formats`: An {{jsxref('Array')}} of barcode formats as strings. To
      see a full list of supported formats see the {{domxref('Barcode Detection
        API','Barcode Detection API overview page')}}.

## Examples

This example creates a new barcode detector object, with specified supported formats
and tests for browser compatibility.

```js
// create new detector
var barcodeDetector = new BarcodeDetector({formats: ['code_39', 'codabar', 'ean_13']});

// check compatibility
if (barcodeDetector) {
  console.log('Barcode Detector supported!');
} else {
  console.log('Barcode Detector is not supported by this browser.');
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
