---
title: PointerEvent
slug: Web/API/PointerEvent
page-type: web-api-interface
browser-compat: api.PointerEvent
---

{{ APIRef("Pointer Events") }}

The **`PointerEvent`** interface represents the state of a DOM event produced by a pointer such as the geometry of the contact point, the device type that generated the event, the amount of pressure that was applied on the contact surface, etc.

A _pointer_ is a hardware agnostic representation of input devices (such as a mouse, pen or contact point on a touch-enable surface). The pointer can target a specific coordinate (or set of coordinates) on the contact surface such as a screen.

A pointer's _hit test_ is the process a browser uses to determine the target element for a pointer event. Typically, this is determined by considering the pointer's location and also the visual layout of elements in a document on screen media.

{{InheritanceDiagram}}

## Constructors

- {{domxref("PointerEvent.PointerEvent", "PointerEvent()")}}
  - : Creates a synthetic—and untrusted—`PointerEvent`.

## Instance properties

_This interface inherits properties from {{domxref("MouseEvent")}} and {{domxref("Event")}}._

- {{domxref('PointerEvent.altitudeAngle')}} {{ReadOnlyInline}}
  - : Represents the angle between a transducer (a pointer or stylus) axis and the X-Y plane of a device screen.
- {{domxref('PointerEvent.azimuthAngle')}} {{ReadOnlyInline}}
  - : Represents the angle between the Y-Z plane and the plane containing both the transducer (a pointer or stylus) axis and the Y axis.
- {{domxref('PointerEvent.persistentDeviceId')}} {{ReadOnlyInline}} {{experimental_inline}}
  - : A unique identifier for the pointing device generating the `PointerEvent`.
- {{domxref('PointerEvent.pointerId')}} {{ReadOnlyInline}}
  - : A unique identifier for the pointer causing the event.
- {{domxref('PointerEvent.width')}} {{ReadOnlyInline}}
  - : The width (magnitude on the X axis), in CSS pixels, of the contact geometry of the pointer.
- {{domxref('PointerEvent.height')}} {{ReadOnlyInline}}
  - : The height (magnitude on the Y axis), in CSS pixels, of the contact geometry of the pointer.
- {{domxref('PointerEvent.pressure')}} {{ReadOnlyInline}}
  - : The normalized pressure of the pointer input in the range `0` to `1`, where `0` and `1` represent the minimum and maximum pressure the hardware is capable of detecting, respectively.
