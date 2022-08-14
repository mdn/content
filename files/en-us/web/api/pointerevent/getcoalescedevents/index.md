---
title: PointerEvent.getCoalescedEvents()
slug: Web/API/PointerEvent/getCoalescedEvents
page-type: web-api-instance-method
tags:
  - API
  - DOM
  - Method
  - Pointer Events
  - PointerEvent
  - Reference
browser-compat: api.PointerEvent.getCoalescedEvents
---
{{APIRef("Pointer Events")}}

The **`getCoalescedEvents()`** method of the
{{domxref("PointerEvent")}} interface returns a sequence of all
`PointerEvent` instances that were coalesced into the dispatched
{{domxref('HTMLElement/pointermove_event', 'pointermove')}} event.

## Syntax

```js
getCoalescedEvents()
```

### Parameters

None.

### Return value

A sequence of {{domxref('PointerEvent')}} instances.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
