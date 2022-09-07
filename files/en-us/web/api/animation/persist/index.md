---
title: Animation.persist()
slug: Web/API/Animation/persist
page-type: web-api-instance-method
tags:
  - API
  - Animation
  - Method
  - Reference
  - persist
  - web animations api
browser-compat: api.Animation.persist
---
{{APIRef("Web Animations")}}

The `persist()` method of the [Web Animations API](/en-US/docs/Web/API/Web_Animations_API)'s {{domxref("Animation")}} interface explicitly persists an animation, when it would otherwise be removed due to the browser's [Automatically removing filling animations](/en-US/docs/Web/API/Animation#automatically_removing_filling_animations) behavior.

## Syntax

```js
persist()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

## Examples

In our simple [replace indefinite animations demo](https://mdn.github.io/dom-examples/web-animations-api/replace-indefinite-animations.html), you can see the following code:

```js
const divElem = document.querySelector('div');

document.body.addEventListener('mousemove', (evt) => {
  const anim = divElem.animate(
    { transform: `translate(${evt.clientX}px, ${evt.clientY}px)` },
    { duration: 500, fill: 'forwards' }
  );

  anim.commitStyles();

  //anim.persist()

  anim.onremove = (event) => { console.log('Animation removed');}

  console.log(anim.replaceState);
});
```

Here we have a `<div>` element, and an event listener that fires the event handler code whenever the mouse moves. The event handler sets up an animation that animates the `<div>` element to the position of the mouse pointer. This could result in a huge animations list, which could create a memory leak. For this reason, modern browsers automatically remove overriding forward filling animations.

You can see the [`replaceState`](/en-US/docs/Web/API/Animation/replaceState) of the animation being logged at the end of the handler. This will be `active` for each animation by default, or `persisted` if the `persist()` call is uncommented.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Animations API](/en-US/docs/Web/API/Web_Animations_API)
- {{domxref("Animation")}} for other methods and properties you can use to control web page animation.
