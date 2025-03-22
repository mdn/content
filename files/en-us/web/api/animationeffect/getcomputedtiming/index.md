---
title: "AnimationEffect: getComputedTiming() method"
short-title: getComputedTiming()
slug: Web/API/AnimationEffect/getComputedTiming
page-type: web-api-instance-method
browser-compat: api.AnimationEffect.getComputedTiming
---

{{ APIRef("Web Animations") }}

The `getComputedTiming()` method of the {{domxref("AnimationEffect")}} interface returns the calculated timing properties for this animation effect.

> [!NOTE]
> These values are comparable to the computed styles of an Element returned using `window.getComputedStyle(elem)`.

## Syntax

```js-nolint
getComputedTiming()
```

### Parameters

None.

### Return value

An object which contains:

- all of the properties of the object returned by {{domxref("AnimationEffect.getTiming()")}}, except that any `"auto"` values are replaced by computed values that may depend on the type of {{domxref("AnimationEffect")}}.
- the following additional properties:

  - `endTime`
    - : A `number` indicating the end time of the effect in milliseconds from the effect's start. This is equal to `activeDuration` plus `delay` and `endDelay`.
  - `activeDuration`
    - : A `number` indicating the total duration in milliseconds of all iterations of the effect. This is equal to `duration` multiplied by `iterations` (or zero if that product would be {{jsxref("NaN")}}).
  - `localTime`

    - : A `number` or `null`.

      Indicates the length of time in milliseconds that the effect has run. This is equal to the {{domxref("Animation.currentTime","currentTime")}} of the associated animation, or `null` if the effect is not associated with an animation.

  - `progress`

    - : `null` or a `number` at least `0` and less than `1`.

      Indicates the effect's progress through its current iteration. At the start of the `activeDuration`, this equals the fractional part of `iterationStart`.

      Returns `null` if the effect isn't mid-iteration, for example because the effect is in the `delay` or `endDelay` periods, the effect is finished, or `localTime` is `null`.

  - `currentIteration`

    - : `null` or an integer `number`.

      Indicates the index of the current iteration. At the start of the `activeDuration`, this equals the integer part of `iterationStart`.

      Returns `null` whenever `progress` is `null`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Animations API](/en-US/docs/Web/API/Web_Animations_API)
- {{domxref("AnimationEffect")}}
- {{domxref("Animation")}}
