---
title: EffectTiming.direction
slug: Web/API/EffectTiming/direction
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
  - direction
  - waapi
  - web animations api
browser-compat: api.EffectTiming.direction
---
{{ SeeCompatTable() }}{{ APIRef("Web Animations") }}

The **`direction`** property
of the [Web Animations API](/en-US/docs/Web/API/Web_Animations_API) dictionary
{{domxref("EffectTiming")}} indicates an animation's playback direction along its
timeline, as well as its behavior when it reaches the end of an iteration

## Syntax

```js
var timingProperties = {
  direction: "normal" | "reverse" | "alternate" | "alternate-reverse"
};

timingProperties.direction = "normal" | "reverse" | "alternate" | "alternate-reverse";
```

### Value

A {{domxref("DOMString")}} which specifies the direction in which the animation should
play as well as what to do when the playback reaches the end of the animation sequence
in the current direction. It can take one of the following values, with the default
being `"normal"`:

- `"normal"`
  - : The animation runs forwards, from beginning to end, in the way we experience the
    flow of time.
- `"reverse`"
  - : The animation runs backwards, or "rewinds."
- `"alternate"`
  - : The animation switches direction after each iteration, going forward through the
    animation sequence the first iteration, then backward through the sequence the second
    iteration, and so forth.
- `"alternate-reverse"`
  - : Similar to "alternate", except the animation playback starts by going from the end
    of the animation sequence toward the beginning the first iteration, then goes forward
    during the second, and so forth.

## Examples

In the [Forgotten
Key](https://codepen.io/rachelnabors/pen/bEPdQr?editors=0010) example, Alice waves her arm up and down by passing her an
`alternate` value for her `direction` property:

```js
// Get Alice's arm, and wave it up and down
document.getElementById("alice_arm").animate([
  { transform: 'rotate(10deg)' },
  { transform: 'rotate(-40deg)' }
], {
  easing: 'steps(2, end)',
  iterations: Infinity,
  direction: 'alternate',
  duration: 600
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Animations API](/en-US/docs/Web/API/Web_Animations_API)
- {{domxref("Element.animate()")}} and {{domxref("KeyframeEffect.KeyframeEffect", "KeyframeEffect()")}}
  both accept an object of timing properties including this one.
- CSS's [`animation-direction`](/en-US/docs/Web/CSS/animation-direction)
