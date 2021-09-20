---
title: CSSAnimation
slug: Web/API/CSSAnimation/animationName
tags:
  - API
  - Animation
  - CSSAnimation
  - Property
  - Reference
browser-compat: api.CSSAnimation.animationName
---
{{APIRef("Web Animations API")}}{{SeeCompatTable}}

The **`animationName`** property of the
{{domxref("CSSAnimation")}} interface returns the {{CSSXref("animation-name")}}. This
specifies one or more keyframe at-rules which describe the animation applied to the
element.

## Syntax

```js
const animationName = CSSAnimation.animationName;
```

### Value

A {{domxref("CSSOMString")}}.

## Examples

### Returning the animationName

The animation in the following example is defined in CSS with the name
`slide-in`. Calling {{domxref("Element.getAnimations()")}} returns an array
of all {{domxref("Animation")}} objects. The `animationName` property returns
the name given to the animation, in our case `slide-in`.

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
console.log(animations[0].animationName);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
