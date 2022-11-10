---
title: PerformanceServerTiming.toJSON()
slug: Web/API/PerformanceServerTiming/toJSON
page-type: web-api-instance-method
tags:
  - API
  - Method
  - PerformanceServerTiming
  - Reference
  - ServerTiming
  - toJSON
browser-compat: api.PerformanceServerTiming.toJSON
---

{{APIRef("Performance API")}}

The **`toJSON()`** method of the {{domxref("PerformanceServerTiming")}} interface is a {{Glossary("Serialization","serializer")}}; it returns a JSON representation of the {{domxref("PerformanceServerTiming")}} object.

## Syntax

```js-nolint
toJSON()
```

### Parameters

None.

### Return value

A {{jsxref("JSON")}} object that is the serialization of the {{domxref("PerformanceServerTiming")}} object.

## Examples

### Using the toJSON method

In this example, calling `entry.toJSON()` returns a JSON representation of the `PerformanceResourceTiming` object.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
      entry.serverTiming.forEach((serverEntry) => {
        console.log(serverEntry.toJSON());
      });
  });
});

observer.observe({ entryTypes: ["resource"] });
```

This would log a JSON object like so:

```json
{
  "name": "cache",
  "duration": 0,
  "description": "hit-front"
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
