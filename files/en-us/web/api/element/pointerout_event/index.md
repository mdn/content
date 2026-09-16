---
title: "Element: pointerout event"
short-title: pointerout
slug: Web/API/Element/pointerout_event
page-type: web-api-event
browser-compat: api.Element.pointerout_event
---

{{APIRef("Pointer Events")}}

The `pointerout` event is fired for several reasons including: pointing device is moved out of the _hit test_ boundaries of an element; firing the {{domxref("Element/pointerup_event", "pointerup")}} event for a device that does not support hover (see {{domxref("Element/pointerup_event", "pointerup")}}); after firing the {{domxref("Element/pointercancel_event", "pointercancel")}} event (see {{domxref("Element/pointercancel_event", "pointercancel")}}); when a pen stylus leaves the hover range detectable by the digitizer.

`pointerout` events have the same problems as {{domxref("Element/mouseout_event", "mouseout")}}. If the target element has child elements, `pointerout` and `pointerover` events fire as the pointer moves over the boundaries of these elements too, not just the target element itself. Usually, {{domxref("Element/pointerenter_event", "pointerenter")}} and {{domxref("Element/pointerleave_event", "pointerleave")}} events' behavior is more sensible, because they are not affected by moving into child elements.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js-nolint
addEventListener("pointerout", (event) => { })

onpointerout = (event) => { }
```

## Event type

A {{domxref("PointerEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("PointerEvent")}}

## Examples

Using `addEventListener()`:

```js
const para = document.querySelector("p");

para.addEventListener("pointerout", (event) => {
  console.log("Pointer moved out");
});
```

Using the `onpointerout` event handler property:

```js
const para = document.querySelector("p");

para.onpointerout = (event) => {
  console.log("Pointer moved out");
};
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
  - {{domxref('Element/pointerleave_event', 'pointerleave')}}
  - {{domxref('Element/pointerrawupdate_event', 'pointerrawupdate')}}
  - {{domxref("Element/mouseout_event", "mouseout")}}
