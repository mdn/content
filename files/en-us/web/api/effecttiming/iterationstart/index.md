---
title: EffectTiming.iterationStart
slug: Web/API/EffectTiming/iterationStart
tags:
  - API
  - Animation
  - EffectTiming
  - Experimental
  - KeyframeEffect
  - Property
  - Reference
  - Web Animations
  - animate
  - iterationStart
  - waapi
  - web animations api
browser-compat: api.EffectTiming.iterationStart
---
{{ SeeCompatTable() }}{{ APIRef("Web Animations") }}

[Web Animations API](/en-US/docs/Web/API/Web_Animations_API)'s
{{domxref("EffectTiming")}} dictionary's **`iterationStart`** property
specifies the repetition number
which repetition the animation begins at and its progress through it.

## Syntax

```js
var timingProperties = {
  iterationStart = iterationNumber
};

timingProperties.iterationStart = iterationNumber;
```

### Value

A floating-point value whose value is at least 0 and is not {{jsxref("Infinity",
  "+Infinity")}}, indicating the offset into the number of iterations the animation
sequence is to run at which to start animating. `iterationStart`
represents the iteration index at which the animation effect begins as well as its
progress through that iteration.

Usually you'll use a value between 0.0 and 1.0 to indicate an offset into the first run
of the animation at which to begin the animation performance, but any positive,
non-infinite value is allowed. Since all animations' iteration indexes start at 0, a
value of 0.5 would start the animation halfway through its first iteration or loop.
Meanwhile, a value of 1.2 means the animation will begin playback 20% of the way through
its second iteration, and so forth.

> **Note:** It's currently undefined what happens if you specify a value of
> `iterationStart` which is greater than the value of
> {{domxref("EffectTiming.iterations")}}. See [issue 170 in the Web
> Animations API specification's issue tracker](https://github.com/w3c/web-animations/issues/170) for details and status of any
> changes to the specification in this regard.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Animations API](/en-US/docs/Web/API/Web_Animations_API)
- {{domxref("Element.animate()")}} and {{domxref("KeyframeEffect.KeyframeEffect", "KeyframeEffect()")}}
  both accept an object of timing properties including this one.
