---
title: PerformanceNavigationTiming.toJSON()
slug: Web/API/PerformanceNavigationTiming/toJSON
tags:
  - API
  - Method
  - Reference
  - Web Performance
browser-compat: api.PerformanceNavigationTiming.toJSON
---
{{APIRef("Navigation Timing")}}{{SeeCompatTable}}

The **`toJSON()`** method is a _serializer_ - it returns
a JSON representation of the {{domxref("PerformanceNavigationTiming")}} object.

## Syntax

```js
json = resourcePerfEntry.toJSON();
```

### Arguments

None

### Return value

- json
  - : A JSON object that is the serialization of the
    {{domxref("PerformanceNavigationTiming")}} object as a map with entries from the
    closest inherited interface and with entries for each of the serializable attributes.

## Example

```js
// Get a resource performance entry
var perfEntries = performance.getEntriesByType("navigation");
var entry = perfEntries[0];

// Get the JSON and log it
var json = entry.toJSON();
var s = JSON.stringify(json);
console.log("PerformanceNavigationTiming.toJSON() = " + s);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
