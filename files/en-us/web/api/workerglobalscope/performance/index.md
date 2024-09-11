---
title: "WorkerGlobalScope: performance property"
short-title: performance
slug: Web/API/WorkerGlobalScope/performance
page-type: web-api-instance-property
browser-compat: api.performance
---

{{APIRef("Performance API")}}{{AvailableInWorkers("worker")}}

The **`performance`** property of the {{domxref("WorkerGlobalScope")}} interface returns a {{domxref("Performance")}} object, which can be used to gather performance information about code running in the worker's scope.

Performance entries are per context. If you create a mark on a worker thread, you will not see it in the main thread or any other workers.

Note that only the following performance interfaces are available in worker contexts:

- {{domxref("Performance")}}
- {{domxref("PerformanceEntry")}}
- {{domxref("PerformanceMark")}}
- {{domxref("PerformanceMeasure")}}
- {{domxref("PerformanceObserver")}}
- {{domxref("PerformanceObserverEntryList")}}
- {{domxref("PerformanceResourceTiming")}}
- {{domxref("PerformanceServerTiming")}}

## Value

A {{domxref("Performance")}} object offering access to performance and timing-related information for the context it is called on.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Window.performance")}}
