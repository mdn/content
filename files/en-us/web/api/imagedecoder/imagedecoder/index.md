---
title: "ImageDecoder: ImageDecoder() constructor"
short-title: ImageDecoder()
slug: Web/API/ImageDecoder/ImageDecoder
page-type: web-api-constructor
browser-compat: api.ImageDecoder.ImageDecoder
---

{{securecontext_header}}{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

The **`ImageDecoder()`** constructor creates a new {{domxref("ImageDecoder")}} object which unpacks and decodes image data.

## Syntax

```js-nolint
new ImageDecoder(init)
```

### Parameters

- `init`
  - : An object containing the following members:
    - `type`
      - : A string containing the [MIME type](/en-US/docs/Web/HTTP/MIME_types) of the image file to be decoded.
    - `data`
      - : An {{jsxref("ArrayBuffer")}}, a {{jsxref("TypedArray")}}, a {{jsxref("DataView")}}, or a {{domxref("ReadableStream")}} of bytes representing an encoded image type as described by `type`.
    - `premultiplyAlpha` {{optional_inline}}
      - : Specifies whether the decoded image's color channels should be premultiplied by the alpha channel. If not provided set as `"default"`:
        - `"none"`
        - `"premultiply"`
        - `"default"`
    - `colorSpaceConversion` {{optional_inline}}
      - : Specifies whether the image should be decoded using color space conversion. If not provided set as `"default"`. The value `"default"` indicates that implementation-specific behavior is used:
        - `"none"`
        - `"default"`
    - `desiredWidth` {{optional_inline}}
      - : An integer indicating the desired width for the decoded output. Has no effect unless the image codec supports variable resolution decoding.
    - `desiredHeight` {{optional_inline}}
      - : An integer indicating the desired height for the decoded output. Has no effect unless the image codec supports variable resolution decoding.
    - `preferAnimation` {{optional_inline}}
      - : A {{jsxref("Boolean")}} indicating whether the initial track selection should prefer an animated track.
    - `transfer`
      - : An array of {{jsxref("ArrayBuffer")}}s that `ImageDecoder` will detach and take ownership of. If the array contains the {{jsxref("ArrayBuffer")}} backing `data`, `ImageDecoder` will use that buffer directly instead of copying from it.

## Examples

The following example creates a new `ImageDecoder` with the required options.

```js
let init = {
  type: "image/png",
  data: imageByteStream,
};

let imageDecoder = new ImageDecoder(init);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
