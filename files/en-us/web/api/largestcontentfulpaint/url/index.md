---
title: LargestContentfulPaint.url
slug: Web/API/LargestContentfulPaint/url
tags:
  - API
  - Property
  - Reference
  - url
  - LargestContentfulPaint
browser-compat: api.LargestContentfulPaint.url
---
{{DefaultAPISidebar("Largest Contentful Paint API")}}

The **`url`** read-only property of the {{domxref("LargestContentfulPaint")}} interface returns the request url of the element, if the element is an image.

## Syntax

```js
let url = LargestContentfulPaint.url;
```

### Value

A {{domxref("DOMString","string")}} containing a URL.

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
