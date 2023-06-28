---
title: GestureEvent
slug: Web/API/GestureEvent
page-type: web-api-interface
status:
  - non-standard
browser-compat: api.GestureEvent
---

{{APIRef("UI Events")}}{{Non-standard_header}}

The **`GestureEvent`** is a proprietary interface specific to WebKit which gives information regarding multi-touch gestures. Events using this interface include {{domxref("Element/gesturestart_event", "gesturestart")}}, {{domxref("Element/gesturechange_event", "gesturechange")}}, and {{domxref("Element/gestureend_event", "gestureend")}}.

{{InheritanceDiagram}}

## Instance properties

_This interface also inherits properties of its parents, {{domxref("UIEvent")}} and {{domxref("Event")}}._

- {{domxref("GestureEvent.rotation")}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Change in rotation (in degrees) since the event's beginning. Positive values indicate clockwise rotation; negative values indicate counterclockwise rotation. Initial value: `0.0`.
- {{domxref("GestureEvent.scale")}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Distance between two digits since the event's beginning. Expressed as a floating-point multiple of the initial distance between the digits at the beginning of the gesture. Values below 1.0 indicate an inward pinch (zoom out). Values above 1.0 indicate an outward unpinch (zoom in). Initial value: `1.0`.

## Instance methods

_This interface also inherits methods of its parents, {{domxref("UIEvent")}} and {{domxref("Event")}}._

- {{domxref("GestureEvent.initGestureEvent()")}} {{Non-standard_Inline}}
  - : Initializes the value of an `GestureEvent`. If the event has already been dispatched, this method does nothing.

## Gesture event types

- {{domxref("Element/gesturestart_event", "gesturestart")}}
- {{domxref("Element/gesturechange_event", "gesturechange")}}
- {{domxref("Element/gestureend_event", "gestureend")}}

## Specifications

_Not part of any specification._ Apple has [a description at the Safari Developer Library](https://developer.apple.com/documentation/webkitjs/gestureevent).

## Browser compatibility

{{Compat}}
