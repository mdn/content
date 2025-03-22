---
title: "WaveShaperNode: curve property"
short-title: curve
slug: Web/API/WaveShaperNode/curve
page-type: web-api-instance-property
browser-compat: api.WaveShaperNode.curve
---

{{ APIRef("Web Audio API") }}

The `curve` property of the {{ domxref("WaveShaperNode") }} interface is a {{jsxref("Float32Array")}} of numbers describing the distortion to apply.

The mid-element of the array is applied to any signal value of `0`, the first one to signal values of `-1`, and the last to signal values of `1`; values lower than `-1` or greater than `1` are treated like `-1` or `1` respectively.

If necessary, intermediate values of the distortion curve are linearly interpolated.

> [!NOTE]
> The array can be a `null` value: in that case, no distortion is applied to the input signal.

## Value

A {{jsxref("Float32Array")}}.

## Examples

See [`BaseAudioContext.createWaveShaper()`](/en-US/docs/Web/API/BaseAudioContext/createWaveShaper#examples) for example code.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
