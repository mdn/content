---
title: AnimationEvent
slug: Web/API/AnimationEvent
page-type: web-api-interface
browser-compat: api.AnimationEvent
---

{{APIRef("Web Animations")}}

The **`AnimationEvent`** interface represents events providing information related to [animations](/en-US/docs/Web/CSS/CSS_animations/Using_CSS_animations).

{{InheritanceDiagram}}

## Constructor

- {{domxref("AnimationEvent.AnimationEvent", "AnimationEvent()")}}
  - : Creates an `AnimationEvent` event with the given parameters.

## Instance properties

_Also inherits properties from its parent {{domxref("Event")}}_.

- {{domxref("AnimationEvent.animationName")}} {{ReadOnlyInline}}
  - : A string containing the value of the {{cssxref("animation-name")}} that generated the animation.
- {{domxref("AnimationEvent.elapsedTime")}} {{ReadOnlyInline}}
  - : A `float` giving the amount of time the animation has been running, in seconds, when this event fired, excluding any time the animation was paused. For an `animationstart` event, `elapsedTime` is `0.0` unless there was a negative value for {{cssxref("animation-delay")}}, in which case the event will be fired with `elapsedTime` containing `(-1 * delay)`.
- {{domxref("AnimationEvent.pseudoElement")}} {{ReadOnlyInline}}
  - : A string, starting with `'::'`, containing the name of the [pseudo-element](/en-US/docs/Web/CSS/Pseudo-elements) the animation runs on. If the animation doesn't run on a pseudo-element but on the element, an empty string: `''`.

## Instance methods

_Inherits methods from its parent, {{domxref("Event")}}_.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using CSS animations](/en-US/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- Animation-related CSS properties and at-rules: {{cssxref("animation")}}, {{cssxref("animation-composition")}}, {{cssxref("animation-delay")}}, {{cssxref("animation-direction")}}, {{cssxref("animation-duration")}}, {{cssxref("animation-fill-mode")}}, {{cssxref("animation-iteration-count")}}, {{cssxref("animation-name")}}, {{cssxref("animation-play-state")}}, {{cssxref("animation-timing-function")}}, {{cssxref("@keyframes")}}.
