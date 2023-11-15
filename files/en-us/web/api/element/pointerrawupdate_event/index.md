---
title: "Element: pointerrawupdate event"
short-title: pointerrawupdate
slug: Web/API/Element/pointerrawupdate_event
page-type: web-api-event
status:
  - experimental
browser-compat: api.Element.pointerrawupdate_event
---

{{APIRef}}{{SeeCompatTable}}

The **`pointerrawupdate`** {{DOMxRef('PointerEvent')}} is fired when a pointer changes any properties that don't fire [`pointerdown`](/en-US/docs/Web/API/Element/pointerdown_event) or [`pointerup`](/en-US/docs/Web/API/Element/pointerup_event) events.
See [`pointermove`](/en-US/docs/Web/API/Element/pointermove_event) for a list of these properties.

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

This event implements the properties of the {{domxref("PointerEvent")}} interface.

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

  - [`gotpointercapture`](/en-US/docs/Web/API/Element/gotpointercapture_event)
  - [`lostpointercapture`](/en-US/docs/Web/API/Element/lostpointercapture_event)
  - [`pointerover`](/en-US/docs/Web/API/Element/pointerover_event)
  - [`pointerenter`](/en-US/docs/Web/API/Element/pointerenter_event)
  - [`pointerdown`](/en-US/docs/Web/API/Element/pointerdown_event)
  - [`pointermove`](/en-US/docs/Web/API/Element/pointermove_event)
  - [`pointerup`](/en-US/docs/Web/API/Element/pointerup_event)
  - [`pointerout`](/en-US/docs/Web/API/Element/pointerout_event)
  - [`pointerleave`](/en-US/docs/Web/API/Element/pointerleave_event)
