---
title: LargestContentfulPaint.loadTime
slug: Web/API/LargestContentfulPaint/loadTime
tags:
  - API
  - Property
  - Reference
  - loadTime
  - LargestContentfulPaint
browser-compat: api.LargestContentfulPaint.loadTime
---
{{DefaultAPISidebar("Largest Contentful Paint API")}}

The **`loadTime`** read-only property of the {{domxref("LargestContentfulPaint")}} interface returns the time that the element was loaded.

## Syntax

```js
let loadTime = LargestContentfulPaint.loadTime;
```

### Value

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
