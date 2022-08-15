---
title: PerformanceResourceTiming.toJSON()
slug: Web/API/PerformanceResourceTiming/toJSON
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - Web Performance
browser-compat: api.PerformanceResourceTiming.toJSON
---
{{APIRef("Resource Timing API")}}

The **`toJSON()`** method is a *serializer* that returns
a JSON representation of the {{domxref("PerformanceResourceTiming")}} object.

## Syntax

```js
toJSON()
```

### Parameters

None.

### Return value

- json
  - : A JSON object that is the serialization of the
    {{domxref("PerformanceResourceTiming")}} object as a map with entries from the closest
    inherited interface and with entries for each of the serializable attributes.

## Examples

```js
// Get a resource performance entry
const perfEntries = performance.getEntriesByType("resource");
const entry = perfEntries[0];

// Get the JSON and log it
const json = entry.toJSON();
const s = JSON.stringify(json);
console.log(`PerformanceEntry.toJSON = ${s}`);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
