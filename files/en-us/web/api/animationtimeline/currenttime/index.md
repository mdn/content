---
title: "AnimationTimeline: currentTime property"
short-title: currentTime
slug: Web/API/AnimationTimeline/currentTime
page-type: web-api-instance-property
browser-compat: api.AnimationTimeline.currentTime
---

{{ APIRef("Web Animations") }}

The **`currentTime`** read-only property of the [Web Animations API](/en-US/docs/Web/API/Web_Animations_API)'s {{domxref("AnimationTimeline")}} interface returns the timeline's current time in milliseconds, or `null` if the timeline is inactive.

## Value

A number representing the timeline's current time in milliseconds, or `null` if the timeline is inactive.

## Reduced time precision

To offer protection against timing attacks and [fingerprinting](/en-US/docs/Glossary/Fingerprinting), the precision of `animationTimeline.currentTime` may be reduced depending on browser settings.

The current time normally advances with animation frames. Reading the property repeatedly while a script runs does not provide a continuously updating clock.

For a {{domxref("DocumentTimeline")}}, the current time is calculated by subtracting the {{domxref("DocumentTimeline.DocumentTimeline", "originTime")}} offset, which can be supplied by script, from the browser's animation clock.

In Chrome, the rounding interval for the animation clock during rendering updates is 0.1 ms, or 0.005 ms in cross-origin-isolated contexts. The browser does not apply additional timer rounding after subtracting `originTime`.

In Safari, the rounding interval for the animation clock is 1 ms, or 0.02 ms in cross-origin-isolated contexts. After subtracting `originTime`, the browser rounds the returned value to 0.001 ms, the resolution used to represent animation times.

In Firefox, after subtracting `originTime`, the browser rounds the returned value to 0.02 ms by default, including in cross-origin-isolated contexts. If `privacy.resistFingerprinting` is enabled, the rounding interval is 16.667 ms or the interval configured by `privacy.resistFingerprinting.reduceTimerPrecision.microseconds`, whichever is larger.

For example, these are possible values in Firefox:

```js
// Reduced time precision (0.02 ms) with default settings
animationTimeline.currentTime;
// Might be:
// 23.4
// 24.18
// 25.5
// …

// Reduced time precision with `privacy.resistFingerprinting` enabled
animationTimeline.currentTime;
// Might be:
// 50.001
// 66.668
// 83.335
// …
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Animations API](/en-US/docs/Web/API/Web_Animations_API)
- {{domxref("AnimationTimeline")}}
- {{domxref("DocumentTimeline")}} inherits this property
- {{domxref("Document.timeline")}} returns a timeline object which inherits this property
