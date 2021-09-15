---
title: AudioScheduledSourceNode.start()
slug: Web/API/AudioScheduledSourceNode/start
tags:
  - API
  - Audio
  - AudioScheduledSourceNode
  - Media
  - Method
  - NeedsExample
  - Node
  - Reference
  - Web Audio API
  - play
  - sound
  - start
browser-compat: api.AudioScheduledSourceNode.start
---
{{APIRef("Web Audio API")}}

The `start()` method on
{{domxref("AudioScheduledSourceNode")}} schedules a sound to begin playback at the
specified time. If no time is specified, then the sound begins playing
immediately.

## Syntax

```js
start()
start(when)
```

### Parameters

- `when` {{optional_inline}}
  - : The time, in seconds, at which the sound should begin to play. This value is
    specified in the same time coordinate system as the {{domxref("AudioContext")}} is
    using for its {{domxref("BaseAudioContext/currentTime", "currentTime")}} attribute. A
    value of 0 (or omitting the `when` parameter entirely) causes the sound to
    start playback immediately.

### Return value

{{jsxref("undefined")}}

### Exceptions

- `InvalidStateNode`
  - : The node has already been started. This error occurs even if the node is no longer
    running because of a prior call to {{domxref("AudioScheduledSourceNode.stop",
    "stop()")}}.
- `RangeError`
  - : The value specified for `when` is negative.

## Example

This example demonstrates how to create an {{domxref("OscillatorNode")}} which is
scheduled to start playing in 2 seconds and stop playing 1 second after that. The times
are calculated by adding the desired number of seconds to the context's current time
stamp returned by {{domxref("BaseAudioContext/currentTime", "AudioContext.currentTime")}}.

```js
context = new AudioContext();
osc = context.createOscillator();
osc.connect(context.destination);

/* Schedule the start and stop times for the oscillator */

osc.start(context.currentTime + 2);
osc.stop(context.currentTime + 3);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- {{domxref("AudioScheduledSourceNode.stop", "stop()")}}
- {{domxref("AudioScheduledSourceNode")}}
- {{domxref("AudioBufferSourceNode")}}
- {{domxref("ConstantSourceNode")}}
- {{domxref("OscillatorNode")}}
