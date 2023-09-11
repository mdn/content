---
title: "AnimationEffect: getTiming() method"
short-title: getTiming()
slug: Web/API/AnimationEffect/getTiming
page-type: web-api-instance-method
browser-compat: api.AnimationEffect.getTiming
---

{{ APIRef("Web Animations") }}

The `AnimationEffect.getTiming()` method of the {{domxref("AnimationEffect")}} interface returns an object containing the timing properties for the Animation Effect.

> **Note:** Several of the timing properties returned by `getTiming()` may take on the placeholder value `"auto"`. To obtain resolved values for use in timing computations, instead use {{domxref("AnimationEffect.getComputedTiming()")}}.
>
> In the future, `"auto"` or similar values might be added to the types of more timing properties, and new types of {{domxref("AnimationEffect")}} might resolve `"auto"` to different values.

## Syntax

```js-nolint
getTiming()
```

### Parameters

None.

### Return value

An object containing the following properties:

- `delay`

  - : The `number` of milliseconds of delay before the start of the effect.

    (See also {{cssxref("animation-delay")}}.)

- `direction`

  - : `"normal"`, `"reverse"`, `"alternate"`, or `"alternate-reverse"`.

    Indicates whether the effect runs forwards (`"normal"`), backwards (`"reverse"`), switches direction
    after each iteration (`"alternate"`), or runs backwards and switches direction after each iteration
    (`"alternate-reverse"`).

    (See also {{cssxref("animation-direction")}}.)

- `duration`

  - : A `number` of milliseconds or the `string` `"auto"`.

    Indicates the time one iteration of the animation takes to complete.

    The meaning of `"auto"` may differ depending on the type of effect; for {{domxref("KeyframeEffect")}}, `"auto"` is the same as `0`.

    (See also {{cssxref("animation-duration")}}.)

- `easing`

  - : A `string` representing an {{cssxref("easing-function")}} describing the rate of change of the effect over time.

    (See also {{cssxref("animation-timing-function")}}.)

- `endDelay`

  - : The `number` of milliseconds of delay after the end of the effect.

    This is primarily of use when sequencing animations based on the end time of another animation.

- `fill`

  - : `"none"`, `"forwards"`, `"backwards"`, "`both`", or `"auto"`.

    Indicates whether the effect is reflected by its target(s) prior to playing
    (`"backwards"`), retained after the effect has completed (`"forwards"`), `"both"`, or
    neither (`"none"`).

    The meaning of `"auto"` may differ depending on the type of effect; for
    {{domxref("KeyframeEffect")}}, `"auto"` is the same as `"none"`.

    (See also {{cssxref("animation-fill-mode")}}.)

- `iterations`

  - : The `number` of times the effect will repeat. A value of {{jsxref("Infinity")}} indicates that
    the effect repeats indefinitely.

    (See also {{cssxref("animation-iteration-count")}}.)

- `iterationStart`
  - : A `number` indicating at what point in the iteration the effect starts. For example, an effect with
    an `iterationStart` of 0.5 and 2 `iterations` would start halfway through its first iteration
    and end halfway through a third iteration.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Animations API](/en-US/docs/Web/API/Web_Animations_API)
- {{domxref("AnimationEffect")}}
