---
title: PerformanceNavigationTiming.domInteractive
slug: Web/API/PerformanceNavigationTiming/domInteractive
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - Web Performance
browser-compat: api.PerformanceNavigationTiming.domInteractive
---
{{APIRef("Navigation Timing")}}

The **`domInteractive`** read-only property returns a
{{domxref("DOMHighResTimeStamp","timestamp")}} representing the time value equal to the
time immediately before the user agent sets the current document readiness of the
current document to [interactive](https://html.spec.whatwg.org/multipage/syntax.html#the-end).

## Value

A {{domxref("DOMHighResTimeStamp","timestamp")}} representing the time value equal to
the time immediately before the user agent sets the current document readiness of the
current document to [interactive](https://html.spec.whatwg.org/multipage/syntax.html#the-end).

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
