---
title: "NotRestoredReasons: reasons property"
short-title: reasons
slug: Web/API/NotRestoredReasons/reasons
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.NotRestoredReasons.reasons
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

The **`reasons`** read-only property of the
{{domxref("NotRestoredReasons")}} interface returns an array of {{domxref("NotRestoredReasonDetails")}} objects, each representing a reason why the navigated page was blocked from using the back/forward cache ({{Glossary("bfcache")}}).

## Value

An array of {{domxref("NotRestoredReasonDetails")}} objects. See [Blocking reasons](/en-US/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons#blocking_reasons) for a list of the possible blocking reasons.

If the document is in a cross-origin {{htmlelement("iframe")}}, `reasons` will return `null`, but the parent document may show a `reason` of `"masked"` if any `<iframe>`s blocked bfcache usage for the top-level frame.

## Examples

See [Monitoring bfcache blocking reasons](/en-US/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons) for examples.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Monitoring bfcache blocking reasons](/en-US/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons)
- {{domxref("PerformanceNavigationTiming.notRestoredReasons")}}
