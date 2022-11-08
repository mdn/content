---
title: PerformanceEntry.startTime
slug: Web/API/PerformanceEntry/startTime
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - Web Performance
browser-compat: api.PerformanceEntry.startTime
---

{{APIRef("Performance API")}}

The read-only **`startTime`** property returns the first recorded {{domxref("DOMHighResTimeStamp","timestamp")}} of the {{domxref("PerformanceEntry","performance entry")}}. The semantics of this property depend on the subclass.

## Value

A {{domxref("DOMHighResTimeStamp")}} representing the first timestamp when the
{{domxref("PerformanceEntry","performance entry")}} was created.

The value returned by this property depends on the performance entry's {{domxref("PerformanceEntry.entryType","type")}}:

- `element`
  - : The `startTime` is either the value of {{domxref("PerformanceElementTiming.renderTime")}} if it is not `0`, otherwise it is the value of {{domxref("PerformanceElementTiming.loadTime")}}.
- `event`
  - : The `startTime` is the time the event was created, i.e. the event's [`timestamp`](/en-US/docs/Web/API/Event/timestamp) property.
- `first-input`
  - : The `startTime` is the time the first input event was created, i.e. that event's [`timestamp`](/en-US/docs/Web/API/Event/timestamp).
- `largest-contentful-paint`
  - : The `startTime` is either the value of {{domxref("LargestContentfulPaint.renderTime")}} if it is not `0`, otherwise it is the value of {{domxref("LargestContentfulPaint.loadTime")}}.
- `longtask`
  - : The `startTime` is the {{domxref("DOMHighResTimeStamp","timestamp")}} when the task started.
- `mark`
  - : The `startTime` is the {{domxref("DOMHighResTimeStamp","timestamp")}} when the mark was created by a call to {{domxref("Performance.mark","performance.mark()")}}.
- `measure`
  - : The `startTime` is the {{domxref("DOMHighResTimeStamp","timestamp")}} when the measure was created by a call to {{domxref("Performance.measure","performance.measure()")}}.
- `navigation`
  - : The `startTime` is always `0`.
- `paint`
  - : The `startTime` is the {{domxref("DOMHighResTimeStamp","timestamp")}} when the paint occurred.
- `resource`
  - : The `startTime` is the {{domxref("PerformanceResourceTiming.fetchStart")}} {{domxref("DOMHighResTimeStamp","timestamp")}}.
- `taskattribution`
  - : The `startTime` is always `0`.

## Examples

### Using the startTime property

The following example shows the use of the `startTime` property which you can log during performance observation.

Note: The {{domxref("performance.mark()")}} method allows you to set your own `startTime`, as well as {{domxref("performance.measure()")}} which allows to set the `start` of the measure.

```js
performance.mark("my-mark");
performance.mark("my-other-mark", { startTime: 12.5 });

loginButton.addEventListener('click', (clickEvent) => {
  performance.measure("login-click", { start: clickEvent.timeStamp });
});

function perfObserver(list, observer) {
  list.getEntries().forEach((entry) =>  {
    if (entry.entryType === "mark") {
      console.log(`${entry.name}'s startTime: ${entry.startTime}`);
    };
    if (entry.entryType === "measure") {
      console.log(`${entry.name}'s duration: ${entry.duration}`);
    };
  });
}
const observer = new PerformanceObserver(perfObserver);
observer.observe({ entryTypes: ["measure", "mark"] });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
