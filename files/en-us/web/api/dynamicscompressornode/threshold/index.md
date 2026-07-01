---
title: "DynamicsCompressorNode: threshold property"
short-title: threshold
slug: Web/API/DynamicsCompressorNode/threshold
page-type: web-api-instance-property
browser-compat: api.DynamicsCompressorNode.threshold
---

{{ APIRef("Web Audio API") }}

The `threshold` property of the {{ domxref("DynamicsCompressorNode") }} interface is a [k-rate](/en-US/docs/Web/API/AudioParam#k-rate) {{domxref("AudioParam")}} representing the decibel value above which the compression will start taking effect.

The `threshold` property's default value is `-24` and it can be set between `-100` and `0`.

![The threshold attribute has no effect on signals lowers than its value, but induce volume reduction on signal stronger than its value.](webaudiothreshold.png)

## Value

An {{domxref("AudioParam")}}.

> [!NOTE]
> Though the {{domxref("AudioParam")}} returned is read-only, the value it represents is not.

## Examples

```js
const audioCtx = new AudioContext();
const compressor = audioCtx.createDynamicsCompressor();
compressor.threshold.value = -50;
```

See [`BaseAudioContext.createDynamicsCompressor()`](/en-US/docs/Web/API/BaseAudioContext/createDynamicsCompressor#examples) for more complete example code.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
