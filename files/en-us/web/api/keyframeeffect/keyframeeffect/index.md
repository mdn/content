---
title: KeyframeEffect()
slug: Web/API/KeyframeEffect/KeyframeEffect
tags:
  - API
  - Animation
  - Constructor
  - Experimental
  - KeyframeEffect
  - Reference
  - waapi
  - web animations api
browser-compat: api.KeyframeEffect.KeyframeEffect
---
{{ SeeCompatTable() }}{{ APIRef("Web Animations API") }}

The **`KeyframeEffect()`** constructor of the [Web Animations API](/en-US/docs/Web/API/Web_Animations_API) returns a new `{{domxref("KeyframeEffect")}}` object instance, and also allows you to clone an existing keyframe effect object instance.

## Syntax

```js
new KeyframeEffect(target, keyframes);
new KeyframeEffect(target, keyframes, options)
new KeyframeEffect(source)
```

### Parameters

The multi-argument constructor (see above) creates a completely new {{domxref("KeyframeEffect")}} object instance. Its parameters are:

- target
  - : The DOM element to be animated, or `null`.
- keyframes
  - : A [keyframes object](/en-US/docs/Web/API/Web_Animations_API/Keyframe_Formats) or `null`.
- options {{optional_inline}}

  - : Either an integer representing the animation's duration (in milliseconds), or an object containing one or more of the following:

    - `delay` {{optional_inline}}
      - : The number of milliseconds to delay the start of the animation. Defaults to 0.
    - `direction` {{optional_inline}}
      - : Whether the animation runs forwards (`normal`), backwards (`reverse`), switches direction after each iteration (`alternate`), or runs backwards and switches direction after each iteration (`alternate-reverse`). Defaults to `"normal"`.
    - `duration` {{optional_inline}}
      - : The number of milliseconds each iteration of the animation takes to complete. Defaults to 0. Although this is technically optional, keep in mind that your animation will not run if this value is 0.
    - `easing` {{optional_inline}}
      - : The rate of the animation's change over time. Accepts the pre-defined values `"linear"`, `"ease"`, `"ease-in"`, `"ease-out"`, and `"ease-in-out"`, or a custom `"cubic-bezier"` value like `"cubic-bezier(0.42, 0, 0.58, 1)"`. Defaults to `"linear"`.
    - `endDelay` {{optional_inline}}
      - : The number of milliseconds to delay after the end of an animation. This is primarily of use when sequencing animations based on the end time of another animation. Defaults to 0.
    - `fill` {{optional_inline}}
      - : Dictates whether the animation's effects should be reflected by the element(s) prior to playing (`"backwards"`), retained after the animation has completed playing (`"forwards"`), or `both`. Defaults to `"none"`.
    - {{domxref("EffectTiming.iterationStart", "iterationStart")}} {{optional_inline}}
      - : Describes at what point in the iteration the animation should start. 0.5 would indicate starting halfway through the first iteration for example, and with this value set, an animation with 2 iterations would end halfway through a third iteration. Defaults to 0.0.
    - {{domxref("EffectTiming.iterations", "iterations")}} {{optional_inline}}
      - : The number of times the animation should repeat. Defaults to `1`, and can also take a value of {{jsxref("Infinity")}} to make it repeat for as long as the element exists.
    - {{domxref("KeyframeEffect/composite", "composite")}}
      - : Determines how values are combined between this animation and the element's underlying values.
    - {{domxref("KeyframeEffect/iterationComposite", "iterationComposite")}}
      - : Determines how values build from iteration to iteration in the current animation.

The single argument constructor (see above) creates a clone of an existing  {{domxref("KeyframeEffect")}} object instance. Its parameter is as follows:

- sourceKeyFrames
  - : A {{domxref("KeyframeEffect")}} object that you want to clone.

## Examples

In the [Follow the White Rabbit example](https://codepen.io/rachelnabors/pen/eJyWzm/?editors=0010), the `KeyframeEffect` constructor is used to create a set of keyframes that dictate how the White Rabbit should animate down the hole:

```js
var rabbitDownKeyframes = new KeyframeEffect(
    whiteRabbit, // element to animate
    [
      { transform: 'translateY(0%)' }, // keyframe
      { transform: 'translateY(100%)' } // keyframe
    ],
    { duration: 3000, fill: 'forwards' } // keyframe options
  );
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [KeyframeEffect Interface](/en-US/docs/Web/API/KeyframeEffect)
- [Web Animations API](/en-US/docs/Web/API/Web_Animations_API)
- {{domxref("Animation")}}
