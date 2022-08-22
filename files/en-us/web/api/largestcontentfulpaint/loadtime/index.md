---
title: LargestContentfulPaint.loadTime
slug: Web/API/LargestContentfulPaint/loadTime
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - loadTime
  - LargestContentfulPaint
  - Experimental
browser-compat: api.LargestContentfulPaint.loadTime
---
{{APIRef("Largest Contentful Paint API")}}{{SeeCompatTable}}

The **`loadTime`** read-only property of the {{domxref("LargestContentfulPaint")}} interface returns the time that the element was loaded.

## Value

A {{domxref("DOMHighResTimeStamp","timestamp")}} representing the time in milliseconds that the element was loaded.

## Examples

The following example gets the `LargestContentfulPaint` object and prints the value of `loadTime` to the console.

```js
try {
  let lcp;

  const po = new PerformanceObserver((entryList) => {
    const entries = entryList.getEntries();
    const lastEntry = entries[entries.length - 1];
    console.log(lastEntry.loadTime);
  });

  po.observe({type: 'largest-contentful-paint', buffered: true});

} catch (e) {
  // Do nothing if the browser doesn't support this API.
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
