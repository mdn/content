---
title: AnimationEffect
slug: Web/API/AnimationEffect
page-type: web-api-interface
browser-compat: api.AnimationEffect
---

{{ APIRef("Web Animations") }}

The `AnimationEffect` interface of the [Web Animations API](/en-US/docs/Web/API/Web_Animations_API) is an interface representing animation effects.

`AnimationEffect` is an abstract interface and so isn't directly instantiable. However, concrete interfaces such as {{domxref("KeyframeEffect")}} inherit from it, and instances of these interfaces can be passed to {{domxref("Animation")}} objects for playing, and may also be used by [CSS Animations](/en-US/docs/Web/CSS/CSS_animations) and [Transitions](/en-US/docs/Web/CSS/CSS_transitions).

## Instance methods

- {{domxref("AnimationEffect.getTiming()")}}
  - : Returns the object associated with the animation containing all the animation's timing values.
- {{domxref("AnimationEffect.getComputedTiming()")}}
  - : Returns the calculated timing properties for this `AnimationEffect`.
- {{domxref("AnimationEffect.updateTiming()")}}
  - : Updates the specified timing properties of this `AnimationEffect`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Animations API](/en-US/docs/Web/API/Web_Animations_API)
- {{domxref("Animation.effect")}}
