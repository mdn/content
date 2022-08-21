---
title: LargestContentfulPaint.toJSON()
slug: Web/API/LargestContentfulPaint/toJSON
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - toJSON
  - LargestContentfulPaint
  - Experimental
browser-compat: api.LargestContentfulPaint.toJSON
---
{{APIRef("Largest Contentful Paint API")}}{{SeeCompatTable}}

The **`toJSON()`** method of the {{domxref("LargestContentfulPaint")}} interface is a _serializer_, and returns a JSON representation of the `LargestContentfulPaint` object.

## Syntax

```js
toJSON()
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
