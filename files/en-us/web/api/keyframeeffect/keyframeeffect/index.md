---
title: "KeyframeEffect: KeyframeEffect() constructor"
short-title: KeyframeEffect()
slug: Web/API/KeyframeEffect/KeyframeEffect
page-type: web-api-constructor
browser-compat: api.KeyframeEffect.KeyframeEffect
---

{{ APIRef("Web Animations") }}

The **`KeyframeEffect()`** constructor of the [Web Animations API](/en-US/docs/Web/API/Web_Animations_API) returns a new {{domxref("KeyframeEffect")}} object instance, and also allows you to clone an existing keyframe effect object instance.

## Syntax

```js-nolint
new KeyframeEffect(target, keyframes)
new KeyframeEffect(target, keyframes, options)
new KeyframeEffect(sourceKeyFrames)
```

### Parameters

The multi-argument constructor (see above) creates a completely new {{domxref("KeyframeEffect")}} object instance. Its parameters are:

- `target`
  - : The DOM element to be animated, or `null`.
- `keyframes`
  - : A [keyframes object](/en-US/docs/Web/API/Web_Animations_API/Keyframe_Formats) or `null`.
- `options` {{optional_inline}}

  - : Either an integer representing the animation's duration (in milliseconds), or an object containing one or more of the following:

    - `delay` {{optional_inline}}
      - : The number of milliseconds to delay the start of the animation. Defaults to 0.
    - `direction` {{optional_inline}}
      - : Whether the animation runs forwards (`normal`), backwards (`reverse`), switches direction after each iteration (`alternate`), or runs backwards and switches direction after each iteration (`alternate-reverse`). Defaults to `"normal"`.
    - `duration` {{optional_inline}}
      - : The number of milliseconds each iteration of the animation takes to complete. Defaults to 0. Although this is technically optional, keep in mind that your animation will not run if this value is 0.
    - `easing` {{optional_inline}}
      - : The rate of the animation's change over time. Accepts an {{cssxref("easing-function")}}, such as `"linear"`, `"ease-in"`, `"step-end"`, or `"cubic-bezier(0.42, 0, 0.58, 1)"`. Defaults to `"linear"`.
    - `endDelay` {{optional_inline}}
      - : The number of milliseconds to delay after the end of an animation. This is primarily of use when sequencing animations based on the end time of another animation. Defaults to 0.
    - `fill` {{optional_inline}}
      - : Dictates whether the animation's effects should be reflected by the element(s) prior to playing (`"backwards"`), retained after the animation has completed playing (`"forwards"`), or `both`. Defaults to `"none"`.
    - `iterationStart` {{optional_inline}}
      - : Describes at what point in the iteration the animation should start. 0.5 would indicate starting halfway through the first iteration for example, and with this value set, an animation with 2 iterations would end halfway through a third iteration. Defaults to 0.0.
    - `iterations` {{optional_inline}}
      - : The number of times the animation should repeat. Defaults to `1`, and can also take a value of {{jsxref("Infinity")}} to make it repeat for as long as the element exists.
    - `composite` {{optional_inline}}

      - : Determines how values are combined between this animation and other, separate
        animations that do not specify their own specific composite operation. Defaults to
        `replace`.

        - `add` dictates an additive effect, where each successive iteration
          builds on the last. For instance with `transform`, a
          `translateX(-200px)` would not override an earlier
          `rotate(20deg)` value but result in
          `translateX(-200px) rotate(20deg)`.
        - `accumulate` is similar but a little smarter: `blur(2)`
          and `blur(5)` become `blur(7)`, not
          `blur(2) blur(5)`.
        - `replace` overwrites the previous value with the new one.

    - `iterationComposite` {{optional_inline}}
      - : Determines how values build from iteration to iteration in this animation. Can be
        set to `accumulate` or `replace` (see above). Defaults
        to `replace`.
    - `pseudoElement` {{optional_inline}}
      - : A `string` containing a {{cssxref("pseudo-elements","pseudo-element")}} selector, such as `"::before"`. If present, the effect is applied to the selected pseudo-element of `target`, rather than to `target` itself.

The single argument constructor (see above) creates a clone of an existing {{domxref("KeyframeEffect")}} object instance. Its parameter is as follows:

- `sourceKeyFrames`
  - : A {{domxref("KeyframeEffect")}} object that you want to clone.

## Examples

In the [Follow the White Rabbit example](https://codepen.io/rachelnabors/pen/eJyWzm/?editors=0010), the `KeyframeEffect` constructor is used to create a set of keyframes that dictate how the White Rabbit should animate down the hole:

```js
const whiteRabbit = document.getElementById("rabbit");

const rabbitDownKeyframes = new KeyframeEffect(
  whiteRabbit, // element to animate
  [
    { transform: "translateY(0%)" }, // keyframe
    { transform: "translateY(100%)" }, // keyframe
  ],
  { duration: 3000, fill: "forwards" }, // keyframe options
);

const rabbitDownAnimation = new Animation(
  rabbitDownKeyframes,
  document.timeline,
);

// Play rabbit animation
rabbitDownAnimation.play();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [KeyframeEffect Interface](/en-US/docs/Web/API/KeyframeEffect)
- [Web Animations API](/en-US/docs/Web/API/Web_Animations_API)
- {{domxref("Animation")}}
