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
{{domxref("NotRestoredReasons")}} interface returns an array of {{domxref("NotRestoredReasons")}} objects representing the blocked state of any child {{htmlelement("iframe")}}s embedded in the current document.

Each object has the same structure as the parent object — this way, any number of levels of embedded `<iframes>` can be represented inside the object recursively.

## Value

An array of {{domxref("NotRestoredReasons")}} objects.

If the frame has no children, the array will be empty; if the document is in a cross-origin `<iframe>`, `children` will return `null`.

## Examples

See [Reporting back/forward cache not restored reasons](/en-US/docs/Web/API/Performance_API/Reporting_backforward_cache_not_restored_reasons) for examples.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Reporting back/forward cache not restored reasons](/en-US/docs/Web/API/Performance_API/Reporting_backforward_cache_not_restored_reasons)
- {{domxref("PerformanceNavigationTiming.notRestoredReasons")}}
