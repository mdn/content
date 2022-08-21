---
title: AudioBufferSourceNode.start()
slug: Web/API/AudioBufferSourceNode/start
page-type: web-api-instance-method
tags:
  - API
  - Audio
  - AudioBufferSourceNode
  - Media
  - Method
  - Reference
  - Web Audio API
  - sound
  - start
browser-compat: api.AudioBufferSourceNode.start
---
{{ APIRef("Web Audio API") }}

The `start()` method of the {{ domxref("AudioBufferSourceNode") }}
Interface is used to schedule playback of the audio data contained in the buffer, or
to begin playback immediately.

## Syntax

```js
start(when)
start(when, offset)
start(when, offset, duration)
```

### Parameters

- `when` {{optional_inline}}
  - : The time, in seconds, at which the sound should begin to play, in the same time
    coordinate system used by the {{domxref("AudioContext")}}. If `when` is
    less than ({{domxref("BaseAudioContext/currentTime", "AudioContext.currentTime")}}, or if it's 0, the sound begins to
    play at once. **The default value is 0.**
- `offset` {{optional_inline}}
  - : An offset, specified as the number of seconds in the same time coordinate system as
    the `AudioContext`, to the time within the audio buffer that playback
    should begin. For example, to start playback halfway through a 10-second audio clip,
    `offset` should be 5. The default value, 0, will begin playback at the
    beginning of the audio buffer, and offsets past the end of the audio which will be
    played (based on the audio buffer's {{domxref("AudioBuffer.duration", "duration")}}
    and/or the {{domxref("AudioBufferSourceNode.loopEnd", "loopEnd")}} property) are
    silently clamped to the maximum value allowed. The computation of the offset into the
    sound is performed using the sound buffer's natural sample rate, rather than the
    current playback rate, so even if the sound is playing at twice its normal speed, the
    midway point through a 10-second audio buffer is still 5.
- `duration` {{optional_inline}}
  - : The duration of the sound to be played, specified in seconds. If this parameter
    isn't specified, the sound plays until it reaches its natural conclusion or is stopped
    using the {{domxref("AudioScheduledSourceNode.stop", "stop()")}} method. Using this
    parameter is functionally identical to calling `start(when, offset)` and
    then calling `stop(when+duration)`.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if a negative value was specified for one or more of the three time parameters. Please
    don't attempt to tamper with the laws of temporal physics.
- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if `start()` has already been called. You can only call this function once
    during the lifetime of an `AudioBufferSourceNode`.

## Examples

The most simple example just starts the audio buffer playing from the beginning — you
don't need to specify any parameters in this case:

```js
source.start();
```

The following more complex example will, 1 second from now, start playing 10 seconds
worth of sound starting 3 seconds into the audio buffer.

```js
source.start(audioCtx.currentTime + 1,3,10);
```

> **Note:** For a more complete example showing `start()` in use, check out our {{domxref("BaseAudioContext/decodeAudioData", "AudioContext.decodeAudioData()")}} example. You can also [run the code example live](https://mdn.github.io/webaudio-examples/decode-audio-data/), or [view the source](https://github.com/mdn/webaudio-examples/tree/master/decode-audio-data).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
