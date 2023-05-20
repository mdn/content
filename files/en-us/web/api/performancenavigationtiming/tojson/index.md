---
title: "PerformanceNavigationTiming: toJSON() method"
short-title: toJSON()
slug: Web/API/PerformanceNavigationTiming/toJSON
page-type: web-api-instance-method
browser-compat: api.PerformanceNavigationTiming.toJSON
---

{{APIRef("Performance API")}}

The **`toJSON()`** method of the {{domxref("PerformanceNavigationTiming")}} interface is a {{Glossary("Serialization","serializer")}}; it returns a JSON representation of the {{domxref("PerformanceNavigationTiming")}} object.

## Syntax

```js-nolint
toJSON()
```

### Parameters

None.

### Return value

A {{jsxref("JSON")}} object that is the serialization of the {{domxref("PerformanceNavigationTiming")}} object.

## Examples

### Using the toJSON method

In this example, calling `entry.toJSON()` returns a JSON representation of the `PerformanceNavigationTiming` object.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    console.log(entry.toJSON());
  });
});

observer.observe({ entryTypes: ["navigation"] });
```

This would log a JSON object like so:

```json
{
  "name": "https://en.wikipedia.org/wiki/Main_Page",
  "entryType": "navigation",
  "startTime": 0,
  "duration": 227.60000002384186,
  "initiatorType": "navigation",
  "nextHopProtocol": "h2",
  "renderBlockingStatus": "blocking",
  "workerStart": 0,
  "redirectStart": 4,
  "redirectEnd": 71.40000000596046,
  "fetchStart": 71.40000000596046,
  "domainLookupStart": 71.40000000596046,
  "domainLookupEnd": 71.40000000596046,
  "connectStart": 71.40000000596046,
  "connectEnd": 71.40000000596046,
  "secureConnectionStart": 71.40000000596046,
  "requestStart": 73.7000000178814,
  "responseStart": 102.90000000596046,
  "responseEnd": 105.2000000178814,
  "transferSize": 19464,
  "encodedBodySize": 19164,
  "decodedBodySize": 83352,
  "serverTiming": [
    {
      "name": "cache",
      "duration": 0,
      "description": "hit-front"
    },
    {
      "name": "host",
      "duration": 0,
      "description": "cp3062"
    }
  ],
  "unloadEventStart": 0,
  "unloadEventEnd": 0,
  "domInteractive": 178.10000002384186,
  "domContentLoadedEventStart": 178.2000000178814,
  "domContentLoadedEventEnd": 178.2000000178814,
  "domComplete": 227.60000002384186,
  "loadEventStart": 227.60000002384186,
  "loadEventEnd": 227.60000002384186,
  "type": "navigate",
  "redirectCount": 1,
  "activationStart": 0
}
```

To get a JSON string, you can use [`JSON.stringify(entry)`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) directly; it will call `toJSON()` automatically.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("JSON")}}
