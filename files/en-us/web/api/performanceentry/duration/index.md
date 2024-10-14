---
title: "PerformanceEntry: duration property"
short-title: duration
slug: Web/API/PerformanceEntry/duration
page-type: web-api-instance-property
browser-compat: api.PerformanceEntry.duration
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

The read-only **`duration`** property returns a {{domxref("DOMHighResTimeStamp","timestamp", "", "no-code")}} that is the duration of the {{domxref("PerformanceEntry","performance entry", "", "no-code")}}. The meaning of this property depends on the value of this entry's {{domxref("PerformanceEntry.entryType", "entryType")}}.

## Value

A {{domxref("DOMHighResTimeStamp")}} representing the duration of the {{domxref("PerformanceEntry","performance entry", "", "no-code")}}. If the duration concept doesn't apply for a particular performance metric, a duration of `0` is returned.

The meaning of this property depends on the value of this performance entry's {{domxref("PerformanceEntry.entryType","entryType")}}:

- `event`
  - : The time from the event's `startTime` to the next rendering paint (rounded to the nearest 8ms).
- `first-input`
  - : The time from the first input event's `startTime` to the next rendering paint (rounded to the nearest 8ms).
- `longtask`
  - : The elapsed time between the start and end of task, with a 1ms granularity.
- `measure`
  - : The duration of the measure.
- `navigation`
  - : The difference between the entry's {{domxref("PerformanceNavigationTiming.loadEventEnd", "loadEventEnd")}} and {{domxref("PerformanceEntry.startTime", "startTime")}} properties.
- `resource`
  - : The entry's {{domxref("PerformanceResourceTiming/responseEnd", "responseEnd")}} value minus the entry's {{domxref("PerformanceEntry.startTime","startTime")}} value.

For the following entry types, `duration` is not applicable, and in this case the value is always `0`:

- `element`
- `largest-contentful-paint`
- `layout-shift`
- `mark`
- `paint`
- `taskattribution`
- `visibility-state`

## Examples

### Using the duration property

The following example logs all observed performance entries with a `duration` larger than `0`.

```js
function perfObserver(list, observer) {
  list.getEntries().forEach((entry) => {
    if (entry.duration > 0) {
      console.log(`${entry.name}'s duration: ${entry.duration}`);
    }
  });
}
const observer = new PerformanceObserver(perfObserver);
observer.observe({ entryTypes: ["measure", "mark", "resource"] });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
