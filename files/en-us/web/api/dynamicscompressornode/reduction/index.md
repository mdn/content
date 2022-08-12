---
title: DynamicsCompressorNode.reduction
slug: Web/API/DynamicsCompressorNode/reduction
page-type: web-api-instance-property
tags:
  - API
  - DynamicsCompressorNode
  - Property
  - Reference
  - Web Audio API
  - reduction
browser-compat: api.DynamicsCompressorNode.reduction
---
{{ APIRef("Web Audio API") }}

The **`reduction`** read-only property of the {{ domxref("DynamicsCompressorNode") }} interface is a float representing the amount of gain reduction currently applied by the compressor to the signal.

Intended for metering purposes, it returns a value in dB, or `0` (no gain reduction) if no signal is fed into the `DynamicsCompressorNode`. The range of this value is between `-20` and `0` (in dB).

## Value

A float.

## Examples

```js
const audioCtx = new AudioContext();
const compressor = audioCtx.createDynamicsCompressor();
const myReduction = compressor.reduction;
```

See [`BaseAudioContext.createDynamicsCompressor()`](/en-US/docs/Web/API/BaseAudioContext/createDynamicsCompressor#example) for more complete example code.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
