---
title: "WorkerGlobalScope: createImageBitmap() method"
short-title: createImageBitmap()
slug: Web/API/WorkerGlobalScope/createImageBitmap
page-type: web-api-instance-method
browser-compat: api.createImageBitmap
---

{{APIRef("Canvas API")}}{{AvailableInWorkers("worker")}}

The **`createImageBitmap()`** method of the {{domxref("WorkerGlobalScope")}} interface creates a bitmap from a given source, optionally cropped to contain only a portion of that source.
It accepts a variety of different image sources, and returns a {{jsxref("Promise")}} which resolves to an {{domxref("ImageBitmap")}}.

## Syntax

```js-nolint
createImageBitmap(image)
createImageBitmap(image, options)
createImageBitmap(image, sx, sy, sw, sh)
createImageBitmap(image, sx, sy, sw, sh, options)
```

### Parameters

- `image`
  - : An image source, which can be any one of the following:
    - {{domxref("HTMLImageElement")}}
    - {{domxref("SVGImageElement")}}
    - {{domxref("HTMLVideoElement")}}
    - {{domxref("HTMLCanvasElement")}}
    - {{domxref("Blob")}}
    - {{domxref("ImageData")}}
    - {{domxref("ImageBitmap")}}
    - {{domxref("OffscreenCanvas")}}
    - {{domxref("VideoFrame")}}
- `sx`
  - : The x coordinate of the reference point of the rectangle from which the `ImageBitmap` will be extracted.
- `sy`
  - : The y coordinate of the reference point of the rectangle from which the `ImageBitmap` will be extracted.
- `sw`
  - : The width of the rectangle from which the `ImageBitmap` will be extracted.
    This value can be negative.
- `sh`
  - : The height of the rectangle from which the `ImageBitmap` will be extracted. This value can be negative.
- `options` {{optional_inline}}

  - : An object that sets options for the image's extraction.
    The available options are:

    - `imageOrientation`

      - : Specifies how the bitmap image should be oriented.

        - `from-image`
          - : Image oriented according to EXIF orientation metadata, if present (default).
        - `flipY`
          - : Image oriented according to EXIF orientation metadata, if present, and then flipped vertically.
        - `none`
          - : Image oriented according to image encoding, ignoring any metadata about the orientation (such as EXIF metadata, that might be added to an image to indicate that the camera was turned sideways to capture the image in portrait mode).

    - `premultiplyAlpha`
      - : Specifies whether the bitmap's color channels should be premultiplied by the alpha channel.
        One of `none`, `premultiply`, or `default` (default).
    - `colorSpaceConversion`
      - : Specifies whether the image should be decoded using color space conversion.
        Either `none` or `default` (default).
        The value `default` indicates that implementation-specific behavior is used.
    - `resizeWidth`
      - : A long integer that indicates the output width.
    - `resizeHeight`
      - : A long integer that indicates the output height.
    - `resizeQuality`
      - : Specifies the algorithm to be used for resizing the input to match the output dimensions.
        One of `pixelated`, `low` (default), `medium`, or `high`.

### Return value

A {{jsxref("Promise")}} which resolves to an {{domxref("ImageBitmap")}} object containing bitmap data from the given rectangle.

## Examples

See {{domxref("Window.createImageBitmap()")}} for examples.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Window.createImageBitmap()")}}
- {{domxref("CanvasRenderingContext2D.drawImage()")}}
- {{domxref("ImageData")}}
