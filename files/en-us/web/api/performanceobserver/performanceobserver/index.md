---
title: PerformanceObserver()
slug: Web/API/PerformanceObserver/PerformanceObserver
tags:
  - API
  - Constructor
  - PerformanceObserver
  - Reference
  - Web Performance
browser-compat: api.PerformanceObserver.PerformanceObserver
---
{{APIRef("Performance Timeline API")}}

The **`PerformanceObserver()`** constructor creates a new
{{domxref("PerformanceObserver")}} object with the given observer `callback`.
The observer callback is invoked when {{domxref("PerformanceEntry","performance entry
  events", '', 'true')}} are recorded for the
{{domxref("PerformanceEntry.entryType","entry types",'','true')}} that have been
registered, via the {{domxref("PerformanceObserver.observe","observe()")}} method.

## Syntax

```js
var observer = new PerformanceObserver(callback);
```

### Parameters

- _`callback`_
  - : A `PerformanceObserverCallback` callback that will be invoked when
    _observed_ performance events are recorded. When the callback is invoked, its
    first parameter is a {{domxref("PerformanceObserverEntryList","list of performance
    observer entries", '', 'true')}} and the second parameter is the
    {{domxref("PerformanceObserver","observer")}} object.

### Return value

A new {{domxref("PerformanceObserver")}} object which will call the specified
`callback` when observed performance events occur.

## Example

```js
var observer = new PerformanceObserver(function(list, obj) {
  var entries = list.getEntries();
  for (var i=0; i < entries.length; i++) {
    // Process "mark" and "frame" events
  }
});
observer.observe({entryTypes: ["mark", "frame"]});

function perf_observer(list, observer) {
  // Process the "measure" event
}
var observer2 = new PerformanceObserver(perf_observer);
observer2.observe({entryTypes: ["measure"]});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
