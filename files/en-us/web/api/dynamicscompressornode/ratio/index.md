---
title: "DynamicsCompressorNode: ratio property"
short-title: ratio
slug: Web/API/DynamicsCompressorNode/ratio
page-type: web-api-instance-property
browser-compat: api.DynamicsCompressorNode.ratio
---

{{ APIRef("Web Audio API") }}

The `ratio` property of the {{ domxref("DynamicsCompressorNode") }} interface Is a [k-rate](/en-US/docs/Web/API/AudioParam#k-rate) {{domxref("AudioParam")}} representing the amount of change, in dB, needed in the input for a 1 dB change in the output.

The `ratio` property's default value is `12` and it can be set between `1` and `20`.

![Describes the effect of different ratio on the output signal](webaudioratio.png)

## Value

An {{domxref("AudioParam")}}.

> **Note:** Though the {{domxref("AudioParam")}} returned is read-only, the value it represents is not.

## Examples

```js
const audioCtx = new AudioContext();
const compressor = audioCtx.createDynamicsCompressor();
compressor.ratio.value = 12;
```

See [`BaseAudioContext.createDynamicsCompressor()`](/en-US/docs/Web/API/BaseAudioContext/createDynamicsCompressor#examples) for more complete example code.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
