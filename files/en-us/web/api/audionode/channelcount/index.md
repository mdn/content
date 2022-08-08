---
title: AudioNode.channelCount
slug: Web/API/AudioNode/channelCount
page-type: web-api-instance-property
tags:
  - API
  - AudioNode
  - Property
  - Reference
  - Web Audio API
  - channelCount
browser-compat: api.AudioNode.channelCount
---
{{ APIRef("Web Audio API") }}

The **`channelCount`** property of the {{ domxref("AudioNode") }} interface represents an integer used to determine how many channels are used when [up-mixing and down-mixing](/en-US/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) connections to any inputs to the node.

`channelCount`'s usage and precise definition depend on the value of {{domxref("AudioNode.channelCountMode")}}:

- It is ignored if the `channelCountMode` value is `max`.
- It is used as a maximum value if the `channelCountMode` value is `clamped-max`.
- It is used as the exact value if the `channelCountMode` value is `explicit`.

## Value

An integer.

## Examples

```js
const audioCtx = new AudioContext();

const oscillator = audioCtx.createOscillator();
const gainNode = audioCtx.createGain();

oscillator.connect(gainNode);
gainNode.connect(audioCtx.destination);

oscillator.channelCount;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
