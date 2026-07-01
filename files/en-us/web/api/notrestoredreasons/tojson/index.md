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

The **`toJSON()`** method of the {{domxref("NotRestoredReasons")}} interface is a {{Glossary("Serialization","serializer")}}; it returns a JSON representation of the {{domxref("NotRestoredReasons")}} object.

## Syntax

```js-nolint
toJSON()
```

### Parameters

None.

### Return value

A {{jsxref("JSON")}} object that is the serialization of the {{domxref("NotRestoredReasons")}} object.

## Examples

The following function will return a JSON representation of the `NotRestoredReasons` object of the first `PerformanceNavigationTiming` object currently present in the performance timeline:

```js
function returnNRR() {
  const navEntries = performance.getEntriesByType("navigation");
  let navEntry = navEntries[0];
  return navEntry.notRestoredReasons.toJSON();
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
