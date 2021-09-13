---
title: Animation.effect
slug: Web/API/Animation/effect
tags:
  - API
  - Animation
  - Experimental
  - Property
  - Reference
  - Web Animations
  - effect
  - web animations api
browser-compat: api.Animation.effect
---
{{ SeeCompatTable() }} {{ APIRef("Web Animations") }}

The **`Animation.effect`** property of the [Web Animations API](/en-US/docs/Web/API/Web_Animations_API) gets and sets the target effect of an animation. The target effect may be either an effect object of a type based on {{domxref("AnimationEffect")}}, such as {{domxref("KeyframeEffect")}}, or `null`.

## Syntax

```js
var effect = Animation.effect;

Animation.effect = {{domxref("AnimationEffect")}}
```

### Value

A {{domxref("AnimationEffect")}} object describing the target animation effect for the animation, or `null` to indicate no active effect.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Animations API](/en-US/docs/Web/API/Web_Animations_API)
- {{domxref("AnimationEffect")}}
- {{domxref("Animation")}}
