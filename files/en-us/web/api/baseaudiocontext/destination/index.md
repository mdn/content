---
title: BaseAudioContext.destination
slug: Web/API/BaseAudioContext/destination
page-type: web-api-instance-property
tags:
  - API
  - AudioContext
  - BaseAudioContext
  - Property
  - Reference
  - Web Audio API
  - destination
browser-compat: api.BaseAudioContext.destination
---
{{ APIRef("Web Audio API") }}

The `destination` property of the {{ domxref("BaseAudioContext") }}
interface returns an {{ domxref("AudioDestinationNode") }} representing the final
destination of all audio in the context. It often represents an actual audio-rendering
device such as your device's speakers.

## Value

An {{ domxref("AudioDestinationNode") }}.

## Examples

> **Note:** for a full example implementation, see one of our Web Audio
> Demos on the [MDN GitHub repo](https://github.com/mdn/), like [voice-change-o-matic](https://github.com/mdn/voice-change-o-matic).

```js
const audioCtx = new AudioContext();
// Older webkit/blink browsers require a prefix

const oscillatorNode = audioCtx.createOscillator();
const gainNode = audioCtx.createGain();

oscillatorNode.connect(gainNode);
gainNode.connect(audioCtx.destination);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
