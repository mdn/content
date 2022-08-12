---
title: Animation.ready
slug: Web/API/Animation/ready
page-type: web-api-instance-property
tags:
  - API
  - Animation
  - Property
  - Ready
  - Ready Promise
  - Reference
  - Web Animations
  - web animations api
browser-compat: api.Animation.ready
---
{{ APIRef("Web Animations") }}

The read-only **`Animation.ready`** property of the [Web Animations API](/en-US/docs/Web/API/Web_Animations_API) returns a {{jsxref("Promise")}} which resolves when the animation is ready to play. A new promise is created every time the animation enters the `"pending"` [play state](/en-US/docs/Web/API/Animation/playState) as well as when the animation is canceled, since in both of those scenarios, the animation is ready to be started again.

> **Note:** Since the same {{jsxref("Promise")}} is used for both pending `play` and pending `pause` requests, authors are advised to check the state of the animation when the promise is resolved.

## Value

A {{jsxref("Promise")}} which resolves when the animation is ready to be played. You'll typically use a construct similar to this when using the ready promise:

```js
animation.ready.then(() => {
  // Do whatever needs to be done when
  // the animation is ready to run
});
```

## Examples

In the following example, the state of the animation will be `running` when the **current ready Promise** is resolved because the animation does not leave the `pending` play state in between the calls to `pause` and `play` and hence the **current ready Promise** does not change.

```js
animation.pause();
animation.ready.then(() => {
  // Displays 'running'
  alert(animation.playState);
});
animation.play();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Animations API](/en-US/docs/Web/API/Web_Animations_API)
- {{domxref("Animation")}}
- {{domxref("Animation.playState")}}
