---
title: DynamicsCompressorNode.attack
slug: Web/API/DynamicsCompressorNode/attack
page-type: web-api-instance-property
tags:
  - API
  - Attack
  - DynamicsCompressorNode
  - Property
  - Reference
  - Web Audio API
browser-compat: api.DynamicsCompressorNode.attack
---
{{ APIRef("Web Audio API") }}

The `attack` property of the {{ domxref("DynamicsCompressorNode") }} interface is a [k-rate](/en-US/docs/Web/API/AudioParam#k-rate) {{domxref("AudioParam")}} representing the amount of time, in seconds, required to reduce the gain by 10 dB. It defines how quickly the signal is adapted when its volume is increased.

The `attack` property's default value is `0.003` and it can be set between `0` and `1`.

## Value

An {{domxref("AudioParam")}}.

> **Note:** Though the {{domxref("AudioParam")}} returned is read-only, the value it represents is not.

## Examples

```js
const audioCtx = new AudioContext();
const compressor = audioCtx.createDynamicsCompressor();
compressor.attack.value = 0;
```

See [`BaseAudioContext.createDynamicsCompressor()`](/en-US/docs/Web/API/BaseAudioContext/createDynamicsCompressor#example) for more complete example code.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
