---
title: "NotRestoredReasons: id property"
short-title: id
slug: Web/API/NotRestoredReasons/id
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.NotRestoredReasons.id
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

The **`id`** read-only property of the
{{domxref("NotRestoredReasons")}} interface returns a string representing the `id` attribute value of the {{htmlelement("iframe")}} the document is contained in (for example `<iframe id="foo" src="...">`).

## Value

A string.

If the document is not in an `<iframe>` or the `<iframe>` has no `id` set, `id` will return `null`.

## Examples

See [Monitoring bfcache blocking reasons](/en-US/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons) for examples.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Monitoring bfcache blocking reasons](/en-US/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons)
- {{domxref("PerformanceNavigationTiming.notRestoredReasons")}}
