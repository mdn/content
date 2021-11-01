---
title: GainNode.gain
slug: Web/API/GainNode/gain
tags:
  - API
  - Gain
  - GainNode
  - Property
  - Reference
  - Web Audio API
browser-compat: api.GainNode.gain
---
{{ APIRef("Web Audio API") }}

The `gain` property of the {{ domxref("GainNode") }} interface is an [a-rate](/en-US/docs/Web/API/AudioParam#a-rate) {{domxref("AudioParam")}} representing the amount of gain to apply.

## Syntax

```js
var audioCtx = new AudioContext();
var gainNode = audioCtx.createGain();
gainNode.gain.value = 0.5;
```

### Value

An {{domxref("AudioParam")}}.

> **Note:** Though the `AudioParam` returned is read-only, the value it represents is not.

## Example

See [`BaseAudioContext.createGain()`](/en-US/docs/Web/API/BaseAudioContext/createGain#example) for example code showing how to use an `AudioContext` to create a `GainNode`, which is then used to mute and unmute the audio by changing the gain property value.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
