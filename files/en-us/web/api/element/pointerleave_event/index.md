---
title: "Element: pointerleave event"
short-title: pointerleave
slug: Web/API/Element/pointerleave_event
page-type: web-api-event
browser-compat: api.Element.pointerleave_event
---

{{APIRef("Pointer Events")}}

The `pointerleave` event is fired when a pointing device is moved out of the hit test boundaries of an element. For pen devices, this event is fired when the stylus leaves the hover range detectable by the digitizer. Otherwise, `pointerleave` works the same as {{domxref("Element/mouseleave_event", "mouseleave")}}, and are dispatched at the same time. They are also dispatched at the same time as {{domxref("Element/mouseout_event", "mouseout")}} and {{domxref("Element/pointerout_event", "pointerout")}} events, if appropriate.

## Syntax

Use the event name in {{domxref("EventTarget/addEventListener", "addEventListener()")}}:

```js-nolint
addEventListener("pointerleave", (event) => { })
```

Alternatively, assign to the [event handler property](/en-US/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) of the interface:

```js-nolint
onpointerleave = (event) => { }
```

## Event type

A {{domxref("PointerEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("PointerEvent")}}

## Examples

Using `addEventListener()`:

```js
const para = document.querySelector("p");

para.addEventListener("pointerleave", (event) => {
  console.log("Pointer left element");
});
```

Using the `onpointerleave` event handler property (but note that this replaces other event listeners added using `onpointerleave`, if any):

```js
const para = document.querySelector("p");

para.onpointerleave = (event) => {
  console.log("Pointer left element");
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
  - {{domxref('Element/pointerout_event', 'pointerout')}}
  - {{domxref('Element/pointerrawupdate_event', 'pointerrawupdate')}}
  - {{domxref("Element/mouseleave_event", "mouseleave")}}
