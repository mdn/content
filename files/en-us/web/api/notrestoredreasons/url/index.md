---
title: "NotRestoredReasons: url property"
short-title: url
slug: Web/API/NotRestoredReasons/url
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.NotRestoredReasons.url
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

The **`url`** read-only property of the
{{domxref("NotRestoredReasons")}} interface returns a string representing the URL of the navigated page or {{htmlelement("iframe")}}.

## Value

A string.

If the document is in a cross-origin `<iframe>`, `url` will return `null`.

## Examples

See [Monitoring bfcache blocking reasons](/en-US/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons) for examples.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Monitoring bfcache blocking reasons](/en-US/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons)
- {{domxref("PerformanceNavigationTiming.notRestoredReasons")}}
