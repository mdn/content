---
title: PerformanceNavigationTiming.domComplete
slug: Web/API/PerformanceNavigationTiming/domComplete
tags:
  - API
  - Property
  - Reference
  - Web Performance
browser-compat: api.PerformanceNavigationTiming.domComplete
---
{{APIRef("Navigation Timing")}}{{SeeCompatTable}}

The **`domComplete`** read-only property returns a
{{domxref("DOMHighResTimeStamp","timestamp")}} representing the time value equal to the
time immediately before the user agent sets the current document readiness of the
current document to _[complete](https://html.spec.whatwg.org/multipage/syntax.html#the-end)_.

## Syntax

```js
perfEntry.domComplete;
```

### Return Value

A {{domxref("DOMHighResTimeStamp","timestamp")}} representing a time value equal to the
time immediately before the user agent sets the current document readiness of the
current document to _[complete](https://html.spec.whatwg.org/multipage/syntax.html#the-end)_.

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
