---
title: PerformanceNavigationTiming.domContentLoadedEventEnd
slug: Web/API/PerformanceNavigationTiming/domContentLoadedEventEnd
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - Web Performance
browser-compat: api.PerformanceNavigationTiming.domContentLoadedEventEnd
---
{{APIRef("Navigation Timing")}}

The **`domContentLoadedEventEnd`** read-only property returns a
{{domxref("DOMHighResTimeStamp","timestamp")}} representing the time value equal to the
time immediately after the current document's [DOMContentLoaded](https://html.spec.whatwg.org/multipage/syntax.html#the-end)
event completes.

## Value

A {{domxref("DOMHighResTimeStamp","timestamp")}} representing the time value equal to
the time immediately after the current document's [DOMContentLoaded](https://html.spec.whatwg.org/multipage/syntax.html#the-end)
event completes.

## Examples

The following example illustrates this property's usage.

```js
function print_nav_timing_data() {
  // Use getEntriesByType() to just get the "navigation" events
  const perfEntries = performance.getEntriesByType("navigation");

  for (let i=0; i < perfEntries.length; i++) {
    console.log(`= Navigation entry[${i}]`);
    const p = perfEntries[i];
    // dom Properties
    console.log(`DOM content loaded = ${p.domContentLoadedEventEnd - p.domContentLoadedEventStart}`);
    console.log(`DOM complete = ${p.domComplete}`);
    console.log(`DOM interactive = ${p.domInteractive}`);

    // document load and unload time
    console.log(`document load = ${p.loadEventEnd - p.loadEventStart}`);
    console.log(`document unload = ${p.unloadEventEnd - p.unloadEventStart}`);

    // other properties
    console.log(`type = ${p.type}`);
    console.log(`redirectCount = ${p.redirectCount}`);
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
