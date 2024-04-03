---
title: PerformanceLongAnimationFrameTiming
slug: Web/API/PerformanceLongAnimationFrameTiming
page-type: web-api-interface
status:
  - experimental
browser-compat: api.PerformanceLongAnimationFrameTiming
---

{{SeeCompatTable}}{{APIRef("Performance API")}}

The **`PerformanceLongAnimationFrameTiming`** interface provides metrics on [long animation frames (LoAFs)](/en-US/docs/Web/API/Performance_API/Long_animation_frame_timing#what_is_a_long_animation_frame) that occupy rendering and block other tasks from being executed.

## Description

Long animation frames (LoAFs) are rendering updates that are delayed beyond 50ms. LoAFs can cause slow user interface (UI) updates, resulting in seemingly unresponsive controls and [janky](/en-US/docs/Glossary/Jank) (or non-smooth) animated effects and scrolling, leading to user frustration.

The `PerformanceLongAnimationFrameTiming` interface provides a granular set of information on LoAFs allowing developers to narrow down their root causes:

- It provides a detailed set of timestamps for each LoAF.
- It provides detailed information on each script that contributed to creating the LoAF, via the {{domxref("PerformanceLongAnimationFrameTiming.scripts")}} property. This returns an array of {{domxref("PerformanceScriptTiming")}} objects, one for each script.

## Inheritance

`PerformanceLongAnimationFrameTiming` inherits from {{domxref("PerformanceEntry")}}.

{{InheritanceDiagram}}

## Instance properties

This interface extends the following {{domxref("PerformanceEntry")}} properties for long animation frame timing performance entry types by qualifying them as follows:

- {{domxref("PerformanceEntry.duration")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns a {{domxref("DOMHighResTimeStamp")}} representing the elapsed time between the start and end of the animation frame, in milliseconds.
- {{domxref("PerformanceEntry.entryType")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns the entry type, which is always `"long-animation-frame"`.
- {{domxref("PerformanceEntry.name")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns the entry name, which is always `"long-animation-frame"`.
- {{domxref("PerformanceEntry.startTime")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns a {{domxref("DOMHighResTimeStamp")}} representing the time when the animation frame started, in milliseconds.

This interface also supports the following properties:

- {{domxref("PerformanceLongAnimationFrameTiming.blockingDuration")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns a {{domxref("DOMHighResTimeStamp")}} indicating the total time the animation frame was being blocked, in milliseconds.
- {{domxref("PerformanceLongAnimationFrameTiming.firstUIEventTimestamp")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns a {{domxref("DOMHighResTimeStamp")}} indicating the time of the first UI event (for example mouse or keyboard) to be queued during the course of the current animation frame, in milliseconds.
- {{domxref("PerformanceLongAnimationFrameTiming.renderStart")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns a {{domxref("DOMHighResTimeStamp")}} indicating the start time of the rendering cycle in milliseconds, which includes {{domxref("Window.requestAnimationFrame()")}} callbacks, style and layout calculation, {{domxref("ResizeObserver")}} callbacks, and {{domxref("IntersectionObserver")}} callbacks.
- {{domxref("PerformanceLongAnimationFrameTiming.scripts")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns an array of {{domxref("PerformanceScriptTiming")}} instances.
- {{domxref("PerformanceLongAnimationFrameTiming.styleAndLayoutStart")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns a {{domxref("DOMHighResTimeStamp")}} indicating the beginning of the time period spent in style and layout calculations for the current animation frame, in milliseconds.

## Instance methods

- {{domxref("PerformanceLongAnimationFrameTiming.toJSON()")}} {{Experimental_Inline}}
  - : Returns a JSON representation of the `PerformanceLongAnimationFrameTiming` object.

## Examples

See [Long animation frame timing](/en-US/docs/Web/API/Performance_API/Long_animation_frame_timing) for Long Animation Frames API examples.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Long animation frame timing](/en-US/docs/Web/API/Performance_API/Long_animation_frame_timing)
- {{domxref("PerformanceScriptTiming")}}
