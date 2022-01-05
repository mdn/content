---
title: ImageData
slug: Web/API/ImageData
tags:
  - API
  - Canvas
  - ImageData
  - Images
browser-compat: api.ImageData
---
{{APIRef("Canvas API")}}

The **`ImageData`** interface represents the underlying pixel data of an area of a {{HTMLElement("canvas")}} element.

It is created using the {{domxref("ImageData.ImageData", "ImageData()")}} constructor or creator methods on the {{domxref("CanvasRenderingContext2D")}} object associated with a canvas: {{domxref("CanvasRenderingContext2D.createImageData", "createImageData()")}} and {{domxref("CanvasRenderingContext2D.getImageData", "getImageData()")}}. It can also be used to set a part of the canvas by using {{domxref("CanvasRenderingContext2D.putImageData", "putImageData()")}}.

{{AvailableInWorkers}}

## Constructors

- {{domxref("ImageData.ImageData", "ImageData()")}} {{experimental_inline}}
  - : Creates an `ImageData` object from a given {{jsxref("Uint8ClampedArray")}} and the size of the image it contains. If no array is given, it creates an image of a transparent black rectangle. Note that this is the most common way to create such an object in workers as {{domxref("CanvasRenderingContext2D.createImageData", "createImageData()")}} is not available there.

## Properties

- {{domxref("ImageData.data")}} {{readonlyInline}}
  - : Is a {{jsxref("Uint8ClampedArray")}} representing a one-dimensional array containing the data in the RGBA order, with integer values between `0` and `255` (inclusive).
- {{domxref("ImageData.height")}} {{readonlyInline}}
  - : Is an `unsigned long` representing the actual height, in pixels, of the `ImageData`.
- {{domxref("ImageData.width")}} {{readonlyInline}}
  - : Is an `unsigned long` representing the actual width, in pixels, of the `ImageData`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("CanvasRenderingContext2D")}}
- The {{HTMLElement("canvas")}} element and its associated interface, {{domxref("HTMLCanvasElement")}}.
