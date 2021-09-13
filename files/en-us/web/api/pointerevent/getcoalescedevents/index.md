---
title: PointerEvent.getCoalescedEvents()
slug: Web/API/PointerEvent/getCoalescedEvents
tags:
  - API
  - DOM
  - Method
  - Pointer Events
  - PointerEvent
  - Reference
browser-compat: api.PointerEvent.getCoalescedEvents
---
{{APIRef("Pointer Events")}}{{SeeCompatTable}}

The **`getCoalescedEvents()`** method of the
{{domxref("PointerEvent")}} interface returns a sequence of all
`PointerEvent` instances that were coalesced into the dispatched
{{event('pointermove')}} event.

## Syntax

```js
var pointerEvents[] = PointerEvent.getCoalescedEvents()
```

### Parameters

None.

### Returns

A sequence of {{domxref('PointerEvent')}} instances.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
