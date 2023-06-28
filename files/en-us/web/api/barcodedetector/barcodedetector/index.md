---
title: "BarcodeDetector: BarcodeDetector() constructor"
short-title: BarcodeDetector()
slug: Web/API/BarcodeDetector/BarcodeDetector
page-type: web-api-constructor
status:
  - experimental
browser-compat: api.BarcodeDetector.BarcodeDetector
---

{{securecontext_header}}{{DefaultAPISidebar("Barcode Detector API")}}{{SeeCompatTable}}

The **`BarcodeDetector()`** constructor creates
a new {{domxref("BarcodeDetector")}} object which detects linear and two-dimensional
barcodes in images.

## Syntax

```js-nolint
new BarcodeDetector()
new BarcodeDetector(options)
```

### Parameters

- `options` {{optional_inline}}

  - : An options object containing a series of `BarcodeFormats` to search for
    in the subsequent {{domxref('BarcodeDetector.detect()','detect()')}} calls. The
    options are:

    - `formats`
      - : An {{jsxref('Array')}} of barcode formats as strings.
        To see a full list of supported formats see the [Barcode Detection API](/en-US/docs/Web/API/Barcode_Detection_API).

## Examples

This example creates a new barcode detector object, with specified supported formats
and tests for browser compatibility.

```js
// create new detector
const barcodeDetector = new BarcodeDetector({
  formats: ["code_39", "codabar", "ean_13"],
});

// check compatibility
if (barcodeDetector) {
  console.log("Barcode Detector supported!");
} else {
  console.log("Barcode Detector is not supported by this browser.");
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
