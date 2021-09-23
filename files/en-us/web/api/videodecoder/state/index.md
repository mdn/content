---
title: VideoDecoder.state
slug: Web/API/VideoDecoder/state
tags:
  - API
  - Property
  - Reference
  - state
  - VideoDecoder
browser-compat: api.VideoDecoder.state
---
{{securecontext_header}}{{DefaultAPISidebar("WebCodecs API")}}

The **`state`**  property of the {{domxref("VideoDecoder")}} interface returns the current state of the underlying codec.

## Value

A string containing one of the following values:

- `"unconfigured"`
  - : The codec is not configured for decoding.
- `"configured"`
  - : The codec has a valid configuration and is ready.
- `"closed"`
  - : The codec is no longer usable and system resources have been released.

## Examples

The following example prints the state of the `VideoDecoder` to the console.

```js
console.log(VideoDecoder.state);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}


