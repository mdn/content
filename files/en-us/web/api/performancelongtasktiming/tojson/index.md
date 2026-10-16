---
title: "PerformanceLongTaskTiming: toJSON() method"
short-title: toJSON()
slug: Web/API/PerformanceLongTaskTiming/toJSON
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.PerformanceLongTaskTiming.toJSON
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

The **`toJSON()`** method of the {{domxref("PerformanceLongTaskTiming")}} interface returns a JSON-serializable plain object representing the `PerformanceLongTaskTiming` object.

The `toJSON()` method is automatically called by {{jsxref("JSON.stringify()")}} when a `PerformanceLongTaskTiming` object is stringified. This method is generally intended to, by default, usefully serialize `PerformanceLongTaskTiming` objects during [JSON](/en-US/docs/Glossary/JSON) serialization.

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
- {{domxref("PerformanceLongTaskTiming/attribution", "attribution")}}

The `attribution` property contains an array of task attributions. When passed to {{jsxref("JSON.stringify()")}}, these attributions are serialized using {{domxref("TaskAttributionTiming/toJSON", "TaskAttributionTiming.toJSON()")}}. Other property values are copied as-is.

## Examples

### Calling toJSON() directly

This example obtains a `PerformanceLongTaskTiming` object. Calling `toJSON()` directly returns a plain object. You can access its properties, which is the same as accessing them on the original object.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    const json = entry.toJSON();
    console.log(json); // A plain object
    console.log(typeof json); // "object"
    console.log(json.duration); // Same value as entry.duration
  });
});

observer.observe({ type: "longtask", buffered: true });
```

### Serializing to a JSON string

Within the callback from the previous example, the same object can be serialized using {{jsxref("JSON.stringify()")}}, which calls the `toJSON()` method automatically.

```js
console.log(JSON.stringify(entry));
```

This would log a JSON string like so (formatted for readability):

```json
{
  "name": "self",
  "entryType": "longtask",
  "startTime": 183,
  "duration": 60,
  "attribution": [
    {
      "name": "unknown",
      "entryType": "taskattribution",
      "startTime": 0,
      "duration": 0,
      "containerType": "window",
      "containerSrc": "",
      "containerId": "",
      "containerName": ""
    }
  ]
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("JSON")}}
