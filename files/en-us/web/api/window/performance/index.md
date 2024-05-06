---
title: "Window: performance property"
short-title: performance
slug: Web/API/Window/performance
page-type: web-api-instance-property
browser-compat: api.performance
---

{{APIRef("Performance API")}}

The **`performance`** property of the {{domxref("Window")}} interface returns a {{domxref("Performance")}} object, which can be used to gather performance information about code running in the window's scope.

Performance entries are per context. If you create a mark on the main thread (or other worker), you cannot see it in a worker thread, and vice versa.

## Value

A {{domxref("Performance")}} object offering access to performance and timing-related information about code running in the window's scope.

## Performance API availability

The following table provides an overview about the availability of the performance APIs in window and worker contexts.

| API                                                        | Window | Worker |
| ---------------------------------------------------------- | ------ | ------ |
| {{domxref("LargestContentfulPaint")}}                      | x      |        |
| {{domxref("LayoutShift")}}                                 | x      |        |
| {{domxref("LayoutShiftAttribution")}}                      | x      |        |
| {{domxref("Performance")}}                                 | x      | x      |
| {{domxref("PerformanceElementTiming")}}                    | x      |        |
| {{domxref("PerformanceEntry")}}                            | x      | x      |
| {{domxref("PerformanceEventTiming")}}                      | x      |        |
| {{domxref("PerformanceLongTaskTiming")}}                   | x      |        |
| {{domxref("PerformanceMark")}}                             | x      | x      |
| {{domxref("PerformanceMeasure")}}                          | x      | x      |
| {{domxref("PerformanceNavigation")}} {{deprecated_inline}} | x      |        |
| {{domxref("PerformanceNavigationTiming")}}                 | x      |        |
| {{domxref("PerformanceObserver")}}                         | x      | x      |
| {{domxref("PerformanceObserverEntryList")}}                | x      | x      |
| {{domxref("PerformancePaintTiming")}}                      | x      |        |
| {{domxref("PerformanceResourceTiming")}}                   | x      | x      |
| {{domxref("PerformanceServerTiming")}}                     | x      | x      |
| {{domxref("PerformanceTiming")}} {{deprecated_inline}}     | x      |        |
| {{domxref("TaskAttributionTiming")}}                       | x      |        |
| {{domxref("VisibilityStateEntry")}}                        | x      |        |

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WorkerGlobalScope.performance")}}
