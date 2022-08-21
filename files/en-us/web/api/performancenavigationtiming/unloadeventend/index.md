---
title: PerformanceNavigationTiming.unloadEventEnd
slug: Web/API/PerformanceNavigationTiming/unloadEventEnd
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - Web Performance
browser-compat: api.PerformanceNavigationTiming.unloadEventEnd
---
{{APIRef("Navigation Timing")}}

The **`unloadEventEnd`** read-only property returns a
{{domxref("DOMHighResTimeStamp","timestamp")}} representing the time value equal to the
time immediately after the user agent finishes the unload event of the previous
document. If there is no previous document, this property value is `0`.

## Value

A {{domxref("DOMHighResTimeStamp","timestamp")}} representing a time value equal to the
time immediately after the user agent finishes the unload event of the previous
document.

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
    console.log(`DOM interactive = ${p.interactive}`);

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
