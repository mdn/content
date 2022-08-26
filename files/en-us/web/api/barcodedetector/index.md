---
title: BarcodeDetector
slug: Web/API/BarcodeDetector
page-type: web-api-interface
tags:
  - Barcode Detection API
  - BarcodeDetector
  - Interface
  - barcode
  - barcode detector
  - Experimental
browser-compat: api.BarcodeDetector
---
{{securecontext_header}}{{APIRef("Barcode Detector API")}}{{SeeCompatTable}}

The **`BarcodeDetector`** interface of the {{domxref('Barcode Detection API')}} allows detection of linear and two dimensional barcodes in images.

## Constructors

- {{domxref('BarcodeDetector.BarcodeDetector', 'BarcodeDetector.BarcodeDetector()')}} {{Experimental_Inline}}
  - : Creates and returns a `BarcodeDetector` object, with optional `barcodeDetectorOptions`

## Methods

- {{domxref('BarcodeDetector.detect', 'detect()')}} {{Experimental_Inline}}

  - : Returns a {{jsxref('Promise')}} which fulfills with an array of `detectedBarcode` objects with the following properties:

    - `boundingBox`: A {{domxref('DOMRectReadOnly')}}, which returns the dimensions of a rectangle representing the extent of a detected barcode, aligned with the image.
    - `cornerPoints`: The x and y co-ordinates of the four corner points of the detected barcode relative to the image, starting with the top left and working clockwise. This may not be square due to perspective distortions within the image.
    - `format`: The detected barcode format. (For a full list of formats see the \[landing page])
    - `rawValue`: A string decoded from the barcode data.

- {{domxref('BarcodeDetector.getSupportedFormats', 'getSupportedFormats()')}} {{Experimental_Inline}}
  - : Returns a {{jsxref('Promise')}} which fulfills with an {{jsxref('Array')}} of supported [barcode format types](/en-US/docs/Web/API/Barcode_Detection_API#supported_barcode_formats).

## Examples

### Creating A Detector

This example creates a new barcode detector object, with specified supported formats and tests for browser compatibility.

```js
// create new detector
const barcodeDetector = new BarcodeDetector({ formats: ['code_39', 'codabar', 'ean_13'] });

// check compatibility
if (barcodeDetector) {
  console.log('Barcode Detector supported!');
} else {
  console.log('Barcode Detector is not supported by this browser.');
}
```

### Getting Supported Formats

The following example calls the `getSupportFormat()` static method and logs the results to the console.

```js
// check supported types
BarcodeDetector.getSupportedFormats()
  .then((supportedFormats) => {
    supportedFormats.forEach((format) => console.log(format));
  });
```

### Detect Barcodes

This example uses the `detect()` method to detect the barcodes within the given image. These are iterated over and the barcode data is logged to the console.

```js
barcodeDetector.detect(imageEl)
  .then((barcodes) => {
    barcodes.forEach((barcode) => console.log(barcode.rawData));
  })
  .catch((err) => {
    console.log(err);
  });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [barcodefaq.com: A website with information about different barcodes and examples of the different types.](https://www.barcodefaq.com/)
- [Accelerated Shape Detection in Images](https://web.dev/shape-detection/#barcodedetector)
