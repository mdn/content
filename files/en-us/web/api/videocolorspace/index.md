---
title: VideoColorSpace
slug: Web/API/VideoColorSpace
tags:
  - API
  - Interface
  - Reference
  - VideoColorSpace
browser-compat: api.VideoColorSpace
---
{{DefaultAPISidebar("WebCodecs API")}}

The **`VideoColorSpace`** interface of the {{domxref('WebCodecs API','','',' ')}} represents the color space of a video.

## Constructor

- {{domxref("VideoColorSpace.VideoColorSpace", "VideoColorSpace()")}}
  - : Creates a new `VideoColorSpace` object.

## Properties

- {{domxref("VideoColorSpace.primaries")}}{{ReadOnlyInline}}
  - : A {{domxref("DOMString", "string")}} containing the color primary describing the color {{glossary("gamut")}} of a video sample.
- {{domxref("VideoColorSpace.transfer")}}
  - : A {{domxref("DOMString", "string")}} containing the transfer characteristics of video samples.
- {{domxref("VideoColorSpace.matrix")}}
  - : A {{domxref("DOMString", "string")}} containing the matrix coefficients describing the relationship between sample component values and color coordinates.
- {{domxref("VideoColorSpace.fullRange")}}
  - : A {{jsxref("Boolean")}}. If `true` indicates that full-range color values are used.

## Methods

- {{domxref("VideoColorSpace.toJSON()")}}
  - : Returns a JSON representation of the `VideoColorSpace` object.

## Examples

In the following example, `colorSpace` is a `VideoColorSpace` object returned from {{domxref("VideoFrame")}}. The object is then printed to the console.

```js
let colorSpace = VideoFrame.colorSpace
console.log(colorSpace);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
