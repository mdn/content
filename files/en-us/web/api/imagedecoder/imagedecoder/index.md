---
title: ImageDecoder.ImageDecoder()
slug: Web/API/ImageDecoder/ImageDecoder
tags:
  - API
  - Constructor
  - Reference
  - ImageDecoder
browser-compat: api.ImageDecoder.ImageDecoder
---
{{securecontext_header}}{{DefaultAPISidebar("WebCodecs API")}}

The **`ImageDecoder()`** constructor creates a new {{domxref("ImageDecoder")}} object which unpacks and decodes image data.

## Syntax

```js
new ImageDecoder(init);
```

### Parameters

- `init`
  - : An object containing the following members:
    - `type`
      - : A {{domxref("DOMString","string")}} containing the MIME type of the image file to be decoded.
    - `data`
      - : A {{domxref("BufferSource")}} or {{domxref("ReadableStream")}} of bytes representing an encoded image type as described by `type`.
    - `premultiplyAlpha`{{Optional_Inline}}
      - : One of the following, if not provided set as `"default"`:
        - `"none"`
        - `"premultiply"`
        - `"default"`
    - `colorSpaceConversion`{{Optional_Inline}}
      - : One of the following, if not provided set as `"default"`:
        - `"none"`
        - `"default"`
    - `desiredWidth`{{Optional_Inline}}
      - : An integer indicating the desired width for the decoded output.
    - `desiredHeight`{{Optional_Inline}}
      - : An integer indicating the desired height for the decoded output.
    - `preferAnimation`{{Optional_Inline}}
      - : A {{jsxref("Boolean")}} indicating whether the the initial track selection should prefer an animated track.

## Examples

The following example creates a new `ImageDecoder` with the required options.

```js
let init = {
  type: "image/png",
  data: imageByteStream
};

let imageDecoder = new ImageDecoder(init);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

