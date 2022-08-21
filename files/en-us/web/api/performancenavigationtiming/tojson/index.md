---
title: PerformanceNavigationTiming.toJSON()
slug: Web/API/PerformanceNavigationTiming/toJSON
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - Web Performance
browser-compat: api.PerformanceNavigationTiming.toJSON
---
{{APIRef("Navigation Timing")}}

The **`toJSON()`** method is a _serializer_ - it returns
a JSON representation of the {{domxref("PerformanceNavigationTiming")}} object.

## Syntax

```js
toJSON()
```

### Parameters

None.

### Return value

A JSON object that is the serialization of the
    {{domxref("PerformanceNavigationTiming")}} object as a map with entries from the
    closest inherited interface and with entries for each of the serializable attributes.

## Examples

```js
// Get a resource performance entry
const [entry] = performance.getEntriesByType("navigation");

// Get the JSON and log it
const json = entry.toJSON();
const s = JSON.stringify(json);
console.log(`PerformanceNavigationTiming.toJSON() = ${s}`);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
