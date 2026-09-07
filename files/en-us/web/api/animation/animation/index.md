---
title: "Animation: Animation() constructor"
short-title: Animation()
slug: Web/API/Animation/Animation
page-type: web-api-constructor
browser-compat: api.Animation.Animation
---

{{ APIRef("Web Animations") }}

The **`Animation()`** constructor of the [Web Animations API](/en-US/docs/Web/API/Web_Animations_API) returns a new `Animation` object instance.

## Syntax

```js-nolint
new Animation()
new Animation(effect)
new Animation(effect, timeline)
```

### Parameters

- `effect` {{optional_inline}}
  - : The target effect, as an object based on the {{domxref("AnimationEffect")}} interface, to assign to the animation. Although in the future other effects such as `SequenceEffect`s or `GroupEffect`s might be possible, the only kind of effect currently available is {{domxref("KeyframeEffect")}}. This can be `null` (which is the default) to indicate that there should be no effect applied.
- `timeline` {{optional_inline}}
  - : Specifies the `timeline` with which to associate the animation, as an object of a type based on the {{domxref("AnimationTimeline")}} interface. The default value is {{domxref("Document.timeline")}}, but this can be set to `null` as well.

## Examples

In the [Follow the White Rabbit example](/en-US/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API#pausing_and_playing_animations), we can use the `Animation()` constructor to create an `Animation` for the `rabbitDownKeyframes` using the document's `timeline`:

```js
const whiteRabbit = document.getElementById("rabbit");

const rabbitDownKeyframes = new KeyframeEffect(
  whiteRabbit,
  [{ transform: "translateY(0%)" }, { transform: "translateY(100%)" }],
  { duration: 3000, fill: "forwards" },
);

const rabbitDownAnimation = new Animation(rabbitDownKeyframes);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Animations API](/en-US/docs/Web/API/Web_Animations_API)
- {{domxref("Animation")}}
