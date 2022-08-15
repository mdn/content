---
title: AnimationTimeline.currentTime
slug: Web/API/AnimationTimeline/currentTime
page-type: web-api-instance-property
tags:
  - API
  - Animation
  - AnimationTimeline
  - Property
  - Read-only
  - Reference
  - Web Animations
  - currentTime
  - waapi
  - web animations api
browser-compat: api.AnimationTimeline.currentTime
---
{{ APIRef("Web Animations") }}

The **`currentTime`** read-only property of the [Web Animations API](/en-US/docs/Web/API/Web_Animations_API)'s {{domxref("AnimationTimeline")}} interface returns the timeline's current time in milliseconds, or `null` if the timeline is inactive.

## Value

A number representing the timeline's current time in milliseconds, or `null` if the timeline is inactive.

## Reduced time precision

To offer protection against timing attacks and fingerprinting, the precision of `animationTimeline.currentTime` might get rounded depending on browser settings.
In Firefox, the `privacy.reduceTimerPrecision` preference is enabled by default and defaults to 20us in Firefox 59; in 60 it will be 2ms.

```js
// reduced time precision (2ms) in Firefox 60
animationTimeline.currentTime;
// 23.404
// 24.192
// 25.514
// …

// reduced time precision with `privacy.resistFingerprinting` enabled
animationTimeline.currentTime;
// 49.8
// 50.6
// 51.7
// …
```

In Firefox, you can also enable `privacy.resistFingerprinting`; the precision will be 100ms or the value of `privacy.resistFingerprinting.reduceTimerPrecision.microseconds`, whichever is larger.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Animations API](/en-US/docs/Web/API/Web_Animations_API)
- {{domxref("AnimationTimeline")}}
- {{domxref("DocumentTimeline")}} inherits this property
- {{domxref("Document.timeline")}} returns a timeline object which inherits this property
