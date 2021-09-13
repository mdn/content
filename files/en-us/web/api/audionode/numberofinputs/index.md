---
title: AudioNode.numberOfInputs
slug: Web/API/AudioNode/numberOfInputs
tags:
  - API
  - AudioNode
  - Property
  - Reference
  - Web Audio API
  - numberOfInputs
browser-compat: api.AudioNode.numberOfInputs
---
{{APIRef("Web Audio API")}}

The `numberOfInputs` property of
the {{domxref("AudioNode")}} interface returns the number of inputs feeding the
node. Source nodes are defined as nodes having a `numberOfInputs`
property with a value of 0.

## Syntax

```js
var numInputs = audioNode.numberOfInputs;
```

### Value

An integer ≥ 0.

## Example

```js
const audioCtx = new AudioContext();

const oscillator = audioCtx.createOscillator();
const gainNode = audioCtx.createGain();

oscillator.connect(gainNode).connect(audioCtx.destination);

console.log(oscillator.numberOfInputs); // 0
console.log(gainNode.numberOfInputs); // 1
console.log(audioCtx.destination.numberOfInputs); // 1
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio
  API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
