---
title: "PerformanceEventTiming: toJSON() method"
short-title: toJSON()
slug: Web/API/PerformanceEventTiming/toJSON
page-type: web-api-instance-method
browser-compat: api.PerformanceEventTiming.toJSON
---

{{APIRef("Performance API")}}

The **`toJSON()`** method of the {{domxref("PerformanceEventTiming")}} interface returns a JSON-serializable plain object representing the `PerformanceEventTiming` object.

The `toJSON()` method is automatically called by {{jsxref("JSON.stringify()")}} when a `PerformanceEventTiming` object is stringified. This method is generally intended to, by default, usefully serialize `PerformanceEventTiming` objects during [JSON](/en-US/docs/Glossary/JSON) serialization.

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
- {{domxref("PerformanceEventTiming/interactionId", "interactionId")}}
- {{domxref("PerformanceEventTiming/processingStart", "processingStart")}}
- {{domxref("PerformanceEventTiming/processingEnd", "processingEnd")}}
- {{domxref("PerformanceEventTiming/cancelable", "cancelable")}}

Each property's value is copied as-is.

The returned object doesn't contain the {{domxref("PerformanceEventTiming.target", "target")}} property because it is of type {{domxref("Node")}}, which doesn't provide a `toJSON()` operation.

## Examples

### Calling toJSON() directly

This example obtains a `PerformanceEventTiming` object. Calling `toJSON()` directly returns a plain object. You can access its properties, which is the same as accessing them on the original object.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    const json = entry.toJSON();
    console.log(json); // A plain object
    console.log(typeof json); // "object"
    console.log(json.processingStart); // Same value as entry.processingStart
  });
});

observer.observe({ type: "event", buffered: true });
```

### Serializing to a JSON string

Within the callback from the previous example, the same object can be serialized using {{jsxref("JSON.stringify()")}}, which calls the `toJSON()` method automatically.

```js
console.log(JSON.stringify(entry));
```

This would log a JSON string like so (formatted for readability):

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

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("JSON")}}
