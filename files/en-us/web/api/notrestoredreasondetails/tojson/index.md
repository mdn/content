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

The **`toJSON()`** method of the {{domxref("NotRestoredReasonDetails")}} interface is a {{Glossary("Serialization","serializer")}}; it returns a JSON representation of the {{domxref("NotRestoredReasonDetails")}} object.

## Syntax

```js-nolint
toJSON()
```

### Parameters

None.

### Return value

A {{jsxref("JSON")}} object that is the serialization of the {{domxref("NotRestoredReasonDetails")}} object.

## Examples

The following function will return a JSON representation of the first `NotRestoredReasonDetails` object of the `NotRestoredReasons` object from the first `PerformanceNavigationTiming` object currently present in the performance timeline:

```js
function returnNRR() {
  const navEntries = performance.getEntriesByType("navigation");
  let navEntry = navEntries[0];
  return navEntry.notRestoredReasons.reasons[0].toJSON();
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
