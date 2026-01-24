---
title: "PerformancePaintTiming: toJSON() method"
short-title: toJSON()
slug: Web/API/PerformancePaintTiming/toJSON
page-type: web-api-instance-method
browser-compat: api.PerformancePaintTiming.toJSON
---

{{APIRef("Performance API")}}

The **`toJSON()`** method of the {{domxref("PerformancePaintTiming")}} interface is a {{Glossary("Serialization","serializer")}}; it returns a JSON representation of the {{domxref("PerformancePaintTiming")}} object.

## Syntax

```js-nolint
toJSON()
```

### Parameters

None.

### Return value

A {{jsxref("JSON")}} object that is the serialization of the {{domxref("PerformancePaintTiming")}} object.

## Examples

### Using the toJSON method

In this example, calling `entry.toJSON()` returns a JSON representation of the `PerformancePaintTiming` object.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    console.log(entry.toJSON());
  });
});

observer.observe({ type: "paint", buffered: true });
```

This would log a JSON object like so:

```json
{
  "name": "first-contentful-paint",
  "entryType": "paint",
  "startTime": 234.5,
  "duration": 0
}
```

To get a JSON string, you can use [`JSON.stringify(entry)`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) directly; it will call `toJSON()` automatically.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("JSON")}}