- {{domxref('PointerEvent.tangentialPressure')}} {{ReadOnlyInline}}
  - : The normalized tangential pressure of the pointer input (also known as barrel pressure or [cylinder stress](https://en.wikipedia.org/wiki/Cylinder_stress)) in the range `-1` to `1`, where `0` is the neutral position of the control.
- {{domxref('PointerEvent.tiltX')}} {{ReadOnlyInline}}
  - : The plane angle (in degrees, in the range of `-90` to `90`) between the Y–Z plane and the plane containing both the pointer (e.g. pen stylus) axis and the Y axis.
- {{domxref('PointerEvent.tiltY')}} {{ReadOnlyInline}}
  - : The plane angle (in degrees, in the range of `-90` to `90`) between the X–Z plane and the plane containing both the pointer (e.g. pen stylus) axis and the X axis.
- {{domxref('PointerEvent.twist')}} {{ReadOnlyInline}}
  - : The clockwise rotation of the pointer (e.g. pen stylus) around its major axis in degrees, with a value in the range `0` to `359`.
- {{domxref('PointerEvent.pointerType')}} {{ReadOnlyInline}}
  - : Indicates the device type that caused the event (mouse, pen, touch, etc.).
- {{domxref('PointerEvent.isPrimary')}} {{ReadOnlyInline}}
  - : Indicates if the pointer represents the primary pointer of this pointer type.

## Instance methods

- {{DOMxRef('PointerEvent.getCoalescedEvents()')}} {{SecureContext_Inline}}
  - : Returns a sequence of all `PointerEvent` instances that were coalesced into the dispatched {{domxref("Element/pointermove_event", "pointermove")}} event.
- {{DOMxRef('PointerEvent.getPredictedEvents()')}}
  - : Returns a sequence of `PointerEvent` instances that the browser predicts will follow the dispatched {{domxref("Element/pointermove_event", "pointermove")}} event's coalesced events.

## Pointer event types

The `PointerEvent` interface has several event types. To determine which event fired, look at the event's {{domxref("Event.type", "type")}} property.

> [!NOTE]
> It's important to note that in many cases, both pointer and mouse events get sent (in order to let non-pointer-specific code still interact with the user). If you use pointer events, you should call {{domxref("Event.preventDefault()", "preventDefault()")}} to keep the mouse event from being sent as well.

- {{domxref('Element/pointerover_event', 'pointerover')}}
  - : This event is fired when a pointing device is moved into an element's hit test boundaries.
- {{domxref('Element/pointerenter_event', 'pointerenter')}}
  - : This event is fired when a pointing device is moved into the hit test boundaries of an element or one of its descendants, including as a result of a `pointerdown` event from a device that does not support hover (see `pointerdown`). This event type is similar to `pointerover`, but differs in that it does not bubble.
- {{domxref('Element/pointerdown_event', 'pointerdown')}}

  - : The event is fired when a pointer becomes _active_. For mouse, it is fired when the device transitions from no buttons pressed to at least one button pressed. For touch, it is fired when physical contact is made with the digitizer. For pen, it is fired when the stylus makes physical contact with the digitizer.

    > [!NOTE]
    > For touchscreen browsers that allow [direct manipulation](https://w3c.github.io/pointerevents/#dfn-direct-manipulation), a `pointerdown` event triggers [implicit pointer capture](https://w3c.github.io/pointerevents/#dfn-implicit-pointer-capture), which causes the target to capture all subsequent pointer events as if they were occurring over the capturing target. Accordingly, `pointerover`, `pointerenter`, `pointerleave`, and `pointerout` **will not fire** as long as this capture is set. The capture can be released manually by calling {{ domxref('element.releasePointerCapture') }} on the target element, or it will be implicitly released after a `pointerup` or `pointercancel` event.

- {{domxref('Element/pointermove_event', 'pointermove')}}
  - : This event is fired when a pointer changes coordinates.
- {{domxref('Element/pointerrawupdate_event', 'pointerrawupdate')}} {{experimental_inline}}
  - : This event is fired when any of a pointer's properties change.
- {{domxref('Element/pointerup_event', 'pointerup')}}
  - : This event is fired when a pointer is no longer _active_.
- {{domxref('Element/pointercancel_event', 'pointercancel')}}
  - : A browser fires this event if it concludes the pointer will no longer be able to generate events (for example the related device is deactivated).
- {{domxref('Element/pointerout_event', 'pointerout')}}
  - : This event is fired for several reasons including: pointing device is moved out of the hit test boundaries of an element; firing the `pointerup` event for a device that does not support hover (see `pointerup`); after firing the `pointercancel` event (see `pointercancel`); when a pen stylus leaves the hover range detectable by the digitizer.
- {{domxref('Element/pointerleave_event', 'pointerleave')}}
  - : This event is fired when a pointing device is moved out of the hit test boundaries of an element. For pen devices, this event is fired when the stylus leaves the hover range detectable by the digitizer.
- {{domxref('Element/gotpointercapture_event', 'gotpointercapture')}}
  - : This event is fired when an element receives pointer capture.
- {{domxref('Element/lostpointercapture_event', 'lostpointercapture')}}
  - : This event is fired after pointer capture is released for a pointer.

## Example

Examples of each property, event type, and global event handler are included in their respective reference pages.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Touch events](/en-US/docs/Web/API/Touch_events)
- {{domxref("GestureEvent")}}
- {{cssxref("touch-action")}}
