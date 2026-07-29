---
title: "Animation: id property"
short-title: id
slug: Web/API/Animation/id
page-type: web-api-instance-property
browser-compat: api.Animation.id
---

{{ APIRef("Web Animations") }}

The **`Animation.id`** property of the [Web Animations API](/en-US/docs/Web/API/Web_Animations_API) returns or sets a string used to identify the animation.

## Value

A string which can be used to identify the animation, or `null` if the animation has no `id`.

## Examples

In the [Red Queen's Race Game example](/en-US/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API#other_useful_methods), you can assign the `redQueenAlice` an `id` like so:

```js
redQueenAlice.id = "redQueenAlice";
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("KeyframeEffect")}}
- [Web Animations API](/en-US/docs/Web/API/Web_Animations_API)
- {{domxref("Animation")}}
