---
title: PerformanceScriptTiming
slug: Web/API/PerformanceScriptTiming
page-type: web-api-interface
status:
  - experimental
browser-compat: api.PerformanceScriptTiming
---

{{SeeCompatTable}}{{APIRef("Performance API")}}

The **`PerformanceScriptTiming`** interface is specified in the Long Animation Frames API and provides metrics on individual scripts that contribute to long animation frames (LoAFs).

## Description

Long animation frames (LoAFs) are rendering updates that are delayed beyond 50ms. LoAFs can result in slow user interface (UI) updates, making controls appear unresponsive and causing [janky](/en-US/docs/Glossary/Jank) (non-smooth) animated effects and scrolling. This often leads to user frustration.

The `PerformanceScriptTiming` interface (instances of which are accessed via the {{domxref("PerformanceLongAnimationFrameTiming.scripts")}} property) provides the following granular set of information on individual scripts that contribute to LoAFs, allowing developers to narrow down their root causes:

- A detailed set of timestamps for each script.
- The identity and type of the invoker, i.e. the feature that, when invoked, ran the script.
- Detailed information on each script source file, including the URL, and the function name and character position that contributed to the LoAF.

`PerformanceScriptTiming` inherits from {{domxref("PerformanceEntry")}}.

{{InheritanceDiagram}}

## Instance properties

This interface extends the following {{domxref("PerformanceEntry")}} properties for long animation frame performance entries:

- {{domxref("PerformanceEntry.duration")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns a {{domxref("DOMHighResTimeStamp")}} representing the elapsed time in milliseconds between the start and end of the script's execution.
- {{domxref("PerformanceEntry.entryType")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns the entry type, which is always `"script"`.
- {{domxref("PerformanceEntry.name")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns the entry name, which is always `"script"`.
- {{domxref("PerformanceEntry.startTime")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns a {{domxref("DOMHighResTimeStamp")}} representing the time when the script execution started, in milliseconds.

This interface also supports the following properties:

- {{domxref("PerformanceScriptTiming.executionStart")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns a {{domxref("DOMHighResTimeStamp")}} indicating the time when the script compilation finished and execution started.
- {{domxref("PerformanceScriptTiming.forcedStyleAndLayoutDuration")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns a {{domxref("DOMHighResTimeStamp")}} indicating the total time spent, in milliseconds, by the script processing forced layout/style. See [Avoid layout thrashing](https://web.dev/articles/avoid-large-complex-layouts-and-layout-thrashing#avoid_layout_thrashing) to understand what causes this.
- {{domxref("PerformanceScriptTiming.invoker")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns a string value indicating the identity of the feature that, when invoked, ran the script.
- {{domxref("PerformanceScriptTiming.invokerType")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns a string value indicating the type of feature that, when invoked, ran the script.
- {{domxref("PerformanceScriptTiming.pauseDuration")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns a {{domxref("DOMHighResTimeStamp")}} indicating the total time, in milliseconds, spent by the script on "pausing" synchronous operations (for example, {{domxref("Window.alert()")}} calls or synchronous {{domxref("XMLHttpRequest")}}s).
- {{domxref("PerformanceScriptTiming.sourceCharPosition")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns a number representing the script character position of the script feature that contributed to the LoAF.
- {{domxref("PerformanceScriptTiming.sourceFunctionName")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns a string representing the name of the function that contributed to the LoAF.
- {{domxref("PerformanceScriptTiming.sourceURL")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns a string representing the URL of the script.
- {{domxref("PerformanceScriptTiming.window")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns a reference to a {{domxref("Window")}} object representing the `window` of the container (i.e., either the top-level document or an {{htmlelement("iframe")}}) in which the LoAF-causing script was executed.
- {{domxref("PerformanceScriptTiming.windowAttribution")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns an enumerated value describing the relationship of the container (i.e., either the top-level document or an {{htmlelement("iframe")}}) in which the LoAF-causing script was executed, relative to the window running the current document.

## Instance methods

- {{domxref("PerformanceScriptTiming.toJSON()")}} {{Experimental_Inline}}
  - : Returns a JSON representation of the `PerformanceScriptTiming` object.

## Examples

See [Long animation frame timing](/en-US/docs/Web/API/Performance_API/Long_animation_frame_timing#examples) for examples related to the Long Animation Frames API.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Long animation frame timing](/en-US/docs/Web/API/Performance_API/Long_animation_frame_timing)
- {{domxref("PerformanceLongAnimationFrameTiming")}}
