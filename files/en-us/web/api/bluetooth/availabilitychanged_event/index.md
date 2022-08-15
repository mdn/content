---
title: 'Bluetooth: availabilitychanged event'
slug: Web/API/Bluetooth/availabilitychanged_event
page-type: web-api-event
tags:
  - API
  - Bluetooth
  - Web Bluetooth API
  - Event
  - Reference
  - Experimental
browser-compat: api.Bluetooth.availabilitychanged_event
---
{{APIRef("Bluetooth API")}}{{securecontext_header}}{{SeeCompatTable}}

The `availabilitychanged` event fires when the Bluetooth system as a whole becomes available or unavailable to the {{Glossary("User Agent")}}.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener('availabilitychanged', (event) => { });

onavailabilitychanged = (event) => { };
```

## Event type

A generic {{domxref("Event")}}.

## Examples

To be informed when Bluetooth availability changes, you can add a handler to your {{domxref("Bluetooth")}} instance using {{domxref("EventTarget.addEventListener", "addEventListener()")}}, like this:

```js
Bluetooth.addEventListener("availabilitychanged", (event) => {
  const availability = event.value;
});
```

Alternatively, you can use the `Bluetooth.onavailabilitychanged` event handler property to establish a handler for the `availabilitychanged` event:

```js
Bluetooth.onavailabilitychanged = (event) => {
 const availability = event.value;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{DOMxRef("Bluetooth.getAvailability")}}
