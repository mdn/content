---
title: PerformanceNavigationTiming
slug: Web/API/PerformanceNavigationTiming
tags:
  - API
  - Interface
  - Navigation Timing API
  - Performance Timeline API
  - Reference
  - Web Performance
browser-compat: api.PerformanceNavigationTiming
---
{{APIRef("Navigation Timing")}}{{SeeCompatTable}}

The **`PerformanceNavigationTiming`** interface provides methods and properties to store and retrieve metrics regarding the browser's document navigation events. For example, this interface can be used to determine how much time it takes to load or unload a document.

{{InheritanceDiagram}}

## Properties

This interface extends the following {{domxref('PerformanceEntry')}} properties for navigation performance entry types by qualifying and constraining them as follows:

- {{domxref("PerformanceEntry.entryType")}} {{readonlyInline}}
  - : Returns `"navigation"`.
- {{domxref("PerformanceEntry.name")}} {{readonlyInline}}
  - : Returns the [document's address](https://dom.spec.whatwg.org/#concept-document-url).
- {{domxref("PerformanceEntry.startTime")}} {{readonlyInline}}
  - : Returns a {{domxref("DOMHighResTimeStamp")}} with a value of "`0`".
- {{domxref("PerformanceEntry.duration")}} {{readonlyInline}}
  - : Returns a {{domxref("DOMHighResTimeStamp","timestamp")}} that is the difference between the {{domxref("PerformanceNavigationTiming.loadEventEnd")}} and {{domxref("PerformanceEntry.startTime")}} properties.

This interface also extends following {{domxref('PerformanceResourceTiming')}} properties for navigation performance entry types by qualifying and constraining them as follows:

- {{domxref('PerformanceResourceTiming.initiatorType')}}{{readonlyInline}}
  - : Returns `"navigation"`.

The interface also supports the following properties:

- {{domxref('PerformanceNavigationTiming.domComplete')}} {{readonlyInline}}
  - : A {{domxref("DOMHighResTimeStamp")}} representing a time value equal to the time immediately before the browser sets the current document readiness of the current document to _[complete](https://html.spec.whatwg.org/multipage/syntax.html#the-end)_.
- {{domxref('PerformanceNavigationTiming.domContentLoadedEventEnd')}} {{readonlyInline}}
  - : A {{domxref("DOMHighResTimeStamp")}} representing the time value equal to the time immediately after the current document's [DOMContentLoaded](https://html.spec.whatwg.org/multipage/syntax.html#the-end) event completes.
- {{domxref('PerformanceNavigationTiming.domContentLoadedEventStart')}} {{readonlyInline}}
  - : A {{domxref("DOMHighResTimeStamp")}} representing the time value equal to the time immediately before the user agent fires the [DOMContentLoaded](https://html.spec.whatwg.org/multipage/syntax.html#the-end) event at the current document.
- {{domxref('PerformanceNavigationTiming.domInteractive')}} {{readonlyInline}}
  - : A {{domxref("DOMHighResTimeStamp")}} representing a {{domxref("DOMHighResTimeStamp","timestamp")}} representing the time value equal to the time immediately before the user agent sets the current document readiness of the current document to [interactive](https://html.spec.whatwg.org/multipage/syntax.html#the-end).
- {{domxref('PerformanceNavigationTiming.loadEventEnd')}} {{readonlyInline}}
  - : A {{domxref("DOMHighResTimeStamp")}} representing the time when the load event of the current document is completed.
- {{domxref('PerformanceNavigationTiming.loadEventStart')}} {{readonlyInline}}
  - : A {{domxref("DOMHighResTimeStamp")}} representing the time value equal to the time immediately before the load event of the current document is fired.
- {{domxref('PerformanceNavigationTiming.redirectCount')}} {{readonlyInline}}

  - : A number representing the number of redirects since the last non-redirect navigation under the current browsing context.

    If there was no redirect, or if the redirect was from another origin, and that origin does not permit it's timing information to be exposed to the current origin then the value will be 0.

- {{domxref('PerformanceNavigationTiming.requestStart')}} {{readonlyInline}}
  - : A {{domxref("DOMHighResTimeStamp")}} representing the time immediately before the user agent starts requesting the resource from the server, or from relevant application caches or from local resources.
- {{domxref('PerformanceNavigationTiming.responseStart')}} {{readonlyInline}}
  - : A {{domxref("DOMHighResTimeStamp")}} representing the time immediately after the user agent's HTTP parser receives the first byte of the response from relevant application caches, or from local resources or from the server.
- {{domxref('PerformanceNavigationTiming.type')}} {{readonlyInline}}
  - : A {{domxref("DOMString","string")}} representing the navigation type. Must be: "`navigate`", "`reload`", "`back_forward`" or "`prerender`".
- {{domxref('PerformanceNavigationTiming.unloadEventEnd')}} {{readonlyInline}}
  - : A {{domxref("DOMHighResTimeStamp")}} representing the time value equal to the time immediately after the user agent finishes the unload event of the previous document.
- {{domxref('PerformanceNavigationTiming.unloadEventStart')}} {{readonlyInline}}
  - : A {{domxref("DOMHighResTimeStamp")}} representing the time value equal to the time immediately before the user agent starts the unload event of the previous document.

## Methods

- {{domxref("PerformanceNavigationTiming.toJSON()")}}
  - : Returns a {{domxref("DOMString")}} that is the JSON representation of the {{domxref("PerformanceNavigationTiming")}} object.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Performance.navigation")}}
- {{domxref("PerformanceNavigation")}}
