---
title: VideoEncoder.state
slug: Web/API/VideoEncoder/state
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - state
  - VideoEncoder
  - Experimental
browser-compat: api.VideoEncoder.state
---
{{APIRef("WebCodecs API")}}{{SecureContext_Header}}{{SeeCompatTable}}

The **`state`** read-only property of the {{domxref("VideoEncoder")}} interface returns the current state of the underlying codec.

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
