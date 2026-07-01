---
title: "Performance: toJSON() method"
short-title: toJSON()
slug: Web/API/Performance/toJSON
page-type: web-api-instance-method
browser-compat: api.Performance.toJSON
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

The **`toJSON()`** method of the {{domxref("Performance")}} interface is a {{Glossary("Serialization","serializer")}}; it returns a JSON representation of the {{domxref("Performance")}} object.

## Syntax

```js-nolint
toJSON()
```

### Parameters

None.

### Return value

A {{jsxref("JSON")}} object that is the serialization of the {{domxref("Performance")}} object.

The returned JSON doesn't contain the {{domxref("Performance.eventCounts", "eventCounts")}} property because it is of type {{domxref("EventCounts")}}, which doesn't provide a `toJSON()` operation.

> [!NOTE]
> The JSON object contains the serialization of the deprecated {{domxref("performance.timing")}} and {{domxref("performance.navigation")}} properties. To get a JSON representation of the newer {{domxref("PerformanceNavigationTiming")}} interface, call {{domxref("PerformanceNavigationTiming.toJSON()")}} instead.

## Examples

### Using the toJSON method

In this example, calling `performance.toJSON()` returns a JSON representation of the `Performance` object.

```js
performance.toJSON();
```

This would log a JSON object like so:

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
  }
}
```

To get a JSON string, you can use [`JSON.stringify(performance)`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) directly; it will call `toJSON()` automatically.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("JSON")}}
