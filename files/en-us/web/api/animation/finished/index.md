---
title: "Animation: finished property"
short-title: finished
slug: Web/API/Animation/finished
page-type: web-api-instance-property
browser-compat: api.Animation.finished
---

{{ APIRef("Web Animations") }}

The **`Animation.finished`** read-only property of the [Web Animations API](/en-US/docs/Web/API/Web_Animations_API) returns a {{jsxref("Promise")}} which resolves once the animation has finished playing.

> **Note:** Every time the animation leaves the `finished` play state (that is, when it starts playing again), a new `Promise` is created for this property. The new `Promise` will resolve once the new animation sequence has completed.

## Value

A {{jsxref("Promise")}} object which will resolve once the animation has finished running.

## Examples

The following code waits until all animations running on the element `elem` have finished, then deletes the element from the DOM tree:

```js
Promise.all(elem.getAnimations().map((animation) => animation.finished)).then(
  () => elem.remove(),
);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("KeyframeEffect")}}
- [Web Animations API](/en-US/docs/Web/API/Web_Animations_API)
- {{domxref("Animation")}}
