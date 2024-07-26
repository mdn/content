---
title: "AudioScheduledSourceNode: stop() method"
short-title: stop()
slug: Web/API/AudioScheduledSourceNode/stop
page-type: web-api-instance-method
browser-compat: api.AudioScheduledSourceNode.stop
---

{{ APIRef("Web Audio API") }}

The `stop()` method on {{domxref("AudioScheduledSourceNode")}} schedules a
sound to cease playback at the specified time. If no time is specified, then the sound
stops playing immediately.

Each time you call `stop()` on the same node, the specified time replaces
any previously-scheduled stop time that hasn't occurred yet. If the node has already
stopped, this method has no effect.

> [!NOTE]
> If a scheduled stop time occurs before the node's scheduled
> start time, the node never starts to play.

## Syntax

```js-nolint
stop()
stop(when)
```

### Parameters

- `when` {{optional_inline}}
  - : The time, in seconds, at which the sound should stop playing. This value is
    specified in the same time coordinate system as the {{domxref("AudioContext")}} is
    using for its {{domxref("BaseAudioContext/currentTime", "currentTime")}} attribute.
    Omitting this parameter, specifying a value of 0, or passing a negative value causes
    the sound to stop playback immediately.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- `InvalidStateNode` {{domxref("DOMException")}}
  - : Thrown if the node has not been started by calling {{domxref("AudioScheduledSourceNode.start", "start()")}}.
- {{jsxref("RangeError")}}
  - : Thrown if the value specified for `when` is negative.

## Examples

This example demonstrates starting an oscillator node, scheduled to begin playing at
once and to stop playing in one second. The stop time is determined by taking the audio
context's current time from {{domxref("BaseAudioContext/currentTime", "AudioContext.currentTime")}} and adding 1 second.

```js
context = new AudioContext();
osc = context.createOscillator();
osc.connect(context.destination);

/* Let's play a sine wave for one second. */

osc.start();
osc.stop(context.currentTime + 1);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- {{domxref("AudioScheduledSourceNode.start", "start()")}}
- {{domxref("AudioScheduledSourceNode")}}
- {{domxref("AudioBufferSourceNode")}}
- {{domxref("ConstantSourceNode")}}
- {{domxref("OscillatorNode")}}
