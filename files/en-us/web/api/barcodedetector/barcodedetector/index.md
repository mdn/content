---
title: "BarcodeDetector: BarcodeDetector() constructor"
short-title: BarcodeDetector()
slug: Web/API/BarcodeDetector/BarcodeDetector
page-type: web-api-constructor
status:
  - experimental
browser-compat: api.BarcodeDetector.BarcodeDetector
---

{{securecontext_header}}{{APIRef("Barcode Detector API")}}{{AvailableInWorkers}}{{SeeCompatTable}}

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

    - `formats` {{optional_inline}}
      - : An {{jsxref('Array')}} of barcode formats as strings.
        If not provided, `detect()` calls search for all supported formats.
        Limiting to specific formats is therefore recommended for performance reasons.
        To see a full list of supported formats see the [supported barcode format](/en-US/docs/Web/API/Barcode_Detection_API#supported_barcode_formats).

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if the `formats` is specified and the parameter is empty or contains `unknown`.

## Examples

This example creates a new barcode detector object, with specified supported formats
and tests for browser compatibility.

```js
// check compatibility
if (!("BarcodeDetector" in globalThis)) {
  console.log("Barcode Detector is not supported by this browser.");
} else {
  console.log("Barcode Detector supported!");

  // create new detector
  const barcodeDetector = new BarcodeDetector({
    formats: ["code_39", "codabar", "ean_13"],
  });
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
