---
title: AnimationEffect
slug: Web/API/AnimationEffect
page-type: web-api-interface
tags:
  - API
  - Animation
  - Interface
  - Reference
  - Web Animations
  - web animations api
browser-compat: api.AnimationEffect
---
{{ APIRef("Web Animations") }}

The `AnimationEffect` interface of the [Web Animations API](/en-US/docs/Web/API/Web_Animations_API) defines current and future _animation effects_ like {{domxref("KeyframeEffect")}}, which can be passed to {{domxref("Animation")}} objects for playing, and {{domxref("KeyframeEffect")}} (which is used by [CSS Animations](/en-US/docs/Web/CSS/CSS_Animations) and [Transitions](/en-US/docs/Web/CSS/CSS_Transitions)).

## Methods

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
