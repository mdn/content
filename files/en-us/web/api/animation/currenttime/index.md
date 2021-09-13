---
title: Animation.currentTime
slug: Web/API/Animation/currentTime
tags:
  - API
  - Animation
  - Animations
  - Property
  - Reference
  - Web Animations
  - web animations api
browser-compat: api.Animation.currentTime
---
{{APIRef("Web Animations")}}{{SeeCompatTable}}

The **`Animation.currentTime`** property of the [Web Animations API](/en-US/docs/Web/API/Web_Animations_API) returns and sets the current time value of the animation in milliseconds, whether running or paused.

If the animation lacks a {{domxref("AnimationTimeline", "timeline")}}, is inactive, or hasn't been played yet, `currentTime`'s return value is `null`.

## Syntax

```js
var currentTime = Animation.currentTime;
Animation.currentTime = newTime;
```

### Value

A number representing the current time in milliseconds, or `null` to deactivate the animation.

## Examples

In the [Drink Me/Eat Me game](http://codepen.io/rachelnabors/pen/PNYGZQ?editors=0010), Alice's height is animated so it can go from small to large or large to small. At the start of the game, her height is set between the two extremes by setting her animation's `currentTime` to half her [`KeyframeEffect`'s duration](/en-US/docs/Web/API/EffectTiming):

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

To offer protection against timing attacks and fingerprinting, the precision of `animation.currentTime` might get rounded depending on browser settings.
In Firefox, the `privacy.reduceTimerPrecision`  preference is enabled by default and defaults to 20us in Firefox 59; in 60 it will be 2ms.

```js
// reduced time precision (2ms) in Firefox 60
animation.currentTime;
// 23.404
// 24.192
// 25.514
// ...

// reduced time precision with `privacy.resistFingerprinting` enabled
animation.currentTime;
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

- {{domxref("Animation")}} for other methods and properties you can use to control web page animation.
- {{domxref("Animation.startTime")}} for the time an animation is scheduled to start.
- [Web Animations API](/en-US/docs/Web/API/Web_Animations_API)
