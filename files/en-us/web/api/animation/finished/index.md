---
title: Animation.finished
slug: Web/API/Animation/finished
tags:
  - API
  - Animation
  - Experimental
  - Property
  - Reference
  - Web Animations
  - finished
  - web animations api
browser-compat: api.Animation.finished
---
{{ SeeCompatTable() }}{{ APIRef("Web Animations") }}

The **`Animation.finished`** read-only property of the [Web Animations API](/en-US/docs/Web/API/Web_Animations_API) returns a {{jsxref("Promise")}} which resolves once the animation has finished playing.

> **Note:** Every time the animation leaves the `finished` play state (that is, when it starts playing again), a new `Promise` is created for this property. The new `Promise` will resolve once the new animation sequence has completed.

## Syntax

```js
var animationsPromise = Animation.finished;
```

### Value

A {{jsxref("Promise")}} object which will resolve once the animation has finished running.

## Examples

The following code waits until all animations running on the element `elem` have finished, then deletes the element from the DOM tree:

```js
Promise.all(
  elem.getAnimations().map(
    function(animation) {
      return animation.finished
    }
  )
).then(
  function() {
    return elem.remove();
  }
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
