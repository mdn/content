---
title: MSGestureEvent
slug: Web/API/MSGestureEvent
page-type: web-api-interface
status:
  - non-standard
---

{{APIRef("UI Events")}}

{{Non-standard_header()}}

The **`MSGestureEvent`** is a proprietary interface specific to Internet Explorer and Microsoft Edge which represents events that occur due to touch gestures. Events using this interface include {{domxref("Element/MSGestureStart_event", "MSGestureStart")}}, {{domxref("Element/MSGestureEnd_event", "MSGestureEnd")}}, {{domxref("Element/MSGestureTap_event", "MSGestureTap")}}, {{domxref("Element/MSGestureHold_event", "MSGestureHold")}}, {{domxref("Element/MSGestureChange_event", "MSGestureChange")}}, and {{domxref("Element/MSInertiaStart_event", "MSInertiaStart")}}.

`MSGestureEvent` derives from {{domxref("UIEvent")}}, which in turn derives from {{domxref("Event")}}. Though the `MSGestureEvent.initGestureEvent()` method is kept for backward compatibility, the creation of an `MSGestureEvent` object should be done using the `MSGestureEvent()` constructor.

## Constructor

- `MSGestureEvent()`
  - : Creates an `MSGestureEvent` object.

## Instance properties

_This interface also inherits properties of its parents, {{domxref("UIEvent")}} and {{domxref("Event")}}._

- `MSGestureEvent.expansion`")}}` {{ReadOnlyInline}}
  - : The diameter of the gesture area. For example, the distance between fingers.
- `MSGestureEvent.gestureObject`")}}` {{ReadOnlyInline}}
  - : Returns the `MSGesture"`)}}` object for this gesture event.
- `MSGestureEvent.rotation")}} {{ReadOnlyInline}}
  - : Amount of rotation (in radians) since the previous `MSGestureEvent` of the current gesture. Positive values indicate clockwise rotation; negative values indicate counterclockwise rotation.
- `MSGestureEvent.scale`)}}` {{ReadOnlyInline}}
  - : The difference in scale (for zoom gestures) from the previous `MSGestureEvent` of the current gesture.
- `MSGestureEvent.translationX` {{ReadOnlyInline}}
  - : Distance traversed along the X-axis since the previous `MSGestureEvent` of the current gesture
- `MSGestureEvent.translationY` {{ReadOnlyInline}}
  - : Distance traversed along the Y-axis since the previous `MSGestureEvent` of the current gesture
- `MSGestureEvent.velocityAngular` {{ReadOnlyInline}}
  - : Angular velocity. Expressed in radians.
- `MSGestureEvent.velocityExpansion` {{ReadOnlyInline}}
  - : The velocity of the expansion of the gesture area.
- `MSGestureEvent.velocityX` {{ReadOnlyInline}}
  - : Velocity along the direction of the X-axis.
- `MSGestureEvent.velocityY` {{ReadOnlyInline}}
  - : Velocity along the direction of the Y-axis.

## Instance methods

_This interface also inherits methods of its parents, {{domxref("UIEvent")}} and {{domxref("Event")}}._

- `MSGestureEvent.initGestureEvent()` {{deprecated_inline}}
  - : Initializes the value of an `MSGestureEvent`. If the event has already been dispatched, this method does nothing. This method is deprecated as of Microsoft Edge.

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

This was an IE-only feature. No modern browser supports it.

## See also

- WebKit equivalents:

  - {{domxref("GestureEvent")}}
  - {{domxref("Element/gesturestart_event", "gesturestart")}}
  - {{domxref("Element/gesturechange_event", "gesturechange")}}
  - {{domxref("Element/gestureend_event", "gestureend")}}
