---
title: "Element: touchmove event"
short-title: touchmove
slug: Web/API/Element/touchmove_event
page-type: web-api-event
browser-compat: api.Element.touchmove_event
---

{{APIRef("Touch Events")}}

The `touchmove` event is fired when one or more touch points are moved along the touch surface.

## Syntax

Use the event name in {{domxref("EventTarget/addEventListener", "addEventListener()")}}:

```js-nolint
addEventListener("touchmove", (event) => { })
```

Alternatively, assign to the [event handler property](/en-US/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) of the interface:

```js-nolint
ontouchmove = (event) => { }
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
- {{domxref("Element/mousemove_event", "mousemove")}}
