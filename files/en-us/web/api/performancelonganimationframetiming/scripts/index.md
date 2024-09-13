---
title: "PerformanceLongAnimationFrameTiming: scripts property"
short-title: scripts
slug: Web/API/PerformanceLongAnimationFrameTiming/scripts
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.PerformanceLongAnimationFrameTiming.scripts
---

{{SeeCompatTable}}{{APIRef("Performance API")}}

The **`scripts`** read-only property of the {{domxref("PerformanceLongAnimationFrameTiming")}} interface returns an array of {{domxref("PerformanceScriptTiming")}} objects.

Script attribution is provided only for scripts running in the main thread of a page, including same-origin `<iframe>`s. However, cross-origin `<iframe>`s, [web workers](/en-US/docs/Web/API/Web_Workers_API), [service workers](/en-US/docs/Web/API/Service_Worker_API), and [extension](/en-US/docs/Mozilla/Add-ons/WebExtensions) code will not have script attribution in long animation frames, even if they impact the duration of one.

## Value

An array of {{domxref("PerformanceScriptTiming")}} objects.

## Examples

See [Long animation frame timing](/en-US/docs/Web/API/Performance_API/Long_animation_frame_timing#examples) for examples related to the Long Animation Frames API.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Long animation frame timing](/en-US/docs/Web/API/Performance_API/Long_animation_frame_timing)
- {{domxref("PerformanceScriptTiming")}}
