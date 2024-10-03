---
title: PerformanceLongAnimationFrameTiming
slug: Web/API/PerformanceLongAnimationFrameTiming
page-type: web-api-interface
status:
  - experimental
browser-compat: api.PerformanceLongAnimationFrameTiming
---

{{SeeCompatTable}}{{APIRef("Performance API")}}

The **`PerformanceLongAnimationFrameTiming`** interface is specified in the Long Animation Frames API and provides metrics on long animation frames (LoAFs) that occupy rendering and block other tasks from being executed.

## Description

Long animation frames (LoAFs) are rendering updates that are delayed beyond 50ms. LoAFs can result in slow user interface (UI) updates, making controls appear unresponsive and causing [janky](/en-US/docs/Glossary/Jank) (non-smooth) animated effects and scrolling. This often leads to user frustration.

The `PerformanceLongAnimationFrameTiming` interface provides the following granular set of information on LoAFs, allowing developers to narrow down their root causes:

- A detailed set of timestamps for each LoAF.
- Detailed information on each script that contributed to creating the LoAF, via the {{domxref("PerformanceLongAnimationFrameTiming.scripts")}} property. This returns an array of {{domxref("PerformanceScriptTiming")}} objects, one for each script.

`PerformanceLongAnimationFrameTiming` inherits from {{domxref("PerformanceEntry")}}.

{{InheritanceDiagram}}

## Instance properties

This interface extends the following {{domxref("PerformanceEntry")}} properties for long animation frame performance entries:

- {{domxref("PerformanceEntry.duration")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns a {{domxref("DOMHighResTimeStamp")}} representing the time taken in milliseconds to process the LoAF in its entirety.
- {{domxref("PerformanceEntry.entryType")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns the entry type, which is always `"long-animation-frame"`.
- {{domxref("PerformanceEntry.name")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns the entry name, which is always `"long-animation-frame"`.
- {{domxref("PerformanceEntry.startTime")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns a {{domxref("DOMHighResTimeStamp")}} representing the time when the animation frame started.

This interface also supports the following properties:

- {{domxref("PerformanceLongAnimationFrameTiming.blockingDuration")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns a {{domxref("DOMHighResTimeStamp")}} indicating the total time in milliseconds that the main thread was blocked from responding to high priority tasks, such as user input. This is calculated by taking all the [long tasks](/en-US/docs/Web/API/PerformanceLongTaskTiming#description) within the LoAF that have a `duration` of more than `50ms`, subtracting `50ms` from each, adding the rendering time to the longest task time, and summing the results.
- {{domxref("PerformanceLongAnimationFrameTiming.firstUIEventTimestamp")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns a {{domxref("DOMHighResTimeStamp")}} indicating the time of the first UI event — such as a mouse or keyboard event — to be queued during the current animation frame.
- {{domxref("PerformanceLongAnimationFrameTiming.renderStart")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns a {{domxref("DOMHighResTimeStamp")}} indicating the start time of the rendering cycle, which includes {{domxref("Window.requestAnimationFrame()")}} callbacks, style and layout calculation, {{domxref("ResizeObserver")}} callbacks, and {{domxref("IntersectionObserver")}} callbacks.
- {{domxref("PerformanceLongAnimationFrameTiming.scripts")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns an array of {{domxref("PerformanceScriptTiming")}} instances.
- {{domxref("PerformanceLongAnimationFrameTiming.styleAndLayoutStart")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns a {{domxref("DOMHighResTimeStamp")}} indicating the beginning of the time period spent in style and layout calculations for the current animation frame.

## Instance methods

- {{domxref("PerformanceLongAnimationFrameTiming.toJSON()")}} {{Experimental_Inline}}
  - : Returns a JSON representation of the `PerformanceLongAnimationFrameTiming` object.

## Examples

See [Long animation frame timing](/en-US/docs/Web/API/Performance_API/Long_animation_frame_timing#examples) for examples related to the Long Animation Frames API.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Long animation frame timing](/en-US/docs/Web/API/Performance_API/Long_animation_frame_timing)
- {{domxref("PerformanceScriptTiming")}}
