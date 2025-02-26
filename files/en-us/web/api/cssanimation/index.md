---
title: CSSAnimation
slug: Web/API/CSSAnimation
page-type: web-api-interface
browser-compat: api.CSSAnimation
---

{{APIRef("Web Animations")}}

The **`CSSAnimation`** interface of the {{domxref('Web Animations API','','',' ')}} represents an {{domxref("Animation")}} object.

{{InheritanceDiagram}}

## Instance properties

_This interface inherits properties from its parent, {{domxref("Animation")}}._

- {{domxref("CSSAnimation.animationName")}} {{ReadOnlyInline}}
  - : Returns the animation name as a string.

## Instance methods

_This interface inherits methods from its parent, {{domxref("Animation")}}._

## Examples

### Inspecting the returned CSSAnimation

The animation in the following example is defined in CSS with the name `slide-in`. Calling {{domxref("Element.getAnimations()")}} returns an array of all {{domxref("Animation")}} objects. In our case this returns a `CSSAnimation` object, representing the animation created in CSS.

```css
.animate {
  animation: slide-in 0.7s both;
}

@keyframes slide-in {
  0% {
    transform: translateY(-1000px);
  }
  100% {
    transform: translateY(0);
  }
}
```

```js
let animations = document.querySelector(".animate").getAnimations();
console.log(animations[0]);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
