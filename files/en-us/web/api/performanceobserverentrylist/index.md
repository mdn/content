---
title: PerformanceObserverEntryList
slug: Web/API/PerformanceObserverEntryList
tags:
  - API
  - Interface
  - Reference
  - Web Performance
browser-compat: api.PerformanceObserverEntryList
---
{{APIRef("Performance Timeline API")}}

The **`PerformanceObserverEntryList`** interface is a list of {{domxref("PerformanceEntry","peformance events", '', 'true')}} that were explicitly _observed_ via the {{domxref("PerformanceObserver.observe","observe()")}} method.

Note: this interface is exposed to {{domxref("Window")}} and {{domxref("Worker")}}.

## Methods

- {{domxref("PerformanceObserverEntryList.getEntries","PerformanceObserverEntryList.getEntries()")}}
  - : Returns a list of explicitly _observed_ {{domxref("PerformanceEntry")}} objects based on the given _filter_.
- {{domxref("PerformanceObserverEntryList.getEntriesByType","PerformanceObserverEntryList.getEntriesByType()")}}
  - : Returns a list of explicitly _observed_ {{domxref("PerformanceEntry")}} objects of the given _entry type_.
- {{domxref("PerformanceObserverEntryList.getEntriesByName","PerformanceObserverEntryList.getEntriesByName()")}}
  - : Returns a list of explicitly _observed_ {{domxref("PerformanceEntry")}} objects based on the given _name_ and _entry type_.

## Example

```js
// Create observer for all performance event types
// list is of type PerformanceObserveEntryList
var observe_all = new PerformanceObserver(function(list, obs) {
   var perfEntries = list.getEntries();
   for (var i = 0; i < perfEntries.length; i++) {
      print_perf_entry(perfEntries[i]);
      // do something with it
   }
})
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
