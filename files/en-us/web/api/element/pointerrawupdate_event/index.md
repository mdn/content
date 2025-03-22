---
title: "Element: pointerrawupdate event"
short-title: pointerrawupdate
slug: Web/API/Element/pointerrawupdate_event
page-type: web-api-event
status:
  - experimental
browser-compat: api.Element.pointerrawupdate_event
---

{{APIRef}}{{SeeCompatTable}}{{secureContext_header}}

The **`pointerrawupdate`** {{DOMxRef('PointerEvent')}} is fired when a pointer changes any properties that don't fire {{domxref('Element/pointerdown_event', 'pointerdown')}} or {{domxref('Element/pointerup_event', 'pointerup')}} events.
See {{domxref('Element/pointermove_event', 'pointermove')}} for a list of these properties.

The `pointerrawupdate` event may have coalesced events if there is already another `pointerrawupdate` event with the same pointer ID that hasn't been dispatched in the event loop.
For information on coalesced events, see the {{domxref("PointerEvent.getCoalescedEvents")}} documentation.

Listeners for `pointerrawupdate` events should only be added if your JavaScript needs high-frequency events and can handle them as quickly as they are dispatched.
For most use cases, other pointer event types should suffice as there may be performance implications to adding listeners for `pointerrawupdate` events.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("pointerrawupdate", (event) => {});

onpointerrawupdate = (event) => {};
```

## Event type

A {{domxref("PointerEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("PointerEvent")}}

## Event properties

_This interface inherits properties from {{domxref("MouseEvent")}} and {{domxref("Event")}}._

- {{domxref('PointerEvent.altitudeAngle')}} {{ReadOnlyInline}} {{experimental_inline}}
  - : Represents the angle between a transducer (a pointer or stylus) axis and the X-Y plane of a device screen.
- {{domxref('PointerEvent.azimuthAngle')}} {{ReadOnlyInline}} {{experimental_inline}}
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

## Example

```js
addEventListener("pointerrawupdate", (event) => {
  if (event.getCoalescedEvents && event.getCoalescedEvents().length > 1) {
    console.log("Coalesced events:", event.getCoalescedEvents().length);
    for (let coalescedEvent of event.getCoalescedEvents()) {
      // Do something with the coalesced events.
    }
  } else {
    // Do something with the event.
    console.log("Raw event", event);
  }
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Related events

  - {{domxref('Element/gotpointercapture_event', 'gotpointercapture')}}
  - {{domxref('Element/lostpointercapture_event', 'lostpointercapture')}}
  - {{domxref('Element/pointerover_event', 'pointerover')}}
  - {{domxref('Element/pointerenter_event', 'pointerenter')}}
  - {{domxref('Element/pointerdown_event', 'pointerdown')}}
  - {{domxref('Element/pointermove_event', 'pointermove')}}
  - {{domxref('Element/pointerup_event', 'pointerup')}}
  - {{domxref('Element/pointercancel_event', 'pointercancel')}}
  - {{domxref('Element/pointerout_event', 'pointerout')}}
  - {{domxref('Element/pointerleave_event', 'pointerleave')}}
