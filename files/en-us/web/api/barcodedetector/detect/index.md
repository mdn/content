---
title: "BarcodeDetector: detect() method"
short-title: detect()
slug: Web/API/BarcodeDetector/detect
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.BarcodeDetector.detect
---

{{securecontext_header}}{{DefaultAPISidebar("Barcode Detector API")}}{{SeeCompatTable}}

The **`detect()`** method of the
{{domxref("BarcodeDetector")}} interface returns a {{jsxref('Promise')}} which fulfills
with an {{jsxref('Array')}} of detected barcodes within an image.

## Syntax

```js-nolint
detect(imageBitmapSource)
```

### Parameters

- `imageBitmapSource`
  - : Receives an `ImageBitmapSource` as a parameter. This can be an
    {{HTMLElement('img', ' element')}}, a {{domxref('Blob')}} of type image or an
    {{domxref('ImageData')}} object.

### Return value

Returns a {{jsxref('Promise')}} which fulfills with an array of
`detectedBarcode` objects with the following properties:

- `boundingBox`
  - : A {{domxref('DOMRectReadOnly')}}, which returns the
    dimensions of a rectangle representing the extent of a detected barcode, aligned with
    the image.
- `cornerPoints`
  - : The x and y co-ordinates of the four corner points of the
    detected barcode relative to the image, starting with the top left and working
    clockwise. This may not be square due to perspective distortions within the image.
- `format`
  - : The detected barcode format. (For a full list of formats see
    the {{domxref('Barcode Detection API', 'Barcode Detection API overview page')}}).
- `rawValue`
  - : A string decoded from the barcode data.

### Exceptions

- {{jsxref("TypeError")}}
  - : No parameter is specified or the `type` is not that of an
    `ImageBitmapSource`.

## Examples

This example uses the `detect()` method to detect the barcodes within the
given image. These are iterated over and the barcode data is logged to the console.

```js
barcodeDetector
  .detect(imageEl)
  .then((barcodes) => {
    barcodes.forEach((barcode) => console.log(barcode.rawValue));
  })
  .catch((err) => {
    console.error(err);
  });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
