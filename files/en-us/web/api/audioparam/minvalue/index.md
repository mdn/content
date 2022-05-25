---
title: AudioParam.minValue
slug: Web/API/AudioParam/minValue
page-type: web-api-instance-property
tags:
  - API
  - Audio
  - AudioParam
  - Property
  - Reference
  - Web Audio API
  - minValue
browser-compat: api.AudioParam.minValue
---
{{APIRef("Web Audio API")}}

The **`minValue`**
read-only property of the {{domxref("AudioParam")}} interface represents the minimum
possible value for the parameter's nominal (effective) range.

## Value

A floating-point {{jsxref("Number")}} indicating the minimum value permitted for the
parameter's nominal range.

The default value of `minValue` is the minimum negative single-precision
floating-point value (-340,282,346,638,528,859,811,704,183,484,516,925,440).

## Examples

```js
const audioCtx = new AudioContext();
const gainNode = audioCtx.createGain();
console.log(gainNode.gain.minValue); // -3.4028234663852886e38
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("AudioParam.maxValue")}}
