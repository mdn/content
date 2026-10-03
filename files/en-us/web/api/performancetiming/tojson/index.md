---
title: "PerformanceTiming: toJSON() method"
short-title: toJSON()
slug: Web/API/PerformanceTiming/toJSON
page-type: web-api-instance-method
status:
  - deprecated
browser-compat: api.PerformanceTiming.toJSON
---

{{APIRef("Performance API")}}

> [!WARNING]
> This interface of this property is deprecated in the [Navigation Timing Level 2 specification](https://w3c.github.io/navigation-timing/#obsolete). Please use the {{domxref("PerformanceNavigationTiming")}}
> interface instead.

The **`toJSON()`** method of the {{domxref("PerformanceTiming")}} interface returns a JSON-serializable plain object representing the `PerformanceTiming` object.

The `toJSON()` method is automatically called by {{jsxref("JSON.stringify()")}} when a `PerformanceTiming` object is stringified. This method is generally intended to, by default, usefully serialize `PerformanceTiming` objects during [JSON](/en-US/docs/Glossary/JSON) serialization.

## Syntax

```js-nolint
toJSON()
```

### Parameters

None.

### Return value

A JSON-serializable plain object, containing the following properties:

- {{domxref("PerformanceTiming/connectStart", "connectStart")}}
- {{domxref("PerformanceTiming/navigationStart", "navigationStart")}}
- {{domxref("PerformanceTiming/secureConnectionStart", "secureConnectionStart")}}
- {{domxref("PerformanceTiming/fetchStart", "fetchStart")}}
- {{domxref("PerformanceTiming/domContentLoadedEventStart", "domContentLoadedEventStart")}}
- {{domxref("PerformanceTiming/responseStart", "responseStart")}}
- {{domxref("PerformanceTiming/domInteractive", "domInteractive")}}
- {{domxref("PerformanceTiming/domainLookupEnd", "domainLookupEnd")}}
- {{domxref("PerformanceTiming/responseEnd", "responseEnd")}}
- {{domxref("PerformanceTiming/redirectStart", "redirectStart")}}
- {{domxref("PerformanceTiming/requestStart", "requestStart")}}
- {{domxref("PerformanceTiming/unloadEventEnd", "unloadEventEnd")}}
- {{domxref("PerformanceTiming/unloadEventStart", "unloadEventStart")}}
- {{domxref("PerformanceTiming/domLoading", "domLoading")}}
- {{domxref("PerformanceTiming/domComplete", "domComplete")}}
- {{domxref("PerformanceTiming/domainLookupStart", "domainLookupStart")}}
- {{domxref("PerformanceTiming/loadEventStart", "loadEventStart")}}
- {{domxref("PerformanceTiming/domContentLoadedEventEnd", "domContentLoadedEventEnd")}}
- {{domxref("PerformanceTiming/loadEventEnd", "loadEventEnd")}}
- {{domxref("PerformanceTiming/redirectEnd", "redirectEnd")}}
- {{domxref("PerformanceTiming/connectEnd", "connectEnd")}}

Each property's value is copied as-is.

## Examples

### Calling toJSON() directly

Calling `toJSON()` directly on `performance.timing` returns a plain object. You can access its properties, which is the same as accessing them on the original object.

```js
const json = performance.timing.toJSON();
console.log(json); // A plain object
console.log(typeof json); // "object"
console.log(json.navigationStart); // Same value as performance.timing.navigationStart
```

### Serializing to a JSON string

In this example, the `PerformanceTiming` object is automatically serialized by {{jsxref("JSON.stringify()")}}, which calls the `toJSON()` method.

```js
console.log(JSON.stringify(performance.timing));
```

This would log a JSON string like so (formatted for readability):

```json
{
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
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("JSON")}}
