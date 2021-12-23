---
title: GlobalEventHandlers.onanimationend
slug: Web/API/GlobalEventHandlers/onanimationend
tags:
  - API
  - Animations
  - CSS
  - CSS Animations
  - CSS3 Animations
  - Document
  - Element
  - Event Handler
  - GlobalEventHandlers
  - Property
  - Reference
  - Web Animations
  - Window
  - onanimationend
  - web animations api
browser-compat: api.GlobalEventHandlers.onanimationend
---
{{APIRef("CSS3 Animations")}}

The **`onanimationend`** property of the
{{domxref("GlobalEventHandlers")}} mixin is the [event handler](/en-US/docs/Web/Events/Event_handlers) for
processing {{event("animationend")}} events.

The `animationend` event fires when a [CSS animation](/en-US/docs/Web/CSS/CSS_Animations)
reaches the end of its active period (which is calculated as
`({{cssxref("animation-duration")}} * {{cssxref("animation-iteration-count")}}) + {{cssxref("animation-delay")}}`).

## Syntax

```js
var animEndHandler = target.onanimationend;
target.onanimationend = Function
```

### Value

A {{jsxref("Function")}} to be called when an {{event("animationend")}} event occurs
indicating that a CSS animation has ended on the _`target`_, where the
target object is an HTML element ({{domxref("HTMLElement")}}), document
({{domxref("Document")}}), or window ({{domxref("Window")}}). The function receives as
input a single parameter: an {{domxref("AnimationEvent")}} object describing the event
which occurred.

## Example

See [`GlobalEventHandlers.onanimationstart`](/en-US/docs/Web/API/GlobalEventHandlers/onanimationstart#example) for example code.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{event("animationend")}} event, which triggers this event handler
- {{domxref("AnimationEvent")}}
- The {{event("animationstart")}} event
