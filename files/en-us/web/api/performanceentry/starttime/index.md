---
title: "PerformanceEntry: startTime property"
short-title: startTime
slug: Web/API/PerformanceEntry/startTime
page-type: web-api-instance-property
browser-compat: api.PerformanceEntry.startTime
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

The read-only **`startTime`** property returns the first {{domxref("DOMHighResTimeStamp","timestamp", "", "no-code")}} recorded for this {{domxref("PerformanceEntry")}}. The meaning of this property depends on the value of this entry's {{domxref("PerformanceEntry.entryType", "entryType")}}.

## Value

A {{domxref("DOMHighResTimeStamp")}} representing the first timestamp when the
{{domxref("PerformanceEntry")}} was created.

The meaning of this property depends on the value of this performance entry's {{domxref("PerformanceEntry.entryType","entryType")}}:

- `element`
  - : Either the value of this entry's {{domxref("PerformanceElementTiming.renderTime", "renderTime")}} if it is not `0`, otherwise the value of this entry's {{domxref("PerformanceElementTiming.loadTime", "loadTime")}}.
- `event`
  - : The time the event was created, i.e. the event's [`timeStamp`](/en-US/docs/Web/API/Event/timeStamp) property.
- `first-input`
  - : The time the first input event was created, i.e. that event's [`timeStamp`](/en-US/docs/Web/API/Event/timeStamp).
- `largest-contentful-paint`
  - : The value of this entry's {{domxref("LargestContentfulPaint.renderTime", "renderTime")}} if it is not `0`, otherwise the value of this entry's {{domxref("LargestContentfulPaint.loadTime", "loadTime")}}.
- `layout-shift`
  - : The time when the layout shift started.
- `longtask`
  - : The time when the task started.
- `mark`
  - : The time at which the mark was created by a call to {{domxref("Performance.mark","performance.mark()")}}.
- `measure`
  - : The time at which the measure was created by a call to {{domxref("Performance.measure","performance.measure()")}}.
- `navigation`
  - : Always `0`.
- `paint`
  - : The time when the paint occurred.
- `resource`
  - : The value of this entry's {{domxref("PerformanceResourceTiming.fetchStart", "fetchStart")}} property.
- `taskattribution`
  - : Always `0`.
- `visibility-state`
  - : The time when the visibility state change occurred.

## Examples

### Using the startTime property

The following example shows the use of the `startTime` property which you can log during performance observation.

Note: The {{domxref("performance.mark()")}} method allows you to set your own `startTime`, and the {{domxref("performance.measure()")}} method allows to set the start of the measure.

```js
performance.mark("my-mark");
performance.mark("my-other-mark", { startTime: 12.5 });

loginButton.addEventListener("click", (clickEvent) => {
  performance.measure("login-click", { start: clickEvent.timeStamp });
});

function perfObserver(list, observer) {
  list.getEntries().forEach((entry) => {
    if (entry.entryType === "mark") {
      console.log(`${entry.name}'s startTime: ${entry.startTime}`);
    }
    if (entry.entryType === "measure") {
      console.log(`${entry.name}'s duration: ${entry.duration}`);
    }
  });
}
const observer = new PerformanceObserver(perfObserver);
observer.observe({ entryTypes: ["measure", "mark"] });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
