---
title: "PerformanceEventTiming: toJSON() method"
short-title: toJSON()
slug: Web/API/PerformanceEventTiming/toJSON
page-type: web-api-instance-method
browser-compat: api.PerformanceEventTiming.toJSON
---

{{APIRef("Performance API")}}

The **`toJSON()`** method of the {{domxref("PerformanceEventTiming")}} interface is a {{Glossary("Serialization","serializer")}}; it returns a JSON representation of the {{domxref("PerformanceEventTiming")}} object.

## Syntax

```js-nolint
toJSON()
```

### Parameters

None.

### Return value

A {{jsxref("JSON")}} object that is the serialization of the {{domxref("PerformanceEventTiming")}} object.

The JSON doesn't contain the {{domxref("PerformanceEventTiming.target", "target")}} property because it is of type {{domxref("Node")}}, which doesn't provide a `toJSON()` operation.

## Examples

### Using the toJSON method

In this example, calling `entry.toJSON()` returns a JSON representation of the `PerformanceEventTiming` object.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    console.log(entry.toJSON());
  });
});

observer.observe({ type: "event", buffered: true });
```

This would log a JSON object like so:

```json
{
  "name": "dragover",
  "entryType": "event",
  "startTime": 67090751.599999905,
  "duration": 128,
  "processingStart": 67090751.70000005,
  "processingEnd": 67090751.900000095,
  "cancelable": true
}
```

To get a JSON string, you can use [`JSON.stringify(entry)`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) directly; it will call `toJSON()` automatically.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("JSON")}}
