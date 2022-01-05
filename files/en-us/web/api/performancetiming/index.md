---
title: PerformanceTiming
slug: Web/API/PerformanceTiming
tags:
  - API
  - Backwards compatibility
  - Deprecated
  - Interface
  - Navigation Timing
  - Navigation Timing API
  - Optimization
  - Performance
  - Reference
  - Timing
  - legacy
browser-compat: api.PerformanceTiming
---
{{APIRef("Navigation Timing")}}{{Deprecated_Header}}

> **Warning:** This interface is deprecated in the [Navigation Timing Level 2 specification](https://w3c.github.io/navigation-timing/#obsolete). Please use the {{domxref("PerformanceNavigationTiming")}} interface instead.

The **`PerformanceTiming`** interface is a legacy interface kept for backwards compatibility and contains properties that offer performance timing information for various events which occur during the loading and use of the current page. You get a `PerformanceTiming` object describing your page using the {{domxref("Performance.timing", "window.performance.timing")}} property.

## Properties

_The `PerformanceTiming` interface doesn't inherit any properties._

These properties each describe the time at which a particular point in the page loading process was reached. Some correspond to DOM events; others describe the time at which internal browser operations of interest took place.

Each time is provided as a {{interwiki("wikipedia", "Unix_time", "Unix time")}} (`unsigned long long`) representing the moment, in milliseconds since the UNIX epoch.

These properties are listed in the order in which they occur during the navigation process.

- {{deprecated_inline}} {{domxref("PerformanceTiming.navigationStart")}} {{readonlyInline}}
  - : When the prompt for unload terminates on the previous document in the same browsing context. If there is no previous document, this value will be the same as `PerformanceTiming.fetchStart`.
- {{deprecated_inline}} {{domxref("PerformanceTiming.unloadEventStart")}} {{readonlyInline}}
  - : When the {{event("unload")}} event has been thrown, indicating the time at which the previous document in the window began to unload. If there is no previous document, or if the previous document or one of the needed redirects is not of the same origin, the value returned is `0`.
- {{deprecated_inline}} {{domxref("PerformanceTiming.unloadEventEnd")}} {{readonlyInline}}
  - : When the {{event("unload")}} event handler finishes. If there is no previous document, or if the previous document, or one of the needed redirects, is not of the same origin, the value returned is `0`.
- {{deprecated_inline}} {{domxref("PerformanceTiming.redirectStart")}} {{readonlyInline}}
  - : When the first HTTP redirect starts. If there is no redirect, or if one of the redirects is not of the same origin, the value returned is `0`.
- {{deprecated_inline}} {{domxref("PerformanceTiming.redirectEnd")}} {{readonlyInline}}
  - : When the last HTTP redirect is completed, that is when the last byte of the HTTP response has been received. If there is no redirect, or if one of the redirects is not of the same origin, the value returned is `0`.
- {{deprecated_inline}} {{domxref("PerformanceTiming.fetchStart")}} {{readonlyInline}}
  - : When the browser is ready to fetch the document using an HTTP request. This moment is _before_ the check to any application cache.
- {{deprecated_inline}} {{domxref("PerformanceTiming.domainLookupStart")}} {{readonlyInline}}
  - : When the domain lookup starts. If a persistent connection is used, or the information is stored in a cache or a local resource, the value will be the same as `PerformanceTiming.fetchStart`.
- {{deprecated_inline}} {{domxref("PerformanceTiming.domainLookupEnd")}} {{readonlyInline}}
  - : When the domain lookup is finished. If a persistent connection is used, or the information is stored in a cache or a local resource, the value will be the same as `PerformanceTiming.fetchStart`.
- {{deprecated_inline}} {{domxref("PerformanceTiming.connectStart")}} {{readonlyInline}}
  - : When the request to open a connection is sent to the network. If the transport layer reports an error and the connection establishment is started again, the last connection establishment start time is given. If a persistent connection is used, the value will be the same as `PerformanceTiming.fetchStart`.
- {{deprecated_inline}} {{domxref("PerformanceTiming.connectEnd")}} {{readonlyInline}}
  - : When the connection is opened network. If the transport layer reports an error and the connection establishment is started again, the last connection establishment end time is given. If a persistent connection is used, the value will be the same as `PerformanceTiming.fetchStart`. A connection is considered as opened when all secure connection handshake, or SOCKS authentication, is terminated.
- {{deprecated_inline}} {{domxref("PerformanceTiming.secureConnectionStart")}} {{readonlyInline}}
  - : When the secure connection handshake starts. If no such connection is requested, it returns `0`.
- {{deprecated_inline}} {{domxref("PerformanceTiming.requestStart")}} {{readonlyInline}}
  - : When the browser sent the request to obtain the actual document, from the server or from a cache. If the transport layer fails after the start of the request and the connection is reopened, this property will be set to the time corresponding to the new request.
- {{deprecated_inline}} {{domxref("PerformanceTiming.responseStart")}} {{readonlyInline}}
  - : When the browser received the first byte of the response, from the server from a cache, or from a local resource.
- {{deprecated_inline}} {{domxref("PerformanceTiming.responseEnd")}} {{readonlyInline}}
  - : When the browser received the last byte of the response, or when the connection is closed if this happened first, from the server, the cache, or from a local resource.
- {{deprecated_inline}} {{domxref("PerformanceTiming.domLoading")}} {{readonlyInline}}
  - : When the parser started its work, that is when its {{domxref("Document.readyState")}} changes to `'loading'` and the corresponding {{event("readystatechange")}} event is thrown.
- {{deprecated_inline}} {{domxref("PerformanceTiming.domInteractive")}} {{readonlyInline}}
  - : When the parser finished its work on the main document, that is when its {{domxref("Document.readyState")}} changes to `'interactive'` and the corresponding {{event("readystatechange")}} event is thrown.
- {{deprecated_inline}} {{domxref("PerformanceTiming.domContentLoadedEventStart")}} {{readonlyInline}}
  - : Right before the parser sent the {{event("DOMContentLoaded")}} event, that is right after all the scripts that need to be executed right after parsing have been executed.
- {{deprecated_inline}} {{domxref("PerformanceTiming.domContentLoadedEventEnd")}} {{readonlyInline}}
  - : Right after all the scripts that need to be executed as soon as possible, in order or not, have been executed.
- {{deprecated_inline}} {{domxref("PerformanceTiming.domComplete")}} {{readonlyInline}}
  - : When the parser finished its work on the main document, that is when its {{domxref("Document.readyState")}} changes to `'complete'` and the corresponding {{event("readystatechange")}} event is thrown.
- {{deprecated_inline}} {{domxref("PerformanceTiming.loadEventStart")}} {{readonlyInline}}
  - : When the {{event("load")}} event was sent for the current document. If this event has not yet been sent, it returns `0.`
- {{deprecated_inline}} {{domxref("PerformanceTiming.loadEventEnd")}} {{readonlyInline}}
  - : When the {{event("load")}} event handler terminated, that is when the load event is completed. If this event has not yet been sent, or is not yet completed, it returns `0.`

## Methods

_The `PerformanceTiming`_ _interface doesn't inherit any methods._

- {{deprecated_inline}} {{domxref("PerformanceTiming.toJSON()")}} {{non-Standard_Inline}}
  - : Returns a [JSON object](/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON) representing this `PerformanceTiming` object.

## Specifications

This feature is no longer on track to become a standard, as the [Navigation Timing specification](https://w3c.github.io/navigation-timing/#obsolete) has marked it as deprecated.
Use the {{domxref("PerformanceNavigationTiming")}} interface instead.

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("Performance.timing")}} property that creates such an object.
