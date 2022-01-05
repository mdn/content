---
title: PerformanceNavigationTiming.loadEventEnd
slug: Web/API/PerformanceNavigationTiming/loadEventEnd
tags:
  - API
  - Property
  - Reference
  - Web Performance
browser-compat: api.PerformanceNavigationTiming.loadEventEnd
---
{{APIRef("Navigation Timing")}}{{SeeCompatTable}}

The **`loadEventEnd`** read-only property returns a
{{domxref("DOMHighResTimeStamp","timestamp")}} which is equal to the time when the load
event of the current document is completed.

## Syntax

```js
perfEntry.loadEventEnd;
```

### Return Value

A {{domxref("DOMHighResTimeStamp","timestamp")}} representing the time when the load
event of the current document is completed.

## Example

The following example illustrates this property's usage.

```js
function print_nav_timing_data() {
  // Use getEntriesByType() to just get the "navigation" events
  var perfEntries = performance.getEntriesByType("navigation");

  for (var i=0; i < perfEntries.length; i++) {
    console.log("= Navigation entry[" + i + "]");
    var p = perfEntries[i];
    // dom Properties
    console.log("DOM content loaded = " + (p.domContentLoadedEventEnd - p.domContentLoadedEventStart));
    console.log("DOM complete = " + p.domComplete);
    console.log("DOM interactive = " + p.domInteractive);

    // document load and unload time
    console.log("document load = " + (p.loadEventEnd - p.loadEventStart));
    console.log("document unload = " + (p.unloadEventEnd - p.unloadEventStart));

    // other properties
    console.log("type = " + p.type);
    console.log("redirectCount = " + p.redirectCount);
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
