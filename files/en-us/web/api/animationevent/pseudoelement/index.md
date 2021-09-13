---
title: AnimationEvent.pseudoElement
slug: Web/API/AnimationEvent/pseudoElement
tags:
  - API
  - AnimationEvent
  - CSS
  - CSSOM
  - Experimental
  - Property
  - Reference
  - Web Animations
browser-compat: api.AnimationEvent.pseudoElement
---
{{SeeCompatTable}}{{ apiref("Web Animations API") }}

## Summary

The **`AnimationEvent.pseudoElement`** read-only property is a
{{domxref("DOMString")}}, starting with `'::'`, containing the name of the [pseudo-element](/en-US/docs/Web/CSS/Pseudo-elements) the animation runs on.
If the animation doesn't run on a pseudo-element but on the element, an empty string:
` ''``. `

## Syntax

```js
name = AnimationEvent.pseudoElement
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Chromium
  Issue 437132](https://bugs.chromium.org/p/chromium/issues/detail?id=437132)
- [Using CSS animations](/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations)
- Animation-related CSS properties and at-rules: {{cssxref("animation")}},
  {{cssxref("animation-delay")}}, {{cssxref("animation-direction")}},
  {{cssxref("animation-duration")}}, {{cssxref("animation-fill-mode")}},
  {{cssxref("animation-iteration-count")}}, {{cssxref("animation-name")}},
  {{cssxref("animation-play-state")}}, {{cssxref("animation-timing-function")}},
  {{cssxref("@keyframes")}}.
- The {{domxref("AnimationEvent")}} interface it belongs to.
