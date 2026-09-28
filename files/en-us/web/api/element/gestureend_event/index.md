---
title: "Element: gestureend event"
short-title: gestureend
slug: Web/API/Element/gestureend_event
page-type: web-api-event
status:
  - non-standard
browser-compat: api.Element.gestureend_event
---

{{APIRef}}{{Non-standard_header}}

The **`gestureend`** event is fired when there are no longer multiple fingers contacting the touch surface, thus ending the gesture.

It is a proprietary event specific to WebKit.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js-nolint
addEventListener("gestureend", (event) => { })

ongestureend = (event) => { }
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
