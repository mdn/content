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

> **Note:** These values are comparable to the computed styles of an Element returned using `window.getComputedStyle(elem)`.

## Syntax

```js-nolint
getComputedTiming()
```

### Parameters

None.

### Return value

An object which contains:

- all of the properties of the object returned by {{domxref("AnimationEffect.getTiming()")}}, except that `"auto"` values are replaced with their computed value.
- the following additional properties:
  - `endTime`
    - : The end time of the animation in milliseconds from the effect's start. This is equal to `activeDuration` plus `delay` and `endDelay`.
  - `activeDuration`
    - : The length of time in milliseconds that the effect will run. This is equal to `duration` multiplied by `iterations`.
  - `localTime`
    - : The {{domxref("Animation.currentTime","currentTime")}} of the associated animation, or `null` if the effect is not associated with an animation.
  - `progress`
    - : Indicates how far along the animation is through its current iteration with values between `0` and `1`. Returns `null` if the animation is not running or its `KeyframeEffect` isn't associated with an `Animation`.
  - `currentIteration`
    - : The number of times this animation has looped, starting from `0`. Returns `null` if the animation is not running or its `KeyframeEffect` isn't associated with an `Animation`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Animations API](/en-US/docs/Web/API/Web_Animations_API)
- {{domxref("AnimationEffect")}}
- {{domxref("Animation")}}
