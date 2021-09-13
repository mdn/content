---
title: LargestContentfulPaint.toJSON()
slug: Web/API/LargestContentfulPaint/toJSON
tags:
  - API
  - Method
  - Reference
  - toJSON
  - LargestContentfulPaint
browser-compat: api.LargestContentfulPaint.toJSON
---
{{DefaultAPISidebar("Largest Contentful Paint API")}}

The **`toJSON()`** method of the {{domxref("LargestContentfulPaint")}} interface is a _serializer_, and returns a JSON representation of the `LargestContentfulPaint` object.

## Syntax

```js
LargestContentfulPaint.toJSON();
```

### Parameters

None.

### Return value

A JSON object that is the serialization of the {{domxref("LargestContentfulPaint")}} object.

## Examples

The following example gets the `LargestContentfulPaint` object and prints it as JSON to the console.

```js
try {
  let lcp;

  const po = new PerformanceObserver((entryList) => {
    const entries = entryList.getEntries();
    const lastEntry = entries[entries.length - 1];
    console.log(lastEntry.toJSON());
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
