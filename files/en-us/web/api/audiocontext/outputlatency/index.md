---
title: AudioContext.outputLatency
slug: Web/API/AudioContext/outputLatency
page-type: web-api-instance-property
tags:
  - API
  - Audio
  - AudioContext
  - Property
  - Reference
  - Web Audio API
  - outputLatency
browser-compat: api.AudioContext.outputLatency
---
{{APIRef("Web Audio API")}}

The **`outputLatency`** read-only property of
the {{domxref("AudioContext")}} Interface provides an estimation of the output latency
of the current audio context.

This is the time, in seconds, between the browser passing an audio buffer out of an
audio graph over to the host system's audio subsystem to play, and the time at which the
first sample in the buffer is actually processed by the audio output device.

It varies depending on the platform and the available hardware.

## Value

A double representing the output latency in seconds.

## Examples

```js
const audioCtx = new AudioContext();
console.log(audioCtx.outputLatency);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [Web Audio API](/en-US/docs/Web/API/Web_Audio_API)
