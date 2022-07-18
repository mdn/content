---
title: MSGestureEvent
slug: Web/API/MSGestureEvent
page-type: web-api-interface
tags:
  - API
  - DOM
  - Interface
  - Non-standard
  - Reference
browser-compat: api.MSGestureEvent
---
{{APIRef("UI Events")}}

{{Non-standard_header()}}

The **`MSGestureEvent`** is a proprietary interface specific to Internet Explorer and Microsoft Edge which represents events that occur due to touch gestures. Events using this interface include {{domxref("Element/MSGestureStart_event", "MSGestureStart")}}, {{domxref("Element/MSGestureEnd_event", "MSGestureEnd")}}, {{domxref("Element/MSGestureTap_event", "MSGestureTap")}}, {{domxref("Element/MSGestureHold_event", "MSGestureHold")}}, {{domxref("Element/MSGestureChange_event", "MSGestureChange")}}, and {{domxref("Element/MSInertiaStart_event", "MSInertiaStart")}}.

`MSGestureEvent` derives from {{domxref("UIEvent")}}, which in turn derives from {{domxref("Event")}}. Though the {{domxref("MSGestureEvent.initGestureEvent()")}} method is kept for backward compatibility, the creation of an `MSGestureEvent` object should be done using the {{domxref("MSGestureEvent.MSGestureEvent", "MSGestureEvent()")}} constructor.

## Constructor

- {{domxref("MSGestureEvent.MSGestureEvent", "MSGestureEvent()")}}
  - : Creates an `MSGestureEvent` object.

## Properties

_This interface also inherits properties of its parents, {{domxref("UIEvent")}} and {{domxref("Event")}}._

- {{domxref("MSGestureEvent.expansion")}} {{readonlyinline}}
  - : The diameter of the gesture area. For example, the distance between fingers.
- {{domxref("MSGestureEvent.gestureObject")}} {{readonlyinline}}
  - : Returns the {{domxref("MSGesture")}} object for this gesture event.
- {{domxref("MSGestureEvent.rotation")}} {{readonlyinline}}
  - : Amount of rotation (in radians) since the previous {{domxref("MSGestureEvent")}} of the current gesture. Positive values indicate clockwise rotation; negative values indicate counterclockwise rotation.
- {{domxref("MSGestureEvent.scale")}} {{readonlyinline}}
  - : The difference in scale (for zoom gestures) from the previous {{domxref("MSGestureEvent")}} of the current gesture.
- {{domxref("MSGestureEvent.translationX")}} {{readonlyinline}}
  - : Distance traversed along the X-axis since the previous {{domxref("MSGestureEvent")}} of the current gesture
- {{domxref("MSGestureEvent.translationY")}} {{readonlyinline}}
  - : Distance traversed along the Y-axis since the previous {{domxref("MSGestureEvent")}} of the current gesture
- {{domxref("MSGestureEvent.velocityAngular")}} {{readonlyinline}}
  - : Angular velocity. Expressed in radians.
- {{domxref("MSGestureEvent.velocityExpansion")}} {{readonlyinline}}
  - : The velocity of the expansion of the gesture area.
- {{domxref("MSGestureEvent.velocityX")}} {{readonlyinline}}
  - : Velocity along the direction of the X-axis.
- {{domxref("MSGestureEvent.velocityY")}} {{readonlyinline}}
  - : Velocity along the direction of the Y-axis.

## Methods

_This interface also inherits methods of its parents, {{domxref("UIEvent")}} and {{domxref("Event")}}._

- {{domxref("MSGestureEvent.initGestureEvent()")}} {{deprecated_inline}}
  - : Initializes the value of an `MSGestureEvent`. If the event has already being dispatched, this method does nothing. This method is deprecated as of Microsoft Edge.

## Gesture event types

- {{domxref("Element/MSGestureStart_event", "MSGestureStart")}}
- {{domxref("Element/MSGestureEnd_event", "MSGestureEnd")}}
- {{domxref("Element/MSGestureTap_event", "MSGestureTap")}}
- {{domxref("Element/MSGestureHold_event", "MSGestureHold")}}
- {{domxref("Element/MSGestureChange_event", "MSGestureChange")}}
- {{domxref("Element/MSInertiaStart_event", "MSInertiaStart")}}

## Specifications

_Not part of any specification._ Microsoft has [a description on MSDN](<https://msdn.microsoft.com/library/hh772076(v=vs.85).aspx>).

## Browser compatibility

{{Compat}}

## See also

- WebKit equivalents:

  - {{domxref("GestureEvent")}}
  - {{domxref("Element/gesturestart_event", "gesturestart")}}
  - {{domxref("Element/gesturechange_event", "gesturechange")}}
  - {{domxref("Element/gestureend_event", "gestureend")}}
