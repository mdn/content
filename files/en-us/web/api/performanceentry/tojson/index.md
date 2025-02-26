---
title: "PerformanceEntry: toJSON() method"
short-title: toJSON()
slug: Web/API/PerformanceEntry/toJSON
page-type: web-api-instance-method
browser-compat: api.PerformanceEntry.toJSON
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

The **`toJSON()`** method is a {{Glossary("Serialization","serializer")}}; it returns a JSON representation of the {{domxref("PerformanceEntry")}} object.

## Syntax

```js-nolint
toJSON()
```

### Parameters

None.

### Return value

A {{jsxref("JSON")}} object that is the serialization of the {{domxref("PerformanceEntry")}} object.

## Examples

### Using the toJSON method

In this example, calling `entry.toJSON()` returns a JSON representation of the {{domxref("PerformanceMark")}} object.

```js
performance.mark("debug-marker", {
  detail: "debugging-marker-123",
});

const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    console.log(entry.toJSON());
  });
});

observer.observe({ entryTypes: ["mark"] });
```

This would log a JSON object like so:

```json
{
  "name": "debug-marker",
  "entryType": "mark",
  "startTime": 158361,
  "duration": 0
}
```

Note that it doesn't contain `PerformanceMark`'s {{domxref("PerformanceMark.detail", "detail")}} property.

To get a JSON string, you can use [`JSON.stringify(entry)`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) directly; it will call `toJSON()` automatically.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("JSON")}}
