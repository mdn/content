---
title: LargestContentfulPaint.element
slug: Web/API/LargestContentfulPaint/element
tags:
  - API
  - Property
  - Reference
  - element
  - LargestContentfulPaint
browser-compat: api.LargestContentfulPaint.element
---
{{DefaultAPISidebar("Largest Contentful Paint API")}}

The **`element`** read-only property of the {{domxref("LargestContentfulPaint")}} interface returns an object representing the {{domxref("Element")}} that is the largest contentful paint.

## Syntax

```js
let element = LargestContentfulPaint.element;
```

### Value

An {{domxref("Element")}}.

## Examples

The following example gets the `LargestContentfulPaint` object and prints the value of `element` to the console.

```js
try {
  let lcp;

  const po = new PerformanceObserver((entryList) => {
    const entries = entryList.getEntries();
    const lastEntry = entries[entries.length - 1];
    console.log(lastEntry.element);
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
