---
title: TaskAttributionTiming
slug: Web/API/TaskAttributionTiming
page-type: web-api-interface
status:
  - experimental
browser-compat: api.TaskAttributionTiming
---

{{SeeCompatTable}}{{APIRef("Performance API")}}

The **`TaskAttributionTiming`** interface returns information about the work involved in a long task and its associate frame context. The frame context, also called the container, is the iframe, embed or object that is being implicated, on the whole, for a long task.

You usually work with `TaskAttributionTiming` objects when observing [long tasks](/en-US/docs/Web/API/PerformanceLongTaskTiming).

`TaskAttributionTiming` inherits from {{domxref("PerformanceEntry")}}.

{{InheritanceDiagram}}

## Instance properties

This interface extends the following {{domxref("PerformanceEntry")}} properties for event timing performance entry types by qualifying them as follows:

- {{domxref("PerformanceEntry.duration")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Always returns `0`, as `duration` is not applicable for this interface.
- {{domxref("PerformanceEntry.entryType")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Always returns `taskattribution`.
- {{domxref("PerformanceEntry.name")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Always returns `"unknown"`.
- {{domxref("PerformanceEntry.startTime")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Always returns `0`.

This interface also supports the following properties:

- {{domxref('TaskAttributionTiming.containerType')}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns the type of frame container, one of `iframe`, `embed`, or `object`.
- {{domxref('TaskAttributionTiming.containerSrc')}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns the container's `src` attribute.
- {{domxref('TaskAttributionTiming.containerId')}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns the container's `id` attribute.
- {{domxref('TaskAttributionTiming.containerName')}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns the container's `name` attribute.

## Instance methods

- {{domxref("TaskAttributionTiming.toJSON()")}} {{Experimental_Inline}}
  - : Returns a JSON representation of the `TaskAttributionTiming` object.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("PerformanceLongTaskTiming")}}
