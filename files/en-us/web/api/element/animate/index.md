---
title: Element.animate()
slug: Web/API/Element/animate
tags:
  - API
  - Animation
  - Element
  - Method
  - Reference
  - Web Animations
browser-compat: api.Element.animate
---
{{APIRef('Web Animations')}}

The {{domxref("Element")}} interface's **`animate()`** method
is a shortcut method which creates a new {{domxref("Animation")}}, applies it to the
element, then plays the animation. It returns the created {{domxref("Animation")}}
object instance.

> **Note:** Elements can have multiple animations applied to them. You can get a list of the
> animations that affect an element by calling {{domxref("Element.getAnimations()")}}.

## Syntax

```js
animate(keyframes, options)
```

### Parameters

- `keyframes`
  - : Either an array of keyframe objects, **or** a keyframe object whose
    properties are arrays of values to iterate over. See [Keyframe Formats](/en-US/docs/Web/API/Web_Animations_API/Keyframe_Formats) for more details.
- `options`

  - : Either an **integer representing the animation's duration** (in
    milliseconds), **or** an Object containing one or more timing
    properties:

    - `id {{optional_inline}}`
      - : A property unique to `animate()`: a [`DOMString`](/en-US/docs/Web/API/DOMString "DOMString is a UTF-16 String. As JavaScript already uses such strings, DOMString is mapped directly to a String.")
        with which to reference the animation.

    <!---->

    - {{domxref("EffectTiming.delay", "delay")}} {{optional_inline}}
      - : The number of milliseconds to delay the start of the animation. Defaults to 0.
    - {{domxref("EffectTiming.direction", "direction")}} {{optional_inline}}
      - : Whether the animation runs forwards (`normal`), backwards (`reverse`), switches direction after each iteration (`alternate`), or runs backwards and switches direction after each iteration (`alternate-reverse`). Defaults to `"normal"`.
    - {{domxref("EffectTiming.duration", "duration")}} {{optional_inline}}
      - : The number of milliseconds each iteration of the animation takes to complete. Defaults to 0. Although this is technically optional, keep in mind that your animation will not run if this value is 0.
    - {{domxref("EffectTiming.easing", "easing")}} {{optional_inline}}
      - : The rate of the animation's change over time. Accepts the pre-defined values `"linear"`, `"ease"`, `"ease-in"`, `"ease-out"`, and `"ease-in-out"`, or a custom `"cubic-bezier"` value like `"cubic-bezier(0.42, 0, 0.58, 1)"`. Defaults to `"linear"`.
    - {{domxref("EffectTiming.endDelay", "endDelay")}} {{optional_inline}}
      - : The number of milliseconds to delay after the end of an animation. This is primarily of use when sequencing animations based on the end time of another animation. Defaults to 0.
    - {{domxref("EffectTiming.fill", "fill")}} {{optional_inline}}
      - : Dictates whether the animation's effects should be reflected by the element(s) prior to playing (`"backwards"`), retained after the animation has completed playing (`"forwards"`), or `both`. Defaults to `"none"`.
    - {{domxref("EffectTiming.iterationStart", "iterationStart")}} {{optional_inline}}
      - : Describes at what point in the iteration the animation should start. 0.5 would indicate starting halfway through the first iteration for example, and with this value set, an animation with 2 iterations would end halfway through a third iteration. Defaults to 0.0.
    - {{domxref("EffectTiming.iterations", "iterations")}} {{optional_inline}}
      - : The number of times the animation should repeat. Defaults to `1`, and can also take a value of {{jsxref("Infinity")}} to make it repeat for as long as the element exists.

You can also include a composite operation or iteration composite operation in your
options list:

- `composite {{optional_inline}}`

  - : Determines how values are combined between this animation and other, separate
    animations that do not specify their own specific composite operation. Defaults to
    `replace`.

    - `add` dictates an additive effect, where each successive iteration
      builds on the last. For instance with `transform`, a
      `translateX(-200px)` would not override an earlier
      `rotate(20deg)` value but result in
      `translateX(-200px) rotate(20deg)`.
    - `accumulate` is similar but a little smarter: `blur(2)`
      and `blur(5)` become `blur(7)`, not
      `blur(2) blur(5)`.
    - `replace` overwrites the previous value with the new one.

- `iterationComposite {{optional_inline}}`
  - : Determines how values build from iteration to iteration in this animation. Can be
    set to `accumulate` or `replace` (see above). Defaults
    to `replace`.

### Return value

Returns an {{domxref("Animation")}}.

## Examples

In the demo [Down the
Rabbit Hole (with the Web Animation API)](https://codepen.io/rachelnabors/pen/rxpmJL/?editors=0010), we use the convenient
`animate()` method to immediately create and play an animation on the
`#tunnel` element to make it flow upwards, infinitely. Notice the array of
objects passed as keyframes and also the timing options block.

```js
document.getElementById("tunnel").animate([
  // keyframes
  { transform: 'translateY(0px)' },
  { transform: 'translateY(-300px)' }
], {
  // timing options
  duration: 1000,
  iterations: Infinity
});
```

### Implicit to/from keyframes

In newer browser versions, you are able to set a beginning or end state for an
animation only (i.e. a single keyframe), and the browser will infer the other end of the
animation if it is able to. For example, consider [this
simple animation](https://mdn.github.io/dom-examples/web-animations-api/implicit-keyframes.html) — the Keyframe object looks like so:

```js
let rotate360 = [
  { transform: 'rotate(360deg)' }
];
```

We have only specified the end state of the animation, and the beginning state is
implied.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Animations API](/en-US/docs/Web/API/Web_Animations_API)
- {{domxref("Element.getAnimations()")}}
- {{domxref("Animation")}}
