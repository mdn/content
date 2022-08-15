---
title: OffscreenCanvas.convertToBlob()
slug: Web/API/OffscreenCanvas/convertToBlob
page-type: web-api-instance-method
tags:
  - API
  - Canvas
  - Experimental
  - Method
  - OffscreenCanvas
  - Reference
browser-compat: api.OffscreenCanvas.convertToBlob
---
{{APIRef("Canvas API")}} {{SeeCompatTable}}

The **`OffscreenCanvas.convertToBlob()`** method creates a {{domxref("Blob")}} object representing the image contained in the canvas.

The desired file format and image quality may be specified.
If the file format is not specified, or if the given format is not supported, then the data will be exported as `image/png`.
Browsers are required to support `image/png`; many will support additional formats including `image/jpeg` and `image/webp`.

The created image will have a resolution of 96dpi for file formats that support encoding resolution metadata.

## Syntax

```js
convertToBlob()
convertToBlob(options)
```

### Parameters

- `options` {{optional_inline}}

  - : An object with the following properties:
    - `type`
      - : A string indicating the image format.
         The default type is `image/png`; this image format will be also used if the specified type is not supported.
    - `quality`
      - : A {{jsxref("Number")}} between `0` and `1` indicating the image quality to be used when creating images using file formats that support lossy compression (such as `image/jpeg` or `image/webp`).
        A user agent will use its default quality value if this option is not specified, or if the number is outside the allowed range.

### Return value

A {{jsxref("Promise")}} returning a {{domxref("Blob")}} object representing the image contained in the canvas.

### Exceptions

The promise may be rejected with the following exceptions:

- `InvalidStateError` {{domxref("DOMException")}}
  - : The `OffscreenCanvas` is not detached; in other words it still associated with the DOM and not the current worker.

- `SecurityError` {{domxref("DOMException")}}
  - : The canvas context mode is 2d and the bitmap is not origin-clean; at least some of its contents have or may have been loaded from a site other than the one from which the document itself was loaded.

- `IndexSizeError` {{domxref("DOMException")}}
  - : The canvas bitmap has no pixels (either the horizontal or vertical dimension is zero).

- `EncodingError` {{domxref("DOMException")}}
  - : The blob could not be created due to an encoding error.

## Examples

```js
const offscreen = new OffscreenCanvas(256, 256);
const gl = offscreen.getContext("webgl");

// Perform some drawing using the gl context

offscreen.convertToBlob().then((blob) => console.log(blob));
// Blob { size: 334, type: "image/png" }
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The interface defining this method, {{domxref("OffscreenCanvas")}}.
