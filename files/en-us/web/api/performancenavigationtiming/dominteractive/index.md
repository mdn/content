---
title: "PerformanceNavigationTiming: domInteractive property"
short-title: domInteractive
slug: Web/API/PerformanceNavigationTiming/domInteractive
page-type: web-api-instance-property
browser-compat: api.PerformanceNavigationTiming.domInteractive
---

{{APIRef("Performance API")}}

The **`domInteractive`** read-only property returns a {{domxref("DOMHighResTimeStamp")}} representing the time immediately before the user agent sets the document's [`readyState`](/en-US/docs/Web/API/Document/readyState) to `"interactive"`.

> **Note:** This property is **not** {{Glossary("Time to interactive")}} (TTI). This property refers to the time when DOM construction is finished and interaction to it from JavaScript is possible. See also the `interactive` state of {{domxref("Document.readyState")}} which corresponds to this property.

Measuring DOM processing time may not be consequential unless your site has a very large HTML source to a construct a Document Object Model from.

If there is no parser-blocking JavaScript then the [`DOMContentLoaded`](/en-US/docs/Web/API/Document/DOMContentLoaded_event) event (see [`domContentLoadedEventStart`](/en-US/docs/Web/API/PerformanceNavigationTiming/domContentLoadedEventStart) for the timestamp) will fire immediately after `domInteractive`.

## Value

A {{domxref("DOMHighResTimeStamp")}} representing the time immediately before the user agent sets the document's [`readyState`](/en-US/docs/Web/API/Document/readyState) to `"interactive"`.

## Examples

### Logging DOM interaction time

The `domInteractive` property can be used to log the time when the DOM construction has finished and interaction with it is possible.

Example using a {{domxref("PerformanceObserver")}}, which notifies of new `navigation` performance entries as they are recorded in the browser's performance timeline. Use the `buffered` option to access entries from before the observer creation.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    console.log(
      `${entry.name}: domInteractive time: ${entry.domInteractive}ms`,
    );
  });
});

observer.observe({ type: "navigation", buffered: true });
```

Example using {{domxref("Performance.getEntriesByType()")}}, which only shows `navigation` performance entries present in the browser's performance timeline at the time you call this method:

```js
const entries = performance.getEntriesByType("navigation");
entries.forEach((entry) => {
  console.log(`${entry.name}: domInteractive time: ${entry.domInteractive}ms`);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Document.readyState")}}
