---
title: "Element: gesturestart event"
short-title: gesturestart
slug: Web/API/Element/gesturestart_event
page-type: web-api-event
status:
  - non-standard
browser-compat: api.Element.gesturestart_event
---

{{APIRef}}{{Non-standard_header}}

The **`gesturestart`** event is fired when multiple fingers contact the touch surface, thus starting a new gesture. During the gesture, {{domxref("Element/gesturechange_event", "gesturechange")}} events will be fired. When the gesture has ended, a {{domxref("Element/gestureend_event", "gestureend")}} event will be fired.

It is a proprietary event specific to WebKit.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js-nolint
addEventListener("gesturestart", (event) => { })

ongesturestart = (event) => { }
```

## Event type

A {{domxref("GestureEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("GestureEvent")}}

## Specifications

Not part of any specification.

## Browser compatibility

{{Compat}}

## See also

- [GestureEventClassReference at the Safari Developer Library](https://developer.apple.com/documentation/webkitjs/gestureevent)
