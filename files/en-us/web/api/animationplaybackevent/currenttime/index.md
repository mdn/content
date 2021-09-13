---
title: AnimationPlaybackEvent.currentTime
slug: Web/API/AnimationPlaybackEvent/currentTime
tags:
  - API
  - Animation
  - AnimationPlaybackEvent
  - Attribute
  - Experimental
  - Property
  - Reference
  - currentTime
  - waapi
  - web animations api
browser-compat: api.AnimationPlaybackEvent.currentTime
---
{{ SeeCompatTable() }}{{ APIRef("Web Animations API") }}

The **`currentTime`** read-only property of the `{{domxref("AnimationPlaybackEvent")}}` interface represents the current time of the animation that generated the event at the moment the event is queued. This will be unresolved if the animation was `idle` at the time the event was generated.

## Value

A number representing the current time in milliseconds, or `null`.

## Reduced time precision

To offer protection against timing attacks and fingerprinting, the precision of `playbackEvent.currentTime` might get rounded depending on browser settings.
In Firefox, the `privacy.reduceTimerPrecision`  preference is enabled by default and defaults to 20us in Firefox 59; in 60 it will be 2ms.

```js
// reduced time precision (2ms) in Firefox 60
playbackEvent.currentTime;
// 23.404
// 24.192
// 25.514
// ...

// reduced time precision with `privacy.resistFingerprinting` enabled
playbackEvent.currentTime;
// 49.8
// 50.6
// 51.7
// ...
```

In Firefox, you can also enabled `privacy.resistFingerprinting`, the precision will be 100ms or the value of `privacy.resistFingerprinting.reduceTimerPrecision.microseconds`, whichever is larger.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Animations API](/en-US/docs/Web/API/Web_Animations_API)
- {{domxref("AnimationPlayBackEvent")}}
