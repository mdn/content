---
title: "Element: touchcancel event"
short-title: touchcancel
slug: Web/API/Element/touchcancel_event
page-type: web-api-event
browser-compat: api.Element.touchcancel_event
---

{{APIRef("Touch Events")}}

The `touchcancel` event is fired when one or more touch points have been disrupted in an implementation-specific manner.

Some examples of situations that will trigger a `touchcancel` event:

- A hardware event occurs that cancels the touch activities. This may include, for example, the user switching applications using an application switcher interface or the "home" button on a mobile device.
- The device's screen orientation is changed while the touch is active.
- The browser decides that the user started touch input accidentally. This can happen if, for example, the hardware supports palm rejection to prevent a hand resting on the display while using a stylus from accidentally triggering events.
- The {{cssxref("touch-action")}} CSS property prevents the input from continuing.
- When the user interacts with too many fingers simultaneously, the browser can fire this event for all existing pointers (even if the user is still touching the screen).

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js-nolint
addEventListener("touchcancel", (event) => { })

ontouchcancel = (event) => { }
```

## Event type

A {{domxref("TouchEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("TouchEvent")}}

## Examples

Code samples for those events are available on the dedicated page: [Touch events](/en-US/docs/Web/API/Touch_events).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
