---
title: Performance API
slug: Web/API/Performance_API
page-type: web-api-overview
tags:
  - Guide
  - NeedsContent
  - Overview
  - Performance
  - Web Performance
spec-urls:
  - https://w3c.github.io/hr-time/
  - https://w3c.github.io/navigation-timing/
  - https://w3c.github.io/performance-timeline/
  - https://w3c.github.io/resource-timing/
  - https://w3c.github.io/user-timing/
---
{{DefaultAPISidebar("High Resolution Time")}}

The [High Resolution Time](https://www.w3.org/TR/hr-time/) standard defines a {{domxref("Performance")}} interface that supports client-side latency measurements within applications. The {{domxref("Performance")}} interfaces are considered _high resolution_ because they are accurate to a thousandth of a millisecond (subject to hardware or software constraints). The interfaces support a number of use cases including calculating frame-rates (potentially important in animations) and benchmarking (such as the time to load a resource).

Since a platform's _system clock_ is subject to various _skews_ (such as NTP adjustments), the interfaces support a _monotonic clock_ i.e. a clock that is always increasing. As such, the `Performance` API defines a {{domxref("DOMHighResTimeStamp")}} type rather than using the {{jsxref("Date.now","Date.now()")}} interface.

## DOMHighResTimeStamp

The {{domxref("DOMHighResTimeStamp")}} type, as its name implies, represents a high resolution point in time. This type is a `double` and is used by the performance interfaces. The value could be a discrete point in time or the difference in time between two discrete points in time.

The unit of `DOMHighResTimeStamp` is milliseconds and should be accurate to 5 µs (microseconds). However, If the browser is unable to provide a time value accurate to 5 microseconds (because, for example, due to hardware or software constraints), the browser can represent the value as a time in milliseconds accurate to a millisecond.

## Methods

The {{domxref("Performance")}} interface has two methods. The {{domxref("Performance.now","now()")}} method returns a {{domxref("DOMHighResTimeStamp")}} whose value that depends on the {{domxref("PerformanceTiming.navigationStart","navigation start")}} and scope. If the scope is a window, the value is the time the browser context was created and if the scope is a {{domxref("Worker","worker")}}, the value is the time the worker was created.

The {{domxref("Performance.toJSON","toJSON()")}} method returns a serialization of the {{domxref("Performance")}} object, for those attributes that can be serialized.

## Properties

The {{domxref("Performance")}} interface has two properties. The {{domxref("Performance.timing","timing")}} property returns a {{domxref("PerformanceTiming")}} object containing latency-related performance information such as the start of navigation time, start and end times for redirects, start and end times for responses, etc.

The {{domxref("Performance.navigation","navigation")}} property returns a {{domxref("PerformanceNavigation")}} object representing the type of navigation that occurs in the given browsing context, such as the page was navigated to from history, the page was navigated to by following a link, etc.

## Interfaces

- {{domxref('Performance')}}
  - : Provides methods and properties containing timing-related performance information for the given page.
- {{domxref('PerformanceEntry')}}
  - : Provides methods and properties the encapsulate a single performance metric that is part of the performance timeline.
- {{domxref('PerformanceMark')}}
  - : An abstract interface for [performance entries](/en-US/docs/Web/API/PerformanceEntry) with an [entry type](/en-US/docs/Web/API/PerformanceEntry/entryType) of "`mark`". Entries of this type are created by calling [`performance.mark()`](/en-US/docs/Web/API/Performance/mark) to add a named [`DOMHighResTimeStamp`](/en-US/docs/Web/API/DOMHighResTimeStamp) (the mark) to the browser's performance timeline.
- {{domxref('PerformanceMeasure')}}
  - : An abstract interface for [performance entries](/en-US/docs/Web/API/PerformanceEntry) with an [entry type](/en-US/docs/Web/API/PerformanceEntry/entryType) of "`measure`". Entries of this type are created by calling [`performance.measure()`](/en-US/docs/Web/API/Performance/measure) to add a named [`DOMHighResTimeStamp`](/en-US/docs/Web/API/DOMHighResTimeStamp) (the measure) between two marks to the browser's performance timeline.
- {{domxref('PerformanceNavigationTiming')}}
  - : Provides methods and properties to store and retrieve [high resolution timestamps](/en-US/docs/Web/API/DOMHighResTimeStamp) or metrics regarding the browser's document navigation events.
- {{domxref('PerformanceObserver')}}
  - : Provides methods and properties used to observe performance measurement events and be notified of new [performance entries](/en-US/docs/Web/API/PerformanceEntry) as they are recorded in the browser's performance timeline.
- {{domxref('PerformanceResourceTiming')}}
  - : Provides methods and properties for retrieving and analyzing detailed network timing data regarding the loading of an application's resources.

## Specifications

{{Specifications}}

## Implementation status

As shown in the {{domxref("Performance")}} interface's [Browser Compatibility](/en-US/docs/Web/API/Performance#browser_compatibility) table, most of these interfaces are broadly implemented by desktop browsers.

To test your browser's support for the {{domxref("Performance")}} interface, run the [`perf-api-support`](https://mdn.github.io/dom-examples/performance-apis/perf-api-support.html) application.

## See also

- [A Primer for Web Performance Timing APIs](https://w3c.github.io/perf-timing-primer/)
