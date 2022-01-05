---
title: EventListener.handleEvent()
slug: Web/API/EventListener/handleEvent
tags:
  - API
  - Callback
  - DOM
  - DOM Events
  - Event Callback
  - Event Handler
  - Event Processing
  - EventListener
  - Handling Events
  - Method
  - Reference
  - events
  - handleEvent
browser-compat: api.EventListener.handleEvent
---
{{APIRef("DOM Events")}}

The {{domxref("EventListener")}} method
**`handleEvent()`** method is called by the
{{Glossary("user agent")}} when an event is sent to the
`EventListener`, in order to handle events that occur on an observed
{{domxref("EventTarget")}}.

## Syntax

```js
eventListener.handleEvent(event);
```

### Parameters

- **`event`**
  - : An {{domxref("Event")}} object describing the event that has been fired and needs
    to be processed.

### Return value

None.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
