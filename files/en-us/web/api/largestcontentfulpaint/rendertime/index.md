---
title: LargestContentfulPaint.renderTime
slug: Web/API/LargestContentfulPaint/renderTime
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - renderTime
  - LargestContentfulPaint
  - Experimental
browser-compat: api.LargestContentfulPaint.renderTime
---
{{APIRef("Largest Contentful Paint API")}}{{SeeCompatTable}}

The **`renderTime`** read-only property of the {{domxref("LargestContentfulPaint")}} interface represents the time that the element was rendered to the screen.

## Value

A {{domxref("DOMHighResTimeStamp","timestamp")}} representing the time in milliseconds that the element was rendered to the screen.

## Examples

The following example gets the `LargestContentfulPaint` object and prints the value of `renderTime` to the console.

```js
try {
  let lcp;

  const po = new PerformanceObserver((entryList) => {
    const entries = entryList.getEntries();
    const lastEntry = entries[entries.length - 1];
    console.log(lastEntry.renderTime);
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
