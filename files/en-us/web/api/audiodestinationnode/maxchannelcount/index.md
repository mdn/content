---
title: "AudioDestinationNode: maxChannelCount property"
short-title: maxChannelCount
slug: Web/API/AudioDestinationNode/maxChannelCount
page-type: web-api-instance-property
browser-compat: api.AudioDestinationNode.maxChannelCount
---

{{ APIRef("Web Audio API") }}

The `maxChannelCount` property of the {{ domxref("AudioDestinationNode") }} interface is an `unsigned long` defining the maximum amount of channels that the physical device can handle.

The {{domxref("AudioNode.channelCount")}} property can be set between 0 and this value (both included). If `maxChannelCount` is `0`, like in {{domxref("OfflineAudioContext")}}, the channel count cannot be changed.

## Value

An `unsigned long`.

## Examples

The following would set up an audio graph, featuring an `AudioDestinationNode` with `maxChannelCount` of 2:

```js
const audioCtx = new AudioContext();
const source = audioCtx.createMediaElementSource(myMediaElement);
source.connect(gainNode);
audioCtx.destination.maxChannelCount = 2;
gainNode.connect(audioCtx.destination);
```

To see a more complete implementation, check out one of our MDN Web Audio examples, such as [Voice-change-o-matic](https://mdn.github.io/webaudio-examples/voice-change-o-matic/) or [Violent Theremin](https://mdn.github.io/webaudio-examples/violent-theremin/).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
