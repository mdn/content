---
title: AudioDestinationNode.maxChannelCount
slug: Web/API/AudioDestinationNode/maxChannelCount
tags:
  - API
  - AudioDestinationNode
  - Property
  - Reference
  - Web Audio API
  - maxChannelCount
browser-compat: api.AudioDestinationNode.maxChannelCount
---
{{ APIRef("Web Audio API") }}

The `maxchannelCount` property of the {{ domxref("AudioDestinationNode") }} interface is an `unsigned long` defining the maximum amount of channels that the physical device can handle.

The {{domxref("AudioNode.channelCount")}} property can be set between 0 and this value (both included). If `maxChannelCount` is `0`, like in {{domxref("OfflineAudioContext")}}, the channel count cannot be changed.

## Syntax

```js
var audioCtx = new AudioContext();
var myDestination = audioCtx.destination;
myDestination.maxChannelCount = 2;
```

### Value

An `unsigned long`.

## Example

The following would set up a simple audio graph, featuring an `AudioDestinationNode` with `maxChannelCount` of 2:

```js
var audioCtx = new AudioContext();
var source = audioCtx.createMediaElementSource(myMediaElement);
source.connect(gainNode);
audioCtx.destination.maxChannelCount = 2;
gainNode.connect(audioCtx.destination);
```

To see a more complete implementation, check out one of our MDN Web Audio examples, such as [Voice-change-o-matic](https://mdn.github.io/voice-change-o-matic/) or [Violent Theremin](https://mdn.github.io/violent-theremin/).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
