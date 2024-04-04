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

The **`windowAttribution`** readonly property of the {{domxref("PerformanceScriptTiming")}} interface returns an enumerated value describing the relationship of the container (i.e. top-level document or {{htmlelement("iframe")}}) the long animation frame (LoAF)-causing script was executed in to the window that the current document is running in.

## Value

An enumerated value, which can be one of:

- `"ancestor"`
  - : The current document is a descendant of the document the script was executed in, embedded inside it in an `<iframe>`.
- `"descendant"`
  - : The script was executed in a descendant document embedded inside the current document in an `<iframe>`.
- `"other"`
  - : The location of the document the script was executed in could not be determined.
- `"same-page"`
  - : The script was executed in a version of the current document embedded inside the current document in an `<iframe>`.
- `"self"`
  - : The script was executed in the current document.

## Examples

See [Long animation frame timing](/en-US/docs/Web/API/Performance_API/Long_animation_frame_timing) for Long Animation Frames API examples.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Long animation frame timing](/en-US/docs/Web/API/Performance_API/Long_animation_frame_timing)
- {{domxref("PerformanceLongAnimationFrameTiming")}}
