---
title: PerformanceNavigationTiming.domInteractive
slug: Web/API/PerformanceNavigationTiming/domInteractive
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - Web Performance
browser-compat: api.PerformanceNavigationTiming.domInteractive
---

{{APIRef("Performance API")}}

The **`domInteractive`** read-only property returns a {{domxref("DOMHighResTimeStamp","timestamp")}} representing the time value equal to the time immediately before the user agent sets the current document readiness of the current document to [`interactive`](/en-US/docs/Web/API/Document/readyState).

> **Note:** This property is **not** {{Glossary("Time to interactive")}} (TTI). This property refers to the time when DOM construction is finished and interaction to it from JavaScript is possible. See also the `interactive` state of {{domxref("Document.readyState")}} which corresponds to this property.

Measuring DOM processing time may not be consequential unless your site has a very large HTML source to a construct a Document Object Model from.

If there is no parser-blocking JavaScript then the [`DOMContentLoaded`](/en-US/docs/Web/API/Document/DOMContentLoaded_event) event (see [`domContentLoadedEventStart`](/en-US/docs/Web/API/PerformanceNavigationTiming/domContentLoadedEventStart) for the timestamp) will fire immediately after `domInteractive`.

## Value

A {{domxref("DOMHighResTimeStamp","timestamp")}} representing the time value equal to the time immediately before the user agent sets the current document readiness of the current document to [`interactive`](/en-US/docs/Web/API/Document/readyState).

## Examples

### Logging DOM interaction time

The following example logs the time when the DOM construction has finished and interaction with it is possible.

```js
const resources = performance.getEntriesByType("navigation");
resources.forEach((entry) => {
  console.log(entry.domInteractive);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Document.readyState")}}
