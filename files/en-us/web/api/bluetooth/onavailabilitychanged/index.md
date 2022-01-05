---
title: Bluetooth.onavailabilitychanged
slug: Web/API/Bluetooth/onavailabilitychanged
tags:
  - API
  - Bluetooth
  - Web Bluetooth API
browser-compat: api.Bluetooth.onavailabilitychanged
---
{{APIRef("Bluetooth API")}}{{securecontext_header}}{{SeeCompatTable}}

The **`onavailabilitychanged`**
property of the {{DOMxRef("Bluetooth")}} interface is an [event handler](/en-US/docs/Web/Events/Event_handlers)
that processes `availabilitychanged` events that fire when the Bluetooth
system as a whole becomes available or unavailable to the {{Glossary("User
    Agent")}}.

## Syntax

```js
Bluetooth.onavailabilitychanged = functionRef;
```

### Value

`functionRef` is the handler function to be called when the Bluetooth
`availabilitychanged` event fires.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{DOMxRef("Bluetooth.getAvailability")}}
