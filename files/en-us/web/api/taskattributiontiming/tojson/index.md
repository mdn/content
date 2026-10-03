---
title: "TaskAttributionTiming: toJSON() method"
short-title: toJSON()
slug: Web/API/TaskAttributionTiming/toJSON
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.TaskAttributionTiming.toJSON
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

The **`toJSON()`** method of the {{domxref("TaskAttributionTiming")}} interface returns a JSON-serializable plain object representing the `TaskAttributionTiming` object.

The `toJSON()` method is automatically called by {{jsxref("JSON.stringify()")}} when a `TaskAttributionTiming` object is stringified. This method is generally intended to, by default, usefully serialize `TaskAttributionTiming` objects during [JSON](/en-US/docs/Glossary/JSON) serialization.

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
- {{domxref("TaskAttributionTiming/containerType", "containerType")}}
- {{domxref("TaskAttributionTiming/containerSrc", "containerSrc")}}
- {{domxref("TaskAttributionTiming/containerId", "containerId")}}
- {{domxref("TaskAttributionTiming/containerName", "containerName")}}

Each property's value is copied as-is.

## Examples

### Calling toJSON() directly

This example obtains a `TaskAttributionTiming` object. Calling `toJSON()` directly returns a plain object. You can access its properties, which is the same as accessing them on the original object.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    entry.attribution.forEach((attribution) => {
      const json = attribution.toJSON();
      console.log(json); // A plain object
      console.log(typeof json); // "object"
      console.log(json.containerType); // Same value as attribution.containerType
    });
  });
});

observer.observe({ type: "longtask", buffered: true });
```

### Serializing to a JSON string

Within the callback from the previous example, the same object can be serialized using {{jsxref("JSON.stringify()")}}, which calls the `toJSON()` method automatically.

```js
console.log(JSON.stringify(attribution));
```

This would log a JSON string like so (formatted for readability):

```json
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
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("JSON")}}
