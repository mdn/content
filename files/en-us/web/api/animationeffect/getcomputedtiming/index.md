---
title: AnimationEffect.getComputedTiming()
slug: Web/API/AnimationEffect/getComputedTiming
page-type: web-api-instance-method
tags:
  - API
  - Animation
  - Method
  - Reference
  - getComputedTiming
  - waapi
  - web animations api
browser-compat: api.AnimationEffect.getComputedTiming
---
{{ APIRef("Web Animations API") }}

The `getComputedTiming()` method of the {{domxref("AnimationEffect")}} interface returns the calculated timing properties for this animation effect.

Although many of the attributes of the returned object are common to the object returned by the {{domxref("AnimationEffect.getTiming()")}} method, the values returned by this object differ in the following ways:

- `duration`
  - : Returns the calculated value of the iteration duration. If [`duration`](/en-US/docs/Web/API/KeyframeEffect/KeyframeEffect) is the string `auto`, this attribute will return `0`.
- `fill`
  - : The `auto` value is replaced with the appropriate [`fill`](/en-US/docs/Web/API/KeyframeEffect/KeyframeEffect) value.

> **Note:** These values are comparable to the computed styles of an Element returned using `window.getComputedStyle(elem)`.

## Syntax

```js
getComputedTiming()
```

### Parameters

None.

### Return value

An object which contains the following properties:

- endTime
  - : The end time of the animation in milliseconds from the animation's start (if the {{domxref("KeyframeEffect")}} is associated with an {{domxref("Animation")}}). (Also includes `endDelay` in that calculation.)
- activeDuration
  - : The length of time in milliseconds that the animation's effects will run. This is equal to the [iteration duration](/en-US/docs/Web/API/KeyframeEffect/KeyframeEffect) multiplied by the [iteration count](/en-US/docs/Web/API/KeyframeEffect/KeyframeEffect).
- localTime
  - : The [current time](/en-US/docs/Web/API/AnimationTimeline/currentTime) of the animation in milliseconds. If the `KeyframeEffect` is not associated with an `Animation`, its value is `null`.
- progress
  - : Indicates how far along the animation is through its current iteration with values between `0` and `1`. Returns `null` if the animation is not running or its `KeyframeEffect` isn't associated with an `Animation`.
- currentIteration
  - : The number of times this animation has looped, starting from `0`. Returns `null` if the animation is not running or its `KeyframeEffect` isn't associated with an `Animation`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Animations API](/en-US/docs/Web/API/Web_Animations_API)
- {{domxref("AnimationEffect")}}
- {{domxref("Animation")}}
