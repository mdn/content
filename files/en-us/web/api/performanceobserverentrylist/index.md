---
title: PerformanceObserverEntryList
slug: Web/API/PerformanceObserverEntryList
page-type: web-api-interface
browser-compat: api.PerformanceObserverEntryList
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

The **`PerformanceObserverEntryList`** interface is a list of {{domxref("PerformanceEntry","performance events", '', 'true')}} that were explicitly observed via the {{domxref("PerformanceObserver.observe","observe()")}} method.

## Instance methods

- {{domxref("PerformanceObserverEntryList.getEntries","PerformanceObserverEntryList.getEntries()")}}
  - : Returns a list of all explicitly observed {{domxref("PerformanceEntry")}} objects.
- {{domxref("PerformanceObserverEntryList.getEntriesByType","PerformanceObserverEntryList.getEntriesByType()")}}
  - : Returns a list of all explicitly observed {{domxref("PerformanceEntry")}} objects of the given entry type.
- {{domxref("PerformanceObserverEntryList.getEntriesByName","PerformanceObserverEntryList.getEntriesByName()")}}
  - : Returns a list of all explicitly observed {{domxref("PerformanceEntry")}} objects based on the given name and entry type.

## Example

### Using PerformanceObserverEntryList

In the following example, `list` is the `PerformanceObserverEntryList` object. The {{domxref("PerformanceObserverEntryList.getEntries","getEntries()")}} method is called to get all explicitly observed {{domxref("PerformanceEntry")}} objects which are "measure" and "mark" in this case.

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
