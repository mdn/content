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

### Logging server timing entries

Given this {{HTTPHeader("Server-Timing")}} header:

```http
Server-Timing: cache;desc="Cache Read";dur=23.2
```

You can use a {{domxref("PerformanceObserver")}} to watch for {{domxref("PerformanceServerTiming")}} entries as they are recorded.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    entry.serverTiming.forEach((serverEntry) => {
      console.log(serverEntry.toJSON());
    });
  });
});

observer.observe({ entryTypes: ["resource", "navigation"] });
```

This would log a JSON object like so:

```json
{
  "name": "cache",
  "duration": 23.2,
  "description": "Cache Read"
}
```

To get a JSON string, you can use [`JSON.stringify(serverEntry)`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) directly; it will call `toJSON()` automatically.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
