---
title: "PerformancePaintTiming: toJSON() method"
short-title: toJSON()
slug: Web/API/PerformancePaintTiming/toJSON
page-type: web-api-instance-method
browser-compat: api.PerformancePaintTiming.toJSON
---

{{APIRef("Performance API")}}

The **`toJSON()`** method of the {{domxref("PerformancePaintTiming")}} interface returns a JSON-serializable plain object representing the `PerformancePaintTiming` object.

The `toJSON()` method is automatically called by {{jsxref("JSON.stringify()")}} when a `PerformancePaintTiming` object is stringified. This method is generally intended to, by default, usefully serialize `PerformancePaintTiming` objects during [JSON](/en-US/docs/Glossary/JSON) serialization.

## Syntax

```js-nolint
toJSON()
```

### Parameters

None.

### Return value

A JSON-serializable plain object, containing the following properties:

- {{domxref("PerformanceEntry/name", "name")}}
- {{domxref("PerformanceEntry/entryType", "entryType")}}
- {{domxref("PerformanceEntry/startTime", "startTime")}}
- {{domxref("PerformanceEntry/duration", "duration")}}
- {{domxref("PerformanceEntry/navigationId", "navigationId")}}
- {{domxref("PerformancePaintTiming/paintTime", "paintTime")}}
- {{domxref("PerformancePaintTiming/presentationTime", "presentationTime")}}

Each property's value is copied as-is.

## Examples

### Calling toJSON() directly

This example obtains a `PerformancePaintTiming` object. Calling `toJSON()` directly returns a plain object. You can access its properties, which is the same as accessing them on the original object.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    const json = entry.toJSON();
    console.log(json); // A plain object
    console.log(typeof json); // "object"
    console.log(json.name); // Same value as entry.name
  });
});

observer.observe({ type: "paint", buffered: true });
```

### Serializing to a JSON string

Within the callback from the previous example, the same object can be serialized using {{jsxref("JSON.stringify()")}}, which calls the `toJSON()` method automatically.

```js
console.log(JSON.stringify(entry));
```

This would log a JSON string like so (formatted for readability):

```json
{
  "name": "first-contentful-paint",
  "entryType": "paint",
  "startTime": 234.5,
  "duration": 0
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("JSON")}}
