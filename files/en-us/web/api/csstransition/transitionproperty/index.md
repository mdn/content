---
title: CSSTransition.transitionProperty
slug: Web/API/CSSTransition/transitionProperty
page-type: web-api-instance-property
tags:
  - API
  - Animation
  - CSSTransition
  - Property
  - Reference
browser-compat: api.CSSTransition.transitionProperty
---
{{APIRef("Web Animations API")}}

The **`transitionProperty`** property of the
{{domxref("CSSTransition")}} interface returns the **expanded transition property
name** of the transition. This is the longhand CSS property for which the
transition was generated.

## Value

A string.

## Examples

### Returning the transitionProperty

The transition in the following example changes the width of the box on hover. Calling
{{domxref("Element.getAnimations()")}} returns an array of all {{domxref("Animation")}}
objects. In our case this returns a `CSSTransition` object, representing the
animation created. The `transitionProperty` property returns the property
that the transition is created for, which is `width`.

```css
.box {
  background-color: #165baa;
  color: #fff;
  width: 100px;
  height: 100px;
  transition: width 4s;
}

.box:hover {
  width: 200px;
}
```

```js
const item = document.querySelector(".box");
item.addEventListener('transitionrun', () => {
  let animations = document.querySelector(".box").getAnimations();
  console.log(animations[0].propertyName);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
