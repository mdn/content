---
title: PresentationConnectionAvailableEvent()
slug: Web/API/PresentationConnectionAvailableEvent/PresentationConnectionAvailableEvent
page-type: web-api-constructor
tags:
  - API
  - Constructor
  - Experimental
  - Presentation API
  - PresentationConnectionAvailableEvent
  - Reference
browser-compat: api.PresentationConnectionAvailableEvent.PresentationConnectionAvailableEvent
---
{{DefaultAPISidebar("Presentation API")}}{{SeeCompatTable}}
The **`PresentationConnectionAvailableEvent()`** constructor creates a new {{domxref("PresentationConnectionAvailableEvent")}} object.

## Syntax

```js
new PresentationConnectionAvailableInit(type, options)
```

### Parameters

- `type`
  - : A string with the name of the event.
    It is case-sensitive and browsers set it to `connectionavailable`.
- `options`
  - : An object that, _in addition of the properties defined in {{domxref("Event/Event", "Event()")}}_, can have the following properties:
    - `connection`
      - : The association {{domxref("PresentationConnection")}} object.

### Return value

A new {{domxref("PresentationConnectionAvailableEvent")}} object.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
