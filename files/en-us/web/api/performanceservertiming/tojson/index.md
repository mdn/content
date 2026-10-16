---
title: "PerformanceServerTiming: toJSON() method"
short-title: toJSON()
slug: Web/API/PerformanceServerTiming/toJSON
page-type: web-api-instance-method
browser-compat: api.PerformanceServerTiming.toJSON
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

The **`toJSON()`** method of the {{domxref("PerformanceServerTiming")}} interface returns a JSON-serializable plain object representing the `PerformanceServerTiming` object.

The `toJSON()` method is automatically called by {{jsxref("JSON.stringify()")}} when a `PerformanceServerTiming` object is stringified. This method is generally intended to, by default, usefully serialize `PerformanceServerTiming` objects during [JSON](/en-US/docs/Glossary/JSON) serialization.

## Syntax

```js-nolint
toJSON()
```

### Parameters

None.

### Return value

A JSON-serializable plain object, containing the following properties:

- {{domxref("PerformanceServerTiming/name", "name")}}
- {{domxref("PerformanceServerTiming/duration", "duration")}}
- {{domxref("PerformanceServerTiming/description", "description")}}

Each property's value is copied as-is.

## Examples

### Calling toJSON() directly

This example obtains a `PerformanceServerTiming` object. Calling `toJSON()` directly returns a plain object. You can access its properties, which is the same as accessing them on the original object.

Server timing metrics require the server to send the {{HTTPHeader("Server-Timing")}} header. For example:

```http
Server-Timing: cache;desc="Cache Read";dur=23.2
```

The `serverTiming` entries can live on `navigation` and `resource` entries.

Example using a {{domxref("PerformanceObserver")}}, which notifies of new `navigation` and `resource` performance entries as they are recorded in the browser's performance timeline. Use the `buffered` option to access entries from before the observer creation.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    entry.serverTiming.forEach((serverTiming) => {
      const json = serverTiming.toJSON();
      console.log(json); // A plain object
      console.log(typeof json); // "object"
      console.log(json.name); // Same value as serverTiming.name
    });
  });
});

["navigation", "resource"].forEach((type) =>
  observer.observe({ type, buffered: true }),
);
```

### Serializing to a JSON string

Within the callback from the previous example, the same object can be serialized using {{jsxref("JSON.stringify()")}}, which calls the `toJSON()` method automatically.

```js
console.log(JSON.stringify(serverTiming));
```

This would log a JSON string like so (formatted for readability):

```json
{
  "name": "cache",
  "duration": 23.2,
  "description": "Cache Read"
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
