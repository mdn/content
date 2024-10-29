---
title: "PerformanceScriptTiming: windowAttribution property"
short-title: windowAttribution
slug: Web/API/PerformanceScriptTiming/windowAttribution
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.PerformanceScriptTiming.windowAttribution
---

{{SeeCompatTable}}{{APIRef("Performance API")}}

The **`windowAttribution`** read-only property of the {{domxref("PerformanceScriptTiming")}} interface returns an enumerated value describing the relationship of the container (i.e., either the top-level document or an {{htmlelement("iframe")}}) in which the long animation frame (LoAF)-causing script was executed, relative to the window running the current document.

## Value

An enumerated value, which can be one of:

- `"ancestor"`
  - : The current document is a descendant of the document in which the script was executed, embedded inside it in an `<iframe>`.
- `"descendant"`
  - : The script was executed in a descendant document embedded inside the current document in an `<iframe>`.
- `"other"`
  - : The location of the document the script was executed in could not be determined.
- `"same-page"`
  - : The script was executed in a version of the current document embedded within the current document in an `<iframe>`.
- `"self"`
  - : The script was executed in the current document.

## Examples

See [Long animation frame timing](/en-US/docs/Web/API/Performance_API/Long_animation_frame_timing#examples) for examples related to the Long Animation Frames API.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Long animation frame timing](/en-US/docs/Web/API/Performance_API/Long_animation_frame_timing)
- {{domxref("PerformanceLongAnimationFrameTiming")}}
