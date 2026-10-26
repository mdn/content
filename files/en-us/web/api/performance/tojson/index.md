---
title: "Performance: toJSON() method"
short-title: toJSON()
slug: Web/API/Performance/toJSON
page-type: web-api-instance-method
browser-compat: api.Performance.toJSON
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

The **`toJSON()`** method of the {{domxref("Performance")}} interface returns a JSON-serializable plain object representing the `Performance` object.

The method is automatically called by {{jsxref("JSON.stringify()")}} when a `Performance` object is encountered during [JSON](/en-US/docs/Glossary/JSON) serialization.

## Syntax

```js-nolint
toJSON()
```

### Parameters

None.

### Return value

A JSON-serializable plain object containing the following properties:

- {{domxref("Performance/timeOrigin", "timeOrigin")}}
- {{domxref("Performance/timing", "timing")}}
- {{domxref("Performance/navigation", "navigation")}}
- {{domxref("Performance/interactionCount", "interactionCount")}}

Each property's value is copied as-is. When the returned object is passed to {{jsxref("JSON.stringify()")}}, the `timing` and `navigation` properties are further serialized using {{domxref("PerformanceTiming/toJSON", "PerformanceTiming.toJSON()")}} and {{domxref("PerformanceNavigation/toJSON", "PerformanceNavigation.toJSON()")}}, respectively.

The returned object doesn't contain the {{domxref("Performance.eventCounts", "eventCounts")}} property because {{domxref("EventCounts")}} doesn't provide a `toJSON()` operation.

> [!NOTE]
> In a window context, the returned object includes {{domxref("Performance.interactionCount", "interactionCount")}} and the deprecated {{domxref("performance.timing")}} and {{domxref("performance.navigation")}} properties. These properties are not available in workers. To get a JSON-serializable plain object representing a {{domxref("PerformanceNavigationTiming")}} entry, call {{domxref("PerformanceNavigationTiming.toJSON()")}} instead.

## Examples

### Calling toJSON() directly

Calling `toJSON()` directly on `performance` returns a plain object. Its properties have the same values as the corresponding properties of the original object.

```js
const json = performance.toJSON();
console.log(json); // A plain object
console.log(typeof json); // "object"
console.log(json.timeOrigin); // Same value as performance.timeOrigin
```

### Serializing to a JSON string

In this example, the `Performance` object is serialized using {{jsxref("JSON.stringify()")}}, which calls the `toJSON()` method automatically.

```js
console.log(JSON.stringify(performance));
```

This would log a JSON string like so (formatted for readability):

```json
{
  "timeOrigin": 1668077531367.4,
  "timing": {
    "connectStart": 1668077531372,
    "navigationStart": 1668077531367,
    "secureConnectionStart": 0,
    "fetchStart": 1668077531372,
    "domContentLoadedEventStart": 1668077531580,
    "responseStart": 1668077531372,
    "domInteractive": 1668077531524,
    "domainLookupEnd": 1668077531372,
    "responseEnd": 1668077531500,
    "redirectStart": 0,
    "requestStart": 1668077531372,
    "unloadEventEnd": 0,
    "unloadEventStart": 0,
    "domLoading": 1668077531512,
    "domComplete": 1668077531585,
    "domainLookupStart": 1668077531372,
    "loadEventStart": 1668077531585,
    "domContentLoadedEventEnd": 1668077531580,
    "loadEventEnd": 1668077531585,
    "redirectEnd": 0,
    "connectEnd": 1668077531372
  },
  "navigation": {
    "type": 0,
    "redirectCount": 0
  },
  "interactionCount": 0
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("JSON")}}
