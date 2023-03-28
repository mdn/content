---
title: VideoEncoder.state
slug: Web/API/VideoEncoder/state
page-type: web-api-instance-property
browser-compat: api.VideoEncoder.state
---

{{APIRef("WebCodecs API")}}{{SecureContext_Header}}

Returns the current state of the underlying codec.

## Value

A string containing one of the following values:

- `"unconfigured"`
  - : The codec is not configured for decoding.
- `"configured"`
  - : The codec has a valid configuration and is ready.
- `"closed"`
  - : The codec is no longer usable and system resources have been released.

## Examples

The following example prints the state of the `VideoEncoder` to the console.

```js
console.log(VideoEncoder.state);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
