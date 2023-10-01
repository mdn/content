---
title: EventCounts
slug: Web/API/EventCounts
page-type: web-api-interface
browser-compat: api.EventCounts
---

{{APIRef("Performance API")}}

The **`EventCounts`** interface of the [Performance API](/en-US/docs/Web/API/Performance_API) provides the number of events that have been dispatched for each event type.

An `EventCounts` instance is a read-only [`Map`-like object](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map#map-like_browser_apis), in which each key is the name string for an event type, and the corresponding value is an integer indicating the number of events that have been dispatched for that event type.

## Constructor

This interface has no constructor. You typically get an instance of this object using the {{domxref("performance.eventCounts")}} property.

## Instance properties

- `size`
  - : See {{jsxref("Map.prototype.size")}} for details.

## Instance methods

- `entries()`
  - : See {{jsxref("Map.prototype.entries()")}} for details.
- `forEach()`
  - : See {{jsxref("Map.prototype.forEach()")}} for details.
- `get()`
  - : See {{jsxref("Map.prototype.get()")}} for details.
- `has()`
  - : See {{jsxref("Map.prototype.has()")}} for details.
- `keys()`
  - : See {{jsxref("Map.prototype.keys()")}} for details.
- `values()`
  - : See {{jsxref("Map.prototype.values()")}} for details.

## Examples

### Working with EventCount maps

Below are a few examples to get information from an `EventCounts` map. Note that the map is read-only and the `clear()`, `delete()`, and `set()` methods aren't available.

```js
for (entry of performance.eventCounts.entries()) {
  const type = entry[0];
  const count = entry[1];
}

const clickCount = performance.eventCounts.get("click");

const isExposed = performance.eventCounts.has("mousemove");
const exposedEventsCount = performance.eventCounts.size;
const exposedEventsList = [...performance.eventCounts.keys()];
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("performance.eventCounts")}}
- {{domxref("PerformanceEventTiming")}}
- {{jsxref("Map")}}
