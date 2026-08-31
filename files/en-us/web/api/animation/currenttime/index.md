---
title: "Animation: currentTime property"
short-title: currentTime
slug: Web/API/Animation/currentTime
page-type: web-api-instance-property
browser-compat: api.Animation.currentTime
---

{{APIRef("Web Animations")}}

The **`Animation.currentTime`** property of the [Web Animations API](/en-US/docs/Web/API/Web_Animations_API) returns and sets the current time value of the animation in milliseconds, whether running or paused.

If the animation lacks a {{domxref("AnimationTimeline", "timeline")}}, is inactive, or hasn't been played yet, `currentTime`'s return value is `null`.

## Value

A number representing the current time in milliseconds, or `null` to deactivate the animation.

## Examples

In the [Drink Me/Eat Me game](https://codepen.io/rachelnabors/pen/PNYGZQ?editors=0010), Alice's height is animated so it can go from small to large or large to small. At the start of the game, her height is set between the two extremes by setting her animation's `currentTime` to half her `KeyframeEffect`'s duration:

```js
aliceChange.currentTime = aliceChange.effect.timing.duration / 2;
```

A more generic means of seeking to the 50% mark of an animation would be:

```js
animation.currentTime =
  animation.effect.getComputedTiming().delay +
  animation.effect.getComputedTiming().activeDuration / 2;
```

## Reduced time precision

To offer protection against timing attacks and [fingerprinting](/en-US/docs/Glossary/Fingerprinting), the precision of `animation.currentTime` may be reduced depending on browser settings.

In Chrome and Safari, the browser does not apply timer rounding to a value supplied by script. It also does not apply additional timer rounding to a value calculated from {{domxref("AnimationTimeline.currentTime")}}, {{domxref("Animation.startTime", "startTime")}}, and {{domxref("Animation.playbackRate", "playbackRate")}}. The result need not be a multiple of the timeline's rounding interval. In Firefox, the timer rounding described below applies in both cases.

In Firefox, animation timestamps are rounded to 0.02 ms by default, including in cross-origin-isolated contexts. If `privacy.resistFingerprinting` is enabled, the rounding interval is 16.667 ms or the interval configured by `privacy.resistFingerprinting.reduceTimerPrecision.microseconds`, whichever is larger.

For example, these are possible values in Firefox:

```js
// Reduced time precision (0.02 ms) with default settings
animation.currentTime;
// Might be:
// 23.4
// 24.18
// 25.5
// …

// Reduced time precision with `privacy.resistFingerprinting` enabled
animation.currentTime;
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

- {{domxref("Animation")}} for other methods and properties you can use to control web page animation.
- {{domxref("Animation.startTime")}} for the time an animation is scheduled to start.
- [Web Animations API](/en-US/docs/Web/API/Web_Animations_API)
