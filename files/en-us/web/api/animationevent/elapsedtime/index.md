---
title: AnimationEvent.elapsedTime
slug: Web/API/AnimationEvent/elapsedTime
tags:
  - API
  - AnimationEvent
  - CSSOM
  - Experimental
  - Property
  - Reference
  - Web Animations
browser-compat: api.AnimationEvent.elapsedTime
---
{{SeeCompatTable}}{{ apiref("Web Animations API") }}

The **`AnimationEvent.elapsedTime`** read-only property is a
`float` giving the amount of time the animation has been running, in seconds,
when this event fired, excluding any time the animation was paused. For an
{{domxref("HTMLElement/animationstart_event", "animationstart")}} event,
`elapsedTime` is `0.0` unless there was a negative value for
{{cssxref("animation-delay")}}, in which case the event will be fired with
`elapsedTime` containing `(-1 * delay)`.

## Syntax

```js
time = AnimationEvent.elapsedTime
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using CSS
  animations](/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations)
- Animation-related CSS properties and at-rules: {{cssxref("animation")}},
  {{cssxref("animation-delay")}}, {{cssxref("animation-direction")}},
  {{cssxref("animation-duration")}}, {{cssxref("animation-fill-mode")}},
  {{cssxref("animation-iteration-count")}}, {{cssxref("animation-name")}},
  {{cssxref("animation-play-state")}}, {{cssxref("animation-timing-function")}},
  {{cssxref("@keyframes")}}.
- The {{domxref("AnimationEvent")}} interface it belongs to.
