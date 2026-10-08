---
title: "Element: pointerover event"
short-title: pointerover
slug: Web/API/Element/pointerover_event
page-type: web-api-event
browser-compat: api.Element.pointerover_event
---

{{APIRef("Pointer Events")}}

The `pointerover` event is fired when a pointing device is moved into an element's hit test boundaries.

`pointerover` events have the same problems as {{domxref("Element/mouseover_event", "mouseover")}}. If the target element has child elements, `pointerout` and `pointerover` events fire as the pointer moves over the boundaries of these elements too, not just the target element itself. Usually, {{domxref("Element/pointerenter_event", "pointerenter")}} and {{domxref("Element/pointerleave_event", "pointerleave")}} events' behavior is more sensible, because they are not affected by moving into child elements.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js-nolint
addEventListener("pointerover", (event) => { })

onpointerover = (event) => { }
```

## Event type

A {{domxref("PointerEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("PointerEvent")}}

## Examples

Using `addEventListener()`:

```js
const para = document.querySelector("p");

para.addEventListener("pointerover", (event) => {
  console.log("Pointer moved in");
});
```

Using the `onpointerover` event handler property:

```js
const para = document.querySelector("p");

para.onpointerover = (event) => {
  console.log("Pointer moved in");
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
  - {{domxref('Element/pointerenter_event', 'pointerenter')}}
  - {{domxref('Element/pointerdown_event', 'pointerdown')}}
  - {{domxref('Element/pointermove_event', 'pointermove')}}
  - {{domxref('Element/pointerup_event', 'pointerup')}}
  - {{domxref('Element/pointercancel_event', 'pointercancel')}}
  - {{domxref('Element/pointerout_event', 'pointerout')}}
  - {{domxref('Element/pointerleave_event', 'pointerleave')}}
  - {{domxref('Element/pointerrawupdate_event', 'pointerrawupdate')}}
  - {{domxref("Element/mouseover_event", "mouseover")}}
