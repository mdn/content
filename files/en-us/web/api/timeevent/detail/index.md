---
title: "TimeEvent: detail property"
short-title: detail
slug: Web/API/TimeEvent/detail
page-type: web-api-instance-property
browser-compat: api.TimeEvent.detail
---

{{APIRef("SVG")}}

The **`TimeEvent.detail`** read-only property provides contextual information about the event, depending on the event type.

For `repeatEvent` events, `detail` contains the current repeat iteration as a non-negative integer. Because the event is not raised for the first iteration, the value will always be 1 or greater.

For `beginEvent` and `endEvent` events, `detail` is always `0`.

## Value

A `long`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("TimeEvent")}}
