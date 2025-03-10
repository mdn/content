---
title: "BaseAudioContext: destination property"
short-title: destination
slug: Web/API/BaseAudioContext/destination
page-type: web-api-instance-property
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

> [!NOTE]
> For more complete applied examples/information, check out our [Voice-change-O-matic](https://github.com/mdn/webaudio-examples/tree/main/voice-change-o-matic) demo (see [app.js lines 108–193](https://github.com/mdn/webaudio-examples/blob/main/voice-change-o-matic/scripts/app.js#L108-L193) for relevant code).

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
