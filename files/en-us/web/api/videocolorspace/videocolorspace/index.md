---
title: "VideoColorSpace: VideoColorSpace() constructor"
short-title: VideoColorSpace()
slug: Web/API/VideoColorSpace/VideoColorSpace
page-type: web-api-constructor
browser-compat: api.VideoColorSpace.VideoColorSpace
---

{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

The **`VideoColorSpace()`** constructor creates a new {{domxref("VideoColorSpace")}} object which represents a video color space.

## Syntax

```js-nolint
new VideoColorSpace()
new VideoColorSpace(options)
```

### Parameters

All values default to `null` when they are not present.

- `options` {{optional_inline}}
  - : An object containing the following:
    - `primaries` {{optional_inline}}
      - : One of the following strings:
        - `"bt709"`
        - `"bt470bg"`
        - `"smpte170m"`
    - `transfer` {{optional_inline}}
      - : One of the following strings:
        - `"bt709"`
        - `"smpte170m"`
        - `"iec61966-2-1"`
    - `matrix` {{optional_inline}}
      - : One of the following strings:
        - `"rgb"`
        - `"bt709"`
        - `"bt470bg"`
        - `"smpte170m"`
    - `fullRange` {{optional_inline}}
      - : A {{jsxref("Boolean")}}, `true` if full-range color values are used in the video.

## Examples

The following example creates a new `VideoColorSpace` object with {{domxref("VideoColorSpace.primaries")}} set to `"bt709"`, and {{domxref("VideoColorSpace.primaries")}} set to `true`.

```js
const options = {
  primaries: "bt709",
  fullRange: true,
};

const colorSpace = new VideoColorSpace(options);
console.log(colorSpace);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
