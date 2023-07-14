---
title: "AnimationEvent: pseudoElement property"
short-title: pseudoElement
slug: Web/API/AnimationEvent/pseudoElement
page-type: web-api-instance-property
browser-compat: api.AnimationEvent.pseudoElement
---

{{APIRef("Web Animations")}}

The **`AnimationEvent.pseudoElement`** read-only property is a
string, starting with `'::'`, containing the name of the [pseudo-element](/en-US/docs/Web/CSS/Pseudo-elements) the animation runs on.
If the animation doesn't run on a pseudo-element but on the element, an empty string: `''`.

## Value

A string, starting with `'::'`, containing the name of the [pseudo-element](/en-US/docs/Web/CSS/Pseudo-elements) the animation runs on.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using CSS animations](/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations)
- Animation-related CSS properties and at-rules: {{cssxref("animation")}},
  {{cssxref("animation-delay")}}, {{cssxref("animation-direction")}},
  {{cssxref("animation-duration")}}, {{cssxref("animation-fill-mode")}},
  {{cssxref("animation-iteration-count")}}, {{cssxref("animation-name")}},
  {{cssxref("animation-play-state")}}, {{cssxref("animation-timing-function")}},
  {{cssxref("@keyframes")}}.
- The {{domxref("AnimationEvent")}} interface it belongs to.
