---
title: TransitionEvent.pseudoElement
slug: Web/API/TransitionEvent/pseudoElement
page-type: web-api-instance-property
tags:
  - API
  - CSS
  - CSS Transitions
  - CSSOM
  - Property
  - Reference
  - TransitionEvent
browser-compat: api.TransitionEvent.pseudoElement
---
{{ apiref("CSSOM") }}

The **`TransitionEvent.pseudoElement`** read-only property is a
string, starting with `'::'`, containing the name of the [pseudo-element](/en-US/docs/Web/CSS/Pseudo-elements) the animation runs on.
If the transition doesn't run on a pseudo-element but on the element, an empty string:
` ''``. `

## Value

A string.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using CSS transitions](/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)
- {{cssxref("transition")}}, {{cssxref("transition-delay")}},
  {{cssxref("transition-duration")}}, {{cssxref("transition-property")}},
  {{cssxref("transition-timing-function")}}.
