---
title: "VideoDecoder: state property"
short-title: state
slug: Web/API/VideoDecoder/state
page-type: web-api-instance-property
browser-compat: api.VideoDecoder.state
---

{{APIRef("WebCodecs API")}}{{SecureContext_Header}}{{AvailableInWorkers("window_and_dedicated")}}

The **`state`** property of the {{domxref("VideoDecoder")}} interface returns the current state of the underlying codec.

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
