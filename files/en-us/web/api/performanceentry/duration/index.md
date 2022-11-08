---
title: PerformanceEntry.duration
slug: Web/API/PerformanceEntry/duration
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - Web Performance
browser-compat: api.PerformanceEntry.duration
---

{{APIRef("Performance API")}}

The read-only **`duration`** property returns a {{domxref("DOMHighResTimeStamp","timestamp")}} that is the duration of the {{domxref("PerformanceEntry","performance entry")}}. The semantics of this property depend on the subclass.

## Value

A {{domxref("DOMHighResTimeStamp")}} representing the duration of the {{domxref("PerformanceEntry","performance entry")}}. If the duration concept doesn't apply for a particular performance metric, a duration of `0` is returned.

The value returned by this property depends on the performance entry's {{domxref("PerformanceEntry.entryType","type")}}:

- `element`
  - : The `duration` is always `0`.
- `event`
  - : The `duration` is a {{domxref("DOMHighResTimeStamp","timestamp")}} indicating the time from event's `startTime` to the next rendering paint (rounded to the nearest 8ms).
- `first-input`
  - : The `duration` is a {{domxref("DOMHighResTimeStamp","timestamp")}} indicating the time from the first input event's `startTime` to the next rendering paint (rounded to the nearest 8ms).
- `largest-contentful-paint`
  - : The `duration` is always `0`.
- `longtask`
  - : The `duration` is the {{domxref("DOMHighResTimeStamp","timestamp")}} that is the elapsed time between the start and end of task, with a 1ms granularity.
- `mark`
  - : The `duration` is always `0`.
- `measure`
  - : The `duration` is a {{domxref("DOMHighResTimeStamp","timestamp")}} that is the duration of the measure.
- `navigation`
  - : The `duration` is a {{domxref("DOMHighResTimeStamp","timestamp")}} that is the difference between the {{domxref("PerformanceNavigationTiming.loadEventEnd")}} and {{domxref("PerformanceEntry.startTime")}} properties, respectively.
- `paint`
  - : The `duration` is always `0`.
- `resource`
  - : The `duration` is the difference between the resource's {{domxref("PerformanceResourceTiming/responseEnd", "responseEnd")}} {{domxref("DOMHighResTimeStamp","timestamp")}} and its {{domxref("PerformanceEntry.startTime","startTime")}} {{domxref("DOMHighResTimeStamp","timestamp")}}.
- `taskattribution`
  - : The `duration` is always `0`.

## Examples

### Using the duration property

The following example logs all observed performance entries with a `duration` larger than `0`.

```js
function perfObserver(list, observer) {
  list.getEntries().forEach((entry) =>  {
    if (entry.duration > 0) {
      console.log(`${entry.name}'s duration: ${entry.duration}`);
    };
  });
}
const observer = new PerformanceObserver(perfObserver);
observer.observe({ entryTypes: ["measure", "mark", "resource"] });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
