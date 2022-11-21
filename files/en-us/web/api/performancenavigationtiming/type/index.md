---
title: PerformanceNavigationTiming.type
slug: Web/API/PerformanceNavigationTiming/type
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - Web Performance
browser-compat: api.PerformanceNavigationTiming.type
---

{{APIRef("Performance API")}}

The **`type`** read-only property returns the type of navigation.

## Value

A string containing one of the following values:

- `"navigate"`
  - : Navigation started by clicking a link, entering the URL in the browser's address
    bar, form submission, or initializing through a script operation other than reload and
    back_forward as listed below.
- `"reload"`
  - : Navigation is through the browser's reload operation or
    {{domxref("location.reload()")}}.
- `"back_forward"`
  - : Navigation is through the browser's history traversal operation.
- `"prerender"`
  - : Navigation is initiated by a [prerender hint](https://www.w3.org/TR/resource-hints/#prerender).

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
