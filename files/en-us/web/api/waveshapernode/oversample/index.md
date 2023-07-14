---
title: "WaveShaperNode: oversample property"
short-title: oversample
slug: Web/API/WaveShaperNode/oversample
page-type: web-api-instance-property
browser-compat: api.WaveShaperNode.oversample
---

{{ APIRef("Web Audio API") }}

The `oversample` property of the {{ domxref("WaveShaperNode") }} interface is an enumerated value indicating if oversampling must be used. Oversampling is a technique for creating more samples (up-sampling) before applying a distortion effect to the audio signal.

Once applied, the number of samples is reduced to its initial numbers. This leads to better results by avoiding some aliasing, but comes at the expense of a lower precision shaping curve.

The possible `oversample` values are:

| Value    | Effect                                                                 |
| -------- | ---------------------------------------------------------------------- |
| `'none'` | Do not perform any oversampling.                                       |
| `'2x'`   | Double the amount of samples before applying the shaping curve.        |
| `'4x'`   | Multiply by 4 the amount of samples before applying the shaping curve. |

## Value

One of `'none'`, `'2x'`, or `'4x'`.

## Examples

See [`BaseAudioContext.createWaveShaper()`](/en-US/docs/Web/API/BaseAudioContext/createWaveShaper#examples) for example code.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
