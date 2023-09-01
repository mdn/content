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

```js
addEventListener("gesturestart", (event) => {});

ongesturestart = (event) => {};
```

## Event type

A {{domxref("GestureEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("GestureEvent")}}

## Event properties

_This interface also inherits properties of its parents, {{domxref("UIEvent")}} and {{domxref("Event")}}._

- {{domxref("GestureEvent.rotation")}} {{ReadOnlyInline}}
  - : Change in rotation (in degrees) since the event's beginning. Positive values indicate clockwise rotation; negative values indicate counterclockwise rotation. Initial value: `0.0`.
- {{domxref("GestureEvent.scale")}} {{ReadOnlyInline}}
  - : Distance between two digits since the event's beginning. Expressed as a floating-point multiple of the initial distance between the digits at the beginning of the gesture. Values below 1.0 indicate an inward pinch (zoom out). Values above 1.0 indicate an outward unpinch (zoom in). Initial value: `1.0`.

## Specifications

Not part of any specification.

## Browser compatibility

{{Compat}}

## See also

- [GestureEventClassReference at the Safari Developer Library](https://developer.apple.com/documentation/webkitjs/gestureevent)
