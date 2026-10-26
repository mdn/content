---
title: "PerformanceResourceTiming: toJSON() method"
short-title: toJSON()
slug: Web/API/PerformanceResourceTiming/toJSON
page-type: web-api-instance-method
browser-compat: api.PerformanceResourceTiming.toJSON
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

The **`toJSON()`** method of the {{domxref("PerformanceResourceTiming")}} interface returns a JSON-serializable plain object representing the `PerformanceResourceTiming` object.

The method is automatically called by {{jsxref("JSON.stringify()")}} when a `PerformanceResourceTiming` object is encountered during [JSON](/en-US/docs/Glossary/JSON) serialization.

## Syntax

```js-nolint
toJSON()
```

### Parameters

None.

### Return value

A JSON-serializable plain object containing the following properties:

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
- {{domxref("PerformanceResourceTiming/workerRouterEvaluationStart", "workerRouterEvaluationStart")}}
- {{domxref("PerformanceResourceTiming/workerCacheLookupStart", "workerCacheLookupStart")}}
- {{domxref("PerformanceResourceTiming/workerMatchedRouterSource", "workerMatchedRouterSource")}}
- {{domxref("PerformanceResourceTiming/workerFinalRouterSource", "workerFinalRouterSource")}}
- {{domxref("PerformanceResourceTiming/transferSize", "transferSize")}}
- {{domxref("PerformanceResourceTiming/encodedBodySize", "encodedBodySize")}}
- {{domxref("PerformanceResourceTiming/decodedBodySize", "decodedBodySize")}}
- {{domxref("PerformanceResourceTiming/responseStatus", "responseStatus")}}
- {{domxref("PerformanceResourceTiming/serverTiming", "serverTiming")}}

Each property's value is copied as-is. When the returned object is passed to {{jsxref("JSON.stringify()")}}, the objects in the `serverTiming` array are further serialized using {{domxref("PerformanceServerTiming/toJSON", "PerformanceServerTiming.toJSON()")}}.

## Examples

### Calling toJSON() directly

This example obtains a `PerformanceResourceTiming` object. Calling `toJSON()` directly returns a plain object. Its properties have the same values as the corresponding properties of the original object.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    const json = entry.toJSON();
    console.log(json); // A plain object
    console.log(typeof json); // "object"
    console.log(json.initiatorType); // Same value as entry.initiatorType
  });
});

observer.observe({ type: "resource", buffered: true });
```

### Serializing to a JSON string

Within the callback from the previous example, the same object can be serialized using {{jsxref("JSON.stringify()")}}, which calls the `toJSON()` method automatically.

```js
console.log(JSON.stringify(entry));
```

This would log a JSON string like so (formatted for readability):

```json
{
  "name": "https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Commons-logo.svg/31px-Commons-logo.svg.png",
  "entryType": "resource",
  "startTime": 111.25,
  "duration": 11.5,
  "navigationId": 2463,
  "initiatorType": "img",
  "deliveryType": "cache",
  "nextHopProtocol": "h2",
  "renderBlockingStatus": "non-blocking",
  "contentType": "image/png",
  "contentEncoding": "",
  "workerStart": 0,
  "redirectStart": 0,
  "redirectEnd": 0,
  "fetchStart": 111.25,
  "domainLookupStart": 111.25,
  "domainLookupEnd": 111.25,
  "connectStart": 111.25,
  "secureConnectionStart": 111.25,
  "connectEnd": 111.25,
  "requestStart": 117.25,
  "responseStart": 120.25,
  "firstInterimResponseStart": 0,
  "finalResponseHeadersStart": 120.25,
  "responseEnd": 122.75,
  "transferSize": 0,
  "encodedBodySize": 880,
  "decodedBodySize": 880,
  "responseStatus": 200,
  "serverTiming": [
    {
      "name": "cache",
      "duration": 0.25,
      "description": "hit-front"
    },
    {
      "name": "host",
      "duration": 0.5,
      "description": "cp3061"
    }
  ]
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("JSON")}}
