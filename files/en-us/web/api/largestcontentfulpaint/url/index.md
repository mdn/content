---
title: LargestContentfulPaint.url
slug: Web/API/LargestContentfulPaint/url
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - url
  - LargestContentfulPaint
  - Experimental
browser-compat: api.LargestContentfulPaint.url
---
{{APIRef("Largest Contentful Paint API")}}{{SeeCompatTable}}

The **`url`** read-only property of the {{domxref("LargestContentfulPaint")}} interface returns the request URL of the element, if the element is an image.

## Value

A string containing a URL.

## Examples

The following example gets the `LargestContentfulPaint` object and prints the value of `url` to the console.

```js
try {
  let lcp;

  const po = new PerformanceObserver((entryList) => {
    const entries = entryList.getEntries();
    const lastEntry = entries[entries.length - 1];
    console.log(lastEntry.url);
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
