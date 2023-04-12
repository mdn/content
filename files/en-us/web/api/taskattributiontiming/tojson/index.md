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

The **`toJSON()`** method of the {{domxref("TaskAttributionTiming")}} interface is a {{Glossary("Serialization","serializer")}}; it returns a JSON representation of the {{domxref("TaskAttributionTiming")}} object.

## Syntax

```js-nolint
toJSON()
```

### Parameters

None.

### Return value

A {{jsxref("JSON")}} object that is the serialization of the {{domxref("TaskAttributionTiming")}} object.

## Examples

### Using the toJSON method

In this example, calling `entry.toJSON()` returns a JSON representation of the `TaskAttributionTiming` object.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    console.log(entry.toJSON());
  });
});

observer.observe({ type: "taskattribution", buffered: true });
```

This would log a JSON object like so:

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

To get a JSON string, you can use [`JSON.stringify(entry)`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) directly; it will call `toJSON()` automatically.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("JSON")}}
