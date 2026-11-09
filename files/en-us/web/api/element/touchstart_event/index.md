---
title: "Element: touchstart event"
short-title: touchstart
slug: Web/API/Element/touchstart_event
page-type: web-api-event
browser-compat: api.Element.touchstart_event
---

{{APIRef("Touch Events")}}

The `touchstart` event is fired when one or more touch points are placed on the touch surface.

## Syntax

Use the event name in {{domxref("EventTarget/addEventListener", "addEventListener()")}}:

```js-nolint
addEventListener("touchstart", (event) => { })
```

Alternatively, assign to the [event handler property](/en-US/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) of the interface:

```js-nolint
ontouchstart = (event) => { }
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
