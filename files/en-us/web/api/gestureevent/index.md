---
title: GestureEvent
slug: Web/API/GestureEvent
tags:
  - API
  - DOM
  - Interface
  - Non-standard
  - Reference
browser-compat: api.GestureEvent
---
{{APIRef("DOM Events")}}

{{Non-standard_header()}}

The **`GestureEvent`** is a proprietary interface specific to WebKit which gives information regarding multi-touch gestures. Events using this interface include {{event("gesturestart")}}, {{event("gesturechange")}}, and {{event("gestureend")}}.

`GestureEvent` derives from {{domxref("UIEvent")}}, which in turn derives from {{domxref("Event")}}.

## Constructor

- {{domxref("GestureEvent.GestureEvent", "GestureEvent()")}}
  - : Creates a `GestureEvent` object.

## Properties

_This interface also inherits properties of its parents, {{domxref("UIEvent")}} and {{domxref("Event")}}._

- {{domxref("GestureEvent.rotation")}} {{readonlyinline}}
  - : Change in rotation (in degrees) since the event's beginning. Positive values indicate clockwise rotation; negative values indicate counterclockwise rotation. Initial value: `0.0`
- {{domxref("GestureEvent.scale")}} {{readonlyinline}}
  - : Distance between two digits since the event's beginning. Expressed as a floating-point multiple of the initial distance between the digits at the beginning of the gesture. Values below 1.0 indicate an inward pinch (zoom out). Values above 1.0 indicate an outward unpinch (zoom in). Initial value: `1.0`

## Methods

_This interface also inherits methods of its parents, {{domxref("UIEvent")}} and {{domxref("Event")}}._

- {{domxref("GestureEvent.initGestureEvent()")}}
  - : Initializes the value of an `GestureEvent`. If the event has already being dispatched, this method does nothing.

## Gesture event types

- {{event("gesturestart")}}
- {{event("gesturechange")}}
- {{event("gestureend")}}

## Specifications

_Not part of any specification._ Apple has [a description at the Safari Developer Library](https://developer.apple.com/library/iad/documentation/UserExperience/Reference/GestureEventClassReference/index.html).

## Browser compatibility

{{Compat}}

## See also

- {{domxref("MSGestureEvent")}}
- {{event("MSGestureStart")}}
- {{event("MSGestureEnd")}}
- {{event("MSGestureTap")}}
- {{event("MSGestureHold")}}
- {{event("MSGestureChange")}}
- {{event("MSInertiaStart")}}
