---
title: Animation.id
slug: Web/API/Animation/id
tags:
  - API
  - Animation
  - Property
  - Reference
  - id
  - web animations api
browser-compat: api.Animation.id
---
{{ SeeCompatTable() }}{{ APIRef("Web Animations") }}

The **`Animation.id`** property of the [Web Animations API](/en-US/docs/Web/API/Web_Animations_API) returns or sets a string used to identify the animation.

## Syntax

```js
var animationsId = Animation.id;

Animation.id = newIdString;
```

### Value

A {{domxref("DOMString")}} which can be used to identify the animation, or `null` if the animation has no `id`.

## Examples

In the [Follow the White Rabbit example](http://codepen.io/rachelnabors/pen/eJyWzm?editors=0010), you can assign the `rabbitDownAnimation` an `id` like so:

```js
rabbitDownAnimation.effect.id = "rabbitGo";
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("KeyframeEffect")}}
- [Web Animations API](/en-US/docs/Web/API/Web_Animations_API)
- {{domxref("Animation")}}
