---
title: "Element: pointermove event"
short-title: pointermove
slug: Web/API/Element/pointermove_event
page-type: web-api-event
browser-compat: api.Element.pointermove_event
---

{{APIRef("Pointer Events")}}

The `pointermove` event is fired when a pointer changes coordinates, and the pointer has not been [canceled](/en-US/docs/Web/API/Element/pointercancel_event) by a browser [touch-action](/en-US/docs/Web/CSS/Reference/Properties/touch-action). The event is also fired when a pointer changes any of its other properties, provided the change doesn't produce some other pointer event. This includes any change to pressure, tangential pressure, tilt, twist, contact geometry (width and height), or [chorded buttons](https://w3c.github.io/pointerevents/#dfn-chorded-buttons).

The `pointermove` event may have coalesced events if there is already another `pointermove` event with the same pointer ID that hasn't been dispatched in the event loop.
If events are coalesced, the `target` of the dispatched event is the same as the last coalesced one.
For information on coalesced events, see the {{domxref("PointerEvent.getCoalescedEvents()")}} documentation.

This event is very similar to the {{domxref("Element/mousemove_event", "mousemove")}} event, but with more features. These events happen whether or not any pointer buttons are pressed. They can fire at a very high rate, depends on how fast the user moves the pointer, how fast the machine is, what other tasks and processes are happening, etc.

The difference between {{domxref("Element/pointerrawupdate_event", "pointerrawupdate")}} and `pointermove` is in their firing frequency.
A browser may delay `pointermove` events to improve performance, while `pointerrawupdate` events are dispatched as soon and as frequently as the browser can produce them.
For most use cases, you should prefer `pointermove` to avoid performance issues.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js-nolint
addEventListener("pointermove", (event) => { })

onpointermove = (event) => { }
```

## Event type

A {{domxref("PointerEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("PointerEvent")}}

## Usage notes

The event, which is of type {{domxref("PointerEvent")}}, provides all the information you need to know about the user's interaction with the pointing device, including the position, movement distance, button states, and much more.

## Examples

To add a handler for `pointermove` events using {{domxref("EventTarget.addEventListener", "addEventListener()")}}:

```js
const para = document.querySelector("p");

para.addEventListener("pointermove", (event) => {
  console.log("Pointer moved");
});
```

You can also use the `onpointermove` event handler property:

```js
const para = document.querySelector("p");

para.onpointermove = (event) => {
  console.log("Pointer moved");
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
  - {{domxref('Element/pointerup_event', 'pointerup')}}
  - {{domxref('Element/pointercancel_event', 'pointercancel')}}
  - {{domxref('Element/pointerout_event', 'pointerout')}}
  - {{domxref('Element/pointerleave_event', 'pointerleave')}}
  - {{domxref('Element/pointerrawupdate_event', 'pointerrawupdate')}}
  - {{domxref("Element/mousemove_event", "mousemove")}}
