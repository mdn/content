---
title: "Performance: eventCounts property"
short-title: eventCounts
slug: Web/API/Performance/eventCounts
page-type: web-api-instance-property
browser-compat: api.Performance.eventCounts
---

{{APIRef("Performance API")}}

The read-only `performance.eventCounts` property is an {{domxref("EventCounts")}} map containing the number of events which have been dispatched per event type.

Not all event types are exposed. You can only get counts for event types supported by the {{domxref("PerformanceEventTiming")}} interface.

## Value

An {{domxref("EventCounts")}} map.
(A read-only {{jsxref("Map")}} without the `clear()`, `delete()`, and `set()` methods).

## Examples

### Reporting event types and their counts

If you like to send event counts to your analytics, you may want to implement a function like `sendToEventAnalytics` which takes the event counts from the `performance.eventCounts` map and then uses the [Fetch API](/en-US/docs/Web/API/Fetch_API) to post the data to your endpoint.

```js
// Report all exposed events
for (entry of performance.eventCounts.entries()) {
  const type = entry[0];
  const count = entry[1];
  // sendToEventAnalytics(type, count);
}

// Report a specific event
const clickCount = performance.eventCounts.get("click");
// sendToEventAnalytics("click", clickCount);

// Check if an event count is exposed for a type
const isExposed = performance.eventCounts.has("mousemove"); // false
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("EventCounts")}}
- {{domxref("PerformanceEventTiming")}}
- {{jsxref("Map")}}
