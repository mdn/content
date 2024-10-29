---
title: "NotRestoredReasons: children property"
short-title: children
slug: Web/API/NotRestoredReasons/children
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.NotRestoredReasons.children
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

The **`children`** read-only property of the
{{domxref("NotRestoredReasons")}} interface returns an array of {{domxref("NotRestoredReasons")}} objects, one for each child {{htmlelement("iframe")}} embedded in the current document, which may contain reasons why the top-level frame was blocked relating to the child frames.

Each object has the same structure as the parent object — this way, any number of levels of embedded `<iframe>`s can be represented inside the object recursively.

## Value

An array of {{domxref("NotRestoredReasons")}} objects.

If the frame has no children, the array will be empty; if the document is in a cross-origin `<iframe>`, `children` will return `null`.

## Examples

See [Monitoring bfcache blocking reasons](/en-US/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons) for examples.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Monitoring bfcache blocking reasons](/en-US/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons)
- {{domxref("PerformanceNavigationTiming.notRestoredReasons")}}
