---
title: Navigation Timing API
slug: Web/API/Navigation_timing_API
page-type: web-api-overview
tags:
  - API
  - Navigation Timing
  - Navigation Timing API
  - Optimization
  - Overview
  - Performance
  - Timing
  - Web
  - Web Performance
browser-compat:
  - api.PerformanceNavigationTiming
---
{{DefaultAPISidebar("Navigation Timing")}}

The **Navigation Timing API** provides data that can be used to measure the performance of a web site. Unlike JavaScript-based libraries that have historically been used to collect similar information, the Navigation Timing API can be much more accurate and reliable.

> **Note:** This article currently describes Navigation Timing Level 1. There is a specification for Level 2, but it is not yet covered here.

## Concepts and usage

You can use the Navigation Timing API to gather performance data on the client side, which you can then transmit to a server using {{domxref("XMLHttpRequest")}} or other techniques.

This API lets you measure data that was previously difficult to obtain, such as the amount of time needed to unload the previous page, how long domain lookups take, the total time spent executing the window's {{domxref("Window/load_event", "load")}} handler, and so forth.

## Interfaces

- {{domxref("Performance")}}
  - : The {{domxref("window.performance")}} property returns a `Performance` object. While this interface is defined by the High Resolution Time API, the Navigation Timing API adds two properties: {{domxref("Performance.timing", "timing")}} and {{domxref("Performance.navigation", "navigation")}}, of the types below.
- {{domxref("PerformanceNavigationTiming")}}
  - : Provides methods and properties to store and retrieve metrics regarding the browser's document navigation events. For example, this interface can be used to determine how much time it takes to load or unload a document.
- {{domxref("PerformanceTiming")}} {{deprecated_inline}}
  - : Used as the type for the value of {{domxref("Performance.timing", "timing")}}, objects of this type contain timing information that can provide insight into web page performance.
- {{domxref("PerformanceNavigation")}} {{deprecated_inline}}
  - : The type used to return the value of {{domxref("Performance.navigation", "navigation")}}, which contains information explaining the context of the load operation described by this `Performance` instance.

The Navigation Timing API can be used to gather performance data on the client side to be sent to a server via XHR as well as measure data that was very difficult to measure by other means such as time to unload a previous page, domain look up time, `window.onload` total time, etc.

## Examples

### Calculate the total page load time

To compute the total amount of time it took to load the page, you can use the following code:

```js
const perfData = window.performance.timing;
const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
```

This subtracts the time at which navigation began ({{domxref("PerformanceTiming.navigationStart", "navigationStart")}}) from the time at which the {{domxref("Window/load_event", "load")}} event handler returns ({{domxref("PerformanceTiming.loadEventEnd", "loadEventEnd")}}). This gives you the perceived page load time.

### Calculate request response time

You can calculate the time elapsed between the beginning of a request and the completion of getting the response using code like this:

```js
const connectTime = perfData.responseEnd - perfData.requestStart;
```

Here, the time at which the request was initiated ({{domxref("PerformanceTiming.requestStart", "requestStart")}}). from the time at which the response was finished being received ({{domxref("PerformanceTiming.responseEnd", "responseEnd")}}).

### Calculate page render time

As another example of an interesting piece of data you can obtain using the Navigation Timing API that you can't otherwise easily get, you can get the amount of time it took to render the page:

```js
const renderTime = perfData.domComplete - perfData.domLoading;
```

This is obtained by starting with the time at which loading of the DOM and its dependencies is complete ({{domxref("PerformanceTiming.domComplete", "domComplete")}}) and subtracting from it the time at which parsing of the DOM began ({{domxref("PerformanceTiming.domLoading", "domLoading")}}).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
