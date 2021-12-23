---
title: AudioContext.baseLatency
slug: Web/API/AudioContext/baseLatency
tags:
  - API
  - Audio
  - AudioContext
  - Media
  - Property
  - Web Audio API
  - baseLatency
browser-compat: api.AudioContext.baseLatency
---
{{APIRef("Web Audio API")}}

The **`baseLatency`** read-only property of the
{{domxref("AudioContext")}} interface returns a double that represents the number of
seconds of processing latency incurred by the `AudioContext` passing an audio
buffer from the {{domxref("AudioDestinationNode")}} — i.e. the end of the audio graph —
into the host system's audio subsystem ready for playing.

> **Note:** You can request a certain latency during
> {{domxref("AudioContext.AudioContext()", "construction time", "", "true")}} with the
> `latencyHint` option, but the browser may ignore the option.

## Syntax

```js
var baseLatency = audioCtx.baseLatency;
```

### Value

A double representing the base latency in seconds.

## Example

```js
// default latency ("interactive")
const audioCtx1 = new AudioContext();
console.log(audioCtx1.baseLatency); // 0.00

// higher latency ("playback")
const audioCtx2 = new AudioContext({ latencyHint: 'playback' });
console.log(audioCtx2.baseLatency); // 0.15
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [Web Audio API](/en-US/docs/Web/API/Web_Audio_API)
