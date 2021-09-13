---
title: LargestContentfulPaint.size
slug: Web/API/LargestContentfulPaint/size
tags:
  - API
  - Property
  - Reference
  - size
  - LargestContentfulPaint
browser-compat: api.LargestContentfulPaint.size
---
{{DefaultAPISidebar("Largest Contentful Paint API")}}

The **`size`** read-only property of the {{domxref("LargestContentfulPaint")}} interface returns the intrinsic size of the element that is the largest contentful paint.

The `size` of the element is the `width` times `height` of the {{domxref("DOMRectReadOnly","rectangle")}} that this element creates on the screen.

## Syntax

```js
let size = LargestContentfulPaint.size;
```

### Value

An integer representing the width times height of the element.

## Examples

The following example gets the `LargestContentfulPaint` object and prints the value of `size` to the console.

```js
try {
  let lcp;

  const po = new PerformanceObserver((entryList) => {
    const entries = entryList.getEntries();
    const lastEntry = entries[entries.length - 1];
    console.log(lastEntry.size);
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
