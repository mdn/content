---
title: KeyframeEffectOptions
slug: Web/API/KeyframeEffectOptions
tags:
  - API
  - Dictionary
  - Draft
  - EffectTiming
  - Experimental
  - KeyframeEffect
  - KeyframeEffectOptions
  - NeedsCompatTable
  - Reference
  - Web Animations
browser-compat: api.KeyframeEffectOptions
---
{{APIRef("Web Animations")}}{{Draft}}{{SeeCompatTable}}

The **`KeyframeEffectOptions`** dictionary, part of the {{DOMxRef('Web Animations API', '', '', 'true')}}, is used by {{DOMxRef('Element.animate()')}} and {{DOMxRef('KeyframeEffect.KeyframeEffect', 'KeyframeEffect()')}} to describe timing properties for animation effects. These properties are all optional, although without setting a `duration` the animation will not play.

In other words, these properties describe how the {{Glossary("user agent")}} should go about making the transition from keyframe to keyframe, and how to behave when the animation begins and ends.

## Properties

- `composite` {{Experimental_Inline}} {{Optional_Inline}}

  - : Determines how values are combined between this animation and other, separate animations that do not specify their own specific composite operation. Defaults to `replace`.

    - `add` dictates an additive effect, where each successive iteration builds on the last. For instance with `transform`, a `translateX(-200px)` would not override an earlier `rotate(20deg)` value but result in `translateX(-200px) rotate(20deg)`.
    - `accumulate` is similar but a little smarter: `blur(2)` and `blur(5)` become `blur(7)`, not `blur(2) blur(5)`.
    - `replace` overwrites the previous value with the new one.

- `iterationComposite` {{Experimental_Inline}} {{Optional_Inline}}
  - : Determines how values build from iteration to iteration in this animation. Can be set to `accumulate` or `replace` (see above). Defaults to `replace`.
- `pseudoElement` {{Experimental_Inline}} {{Optional_Inline}}
  - : The selector of the pseudo-element to be targeted, if any. Defaults to `null`.
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

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{DOMxRef("EffectTiming")}}
- {{DOMxRef('Web Animations API', '', '', 'true')}}
- {{DOMxRef('Web Animations API.Using the Web Animations API', 'Using the Web Animations API', '', 'true')}}
- {{DOMxRef('Element.animate()')}}
- {{DOMxRef('KeyframeEffect.KeyframeEffect', 'KeyframeEffect()')}}
