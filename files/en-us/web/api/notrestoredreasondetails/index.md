---
title: NotRestoredReasonDetails
slug: Web/API/NotRestoredReasonDetails
page-type: web-api-interface
status:
  - experimental
browser-compat: api.NotRestoredReasonDetails
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

The **`NotRestoredReasonDetails`** interface of the {{domxref("Performance API", "Performance API", "", "nocode")}} represents a single reason why a navigated page was blocked from using the back/forward cache ({{Glossary("bfcache")}}).

An array of `NotRestoredReasonDetails` objects can be accessed via the {{domxref("NotRestoredReasons.reasons")}} property.

## Instance properties

- {{domxref("NotRestoredReasonDetails.reason", "reason")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : A string describing a reason that the page was blocked from using the back/forward cache.

## Instance methods

- {{domxref("NotRestoredReasonDetails.toJSON", "toJSON()")}} {{Experimental_Inline}}
  - : A {{Glossary("Serialization","serializer")}}; returns a JSON representation of the `NotRestoredReasonDetails` object.

## Examples

See [Monitoring bfcache blocking reasons](/en-US/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons) for examples.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Monitoring bfcache blocking reasons](/en-US/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons)
- {{domxref("PerformanceNavigationTiming.notRestoredReasons")}}
