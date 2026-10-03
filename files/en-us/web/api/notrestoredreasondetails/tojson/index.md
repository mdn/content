---
title: "NotRestoredReasonDetails: toJSON() method"
short-title: toJSON()
slug: Web/API/NotRestoredReasonDetails/toJSON
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.NotRestoredReasonDetails.toJSON
spec-urls: https://html.spec.whatwg.org/multipage/nav-history-apis.html#notrestoredreasondetails
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

The **`toJSON()`** method of the {{domxref("NotRestoredReasonDetails")}} interface returns a JSON-serializable plain object representing the `NotRestoredReasonDetails` object.

The `toJSON()` method is automatically called by {{jsxref("JSON.stringify()")}} when a `NotRestoredReasonDetails` object is stringified. This method is generally intended to, by default, usefully serialize `NotRestoredReasonDetails` objects during [JSON](/en-US/docs/Glossary/JSON) serialization.

## Syntax

```js-nolint
toJSON()
```

### Parameters

None.

### Return value

A JSON-serializable plain object, containing the following properties:

- {{domxref("NotRestoredReasonDetails/reason", "reason")}}

Each property's value is copied as-is.

## Examples

### Calling toJSON() directly

This example obtains a `NotRestoredReasonDetails` object from the first navigation entry. Calling `toJSON()` directly returns a plain object. You can access its properties, which is the same as accessing them on the original object.

```js
const navEntries = performance.getEntriesByType("navigation");
const navEntry = navEntries[0];
const reason = navEntry.notRestoredReasons.reasons[0];

const json = reason.toJSON();
console.log(json); // A plain object
console.log(typeof json); // "object"
console.log(json.reason); // Same value as reason.reason
```

### Serializing to a JSON string

The object from the previous example is automatically serialized by {{jsxref("JSON.stringify()")}}, which calls the `toJSON()` method.

```js
console.log(JSON.stringify(reason));
```

This would log a JSON string like so (formatted for readability):

```json
{
  "reason": "masked"
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
