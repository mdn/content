---
title: "PerformanceNavigationTiming: toJSON() method"
short-title: toJSON()
slug: Web/API/PerformanceNavigationTiming/toJSON
page-type: web-api-instance-method
browser-compat: api.PerformanceNavigationTiming.toJSON
---

{{APIRef("Performance API")}}

The **`toJSON()`** method of the {{domxref("PerformanceNavigationTiming")}} interface returns a JSON-serializable plain object representing the `PerformanceNavigationTiming` object.

The `toJSON()` method is automatically called by {{jsxref("JSON.stringify()")}} when a `PerformanceNavigationTiming` object is stringified. This method is generally intended to, by default, usefully serialize `PerformanceNavigationTiming` objects during [JSON](/en-US/docs/Glossary/JSON) serialization.

## Syntax

```js-nolint
toJSON()
```

### Parameters

None.

### Return value

A JSON-serializable plain object, containing the following properties:

- {{domxref("PerformanceEntry/name", "name")}}
- {{domxref("PerformanceEntry/entryType", "entryType")}}
- {{domxref("PerformanceEntry/startTime", "startTime")}}
- {{domxref("PerformanceEntry/duration", "duration")}}
- {{domxref("PerformanceEntry/navigationId", "navigationId")}}
- {{domxref("PerformanceResourceTiming/initiatorType", "initiatorType")}}
- {{domxref("PerformanceResourceTiming/deliveryType", "deliveryType")}}
- {{domxref("PerformanceResourceTiming/nextHopProtocol", "nextHopProtocol")}}
- {{domxref("PerformanceResourceTiming/renderBlockingStatus", "renderBlockingStatus")}}
- {{domxref("PerformanceResourceTiming/contentType", "contentType")}}
- {{domxref("PerformanceResourceTiming/contentEncoding", "contentEncoding")}}
- {{domxref("PerformanceResourceTiming/workerStart", "workerStart")}}
- {{domxref("PerformanceResourceTiming/redirectStart", "redirectStart")}}
- {{domxref("PerformanceResourceTiming/redirectEnd", "redirectEnd")}}
- {{domxref("PerformanceResourceTiming/fetchStart", "fetchStart")}}
- {{domxref("PerformanceResourceTiming/domainLookupStart", "domainLookupStart")}}
- {{domxref("PerformanceResourceTiming/domainLookupEnd", "domainLookupEnd")}}
- {{domxref("PerformanceResourceTiming/connectStart", "connectStart")}}
- {{domxref("PerformanceResourceTiming/secureConnectionStart", "secureConnectionStart")}}
- {{domxref("PerformanceResourceTiming/connectEnd", "connectEnd")}}
- {{domxref("PerformanceResourceTiming/requestStart", "requestStart")}}
- {{domxref("PerformanceResourceTiming/responseStart", "responseStart")}}
- {{domxref("PerformanceResourceTiming/firstInterimResponseStart", "firstInterimResponseStart")}}
- {{domxref("PerformanceResourceTiming/finalResponseHeadersStart", "finalResponseHeadersStart")}}
- {{domxref("PerformanceResourceTiming/responseEnd", "responseEnd")}}
- {{domxref("PerformanceResourceTiming/transferSize", "transferSize")}}
- {{domxref("PerformanceResourceTiming/encodedBodySize", "encodedBodySize")}}
- {{domxref("PerformanceResourceTiming/decodedBodySize", "decodedBodySize")}}
- {{domxref("PerformanceResourceTiming/responseStatus", "responseStatus")}}
- {{domxref("PerformanceResourceTiming/serverTiming", "serverTiming")}}
- {{domxref("PerformanceNavigationTiming/unloadEventStart", "unloadEventStart")}}
- {{domxref("PerformanceNavigationTiming/unloadEventEnd", "unloadEventEnd")}}
- {{domxref("PerformanceNavigationTiming/domInteractive", "domInteractive")}}
- {{domxref("PerformanceNavigationTiming/domContentLoadedEventStart", "domContentLoadedEventStart")}}
- {{domxref("PerformanceNavigationTiming/domContentLoadedEventEnd", "domContentLoadedEventEnd")}}
- {{domxref("PerformanceNavigationTiming/domComplete", "domComplete")}}
- {{domxref("PerformanceNavigationTiming/loadEventStart", "loadEventStart")}}
- {{domxref("PerformanceNavigationTiming/loadEventEnd", "loadEventEnd")}}
- {{domxref("PerformanceNavigationTiming/type", "type")}}
- {{domxref("PerformanceNavigationTiming/redirectCount", "redirectCount")}}
- {{domxref("PerformanceNavigationTiming/activationStart", "activationStart")}}
- {{domxref("PerformanceNavigationTiming/criticalCHRestart", "criticalCHRestart")}}
- {{domxref("PerformanceNavigationTiming/notRestoredReasons", "notRestoredReasons")}}
- {{domxref("PerformanceNavigationTiming/confidence", "confidence")}}

The `serverTiming` property contains an array of server timings. When passed to {{jsxref("JSON.stringify()")}}, these timings are serialized using {{domxref("PerformanceServerTiming/toJSON", "PerformanceServerTiming.toJSON()")}}. The `notRestoredReasons` and `confidence` properties are serialized using {{domxref("NotRestoredReasons/toJSON", "NotRestoredReasons.toJSON()")}} and {{domxref("PerformanceTimingConfidence/toJSON", "PerformanceTimingConfidence.toJSON()")}}, respectively, when they are not `null`. Other property values are copied as-is.

## Examples

### Calling toJSON() directly

This example obtains a `PerformanceNavigationTiming` object. Calling `toJSON()` directly returns a plain object. You can access its properties, which is the same as accessing them on the original object.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    const json = entry.toJSON();
    console.log(json); // A plain object
    console.log(typeof json); // "object"
    console.log(json.type); // Same value as entry.type
  });
});

observer.observe({ entryTypes: ["navigation"] });
```

### Serializing to a JSON string

Within the callback from the previous example, the same object can be serialized using {{jsxref("JSON.stringify()")}}, which calls the `toJSON()` method automatically.

```js
console.log(JSON.stringify(entry));
```

This would log a JSON string like so (formatted for readability):

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
  "secureConnectionStart": 71.40000000596046,
  "connectEnd": 71.40000000596046,
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
  "activationStart": 0,
  "confidence": {
    "randomizedTriggerRate": 0.4994798,
    "value": "high"
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("JSON")}}
