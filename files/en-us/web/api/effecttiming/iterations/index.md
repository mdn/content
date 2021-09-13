---
title: EffectTiming.iterations
slug: Web/API/EffectTiming/iterations
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
  - iterations
  - waapi
  - web animations api
browser-compat: api.EffectTiming.iterations
---
{{ SeeCompatTable() }}{{ APIRef("Web Animations") }}

The [Web Animations API](/en-US/docs/Web/API/Web_Animations_API) dictionary
{{domxref("EffectTiming")}}'s **`iterations`** property
specifies the number of times the animation should repeat. The default value is 1,
indicating that it should only play once, but you can set it to any floating-point value
(including positive {{jsxref("Infinity")}} defaults to `1`, and can also take
a value of `Infinity` to make it loop infinitely.

## Syntax

```js
var timingProperties = {
  iterations: numberOfIterations
};

timingProperties.iterations = numberOfIterations;
```

### Value

A floating-point value specifying the number of times the animation sequence will play
through. Any value from 0 (don't play the animation at all) to positive
{{jsxref("Infinity")}} (run the animation indefinitely) is supported. Defaults to 1,
meaning the animation sequence plays through once then stops automatically.

### Exceptions

- `TypeError`
  - : An attempt was made to set the value of this property to a negative number or
    {{jsxref("NaN")}}. The property's value is left unchanged.

## Examples

In the [Forgotten
Key](https://codepen.io/rachelnabors/pen/bEPdQr?editors=0010) example, Alice waves her arm up and down the entire time the page is open by
passing `Infinity` as the value for her `iterations` property:

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
- {{domxref("Element.animate()")}},
  and {{domxref("KeyframeEffect.KeyframeEffect", "KeyframeEffect()")}}
  both accept an object of timing properties including this one.
- CSS's {{cssxref("animation-iteration-count")}}
