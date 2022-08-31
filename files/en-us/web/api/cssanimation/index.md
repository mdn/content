---
title: CSSAnimation
slug: Web/API/CSSAnimation
page-type: web-api-interface
tags:
  - API
  - Animation
  - CSSAnimation
  - Interface
  - Reference
browser-compat: api.CSSAnimation
---
{{APIRef("Web Animations API")}}

The **`CSSAnimation`** interface of the {{domxref('Web Animations API','','',' ')}} represents an {{domxref("Animation")}} object.

{{InheritanceDiagram}}

## Properties

Inherits methods from its ancestor {{domxref("Animation")}} and adds {{domxref("animationName")}}.

- {{domxref("CSSAnimation.animationName")}} {{ReadOnlyInline}}
  - : Returns the animation name as a string.

### Event handlers

No specific event handlers; inherits methods from its ancestor {{domxref("Animation")}}.

## Methods

No specific methods; inherits methods from its ancestor {{domxref("Animation")}}.

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
