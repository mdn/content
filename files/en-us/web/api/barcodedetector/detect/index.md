---
title: "BarcodeDetector: detect() method"
short-title: detect()
slug: Web/API/BarcodeDetector/detect
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.BarcodeDetector.detect
---

{{securecontext_header}}{{APIRef("Barcode Detector API")}}{{AvailableInWorkers}}{{SeeCompatTable}}

The **`detect()`** method of the
{{domxref("BarcodeDetector")}} interface returns a {{jsxref('Promise')}} which fulfills
with an {{jsxref('Array')}} of detected barcodes within an image.

## Syntax

```js-nolint
detect(imageBitmapSource)
```

### Parameters

- `imageBitmapSource`
  - : Receives an image source as a parameter. This can be a {{domxref("HTMLImageElement")}}, a {{domxref("SVGImageElement")}}, a {{domxref("HTMLVideoElement")}}, a {{domxref("HTMLCanvasElement")}}, an {{domxref("ImageBitmap")}}, an {{domxref("OffscreenCanvas")}}, a {{domxref("VideoFrame")}}, a {{domxref('Blob')}} of type image or an {{domxref('ImageData')}} object.

### Return value

Returns a {{jsxref('Promise')}} which fulfills with an array of
`DetectedBarcode` objects with the following properties:

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
    the [supported barcode format](/en-US/docs/Web/API/Barcode_Detection_API#supported_barcode_formats)).
- `rawValue`
  - : A string decoded from the barcode data.

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if no parameter is specified or the `type` is not that of an `ImageBitmapSource`.
- `SecurityError` {{domxref("DOMException")}}
  - : Thrown if the `imageBitmapSource` has an origin and is not the same as the document's origin, or if the `imageBitmapSource` is a {{domxref('HTMLCanvasElement')}} and its [origin-clean](https://html.spec.whatwg.org/multipage/canvas.html#concept-canvas-origin-clean) flag is set to `false`.
- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the `imageBitmapSource` is an {{domxref('HTMLImageElement')}} and is not fully decoded or decoding failed, or is an {{domxref('HTMLVideoElement')}} and its {{domxref('HTMLMediaElement.readyState', 'readyState')}} is `HAVE_NOTHING` or `HAVE_METADATA`.

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
