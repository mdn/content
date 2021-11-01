---
title: VideoFrame.VideoFrame()
slug: Web/API/VideoFrame/VideoFrame
tags:
  - API
  - Constructor
  - Reference
  - VideoFrame
browser-compat: api.VideoFrame.VideoFrame
---
{{DefaultAPISidebar("Web Codecs API")}}

The **`VideoFrame()`** constructor creates a new {{domxref("VideoFrame")}} object representing a frame of a video.

## Syntax

```js
new VideoFrame(image, init);
new VideoFrame(data, init);
```

### Parameters

The first type of constructor (see above) creates a new {{domxref("VideoFrame")}} from a {{domxref("CanvasImageSource")}}. Its parameters are:

- `image`
  - : A {{domxref("CanvasImageSource")}} containing the image data for the new `VideoFrame`.
- `init`{{Optional_Inline}}
  - : A dictionary object containing the following:
    - `duration`
      - : An integer representing the duration of the frame in microseconds.
    - `timestamp`
      - : An integer representing the timestamp of the frame in microseconds.
    - `alpha`
      - : A string, describing how the user agent should behave when dealing with alpha channels. The default value is "keep".
        - `"keep"`: Indicates that the user agent should preserve alpha channel data.
        - `"discard"`: Indicates that the user agent should ignore or remove alpha channel data.

The second type of constructor (see above) creates a new {{domxref("VideoFrame")}} from an {{domxref("ArrayBuffer")}}. Its parameters are:

- `data`
  - : An {{domxref("ArrayBuffer")}} containing the data for the new `VideoFrame`.
- `init`
  - : A dictionary object containing the following:
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
      - : An integer representing the timestamp of the frame in microseconds.
    - `codedHeight`
      - : An integer representing the timestamp of the frame in microseconds.
    - `timestamp`
      - : An integer representing the timestamp of the frame in microseconds.
    - `duration`{{Optional_Inline}}
      - : An integer representing the duration of the frame in microseconds.

## Examples

The following examples are from the article [Video processing with WebCodecs](https://web.dev/webcodecs/). In this first example, a `VideoFrame` is created from a canvas.

```js
const cnv = document.createElement('canvas');
// draw something on the canvas
…
let frame_from_canvas = new VideoFrame(cnv, { timestamp: 0 });
```

In the following example a `VideoFrame` is created from a {{domxref("BufferSource")}}.

```js
const pixelSize = 4;
const init = {timestamp: 0, codedWidth: 320, codedHeight: 200, format: 'RGBA'};
let data = new Uint8Array(init.codedWidth * init.codedHeight * pixelSize);
for (let x = 0; x < init.codedWidth; x++) {
  for (let y = 0; y < init.codedHeight; y++) {
    let offset = (y * init.codedWidth + x) * pixelSize;
    data[offset] = 0x7F;      // Red
    data[offset + 1] = 0xFF;  // Green
    data[offset + 2] = 0xD4;  // Blue
    data[offset + 3] = 0x0FF; // Alpha
  }
}
let frame = new VideoFrame(data, init);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

