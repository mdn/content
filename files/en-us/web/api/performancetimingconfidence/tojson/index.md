---
title: "PerformanceTimingConfidence: toJSON() method"
short-title: toJSON()
slug: Web/API/PerformanceTimingConfidence/toJSON
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.PerformanceTimingConfidence.toJSON
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

The **`toJSON()`** method of the {{domxref("PerformanceTimingConfidence")}} interface returns a JSON-serializable plain object representing the `PerformanceTimingConfidence` object.

The `toJSON()` method is automatically called by {{jsxref("JSON.stringify()")}} when a `PerformanceTimingConfidence` object is stringified. This method is generally intended to, by default, usefully serialize `PerformanceTimingConfidence` objects during [JSON](/en-US/docs/Glossary/JSON) serialization.

## Syntax

```js-nolint
toJSON()
```

### Parameters

None.

### Return value

A JSON-serializable plain object, containing the following properties:

- {{domxref("PerformanceTimingConfidence/randomizedTriggerRate", "randomizedTriggerRate")}}
- {{domxref("PerformanceTimingConfidence/value", "value")}}

Each property's value is copied as-is.

## Examples

### Calling toJSON() directly

This example obtains a `PerformanceTimingConfidence` object. Calling `toJSON()` directly returns a plain object. You can access its properties, which is the same as accessing them on the original object.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    const confidence = entry.confidence;

    const json = confidence.toJSON();
    console.log(json); // A plain object
    console.log(typeof json); // "object"
    console.log(json.value); // Same value as confidence.value
  });
});

observer.observe({ type: "navigation", buffered: true });
```

### Serializing to a JSON string

Within the callback from the previous example, the same object can be serialized using {{jsxref("JSON.stringify()")}}, which calls the `toJSON()` method automatically.

```js
console.log(JSON.stringify(confidence));
```

This would log a JSON string like so (formatted for readability):

```json
{
  "randomizedTriggerRate": 0.4994798,
  "value": "high"
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("PerformanceTimingConfidence")}}
- {{jsxref("JSON")}}
