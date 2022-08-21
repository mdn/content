---
title: AudioNode.context
slug: Web/API/AudioNode/context
page-type: web-api-instance-property
tags:
  - API
  - AudioNode
  - Context
  - Property
  - Reference
  - Web Audio API
browser-compat: api.AudioNode.context
---
{{APIRef("Web Audio API")}}

The read-only `context` property of the
{{domxref("AudioNode")}} interface returns the associated
{{domxref("BaseAudioContext")}}, that is the object representing the processing graph
the node is participating in.

## Value

The {{domxref("AudioContext")}} or {{domxref("OfflineAudioContext")}} object that was
used to construct this `AudioNode`.

## Examples

```js
const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContext();

const oscillator = audioCtx.createOscillator();
const gainNode = audioCtx.createGain();
oscillator.connect(gainNode).connect(audioCtx.destination);

console.log(oscillator.context); // AudioContext
console.log(oscillator.context === audioCtx); // true
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
