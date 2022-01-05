---
title: AudioParam.maxValue
slug: Web/API/AudioParam/maxValue
tags:
  - API
  - Audio
  - AudioParam
  - Property
  - Reference
  - Web Audio API
  - maxValue
browser-compat: api.AudioParam.maxValue
---
{{APIRef("Web Audio API")}}

The **`maxValue`**
read-only property of the {{domxref("AudioParam")}} interface represents the maximum
possible value for the parameter's nominal (effective) range.

## Syntax

```js
var maxVal = audioParam.maxValue;
```

### Value

A floating-point {{jsxref("Number")}} indicating the maximum value permitted for the
parameter's nominal range.

The default value of `maxValue` is the maximum positive single-precision
floating-point value (+340,282,346,638,528,859,811,704,183,484,516,925,440).

## Example

```js
const audioCtx = new AudioContext();
const gainNode = audioCtx.createGain();
console.log(gainNode.gain.maxValue); // 3.4028234663852886e38
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("AudioParam.minValue")}}
