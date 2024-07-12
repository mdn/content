---
title: VideoColorSpace
slug: Web/API/VideoColorSpace
page-type: web-api-interface
browser-compat: api.VideoColorSpace
---

{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

The **`VideoColorSpace`** interface of the {{domxref('WebCodecs API','','',' ')}} represents the color space of a video.

## Constructor

- {{domxref("VideoColorSpace.VideoColorSpace", "VideoColorSpace()")}}
  - : Creates a new `VideoColorSpace` object.

## Instance properties

- {{domxref("VideoColorSpace.primaries")}} {{ReadOnlyInline}}
  - : A string containing the color primary describing the color {{glossary("gamut")}} of a video sample.
- {{domxref("VideoColorSpace.transfer")}}
  - : A string containing the transfer characteristics of video samples.
- {{domxref("VideoColorSpace.matrix")}}
  - : A string containing the matrix coefficients describing the relationship between sample component values and color coordinates.
- {{domxref("VideoColorSpace.fullRange")}}
  - : A {{jsxref("Boolean")}}. If `true` indicates that full-range color values are used.

## Instance methods

- {{domxref("VideoColorSpace.toJSON()")}}
  - : Returns a JSON representation of the `VideoColorSpace` object.

## Examples

In the following example, `colorSpace` is a `VideoColorSpace` object returned from {{domxref("VideoFrame")}}. The object is then printed to the console.

```js
let colorSpace = VideoFrame.colorSpace;
console.log(colorSpace);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
