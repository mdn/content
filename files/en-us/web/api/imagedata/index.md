---
title: ImageData
slug: Web/API/ImageData
page-type: web-api-interface
browser-compat: api.ImageData
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

The **`ImageData`** interface represents the underlying pixel data of an area of a {{HTMLElement("canvas")}} element.

It is created using the {{domxref("ImageData.ImageData", "ImageData()")}} constructor or creator methods on the {{domxref("CanvasRenderingContext2D")}} object associated with a canvas: {{domxref("CanvasRenderingContext2D.createImageData", "createImageData()")}} and {{domxref("CanvasRenderingContext2D.getImageData", "getImageData()")}}. It can also be used to set a part of the canvas by using {{domxref("CanvasRenderingContext2D.putImageData", "putImageData()")}}.

## Constructors

- {{domxref("ImageData.ImageData", "ImageData()")}}
  - : Creates an `ImageData` object from a given {{jsxref("Uint8ClampedArray")}} and the size of the image it contains. If no array is given, it creates an image of a transparent black rectangle. Note that this is the most common way to create such an object in workers as {{domxref("CanvasRenderingContext2D.createImageData", "createImageData()")}} is not available there.

## Instance properties

- {{domxref("ImageData.data")}} {{ReadOnlyInline}}
  - : A {{jsxref("Uint8ClampedArray")}} representing a one-dimensional array containing the data in the RGBA order, with integer values between `0` and `255` (inclusive). The order goes by rows from the top-left pixel to the bottom-right.
- {{domxref("ImageData.colorSpace")}} {{ReadOnlyInline}}
  - : A string indicating the color space of the image data.
- {{domxref("ImageData.height")}} {{ReadOnlyInline}}
  - : An `unsigned long` representing the actual height, in pixels, of the `ImageData`.
- {{domxref("ImageData.width")}} {{ReadOnlyInline}}
  - : An `unsigned long` representing the actual width, in pixels, of the `ImageData`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("CanvasRenderingContext2D")}}
- The {{HTMLElement("canvas")}} element and its associated interface, {{domxref("HTMLCanvasElement")}}.
