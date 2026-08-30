---
title: "Element: pointerrawupdate event"
short-title: pointerrawupdate
slug: Web/API/Element/pointerrawupdate_event
page-type: web-api-event
browser-compat: api.Element.pointerrawupdate_event
---

{{APIRef("Pointer Events")}}{{secureContext_header}}

The **`pointerrawupdate`** event is fired when a pointer changes any properties that don't fire {{domxref('Element/pointerdown_event', 'pointerdown')}} or {{domxref('Element/pointerup_event', 'pointerup')}} events.
See {{domxref('Element/pointermove_event', 'pointermove')}} for a list of these properties.

The `pointerrawupdate` event may have coalesced events if there is already another `pointerrawupdate` event with the same pointer ID that hasn't been dispatched in the event loop.
For information on coalesced events, see the {{domxref("PointerEvent.getCoalescedEvents()")}} documentation.

The difference between `pointerrawupdate` and {{domxref('Element/pointermove_event', 'pointermove')}} is when the events are dispatched, not how precise they are.
A browser may delay `pointermove` events, for example to align them with rendering, while `pointerrawupdate` events are dispatched as soon and as frequently as the browser can produce them.
Both event types coalesce, but `pointerrawupdate` coalesces less, so its listeners run more often.
Any single event carries the same property values either way, so `pointerrawupdate` is not more precise in space or time than the `pointermove` event covering the same movement.

`pointerrawupdate` is therefore intended for applications that need lower-latency input handling than `pointermove` offers, such as drawing or dragging that would otherwise visibly lag behind the pointer.
Because the events arrive more often, an application that keeps up with them can also feel smoother.
However, because listening to `pointerrawupdate` events can affect performance, you should add these listeners only if your JavaScript needs high-frequency events and can handle them as quickly as they are dispatched.
An application that cannot keep up will feel less responsive rather than more, so it helps to do as little work as possible in the listener, and to separate reading the events from rendering the result.
For most use cases, other pointer event types should suffice.

This event [bubbles](/en-US/docs/Learn_web_development/Core/Scripting/Event_bubbling) and is [composed](/en-US/docs/Web/API/Event/composed), but is not [cancelable](/en-US/docs/Web/API/Event/cancelable) and has no default action.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js-nolint
addEventListener("pointerrawupdate", (event) => { })

onpointerrawupdate = (event) => { }
```

## Event type

A {{domxref("PointerEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("PointerEvent")}}

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
