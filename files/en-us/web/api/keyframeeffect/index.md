---
title: KeyframeEffect
slug: Web/API/KeyframeEffect
page-type: web-api-interface
browser-compat: api.KeyframeEffect
---

{{ APIRef("Web Animations") }}

The **`KeyframeEffect`** interface of the [Web Animations API](/en-US/docs/Web/API/Web_Animations_API) lets us create sets of animatable properties and values, called **keyframes.** These can then be played using the {{domxref("Animation.Animation", "Animation()")}} constructor.

{{InheritanceDiagram}}

## Constructor

- {{domxref("KeyframeEffect.KeyframeEffect", "KeyframeEffect()")}}
  - : Returns a new `KeyframeEffect` object instance, and also allows you to clone an existing keyframe effect object instance.

## Instance properties

- {{domxref("KeyframeEffect.target")}}
  - : Gets and sets the element, or originating element of the pseudo-element, being animated by this object. This may be `null` for animations that do not target a specific element or pseudo-element.
- {{domxref("KeyframeEffect.pseudoElement")}}
  - : Gets and sets the selector of the pseudo-element being animated by this object. This may be `null` for animations that do not target a pseudo-element.
- {{domxref("KeyframeEffect.iterationComposite")}}
  - : Gets and sets the iteration composite operation for resolving the property value changes of this keyframe effect.
- {{domxref("KeyframeEffect.composite")}}
  - : Gets and sets the composite operation property for resolving the property value changes between this and other keyframe effects.

## Instance methods

_This interface inherits some of its methods from its parent, {{domxref("AnimationEffect")}}._

- {{domxref("AnimationEffect.getComputedTiming()")}}
  - : Returns the calculated, current timing values for this keyframe effect.
- {{domxref("KeyframeEffect.getKeyframes()")}}
  - : Returns the computed keyframes that make up this effect along with their computed keyframe offsets.
- {{domxref("AnimationEffect.getTiming()")}}
  - : Returns the object associated with the animation containing all the animation's timing values.
- {{domxref("KeyframeEffect.setKeyframes()")}}
  - : Replaces the set of keyframes that make up this effect.
- {{domxref("AnimationEffect.updateTiming()")}}
  - : Updates the specified timing properties.

## Examples

In the [Follow the White Rabbit example](https://codepen.io/rachelnabors/pen/eJyWzm/?editors=0010), the KeyframeEffect constructor is used to create a set of keyframes that dictate how the White Rabbit should animate down the hole:

```js
const whiteRabbit = document.getElementById("rabbit");

const rabbitDownKeyframes = new KeyframeEffect(
  whiteRabbit, // element to animate
  [
    { transform: "translateY(0%)" }, // keyframe
    { transform: "translateY(100%)" }, // keyframe
  ],
  { duration: 3000, fill: "forwards" } // keyframe options
);

const rabbitDownAnimation = new Animation(
  rabbitDownKeyframes,
  document.timeline
);

// Play rabbit animation
rabbitDownAnimation.play();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Animations API](/en-US/docs/Web/API/Web_Animations_API)
- {{domxref("Animation")}}
