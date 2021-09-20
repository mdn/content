---
title: EffectTiming.delay
slug: Web/API/EffectTiming/delay
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
  - delay
  - waapi
  - web animations api
browser-compat: api.EffectTiming.delay
---
{{ SeeCompatTable() }}{{ APIRef("Web Animations") }}

The {{domxref("EffectTiming")}} dictionary's **`delay`** property
in the [Web Animations API](/en-US/docs/Web/API/Web_Animations_API)
represents the number of milliseconds to delay the start of the animation.

## Syntax

```js
var timingProperties = {
  delay: delayInMilliseconds
};

timingProperties.delay = delayInMilliseconds;
```

### Value

A number specifying the delay, in milliseconds, from the start of the animation's play
cycle to the beginning of its **active interval** (the time index at which
actual animation begins). Defaults to 0.

## Examples

In the [Pool of
Tears](https://codepen.io/rachelnabors/pen/EPJdJx?editors=0010) example, each tear is passed a random delay via its timing object:

    // Randomizer function
    var getRandomMsRange = function(min, max) {
      return Math.random() * (max - min) + min;
    }

    // Loop through each tear
    tears.forEach(function(el) {

      // Animate each tear
      el.animate(
        tearsFalling,
        {
          delay: getRandomMsRange(-1000, 1000), // randomized for each tear
          duration: getRandomMsRange(2000, 6000), // randomized for each tear
          iterations: Infinity,
          easing: "cubic-bezier(0.6, 0.04, 0.98, 0.335)"
        });
    });

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Animations API](/en-US/docs/Web/API/Web_Animations_API)
- {{domxref("Element.animate()")}} and {{domxref("KeyframeEffect.KeyframeEffect", "KeyframeEffect()")}}
  both accept an object of timing properties including this one.
- CSS's
  [`transition-delay`](/en-US/docs/Web/CSS/transition-delay)
  and [`animation-delay`](/en-US/docs/Web/CSS/animation-delay)
