---
title: EffectTiming.easing
slug: Web/API/EffectTiming/easing
tags:
  - API
  - Animation
  - EffectTiming
  - Experimental
  - KeyframeEffect
  - Property
  - Reference
  - Timing Function
  - Web Animations
  - animate
  - easing
  - waapi
  - web animations api
browser-compat: api.EffectTiming.easing
---
{{ SeeCompatTable() }}{{ APIRef("Web Animations") }}

The {{domxref("EffectTiming")}} dictionary's
**`easing`** property in the [Web Animations API](/en-US/docs/Web/API/Web_Animations_API)
specifies the timing function used to scale the time to produce easing effects, where _easing_
is the rate of the animation's change over time.

## Syntax

```js
var timingProperties = {
  easing: {{cssxref("easing-function")}}
}

timingProperties.easing = {{cssxref("easing-function")}}
```

### Value

A string defining the timing function to use for easing transitions during the
animation process. Accepts several pre-defined {{domxref("DOMString")}} values, a
`steps()` timing function like `steps(5, end)`, or a custom
`cubic-bezier` value like `cubic-bezier(0.42, 0, 0.58, 1)`.
Defaults to `linear`. Available values include:

- `linear`
  - : A constant rate of change, neither accelerating nor deccelerating.
- `cubic-bezier(<number>, <number>, <number>, <number>)`
  - : ![A diagram showing the points of a cubic bezier timing function.](cubic-bezier-timing-curve.svg)
    Specifies [a cubic
    Bézier timing function](https://w3c.github.io/web-animations/#cubic-bzier-timing-function). The four numbers specify points P1 and P2 of the curve
    as (x1, y1, x2, y2). Both x values must be in the range \[0, 1] or the definition is
    invalid.
- `ease`
  - : A decelerated rate of change, going from fast to slow.
    Equivalent to `cubic-bezier(0.25, 0.1, 0.25, 1)`.
- `ease-in`
  - : An accelerated rate of change, going from slow to fast.
    Equivalent to `cubic-bezier(0.42, 0, 1, 1)`.
- `ease-out`
  - : Another decelerated rate of change, going from fast to slow.
    Equivalent to `cubic-bezier(0, 0, 0.58, 1)`.
- `ease-in-out`
  - : This rate of change speeds up in the middle.
    Equivalent to `cubic-bezier(0.42, 0, 0.58, 1)`.
- `steps(<integer>[, [ start | end ] ]?)`
  - : ![A diagram of the various steps timing functions.](step-timing-func-examples.svg)
    Specifies [a step
    timing function](https://w3c.github.io/web-animations/#step-timing-function), which breaks the animation down into a number of equal time
    intervals. The browser flips to a different static frame when each interval is
    reached, rather than animating smoothly. The first parameter specifies the number of
    intervals in the function. It must be a positive integer (greater than 0). The second
    parameter, which is optional, specifies the point at which the change of values occur
    within the interval. If the second parameter is omitted, it is given the value end.
- `step-start`
  - : Equivalent to `steps(1, start)`
- `step-end`
  - : Equivalent to `steps(1, end)`.

## Examples

In the [Red Queen's Race](http://codepen.io/rachelnabors/pen/PNGGaV?editors=0010) example,
we animate Alice and the Red Queen by passing an easing of `steps(7, end)` to `animate()`:

```js
// Define the key frames
var spriteFrames = [
  { transform: 'translateY(0)' },
  { transform: 'translateY(-100%)' }
];

// Get the element that represents Alice and the Red Queen
var redQueen_alice_sprite = document.getElementById('red-queen_and_alice_sprite');

// Animate Alice and the Red Queen using steps()
var redQueen_alice = redQueen_alice_sprite.animate(
spriteFrames, {
  easing: 'steps(7, end)',
  direction: "reverse",
  duration: 600,
  playbackRate: 1,
  iterations: Infinity
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Animations API](/en-US/docs/Web/API/Web_Animations_API)
- {{domxref("Element.animate()")}}, {{domxref("KeyframeEffect.KeyframeEffect",
    "KeyframeEffect()")}}, and {{domxref("AnimationEffect.updateTiming()")}} all accept an
  object of timing properties including this one.
- The value of this property corresponds to the one in {{domxref("EffectTiming")}}
  (which is returned from {{domxref("AnimationEffect.getTiming()")}} and
  {{domxref("AnimationEffect.getComputedTiming()")}}).
- CSS's
  [`animation-timing-function`](/en-US/docs/Web/CSS/animation-timing-function)
  and
  [`transition-timing-function`](/en-US/docs/Web/CSS/transition-timing-function).
