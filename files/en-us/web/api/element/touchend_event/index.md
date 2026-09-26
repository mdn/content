---
title: "Element: touchend event"
short-title: touchend
slug: Web/API/Element/touchend_event
page-type: web-api-event
browser-compat: api.Element.touchend_event
---

{{APIRef("Touch Events")}}

The `touchend` event fires when one or more touch points are removed from the touch surface. Remember that it is possible to get a [`touchcancel`](/en-US/docs/Web/API/Element/touchcancel_event) event instead.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js-nolint
addEventListener("touchend", (event) => { })

ontouchend = (event) => { }
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

## See also

- [Touch events](/en-US/docs/Web/API/Touch_events)
