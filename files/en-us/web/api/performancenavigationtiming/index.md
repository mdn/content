---
title: PerformanceNavigationTiming
slug: Web/API/PerformanceNavigationTiming
page-type: web-api-interface
tags:
  - API
  - Interface
  - Navigation Timing API
  - Performance Timeline API
  - Reference
  - Web Performance
browser-compat: api.PerformanceNavigationTiming
---

{{APIRef("Performance API")}}

The **`PerformanceNavigationTiming`** interface provides methods and properties to store and retrieve metrics regarding the browser's document navigation events. For example, this interface can be used to determine how much time it takes to load or unload a document.

Only the current document is included in the performance timeline, so there is only one `PerformanceNavigationTiming` object in the performance timeline. It inherits all of the properties and methods from {{domxref("PerformanceResourceTiming")}} and {{domxref("PerformanceEntry")}}.

{{InheritanceDiagram}}

The following diagram shows all of the timestamp properties defined in `PerformanceNavigationTiming`.

![Timestamp diagram listing timestamps in the order in which they are recorded for the fetching of a document](timestamp-diagram.svg)

## Instance properties

This interface extends the following {{domxref('PerformanceEntry')}} properties for navigation performance entry types by qualifying and constraining them as follows:

- {{domxref("PerformanceEntry.entryType")}} {{ReadOnlyInline}}
  - : Returns `"navigation"`.
- {{domxref("PerformanceEntry.name")}} {{ReadOnlyInline}}
  - : Returns the [document's URL](https://dom.spec.whatwg.org/#concept-document-url).
- {{domxref("PerformanceEntry.startTime")}} {{ReadOnlyInline}}
  - : Returns a {{domxref("DOMHighResTimeStamp")}} with a value of "`0`".
- {{domxref("PerformanceEntry.duration")}} {{ReadOnlyInline}}
  - : Returns a {{domxref("DOMHighResTimeStamp","timestamp")}} that is the difference between the {{domxref("PerformanceNavigationTiming.loadEventEnd")}} and {{domxref("PerformanceEntry.startTime")}} properties.

This interface also extends following {{domxref('PerformanceResourceTiming')}} properties for navigation performance entry types by qualifying and constraining them as follows:

- {{domxref('PerformanceResourceTiming.initiatorType')}} {{ReadOnlyInline}}
  - : Returns `"navigation"`.

The interface also supports the following properties:

- {{domxref('PerformanceNavigationTiming.domComplete')}} {{ReadOnlyInline}}
  - : A {{domxref("DOMHighResTimeStamp")}} representing a time value equal to the time immediately before the browser sets the current document readiness of the current document to [`complete`](/en-US/docs/Web/API/Document/readyState).
- {{domxref('PerformanceNavigationTiming.domContentLoadedEventEnd')}} {{ReadOnlyInline}}
  - : A {{domxref("DOMHighResTimeStamp")}} representing the time value equal to the time immediately after the current document's [`DOMContentLoaded`](/en-US/docs/Web/API/Document/DOMContentLoaded_event)) event completes.
- {{domxref('PerformanceNavigationTiming.domContentLoadedEventStart')}} {{ReadOnlyInline}}
  - : A {{domxref("DOMHighResTimeStamp")}} representing the time value equal to the time immediately before the user agent fires the [`DOMContentLoaded`](/en-US/docs/Web/API/Document/DOMContentLoaded_event) event at the current document.
- {{domxref('PerformanceNavigationTiming.domInteractive')}} {{ReadOnlyInline}}
  - : A {{domxref("DOMHighResTimeStamp")}} representing a {{domxref("DOMHighResTimeStamp","timestamp")}} representing the time value equal to the time immediately before the user agent sets the current document readiness of the current document to [`interactive`](/en-US/docs/Web/API/Document/readyState).
- {{domxref('PerformanceNavigationTiming.loadEventEnd')}} {{ReadOnlyInline}}
  - : A {{domxref("DOMHighResTimeStamp")}} representing the time when the load event of the current document is completed.
- {{domxref('PerformanceNavigationTiming.loadEventStart')}} {{ReadOnlyInline}}
  - : A {{domxref("DOMHighResTimeStamp")}} representing the time value equal to the time immediately before the load event of the current document is fired.
- {{domxref('PerformanceNavigationTiming.redirectCount')}} {{ReadOnlyInline}}
  - : A number representing the number of redirects since the last non-redirect navigation under the current browsing context.
- {{domxref('PerformanceNavigationTiming.type')}} {{ReadOnlyInline}}
  - : A string representing the navigation type. Either "`navigate`", "`reload`", "`back_forward`" or "`prerender`".
- {{domxref('PerformanceNavigationTiming.unloadEventEnd')}} {{ReadOnlyInline}}
  - : A {{domxref("DOMHighResTimeStamp")}} representing the time value equal to the time immediately after the user agent finishes the unload event of the previous document.
- {{domxref('PerformanceNavigationTiming.unloadEventStart')}} {{ReadOnlyInline}}
  - : A {{domxref("DOMHighResTimeStamp")}} representing the time value equal to the time immediately before the user agent starts the unload event of the previous document.

## Instance methods

- {{domxref("PerformanceNavigationTiming.toJSON()")}}
  - : Returns a JSON representation of the `PerformanceNavigationTiming` object.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Performance.navigation")}}
- {{domxref("PerformanceNavigation")}}
