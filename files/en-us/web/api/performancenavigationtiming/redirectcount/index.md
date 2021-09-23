---
title: PerformanceNavigationTiming.redirectCount
slug: Web/API/PerformanceNavigationTiming/redirectCount
tags:
  - API
  - Property
  - Reference
  - Web Performance
browser-compat: api.PerformanceNavigationTiming.redirectCount
---
{{APIRef("Navigation Timing")}}{{SeeCompatTable}}

The **`redirectCount`** property returns a
{{domxref("DOMHighResTimeStamp","timestamp")}} representing the number of redirects
since the last non-redirect navigation under the current browsing context.

This property is {{readonlyInline}}.

## Syntax

```js
perfEntry.redirectCount;
```

### Return Value

A number representing the number of redirects since the last non-redirect navigation
under the current browsing context.

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
    console.log("DOM interactive = " + p.interactive);

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
