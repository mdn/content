---
title: PerformanceObserver
slug: Web/API/PerformanceObserver
page-type: web-api-interface
browser-compat: api.PerformanceObserver
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

The **`PerformanceObserver`** interface is used to observe performance measurement events and be notified of new {{domxref("PerformanceEntry","performance entries", '', 'true')}} as they are recorded in the browser's _performance timeline_.

## Constructor

- {{domxref("PerformanceObserver.PerformanceObserver","PerformanceObserver()")}}
  - : Creates and returns a new `PerformanceObserver` object.

## Static properties

- {{domxref("PerformanceObserver.supportedEntryTypes_static", "PerformanceObserver.supportedEntryTypes")}} {{ReadOnlyInline}}
  - : Returns an array of the {{domxref("PerformanceEntry.entryType","entryType")}} values supported by the user agent.

## Instance methods

- {{domxref("PerformanceObserver.observe","PerformanceObserver.observe()")}}
  - : Specifies the set of entry types to observe. The performance observer's callback function will be invoked when performance entry is recorded for one of the specified `entryTypes`.
- {{domxref("PerformanceObserver.disconnect","PerformanceObserver.disconnect()")}}
  - : Stops the performance observer callback from receiving performance entries.
- {{domxref("PerformanceObserver.takeRecords","PerformanceObserver.takeRecords()")}}
  - : Returns the current list of performance entries stored in the performance observer, emptying it out.

## Examples

### Creating a PerformanceObserver

The following example creates a `PerformanceObserver` watching for "mark" ({{domxref("PerformanceMark")}}) and "measure" ({{domxref("PerformanceMeasure")}}) events.
The `perfObserver` callback provides a `list` ({{domxref("PerformanceObserverEntryList")}}) which allows you to get observed performance entries.

```js
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

## See also

- {{domxref('MutationObserver')}}
- {{domxref('ResizeObserver')}}
- {{domxref('IntersectionObserver')}}
