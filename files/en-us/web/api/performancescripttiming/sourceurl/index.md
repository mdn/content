---
title: "PerformanceScriptTiming: sourceURL property"
short-title: sourceURL
slug: Web/API/PerformanceScriptTiming/sourceURL
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.PerformanceScriptTiming.sourceURL
---

{{SeeCompatTable}}{{APIRef("Performance API")}}

The **`sourceURL`** read-only property of the {{domxref("PerformanceScriptTiming")}} interface returns a string representing the URL of the script.

It is important to note that the reported function location will be the "entry point" of the script, that is, the top level of the stack, not any specific slow sub-function. See {{domxref("PerformanceScriptTiming.sourceFunctionName")}} for more discussion around this.

## Value

A string. Returns an empty string if the URL was not found.

## Examples

See [Long animation frame timing](/en-US/docs/Web/API/Performance_API/Long_animation_frame_timing#examples) for examples related to the Long Animation Frames API.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Long animation frame timing](/en-US/docs/Web/API/Performance_API/Long_animation_frame_timing)
- {{domxref("PerformanceLongAnimationFrameTiming")}}
