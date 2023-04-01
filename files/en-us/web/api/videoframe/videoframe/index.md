---
title: VideoFrame()
slug: Web/API/VideoFrame/VideoFrame
page-type: web-api-constructor
browser-compat: api.VideoFrame.VideoFrame
---

{{APIRef("Web Codecs API")}}

The **`VideoFrame()`** constructor creates a new {{domxref("VideoFrame")}} object representing a frame of a video.

## Syntax

```js-nolint
new VideoFrame(image)
new VideoFrame(image, options)
new VideoFrame(data, options)
```

### Parameters

The first type of constructor (see above) creates a new {{domxref("VideoFrame")}} from an image. Its parameters are:

- `image`
  - : An image containing the image data for the new `VideoFrame`. It can be one of the following objects:
    an {{domxref("SVGImageElement")}},
    an {{domxref("HTMLVideoElement")}},
    an {{domxref("HTMLCanvasElement")}},
    an {{domxref("ImageBitmap")}},
    an {{domxref("OffscreenCanvas")}},
    or another {{domxref("VideoFrame")}}.
- `options` {{Optional_Inline}}
  - : An object containing the following:
    - `duration` {{Optional_Inline}}
      - : An integer representing the duration of the frame in microseconds.
    - `timestamp`
      - : An integer representing the timestamp of the frame in microseconds.
    - `alpha` {{Optional_Inline}}
      - : A string, describing how the user agent should behave when dealing with alpha channels. The default value is "keep".
        - `"keep"`: Indicates that the user agent should preserve alpha channel data.
        - `"discard"`: Indicates that the user agent should ignore or remove alpha channel data.
    - `visibleRect` {{Optional_Inline}}
      - : An object representing the visible rectangle of the `VideoFrame`, containing the following:
        - `x`
          - : The x-coordinate.
        - `y`
          - : The y-coordinate.
        - `width`
          - : The width of the frame.
        - `height`
          - : The height of the frame.
    - `displayWidth` {{Optional_Inline}}
      - : The width of the `VideoFrame` when displayed after applying aspect-ratio adjustments.
    - `displayHeight` {{Optional_Inline}}
      - : The height of the `VideoFrame` when displayed after applying aspect-ratio adjustments.

The second type of constructor (see above) creates a new {{domxref("VideoFrame")}} from an {{jsxref("ArrayBuffer")}}. Its parameters are:

- `data`
  - : An {{jsxref("ArrayBuffer")}} containing the data for the new `VideoFrame`.
- `options`
  - : An object containing the following:
    - `format`
      - : A string representing the video pixel format. One of the following strings, which are fully described on the page for the {{domxref("VideoFrame.format","format")}} property:
        - `"I420"`
        - `"I420A"`
        - `"I422"`
        - `"I444"`
        - `"NV12"`
        - `"RGBA"`
        - `"RGBX"`
        - `"BGRA"`
        - `"BGRX"`
    - `codedWidth`
      - : Width of the `VideoFrame` in pixels, potentially including non-visible padding, and prior to considering potential ratio adjustments.
    - `codedHeight`
      - : Height of the `VideoFrame` in pixels, potentially including non-visible padding, and prior to considering potential ratio adjustments.
    - `timestamp`
      - : An integer representing the timestamp of the frame in microseconds.
    - `duration` {{Optional_Inline}}
      - : An integer representing the duration of the frame in microseconds.
    - `layout` {{Optional_Inline}}
      - : A list containing the following values for each plane in the `VideoFrame`:
        - `offset`
          - : An integer representing the offset in bytes where the given plane begins.
        - `stride`
          - : An integer representing the number of bytes, including padding, used by each row of the plane.
            Planes may not overlap. If no `layout` is specified, the planes will be tightly packed.
    - `visibleRect` {{Optional_Inline}}
      - : An object representing the visible rectangle of the `VideoFrame`, containing the following:
        - `x`
          - : The x-coordinate.
        - `y`
          - : The y-coordinate.
        - `width`
          - : The width of the frame.
        - `height`
          - : The height of the frame.
    - `displayWidth` {{Optional_Inline}}
      - : The width of the `VideoFrame` when displayed after applying aspect ratio adjustments.
    - `displayHeight` {{Optional_Inline}}
      - : The height of the `VideoFrame` when displayed after applying aspect ratio adjustments.
    - `colorSpace`
      - : An object representing the color space of the `VideoFrame`, containing the following:
        - `primaries`
          - : A string representing the video color primaries, described on the page for the {{domxref("VideoColorSpace.primaries")}} property.
        - `transfer`
          - : A string representing the video color transfer function, described on the page for the {{domxref("VideoColorSpace.transfer")}} property.
        - `matrix`
          - : A string representing the video color matrix, described on the page for the {{domxref("VideoColorSpace.matrix")}} property.
        - `fullRange`
          - : A Boolean. If `true`, indicates that full-range color values are used.

## Examples

The following examples are from the article [Video processing with WebCodecs](https://web.dev/webcodecs/). In this first example, a `VideoFrame` is created from a canvas.

```js
const cnv = document.createElement("canvas");
// draw something on the canvas
// ...
let frame_from_canvas = new VideoFrame(cnv, { timestamp: 0 });
```

In the following example a `VideoFrame` is created from a {{jsxref("TypedArray")}}.

```js
const pixelSize = 4;
const init = {
  timestamp: 0,
  codedWidth: 320,
  codedHeight: 200,
  format: "RGBA",
};
let data = new Uint8Array(init.codedWidth * init.codedHeight * pixelSize);
for (let x = 0; x < init.codedWidth; x++) {
  for (let y = 0; y < init.codedHeight; y++) {
    let offset = (y * init.codedWidth + x) * pixelSize;
    data[offset] = 0x7f; // Red
    data[offset + 1] = 0xff; // Green
    data[offset + 2] = 0xd4; // Blue
    data[offset + 3] = 0x0ff; // Alpha
  }
}
let frame = new VideoFrame(data, init);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
