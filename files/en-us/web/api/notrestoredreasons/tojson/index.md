---
title: "NotRestoredReasons: toJSON() method"
short-title: toJSON()
slug: Web/API/NotRestoredReasons/toJSON
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.NotRestoredReasons.toJSON
spec-urls: https://html.spec.whatwg.org/multipage/nav-history-apis.html#notrestoredreasons
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

The **`toJSON()`** method of the {{domxref("NotRestoredReasons")}} interface returns a JSON-serializable plain object representing the `NotRestoredReasons` object.

The `toJSON()` method is automatically called by {{jsxref("JSON.stringify()")}} when a `NotRestoredReasons` object is stringified. This method is generally intended to, by default, usefully serialize `NotRestoredReasons` objects during [JSON](/en-US/docs/Glossary/JSON) serialization.

## Syntax

```js-nolint
toJSON()
```

### Parameters

None.

### Return value

A JSON-serializable plain object, containing the following properties:

- {{domxref("NotRestoredReasons/src", "src")}}
- {{domxref("NotRestoredReasons/id", "id")}}
- {{domxref("NotRestoredReasons/url", "url")}}
- {{domxref("NotRestoredReasons/name", "name")}}
- {{domxref("NotRestoredReasons/reasons", "reasons")}}
- {{domxref("NotRestoredReasons/children", "children")}}

The `reasons` property is an array of objects serialized using {{domxref("NotRestoredReasonDetails/toJSON", "NotRestoredReasonDetails.toJSON()")}}, or `null`. The `children` property is an array of objects recursively serialized using `NotRestoredReasons.toJSON()`, or `null`. Other property values are copied as-is.

## Examples

### Calling toJSON() directly

This example obtains a `NotRestoredReasons` object from the first navigation entry. Calling `toJSON()` directly returns a plain object. You can access its properties, which is the same as accessing them on the original object.

```js
const navEntries = performance.getEntriesByType("navigation");
const navEntry = navEntries[0];
const reasons = navEntry.notRestoredReasons;

const json = reasons.toJSON();
console.log(json); // A plain object
console.log(typeof json); // "object"
console.log(json.url); // Same value as reasons.url
```

### Serializing to a JSON string

The object from the previous example is automatically serialized by {{jsxref("JSON.stringify()")}}, which calls the `toJSON()` method.

```js
console.log(JSON.stringify(reasons));
```

This would log a JSON string like so (formatted for readability):

```json
{
  "src": null,
  "id": null,
  "url": "https://example.com/",
  "name": null,
  "reasons": [
    {
      "reason": "masked"
    }
  ],
  "children": [
    {
      "src": "https://other.example/frame.html",
      "id": "frame",
      "url": null,
      "name": null,
      "reasons": null,
      "children": null
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
- [Monitoring bfcache blocking reasons](/en-US/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons)
- {{domxref("PerformanceNavigationTiming.notRestoredReasons")}}
