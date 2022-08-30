---
title: Animation.replaceState
slug: Web/API/Animation/replaceState
page-type: web-api-instance-property
tags:
  - API
  - Animation
  - Property
  - Reference
  - replaceState
  - web animations api
browser-compat: api.Animation.replaceState
---
{{ APIRef("Web Animations") }}

The read-only **`Animation.replaceState`** property of the [Web Animations API](/en-US/docs/Web/API/Web_Animations_API) returns the [replace state](https://drafts.csswg.org/web-animations-1/#animation-replace-state) of the animation. This will be `active` if the animation has been removed, or `persisted` if {{domxref("Animation.persist()")}} has been invoked on it.

## Value

A string that represents the replace state of the animation. The value can be one of:

- `active`
  - : The initial value of the animation's replace state; when the animation has been removed by the browser's [Automatically removing filling animations](/en-US/docs/Web/API/Animation#automatically_removing_filling_animations) behavior.
- `persisted`
  - : The animation has been explicitly persisted by invoking {{domxref("Animation.persist()")}} on it.
- `removed`
  - : The animation has been explicitly removed.

## Examples

In our simple [replace indefinite animations demo](https://mdn.github.io/dom-examples/web-animations-api/replace-indefinite-animations.html), you can see the following code:

```js
const divElem = document.querySelector('div');

document.body.addEventListener('mousemove', (evt) => {
  let anim = divElem.animate(
    { transform: `translate(${evt.clientX}px, ${evt.clientY}px)` },
    { duration: 500, fill: 'forwards' }
  );

  anim.commitStyles();

  //anim.persist()

  anim.onremove = (event) => {console.log('Animation removed');}

  console.log(anim.replaceState);
});
```

Here we have a `<div>` element, and an event listener that fires the event handler code whenever the mouse moves. The event handler sets up an animation that animates the `<div>` element to the position of the mouse pointer. This could result in a huge animations list, which could create a memory leak. For this reason, modern browsers automatically remove overriding forward filling animations.

You can see the `replaceState` of the animation being logged at the end of the handler. This will be `active` for each animation by default, or `persisted` if the `persist()` call is uncommented.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Animations API](/en-US/docs/Web/API/Web_Animations_API)
- {{domxref("Animation")}}
