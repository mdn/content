---
title: PerformanceScriptTiming
slug: Web/API/PerformanceScriptTiming
page-type: web-api-interface
status:
  - experimental
browser-compat: api.PerformanceScriptTiming
---

{{SeeCompatTable}}{{APIRef("Performance API")}}

The **`PerformanceScriptTiming`** interface provides metrics on individual scripts that contribute to [long animation frames (LoAFs)](/en-US/docs/Web/API/Performance_API/Long_animation_frame_timing#what_is_a_long_animation_frame).

## Description

Long animation frames (LoAFs) are rendering updates that are delayed beyond 50ms. LoAFs can cause slow user interface (UI) updates, resulting in seemingly unresponsive controls and [janky](/en-US/docs/Glossary/Jank) (or non-smooth) animated effects and scrolling, leading to user frustration.

The `PerformanceScriptTiming` interface (instances of which are accessed via the {{domxref("PerformanceLongAnimationFrameTiming.scripts")}} property) provides granular information on individual scripts that contribute to LoAFs, allowing developers to narrow down their root causes:

- It provides a detailed set of timestamps for each script.
- It indicates the identity and type of the invoker, i.e. the feature that, when invoked, ran the script.
- It provides detailed information on each script source file, including the URL, and the function name and character position that contributed to the LoAF.

## Inheritance

`PerformanceScriptTiming` inherits from {{domxref("PerformanceEntry")}}.

{{InheritanceDiagram}}

## Instance properties

This interface extends the following {{domxref("PerformanceEntry")}} properties for long animation frame timing performance entry types by qualifying them as follows:

- {{domxref("PerformanceEntry.duration")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns a {{domxref("DOMHighResTimeStamp")}} representing the elapsed time between the start and end of the script's execution, in milliseconds.
- {{domxref("PerformanceEntry.entryType")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns the entry type, which is always `"script"`.
- {{domxref("PerformanceEntry.name")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns the entry name, which is always `"script"`.
- {{domxref("PerformanceEntry.startTime")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns a {{domxref("DOMHighResTimeStamp")}} representing the time when the script execution started, in milliseconds.

This interface also supports the following properties:

- {{domxref("PerformanceScriptTiming.executionStart")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns a {{domxref("DOMHighResTimeStamp")}} indicating the time script compilation finished and execution started, in milliseconds.
- {{domxref("PerformanceScriptTiming.forcedStyleAndLayoutDuration")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns a {{domxref("DOMHighResTimeStamp")}} indicating the total time spent by the script processing forced layout/style, in milliseconds (see [Avoid layout thrashing](https://web.dev/articles/avoid-large-complex-layouts-and-layout-thrashing#avoid_layout_thrashing) for an idea of what causes this).
- {{domxref("PerformanceScriptTiming.invoker")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns a string value indicating the identity of the feature that, when invoked, ran the script.
- {{domxref("PerformanceScriptTiming.invokerType")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns a string value indicating the type of feature that, when invoked, ran the script.
- {{domxref("PerformanceScriptTiming.pauseDuration")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns a {{domxref("DOMHighResTimeStamp")}} indicating the total time spent by the script in "pausing" synchronous operations, in milliseconds (for example {{domxref("Window.alert()")}} calls, or synchronous {{domxref("XMLHttpRequest")}}s).
- {{domxref("PerformanceScriptTiming.sourceCharPosition")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns a number representing the script character position of the script feature that contributed to the LoAF.
- {{domxref("PerformanceScriptTiming.sourceFunctionName")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns a string representing the name of the function that contributed to the LoAF.
- {{domxref("PerformanceScriptTiming.sourceURL")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns a string representing the URL of the script.
- {{domxref("PerformanceScriptTiming.window")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns an enumerated value describing the relationship of the container (i.e. top-level document or {{htmlelement("iframe")}}) the script was executed in to the top-level document.
- {{domxref("PerformanceScriptTiming.windowAttribution")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns a {{domxref("Window")}} object reference representing the `window` of the container (i.e. top-level document or {{htmlelement("iframe")}}) the script was executed in.

## Instance methods

- {{domxref("PerformanceScriptTiming.toJSON()")}} {{Experimental_Inline}}
  - : Returns a JSON representation of the `PerformanceScriptTiming` object.

## Examples

See [Long animation frame timing](/en-US/docs/Web/API/Performance_API/Long_animation_frame_timing) for Long Animation Frames API examples.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Long animation frame timing](/en-US/docs/Web/API/Performance_API/Long_animation_frame_timing)
- {{domxref("PerformanceLongAnimationFrameTiming")}}
