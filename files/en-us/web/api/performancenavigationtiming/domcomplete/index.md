---
title: "PerformanceNavigationTiming: domComplete property"
short-title: domComplete
slug: Web/API/PerformanceNavigationTiming/domComplete
page-type: web-api-instance-property
browser-compat: api.PerformanceNavigationTiming.domComplete
---

{{APIRef("Performance API")}}

The **`domComplete`** read-only property returns a {{domxref("DOMHighResTimeStamp")}} representing the time immediately before the user agent sets the document's [`readyState`](/en-US/docs/Web/API/Document/readyState) to `"complete"`.

See also the `complete` state of {{domxref("Document.readyState")}} which corresponds to this property and refers to the state in which the document and all sub-resources have finished loading. The state also indicates that the {{domxref("Window/load_event", "load")}} event is about to fire.

## Value

A {{domxref("DOMHighResTimeStamp")}} representing the time immediately before the user agent sets the document's [`readyState`](/en-US/docs/Web/API/Document/readyState) to `"complete"`.

## Examples

### Logging DOM completion time

The `domComplete` property can be used to log the time when the DOM is complete.

Example using a {{domxref("PerformanceObserver")}}, which notifies of new `navigation` performance entries as they are recorded in the browser's performance timeline. Use the `buffered` option to access entries from before the observer creation.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    console.log(`${entry.name}: domComplete time: ${entry.domComplete}ms`);
  });
});

observer.observe({ type: "navigation", buffered: true });
```

Example using {{domxref("Performance.getEntriesByType()")}}, which only shows `navigation` performance entries present in the browser's performance timeline at the time you call this method:

```js
const entries = performance.getEntriesByType("navigation");
entries.forEach((entry) => {
  console.log(`${entry.name}: domComplete time: ${entry.domComplete}ms`);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Document.readyState")}}
