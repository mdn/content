---
title: PerformanceResourceTiming.toJSON()
slug: Web/API/PerformanceResourceTiming/toJSON
tags:
  - API
  - Method
  - Reference
  - Web Performance
browser-compat: api.PerformanceResourceTiming.toJSON
---
{{APIRef("Resource Timing API")}}

The **`toJSON()`** method is a *serializer* that returns
a JSON representation of the {{domxref("PerformanceResourceTiming")}} object.

## Syntax

```js
json = resourcePerfEntry.toJSON();
```

### Arguments

None

### Return value

- json
  - : A JSON object that is the serialization of the
    {{domxref("PerformanceResourceTiming")}} object as a map with entries from the closest
    inherited interface and with entries for each of the serializable attributes.

## Example

```js
// Get a resource performance entry
var perfEntries = performance.getEntriesByType("resource");
var entry = perfEntries[0];

// Get the JSON and log it
var json = entry.toJSON();
var s = JSON.stringify(json);
console.log("PerformanceEntry.toJSON = " + s);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
