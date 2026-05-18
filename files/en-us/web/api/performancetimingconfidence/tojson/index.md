---
title: "PerformanceTimingConfidence: toJSON() method"
short-title: toJSON()
slug: Web/API/PerformanceTimingConfidence/toJSON
page-type: web-api-instance-method
browser-compat: api.PerformanceTimingConfidence.toJSON
---

{{APIRef("Performance API")}}

The **`toJSON()`** method of the {{domxref("PerformanceTimingConfidence")}} interface is a {{Glossary("Serialization","serializer")}} that returns a JSON representation of the {{domxref("PerformanceTimingConfidence")}} object.

## Syntax

```js-nolint
toJSON()
```

### Parameters

None.

### Return value

A {{jsxref("JSON")}} object that is the serialization of the {{domxref("PerformanceTimingConfidence")}} object.

## Examples

### Using the toJSON method

This example uses a {{domxref("PerformanceObserver")}} to retrieve a JSON serialization of the confidence data for observed {{domxref("PerformanceNavigationTiming")}} entries.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    console.log(entry.confidence.toJSON());
  });
});

observer.observe({ type: "navigation", buffered: true });
```

This would log a JSON object like so:

```json
{
  "randomizedTriggerRate": 0.4994798,
  "value": "high"
}
```

To get a JSON string, you can use [`JSON.stringify(entry)`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) directly; it will call `toJSON()` automatically.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("PerformanceTimingConfidence")}}
- {{jsxref("JSON")}}
