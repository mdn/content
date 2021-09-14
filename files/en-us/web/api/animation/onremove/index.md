---
title: Animation.onremove
slug: Web/API/Animation/onremove
tags:
  - API
  - Animation
  - Event Handler
  - Experimental
  - Property
  - Reference
  - onremove
  - web animations api
browser-compat: api.Animation.onremove
---
{{ SeeCompatTable() }}{{ APIRef("Web Animations") }}

The {{domxref("Animation")}} interface's **`onremove`** property (from the [Web Animations API](/en-US/docs/Web/API/Web_Animations_API)) is the event handler for the {{event("remove")}} event. This event is sent when the animation is removed (i.e., put into an `active` replace state).

## Syntax

```js
var removeHandler = animation.onremove;

animation.onremove = removeHandler;
```

### Value

A function to be called to handle the {{event("remove")}} event, or `null` if no `remove` event handler is set.

## Examples

In our simple [replace indefinite animations demo](https://mdn.github.io/dom-examples/web-animations-api/replace-indefinite-animations.html), you can see the following code:

```js
const divElem = document.querySelector('div');

document.body.addEventListener('mousemove', evt => {
  let anim = divElem.animate(
    { transform: `translate(${ evt.clientX}px, ${evt.clientY}px)` },
    { duration: 500, fill: 'forwards' }
  );

  anim.commitStyles();

  //anim.persist()

  anim.onremove = function() {
    console.log('Animation removed');
  }

  console.log(anim.replaceState);
});
```

Here we have a `<div>` element, and an event listener that fires the event handler code whenever the mouse moves. The event handler sets up an animation that animates the \<div> element to the position of the mouse pointer. This could result in a huge animations list, which could create a memory leak. For this reason, modern browsers automatically remove overriding forward filling animations.

A console message is logged each time an animation it removed, invoked when the `remove` event is fired.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Animations API](/en-US/docs/Web/API/Web_Animations_API)
- {{domxref("Animation")}}
