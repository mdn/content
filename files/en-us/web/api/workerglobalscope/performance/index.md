---
title: "WorkerGlobalScope: performance property"
short-title: performance
slug: Web/API/WorkerGlobalScope/performance
page-type: web-api-instance-property
browser-compat: api.performance
---

{{APIRef("Performance API")}}

The **`performance`** property of the {{domxref("WorkerGlobalScope")}} interface returns a {{domxref("Performance")}} object, which can be used to gather performance information about the context it is called in worker.

Performance entries are per context. If you create a mark on the main thread (or other worker), you cannot see it in a worker thread, and vice versa.

## Value

A {{domxref("Performance")}} object offering access to performance and timing-related information for the context it is called on worker.

## Performance API availability

See the table which provides an overview about the availability of the performance APIs in window and worker contexts at {{domxref("Window.performance")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Window.performance")}}
