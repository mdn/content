---
title: AudioNode.numberOfOutputs
slug: Web/API/AudioNode/numberOfOutputs
tags:
  - API
  - AudioNode
  - Property
  - Reference
  - Web Audio API
  - numberOfOutputs
browser-compat: api.AudioNode.numberOfOutputs
---
{{APIRef("Web Audio API")}}

The `numberOfOutputs` property of
the {{ domxref("AudioNode") }} interface returns the number of outputs coming out of
the node. Destination nodes — like {{domxref("AudioDestinationNode") }} — have
a value of 0 for this attribute.

## Syntax

```js
var numOutputs = audioNode.numberOfOutputs;
```

### Value

An integer ≥ 0.

## Example

```js
const audioCtx = new AudioContext();

const oscillator = audioCtx.createOscillator();
const gainNode = audioCtx.createGain();

oscillator.connect(gainNode).connect(audioCtx.destination);

console.log(oscillator.numberOfOutputs); // 1
console.log(gainNode.numberOfOutputs); // 1
console.log(audioCtx.destination.numberOfOutputs); // 0
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio
  API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
