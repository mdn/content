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
function printNavTimingData() {
  // Use getEntriesByType() to just get the "navigation" events
  performance.getEntriesByType("navigation")
    .forEach((p, i) => {
      console.log(`= Navigation entry[${i}]`);

      // DOM Properties
      console.log(`DOM content loaded = ${p.domContentLoadedEventEnd - p.domContentLoadedEventStart}`);
      console.log(`DOM complete = ${p.domComplete}`);
      console.log(`DOM interactive = ${p.domInteractive}`);

      // Document load and unload time
      console.log(`document load = ${p.loadEventEnd - p.loadEventStart}`);
      console.log(`document unload = ${p.unloadEventEnd - p.unloadEventStart}`);

      // Other properties
      console.log(`type = ${p.type}`);
      console.log(`redirectCount = ${p.redirectCount}`);
    });
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
