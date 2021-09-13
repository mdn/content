---
title: Window.performance
slug: Web/API/Window/performance
tags:
  - API
  - HTML DOM
  - High Resolution Time
  - High Resolution Time API
  - Navigation Timing
  - Navigation Timing API
  - Optimization
  - Performance
  - Property
  - Reference
  - Telemetry
  - Window
browser-compat: api.Window.performance
---
{{APIRef("High Resolution Time")}}

The {{domxref("Window")}} interface's **`performance`**
property returns a {{domxref("Performance")}} object, which can be used to gather
performance information about the current document. It serves as the point of exposure
for the Performance Timeline API, the High Resolution Time API, the [Navigation Timing API](/en-US/docs/Web/API/Navigation_timing_API), the [User Timing API](/en-US/docs/Web/API/User_Timing_API), and the [Resource Timing API](/en-US/docs/Web/API/Resource_Timing_API).

## Syntax

```js
performanceData = window.performance;
```

### Value

A {{domxref("Performance")}} object offering access to the performance and
timing-related information offered by the APIs it exposes.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
