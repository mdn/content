---
title: Navigation timing
slug: Web/API/Performance_API/Navigation_timing
page-type: web-api-overview
---

{{DefaultAPISidebar("Performance API")}}

Navigation Timing is part of the Performance API and provides metrics associated with navigating from one page to another. For example, you can determine how much time it takes to load or unload a document, or log the time it took until {{Glossary("DOM")}} construction has finished and interaction with the DOM is possible.

Only the current document is included, so usually there is only one {{domxref("PerformanceNavigationTiming")}} object to observe. It extends the {{domxref("PerformanceEntry")}} interface with the {{domxref("PerformanceEntry.entryType","entryType")}} of `"navigation"` and also inherits from {{domxref("PerformanceResourceTiming")}}, so all of the timestamps from the process of fetching the document are available as well.

{{InheritanceDiagram("PerformanceNavigationTiming")}}

## Navigation timestamps

![Timestamp diagram listing timestamps in the order in which they are recorded for the fetching of a document](https://mdn.github.io/shared-assets/images/diagrams/api/performance/timestamp-diagram.svg)
Figure 1. Navigation timestamps ([source](https://w3c.github.io/navigation-timing/#process)).

The document navigation timestamps (in addition to those from [Resource Timing](/en-US/docs/Web/API/Performance_API/Resource_timing)) are:

1. {{domxref("PerformanceEntry.startTime","startTime")}}: Always 0.
2. {{domxref("PerformanceNavigationTiming.unloadEventStart","unloadEventStart")}}: (if there is a previous document) the timestamp immediately before the current document's [`unload`](/en-US/docs/Web/API/Window/unload_event) event handler starts.
3. {{domxref("PerformanceNavigationTiming.unloadEventEnd","unloadEventEnd")}}: (if there is a previous document) the timestamp immediately after the current document's [`unload`](/en-US/docs/Web/API/Window/unload_event) event handler completes.
4. {{domxref("PerformanceNavigationTiming.domInteractive","domInteractive")}}: timestamp when DOM construction is finished and interaction with it from JavaScript is possible.
5. {{domxref("PerformanceNavigationTiming.domContentLoadedEventStart","domContentLoadedEventStart")}}: timestamp immediately before the current document's [`DOMContentLoaded`](/en-US/docs/Web/API/Document/DOMContentLoaded_event) event handler starts.
6. {{domxref("PerformanceNavigationTiming.domContentLoadedEventEnd","domContentLoadedEventEnd")}}: timestamp immediately after the current document's [`DOMContentLoaded`](/en-US/docs/Web/API/Document/DOMContentLoaded_event) event handler completes.
7. {{domxref("PerformanceNavigationTiming.domComplete","domComplete")}}: timestamp when the document and all sub-resources have finished loading.
8. {{domxref("PerformanceNavigationTiming.loadEventStart","loadEventStart")}}: timestamp immediately before the current document's [`load`](/en-US/docs/Web/API/Window/load_event) event handler starts.
9. {{domxref("PerformanceNavigationTiming.loadEventEnd","loadEventEnd")}}: timestamp immediately after the current document's [`load`](/en-US/docs/Web/API/Window/load_event) event handler completes.

## Other properties

The {{domxref("PerformanceNavigationTiming")}} interface provides additional properties such as {{domxref("PerformanceNavigationTiming.redirectCount","redirectCount")}} returning the number of redirects and {{domxref("PerformanceNavigationTiming.type","type")}} indicating the type of navigation.

## Example

The `domContentLoadedEventEnd` and `domContentLoadedEventStart` timestamps can be used to measure how long it takes to process the [`DOMContentLoaded`](/en-US/docs/Web/API/Document/DOMContentLoaded_event) event handler.

This example uses a {{domxref("PerformanceObserver")}}, which notifies the caller about new `navigation` performance entries as they are recorded in the browser's performance timeline. The example uses the `buffered` option to access entries that were recorded before the observer was created.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    const domContentLoadedTime =
      entry.domContentLoadedEventEnd - entry.domContentLoadedEventStart;
    console.log(
      `${entry.name}: DOMContentLoaded processing time: ${domContentLoadedTime}ms`,
    );
  });
});

observer.observe({ type: "navigation", buffered: true });
```

For more examples, see the property pages in the {{domxref("PerformanceNavigationTiming")}} reference documentation.

## See also

- {{domxref("PerformanceNavigationTiming")}}
- {{domxref("PerformanceResourceTiming")}}
