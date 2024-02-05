---
title: "LargestContentfulPaint: toJSON() method"
short-title: toJSON()
slug: Web/API/LargestContentfulPaint/toJSON
page-type: web-api-instance-method
browser-compat: api.LargestContentfulPaint.toJSON
---

{{APIRef("Performance API")}}

The **`toJSON()`** method of the {{domxref("LargestContentfulPaint")}} interface is a {{Glossary("Serialization","serializer")}}; it returns a JSON representation of the {{domxref("LargestContentfulPaint")}} object.

## Syntax

```js-nolint
toJSON()
```

### Parameters

None.

### Return value

A {{jsxref("JSON")}} object that is the serialization of the {{domxref("LargestContentfulPaint")}} object.

The JSON doesn't contain the {{domxref("LargestContentfulPaint.element", "element")}} property because it is of type {{domxref("Element")}}, which doesn't provide a `toJSON()` operation.

## Examples

### Using the toJSON method

In this example, calling `entry.toJSON()` returns a JSON representation of the `LargestContentfulPaint` object.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    console.log(entry.toJSON());
  });
});

observer.observe({ type: "largest-contentful-paint", buffered: true });
```

This would log a JSON object like so:

```json
{
  "name": "",
  "entryType": "largest-contentful-paint",
  "startTime": 468.2,
  "duration": 0,
  "size": 19824,
  "renderTime": 468.2,
  "loadTime": 0,
  "id": "",
  "url": ""
}
```

To get a JSON string, you can use [`JSON.stringify(entry)`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) directly; it will call `toJSON()` automatically.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("JSON")}}
