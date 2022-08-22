---
title: DynamicsCompressorNode.release
slug: Web/API/DynamicsCompressorNode/release
page-type: web-api-instance-property
tags:
  - API
  - DynamicsCompressorNode
  - Property
  - Reference
  - Release
  - Web Audio API
browser-compat: api.DynamicsCompressorNode.release
---
{{ APIRef("Web Audio API") }}

The `release` property of the {{ domxref("DynamicsCompressorNode") }} interface Is a [k-rate](/en-US/docs/Web/API/AudioParam#k-rate) {{domxref("AudioParam")}} representing the amount of time, in seconds, required to increase the gain by 10 dB. It defines how quick the signal is adapted when its volume is reduced.

The `release` property's default value is `0.25` and it can be set between `0` and `1`.

## Value

An {{domxref("AudioParam")}}.

> **Note:** Though the {{domxref("AudioParam")}} returned is read-only, the value it represents is not.

## Examples

```js
const audioCtx = new AudioContext();
const compressor = audioCtx.createDynamicsCompressor();
compressor.release.value = 0.25;
```

See [`BaseAudioContext.createDynamicsCompressor()`](/en-US/docs/Web/API/BaseAudioContext/createDynamicsCompressor#example) for more complete example code.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
