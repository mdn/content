---
title: EffectTiming.endDelay
slug: Web/API/EffectTiming/endDelay
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
  - endDelay
  - waapi
  - web animations api
browser-compat: api.EffectTiming.endDelay
---
{{ SeeCompatTable() }}{{ APIRef("Web Animations") }}

The **`endDelay`** property of the {{domxref("EffectTiming")}}
dictionary (part of the [Web Animations
API](/en-US/docs/Web/API/Web_Animations_API)) indicates the number of milliseconds to delay after the active period of an
animation sequence. The animation's **end time**—the time at which an
iteration is considered to have finished—is the time at which the animation finishes an
iteration (its initial delay, {{domxref("EffectTiming.delay", "delay")}}, plus
its duration,{{domxref("EffectTiming.duration", "duration")}}, plus its
end delay).

This is useful for sequencing animations based on the end time of another animation;
note, however, that many of the sequence effects that will benefit most from this
property have not been defined in the specification yet. For now, its main purpose is to
represent the value of the [SVG](/en-US/docs/Web/SVG) {{SVGAttr("min")}}
attribute.

## Syntax

```js
var timingProperties = {
  endDelay: delayInMilliseconds
}

timingProperties.endDelay = delayInMilliseconds;
```

### Value

A number representing the end delay, specified in milliseconds. The default value is 0.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Animations API](/en-US/docs/Web/API/Web_Animations_API)
- {{domxref("Element.animate()")}}, and {{domxref("KeyframeEffect.KeyframeEffect", "KeyframeEffect()")}}
  both accept an object of timing properties including this one.
