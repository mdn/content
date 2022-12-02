---
title: PerformanceNavigationTiming.domComplete
slug: Web/API/PerformanceNavigationTiming/domComplete
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - Web Performance
browser-compat: api.PerformanceNavigationTiming.domComplete
---

{{APIRef("Performance API")}}

The **`domComplete`** read-only property returns a {{domxref("DOMHighResTimeStamp","timestamp")}} representing the time value equal to the time immediately before the user agent sets the current document readiness of the current document to [`complete`](/en-US/docs/Web/API/Document/readyState).

See also the `complete` state of {{domxref("Document.readyState")}} which corresponds to this property and refers to the state in which the document and all sub-resources have finished loading. The state also indicates that the {{domxref("Window/load_event", "load")}} event is about to fire.

## Value

A {{domxref("DOMHighResTimeStamp","timestamp")}} representing a time value equal to the time immediately before the user agent sets the current document readiness of the current document to [`complete`](/en-US/docs/Web/API/Document/readyState).

## Examples

### Logging DOM completion time

The following example logs the time when the DOM is complete.

```js
const resources = performance.getEntriesByType("navigation");
resources.forEach((entry) => {
  console.log(entry.domComplete);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Document.readyState")}}
