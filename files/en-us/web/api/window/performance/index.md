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

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WorkerGlobalScope.performance")}}
