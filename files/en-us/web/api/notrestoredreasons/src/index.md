---
title: "NotRestoredReasons: src property"
short-title: src
slug: Web/API/NotRestoredReasons/src
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.NotRestoredReasons.src
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

The **`src`** read-only property of the
{{domxref("NotRestoredReasons")}} interface returns a string representing the path to the source of the {{htmlelement("iframe")}} the document is contained in (for example `<iframe src="b.html">`).

## Value

A string.

If the document is not in an `<iframe>`, `src` will return `null`.

## Examples

See [Monitoring bfcache blocking reasons](/en-US/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons) for examples.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Monitoring bfcache blocking reasons](/en-US/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons)
- {{domxref("PerformanceNavigationTiming.notRestoredReasons")}}
