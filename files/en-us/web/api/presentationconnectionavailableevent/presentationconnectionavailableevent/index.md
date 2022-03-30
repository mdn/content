---
title: PresentationConnectionAvailableEvent
slug: >-
  Web/API/PresentationConnectionAvailableEvent/PresentationConnectionAvailableEvent
tags:
  - API
  - Constructor
  - Experimental
  - Presentation API
  - PresentationConnectionAvailableEvent
  - Reference
browser-compat: api.PresentationConnectionAvailableEvent.PresentationConnectionAvailableEvent
---
The **`PresentationConnectionAvailableInit()`** constructor creates a new {{domxref("PresentationConnectionAvailableEvent")}}.

## Syntax

```js
new PresentationConnectionAvailableInit(typeArg, eventInit)
```

### Parameters

- `typeArg`
  - : A {{jsxref("DOMString")}} giving the name of the event. For this event it should be `connectionavailable`.
- `eventInit`
  - : A `PresentationConnectionAvailableInit` dictionary, which only contains a reference to a `PresentationConnection` object.

### Return value

An instance of the {{domxref("PresentationConnectionAvailableEvent")}} interface.

## Browser compatibility

{{Compat}}
