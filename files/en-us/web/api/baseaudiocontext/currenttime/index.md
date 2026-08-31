---
title: "BaseAudioContext: currentTime property"
short-title: currentTime
slug: Web/API/BaseAudioContext/currentTime
page-type: web-api-instance-property
browser-compat: api.BaseAudioContext.currentTime
---

{{ APIRef("Web Audio API") }}

The `currentTime` read-only property of the {{ domxref("BaseAudioContext") }}
interface returns a double representing the elapsed time in the context's audio timeline in seconds that
can be used for scheduling audio playback, visualizing timelines, etc. It starts at 0.

While the context is running, this value advances in increments of one audio rendering block, or _render quantum_, and represents the start of the next block to be processed. For a block of 128 sample frames, this is approximately 2.9 ms at a {{domxref("BaseAudioContext.sampleRate", "sampleRate")}} of 44.1 kHz, or 2.7 ms at 48 kHz. Repeated reads can return the same value until the next block is processed.

This audio timeline is separate from the system clock used by {{jsxref("Date.now()")}}. It stops advancing while the context is suspended. For an {{domxref("OfflineAudioContext")}}, it advances as audio is rendered, independently of elapsed real time.

## Value

A floating-point number representing the current time in seconds.

## Examples

```js
const audioCtx = new AudioContext();
// Older webkit/blink browsers require a prefix

// …

console.log(audioCtx.currentTime);
```

## Reduced time precision

To offer protection against timing attacks and [fingerprinting](/en-US/docs/Glossary/Fingerprinting), the precision of `audioCtx.currentTime` may be reduced depending on browser settings.

The value of `audioCtx.currentTime` is based on the number of audio sample frames processed. In Chrome and Safari, the browser does not apply additional timer rounding to this value.

In Firefox, the `privacy.reduceTimerPrecision` preference is enabled by default and uses a rounding interval of 1 ms. However, Firefox skips this rounding when the duration of a 128-frame audio block is greater than the configured interval. At common sample rates such as 44.1 kHz and 48 kHz, the default value therefore follows the audio block timing rather than being rounded at 1 ms intervals.

If `privacy.resistFingerprinting` is enabled, the rounding interval is 16.667 ms or the interval configured by `privacy.resistFingerprinting.reduceTimerPrecision.microseconds`, whichever is larger. The same audio block duration check applies.

For example, these are possible values in Firefox:

```js
// Audio block timing at 48 kHz with default settings
audioCtx.currentTime;
// Might be:
// 0.0026666666666666666
// 0.005333333333333333
// 0.008
// …

// Reduced time precision with `privacy.resistFingerprinting` enabled
audioCtx.currentTime;
// Might be:
// 0.050001
// 0.066668
// 0.083335
// …
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
