---
title: Animation.commitStyles()
slug: Web/API/Animation/commitStyles
page-type: web-api-instance-method
tags:
  - API
  - Animation
  - Method
  - Reference
  - commitStyles
  - web animations api
browser-compat: api.Animation.commitStyles
---
{{APIRef("Web Animations")}}

The `commitStyles()` method of the [Web Animations API](/en-US/docs/Web/API/Web_Animations_API)'s {{domxref("Animation")}} interface commits the end styling state of an animation to the element being animated, even after that animation has been removed. It will cause the end styling state to be written to the element being animated, in the form of properties inside a `style` attribute.

## Syntax

```js
commitStyles()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

## Examples

```js
const divElem = document.querySelector('div');

document.body.addEventListener('mousemove', (evt) => {
  let anim = divElem.animate(
    { transform: `translate(${evt.clientX}px, ${evt.clientY}px)` },
    { duration: 500, fill: 'forwards' }
  );

  anim.commitStyles();
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Animations API](/en-US/docs/Web/API/Web_Animations_API)
- {{domxref("Animation")}} for other methods and properties you can use to control web page animation.
