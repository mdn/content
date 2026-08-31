---
title: "PerformanceTimingConfidence: randomizedTriggerRate property"
short-title: randomizedTriggerRate
slug: Web/API/PerformanceTimingConfidence/randomizedTriggerRate
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.PerformanceTimingConfidence.randomizedTriggerRate
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

The **`randomizedTriggerRate`** read-only property of the {{domxref("PerformanceTimingConfidence")}} interface indicates how often noise is applied when exposing the {{domxref("PerformanceTimingConfidence.value")}}.

Noise is added to the data to improve privacy (so that each data item is less easily identifiable). When noise is added, a `low` or `high` confidence `value` is returned with equal probability, rather than the true `value`, to obfuscate the results.

## Value

A number between `0` to `1`, inclusive, which represents a percentage value. A value of `0` is equivalent to `0%`, which means that noise is never added, while `1` is equivalent to `100%`, meaning that noise is always added.

## Examples

See the main {{domxref("PerformanceTimingConfidence")}} page for an example.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("PerformanceTimingConfidence")}}
