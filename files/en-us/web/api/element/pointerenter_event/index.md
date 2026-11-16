---
title: "Element: pointerenter event"
short-title: pointerenter
slug: Web/API/Element/pointerenter_event
page-type: web-api-event
browser-compat: api.Element.pointerenter_event
---

{{APIRef("Pointer Events")}}

The `pointerenter` event fires when a pointing device is moved into the hit test boundaries of an element or one of its descendants, including as a result of a {{domxref("Element/pointerdown_event", "pointerdown")}} event from a device that does not support hover (see {{domxref("Element/pointerdown_event", "pointerdown")}}). Otherwise, `pointerenter` works the same as {{domxref("Element/mouseenter_event", "mouseenter")}}, and are dispatched at the same time. They are also dispatched at the same time as {{domxref("Element/mouseover_event", "mouseover")}} and {{domxref("Element/pointerover_event", "pointerover")}} events, if appropriate.

## Syntax

Use the event name in {{domxref("EventTarget/addEventListener", "addEventListener()")}}:

```js-nolint
addEventListener("pointerenter", (event) => { })
```

Alternatively, assign to the [event handler property](/en-US/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) of the interface:

```js-nolint
onpointerenter = (event) => { }
```

## Event type

A {{domxref("PointerEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("PointerEvent")}}

## Examples

Using `addEventListener()`:

```js
const para = document.querySelector("p");

para.addEventListener("pointerenter", (event) => {
  console.log("Pointer entered element");
});
```

Using the `onpointerenter` event handler property (but note that this replaces other event listeners added using `onpointerenter`, if any):

```js
const para = document.querySelector("p");

para.onpointerenter = (event) => {
  console.log("Pointer entered element");
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
  - {{domxref('Element/pointerdown_event', 'pointerdown')}}
  - {{domxref('Element/pointermove_event', 'pointermove')}}
  - {{domxref('Element/pointerup_event', 'pointerup')}}
  - {{domxref('Element/pointercancel_event', 'pointercancel')}}
  - {{domxref('Element/pointerout_event', 'pointerout')}}
  - {{domxref('Element/pointerleave_event', 'pointerleave')}}
  - {{domxref('Element/pointerrawupdate_event', 'pointerrawupdate')}}
  - {{domxref("Element/mouseenter_event", "mouseenter")}}
