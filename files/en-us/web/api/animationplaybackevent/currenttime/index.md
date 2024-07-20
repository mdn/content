---
title: "AnimationPlaybackEvent: currentTime property"
short-title: currentTime
slug: Web/API/AnimationPlaybackEvent/currentTime
page-type: web-api-instance-property
browser-compat: api.AnimationPlaybackEvent.currentTime
---

{{ APIRef("Web Animations") }}

The **`currentTime`** read-only property of the {{domxref("AnimationPlaybackEvent")}} interface represents the current time of the animation that generated the event at the moment the event is queued. This will be unresolved if the animation was `idle` at the time the event was generated.

## Value

A number representing the current time in milliseconds, or `null`.

## Reduced time precision

To offer protection against timing attacks and [fingerprinting](/en-US/docs/Glossary/Fingerprinting), the precision of `platbackEvent.currentTime` might get rounded depending on browser settings. In Firefox, the `privacy.reduceTimerPrecision` preference is enabled by default and defaults to 2ms. You can also enable `privacy.resistFingerprinting`, in which case the precision will be 100ms or the value of `privacy.resistFingerprinting.reduceTimerPrecision.microseconds`, whichever is larger.

For example, with reduced time precision, the result of `platbackEvent.currentTime` will always be a multiple of 0.002, or a multiple of 0.1 (or `privacy.resistFingerprinting.reduceTimerPrecision.microseconds`) with `privacy.resistFingerprinting` enabled.

```js
// reduced time precision (2ms) in Firefox 60
playbackEvent.currentTime;
// Might be:
// 23.404
// 24.192
// 25.514
// …

// reduced time precision with `privacy.resistFingerprinting` enabled
playbackEvent.currentTime;
// Might be:
// 49.8
// 50.6
// 51.7
// …
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Animations API](/en-US/docs/Web/API/Web_Animations_API)
- {{domxref("AnimationPlayBackEvent")}}
