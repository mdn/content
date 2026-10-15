---
title: "Element: pointerup event"
short-title: pointerup
slug: Web/API/Element/pointerup_event
page-type: web-api-event
browser-compat: api.Element.pointerup_event
---

{{APIRef("Pointer Events")}}

The `pointerup` event is fired when a pointer is no longer active. Remember that it is possible to get a [`pointercancel`](/en-US/docs/Web/API/Element/pointercancel_event) event instead.

This behavior is different from {{domxref("Element/mouseup_event", "mouseup")}} events. When using a physical mouse, `mouseup` events fire whenever any button on a mouse is released. `pointerup` events fire only upon the last button release; previous button releases, while other buttons are held down, don't fire `pointerup` events.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js-nolint
addEventListener("pointerup", (event) => { })

onpointerup = (event) => { }
```

## Event type

A {{domxref("PointerEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("PointerEvent")}}

## Examples

Using `addEventListener()`:

```js
const para = document.querySelector("p");

para.addEventListener("pointerup", (event) => {
  console.log("Pointer up");
});
```

Using the `onpointerup` event handler property:

```js
const para = document.querySelector("p");

para.onpointerup = (event) => {
  console.log("Pointer up");
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
  - {{domxref('Element/pointercancel_event', 'pointercancel')}}
  - {{domxref('Element/pointerout_event', 'pointerout')}}
  - {{domxref('Element/pointerleave_event', 'pointerleave')}}
  - {{domxref('Element/pointerrawupdate_event', 'pointerrawupdate')}}
  - {{domxref("Element/mouseup_event", "mouseup")}}
