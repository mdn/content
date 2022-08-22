---
title: LargestContentfulPaint.id
slug: Web/API/LargestContentfulPaint/id
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - id
  - LargestContentfulPaint
  - Experimental
browser-compat: api.LargestContentfulPaint.id
---
{{APIRef("Largest Contentful Paint API")}}{{SeeCompatTable}}

The **`id`** read-only property of the {{domxref("LargestContentfulPaint")}} interface returns the ID of the element that is the largest contentful paint.

## Value

A string containing the ID of the element.

## Examples

The following example gets the `LargestContentfulPaint` object and prints the value of `id` to the console.

```js
try {
  let lcp;

  const po = new PerformanceObserver((entryList) => {
    const entries = entryList.getEntries();
    const lastEntry = entries[entries.length - 1];
    console.log(lastEntry.id);
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
