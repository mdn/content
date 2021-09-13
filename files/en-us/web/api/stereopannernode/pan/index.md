---
title: StereoPannerNode.pan
slug: Web/API/StereoPannerNode/pan
tags:
  - API
  - Property
  - Read-only
  - Reference
  - StereoPannerNode
  - Web Audio API
browser-compat: api.StereoPannerNode.pan
---
{{APIRef("Web Audio API")}}

The `pan` property of the {{ domxref("StereoPannerNode") }} interface is an [a-rate](/en-US/docs/Web/API/AudioParam#a-rate) {{domxref("AudioParam")}} representing the amount of panning to apply. The value can range between `-1` (full left pan) and `1` (full right pan).

## Syntax

```js
var audioCtx = new AudioContext();
var panNode = audioCtx.createStereoPanner();
panNode.pan.value = -0.5;
```

### Returned value

An [a-rate](/en-US/docs/Web/API/AudioParam#a-rate) {{domxref("AudioParam")}} containing the panning to apply.

> **Note:** Though the `AudioParam` returned is read-only, the value it represents is not.

## Example

See [`BaseAudioContext.createStereoPanner()`](/en-US/docs/Web/API/BaseAudioContext/createStereoPanner#example) for example code.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
