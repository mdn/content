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
{{APIRef("Navigation Timing")}}

The **`PerformanceNavigationTiming`** interface provides methods and properties to store and retrieve metrics regarding the browser's document navigation events. For example, this interface can be used to determine how much time it takes to load or unload a document.

{{InheritanceDiagram}}

## Properties

This interface extends the following {{domxref('PerformanceEntry')}} properties for navigation performance entry types by qualifying and constraining them as follows:

- {{domxref("PerformanceEntry.entryType")}} {{ReadOnlyInline}}
  - : Returns `"navigation"`.
- {{domxref("PerformanceEntry.name")}} {{ReadOnlyInline}}
  - : Returns the [document's address](https://dom.spec.whatwg.org/#concept-document-url).
- {{domxref("PerformanceEntry.startTime")}} {{ReadOnlyInline}}
  - : Returns a {{domxref("DOMHighResTimeStamp")}} with a value of "`0`".
- {{domxref("PerformanceEntry.duration")}} {{ReadOnlyInline}}
  - : Returns a {{domxref("DOMHighResTimeStamp","timestamp")}} that is the difference between the {{domxref("PerformanceNavigationTiming.loadEventEnd")}} and {{domxref("PerformanceEntry.startTime")}} properties.

This interface also extends following {{domxref('PerformanceResourceTiming')}} properties for navigation performance entry types by qualifying and constraining them as follows:

- {{domxref('PerformanceResourceTiming.initiatorType')}} {{ReadOnlyInline}}
  - : Returns `"navigation"`.

The interface also supports the following properties:

- {{domxref('PerformanceNavigationTiming.domComplete')}} {{ReadOnlyInline}}
  - : A {{domxref("DOMHighResTimeStamp")}} representing a time value equal to the time immediately before the browser sets the current document readiness of the current document to _[complete](https://html.spec.whatwg.org/multipage/syntax.html#the-end)_.
- {{domxref('PerformanceNavigationTiming.domContentLoadedEventEnd')}} {{ReadOnlyInline}}
  - : A {{domxref("DOMHighResTimeStamp")}} representing the time value equal to the time immediately after the current document's [DOMContentLoaded](https://html.spec.whatwg.org/multipage/syntax.html#the-end) event completes.
- {{domxref('PerformanceNavigationTiming.domContentLoadedEventStart')}} {{ReadOnlyInline}}
  - : A {{domxref("DOMHighResTimeStamp")}} representing the time value equal to the time immediately before the user agent fires the [DOMContentLoaded](https://html.spec.whatwg.org/multipage/syntax.html#the-end) event at the current document.
- {{domxref('PerformanceNavigationTiming.domInteractive')}} {{ReadOnlyInline}}
  - : A {{domxref("DOMHighResTimeStamp")}} representing a {{domxref("DOMHighResTimeStamp","timestamp")}} representing the time value equal to the time immediately before the user agent sets the current document readiness of the current document to [interactive](https://html.spec.whatwg.org/multipage/syntax.html#the-end).
- {{domxref('PerformanceNavigationTiming.loadEventEnd')}} {{ReadOnlyInline}}
  - : A {{domxref("DOMHighResTimeStamp")}} representing the time when the load event of the current document is completed.
- {{domxref('PerformanceNavigationTiming.loadEventStart')}} {{ReadOnlyInline}}
  - : A {{domxref("DOMHighResTimeStamp")}} representing the time value equal to the time immediately before the load event of the current document is fired.
- {{domxref('PerformanceNavigationTiming.redirectCount')}} {{ReadOnlyInline}}

  - : A number representing the number of redirects since the last non-redirect navigation under the current browsing context.

    If there was no redirect, or if the redirect was from another origin, and that origin does not permit it's timing information to be exposed to the current origin then the value will be 0.

- {{domxref('PerformanceNavigationTiming.requestStart')}} {{ReadOnlyInline}}
  - : A {{domxref("DOMHighResTimeStamp")}} representing the time immediately before the user agent starts requesting the resource from the server, or from relevant application caches or from local resources.
- {{domxref('PerformanceNavigationTiming.responseStart')}} {{ReadOnlyInline}}
  - : A {{domxref("DOMHighResTimeStamp")}} representing the time immediately after the user agent's HTTP parser receives the first byte of the response from relevant application caches, or from local resources or from the server.
- {{domxref('PerformanceNavigationTiming.type')}} {{ReadOnlyInline}}
  - : A string representing the navigation type. Must be: "`navigate`", "`reload`", "`back_forward`" or "`prerender`".
- {{domxref('PerformanceNavigationTiming.unloadEventEnd')}} {{ReadOnlyInline}}
  - : A {{domxref("DOMHighResTimeStamp")}} representing the time value equal to the time immediately after the user agent finishes the unload event of the previous document.
- {{domxref('PerformanceNavigationTiming.unloadEventStart')}} {{ReadOnlyInline}}
  - : A {{domxref("DOMHighResTimeStamp")}} representing the time value equal to the time immediately before the user agent starts the unload event of the previous document.

## Methods

- {{domxref("PerformanceNavigationTiming.toJSON()")}}
  - : Returns a string that is the JSON representation of the {{domxref("PerformanceNavigationTiming")}} object.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Performance.navigation")}}
- {{domxref("PerformanceNavigation")}}
