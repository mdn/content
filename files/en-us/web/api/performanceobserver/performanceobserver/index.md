---
title: PerformanceObserver()
slug: Web/API/PerformanceObserver/PerformanceObserver
page-type: web-api-constructor
tags:
  - API
  - Constructor
  - PerformanceObserver
  - Reference
  - Web Performance
browser-compat: api.PerformanceObserver.PerformanceObserver
---

{{APIRef("Performance API")}}

The **`PerformanceObserver()`** constructor creates a new {{domxref("PerformanceObserver")}} object with the given observer `callback`. The observer callback is invoked when {{domxref("PerformanceEntry","performance entry events", '', 'true')}} are recorded for the {{domxref("PerformanceEntry.entryType","entry types",'','true')}} that have been registered, via the {{domxref("PerformanceObserver.observe","observe()")}} method.

## Syntax

```js-nolint
new PerformanceObserver(callback)
```

### Parameters

- `callback`
  - : A `PerformanceObserverCallback` callback that will be invoked when observed performance events are recorded. When the callback is invoked, its first parameter is a {{domxref("PerformanceObserverEntryList","list of performance observer entries", '', 'true')}} and the second parameter is the {{domxref("PerformanceObserver","observer")}} object.

### Return value

A new {{domxref("PerformanceObserver")}} object which will call the specified `callback` when observed performance events occur.

## Examples

### Creating a PerformanceObserver

The following example creates a `PerformanceObserver` watching for "mark" ({{domxref("PerformanceMark")}}) and "measure" ({{domxref("PerformanceMeasure")}}) events.
The `perfObserver` callback provides a `list` ({{domxref("PerformanceObserverEntryList")}}) which allows you get observed performance entries.

```js
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
