---
title: "NotRestoredReasons: name property"
short-title: name
slug: Web/API/NotRestoredReasons/name
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.NotRestoredReasons.name
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

The **`name`** read-only property of the
{{domxref("NotRestoredReasons")}} interface returns a string representing the `name` attribute value of the {{htmlelement("iframe")}} the document is contained in (for example `<iframe name="bar" src="...">`).

## Value

A string.

If the document is not in an `<iframe>` or the `<iframe>` has no `name` set, `name` will return `null`.

## Examples

See [Monitoring bfcache blocking reasons](/en-US/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons) for examples.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Monitoring bfcache blocking reasons](/en-US/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons)
- {{domxref("PerformanceNavigationTiming.notRestoredReasons")}}
