---
title: "BaseAudioContext: sampleRate property"
short-title: sampleRate
slug: Web/API/BaseAudioContext/sampleRate
page-type: web-api-instance-property
browser-compat: api.BaseAudioContext.sampleRate
---

{{ APIRef("Web Audio API") }}

The `sampleRate` property of the {{domxref("BaseAudioContext")}} interface returns a floating point number representing the sample rate, in samples per second, used by all nodes in this audio context.
This limitation means that sample-rate converters are not supported.

## Value

A floating point number indicating the audio context's sample rate, in samples per
second.

## Examples

> [!NOTE]
> For a full Web Audio example implementation, see one of our
> Web Audio Demos on the [MDN GitHub repo](https://github.com/mdn/webaudio-examples). Try entering
> `audioCtx.sampleRate` into your browser console.

```js
const audioCtx = new AudioContext();
// Older webkit/blink browsers require a prefix

// …

console.log(audioCtx.sampleRate);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
