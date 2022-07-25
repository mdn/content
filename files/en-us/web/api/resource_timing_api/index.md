---
title: Resource Timing API
slug: Web/API/Resource_Timing_API
page-type: web-api-overview
tags:
  - API
  - Guide
  - HTTP
  - Overview
  - Performance
  - Resource Timing API
  - Timing
  - Web Performance
spec-urls: https://w3c.github.io/resource-timing/
---
{{DefaultAPISidebar("Resource Timing API")}}

The **`Resource Timing`** interfaces enable retrieving and analyzing detailed network timing data regarding the loading of an application's _resource(s)_. An application can use the timing metrics to determine, for example, the length of time it takes to load a specific resource, such as an {{domxref("XMLHttpRequest")}}, {{SVGElement("SVG","SVG element")}}, image, or script.

The interface's properties create a _resource loading timeline_ with {{domxref("DOMHighResTimeStamp","high-resolution timestamps", "", 1)}} for network events such as redirect start and end times, DNS lookup start and end times, request start, response start and end times, etc. The interface also includes other properties that provide data about the size of the fetched resource as well as the _type_ of resource that initiated the fetch.

This document provides an overview of the `Resource Timing` interfaces. For more details about the interfaces including examples see each interface's reference page, [Using the Resource Timing API](/en-US/docs/Web/API/Resource_Timing_API/Using_the_Resource_Timing_API), and the references in the [See also](#see_also) section. For a graphical representation of the resource timing processing model see the [resource timing phases](https://w3c.github.io/resource-timing/#process) figure.

{{AvailableInWorkers}}

The `PerformanceResourceTiming` interface extends the {{domxref("PerformanceEntry")}} for {{domxref("PerformanceEntry","performance entries", "", 1)}} which have an {{domxref("PerformanceEntry.entryType","entryType")}} of "`resource`".

## High-resolution timestamps

Several of the `Resource Timing` properties return _high-resolution timestamps_. These timestamps have a {{domxref("DOMHighResTimeStamp")}} type and as its name implies, they represent a high-resolution point in time. This type is a `double` and its value is a discrete point in time or the difference in time between two discrete points in time.

The unit of `DOMHighResTimeStamp` is milliseconds and should be accurate to 5 µs (microseconds). However, If the browser is unable to provide a time value accurate to 5 µs (because, for example, due to hardware or software constraints), the browser can represent a the value as a time in milliseconds accurate to a millisecond.

## Resource loading timestamps

An application can get timestamps for the various stages used to load a resource. The first property in the processing model is {{domxref("PerformanceEntry.startTime","startTime")}} which returns the timestamp immediately before the resource loading process begins. The {{domxref("PerformanceResourceTiming.fetchStart","fetchStart")}} timestamps follows and redirect processing (if applicable) and precedes DNS lookup. The next stages are {{domxref('PerformanceResourceTiming.connectStart','connectStart')}} and {{domxref('PerformanceResourceTiming.connectEnd','connectEnd')}} which are the timestamps immediately before and after connecting to the server, respectively. The last three timestamps are, in order: {{domxref('PerformanceResourceTiming.requestStart','requestStart')}} - the timestamp before the browser starts requesting the resource from the server; {{domxref('PerformanceResourceTiming.responseStart','responseStart')}} - the timestamp after the browser receives the first byte of the response from the server; and {{domxref('PerformanceResourceTiming.responseEnd','responseEnd')}} - the timestamp after the browser receives the last byte of the resource. If the resource is loaded via a secure connection a {{domxref('PerformanceResourceTiming.secureConnectionStart','secureConnectionStart')}} timestamp will be available between the connection start and end events.

> **Note:** When {{Glossary("CORS")}} is in effect, many of these values are returned as zero unless the server's access policy permits these values to be shared. This requires the server providing the resource to send the `Timing-Allow-Origin` HTTP response header with a value specifying the origin or origins which are allowed to get the restricted timestamp values.
>
> The properties which are returned as 0 by default when loading a resource from a domain other than the one of the web page itself: `redirectStart`, `redirectEnd`, `domainLookupStart`, `domainLookupEnd`, `connectStart`, `connectEnd`, `secureConnectionStart`, `requestStart`, and `responseStart`.

The {{domxref("PerformanceResourceTiming")}} interface also includes several network timing properties. The {{domxref("PerformanceResourceTiming.redirectStart","redirectStart")}} and {{domxref("PerformanceResourceTiming.redirectEnd","redirectEnd")}} properties return {{domxref("DOMHighResTimeStamp","timestamps")}} for redirect start and end times, respectively. Likewise, the {{domxref("PerformanceResourceTiming.domainLookupStart","domainLookupStart")}} and {{domxref("PerformanceResourceTiming.domainLookupEnd","domainLookupEnd")}} properties return {{domxref("DOMHighResTimeStamp","timestamps")}} for DNS lookup start and end times, respectively.

_This would be a nice place to have a diagram showing the relationships between these segments of the resource loading time._

## Resource size

The {{domxref("PerformanceResourceTiming")}} interface has three properties that can be used to obtain size data about a resource. The {{domxref('PerformanceResourceTiming.transferSize','transferSize')}} property returns the size (in octets) of the fetched resource including the response header fields plus the response payload body.

The {{domxref('PerformanceResourceTiming.encodedBodySize','encodedBodySize')}} property returns the size (in octets) received from the fetch (HTTP or cache), of the _payload body_, **before** removing any applied content-codings. {{domxref('PerformanceResourceTiming.decodedBodySize','decodedBodySize')}} returns the size (in octets) received from the fetch (HTTP or cache) of the _message body_, **after** removing any applied content-codings.

## Other properties

The {{domxref('PerformanceResourceTiming.nextHopProtocol','nextHopProtocol')}} property returns the _network protocol_ used to fetch the resource.

The {{domxref('PerformanceResourceTiming.initiatorType','initiatorType')}} property returns the _type_ of resource that initiated the performance entry such as "`css`" for a CSS resource, "`xmlhttprequest`" for an XMLHttpRequest and "`img`" for an image (such as a JPEG).

If the current context is a {{domxref("Worker","worker")}}, the {{domxref('PerformanceResourceTiming.workerStart','workerStart')}} property can be used to obtain a {{domxref("DOMHighResTimeStamp")}} when the worker was started.

## Methods

The Resource Timing API includes two methods that extend the {{domxref("Performance")}} interface. The {{domxref("Performance.clearResourceTimings","clearResourceTimings()")}} method removes all "`resource`" type performance entries from the browser's _resource_ performance entry buffer. The {{domxref("Performance.setResourceTimingBufferSize","setResourceTimingBufferSize()")}} method sets the resource performance entry buffer size to the specified number of resource {{domxref("PerformanceEntry","performance entries")}}.

The {{domxref("PerformanceResourceTiming")}} interface's {{domxref("PerformanceResourceTiming.toJSON","toJSON()")}} method returns a JSON serialization of a "`resource`" type {{domxref("PerformanceEntry","performance entry")}}.

## Specifications

{{Specifications}}

## Implementation status

As shown in the {{domxref("PerformanceResourceTiming")}} interface's [Browser Compatibility](/en-US/docs/Web/API/PerformanceResourceTiming#browser_compatibility) table, most of these interfaces are broadly implemented by desktop browsers. However, note that some properties have little to no implementation so see each property's "Browser compatibility" section for more specific interoperability data.

To test your browser's support for these interfaces, run the [`perf-api-support`](https://mdn.github.io/dom-examples/performance-apis/perf-api-support.html) application.

## See also

- [Resource Timing Standard](https://w3c.github.io/resource-timing/); W3C Editor's Draft
- [CanIUse data](https://caniuse.com/#search=resource-timing)
- [Resource Timing practical tips](https://www.stevesouders.com/blog/2014/08/21/resource-timing-practical-tips/); Steve Souders; 2014 August 21
- [Measuring network performance with Resource Timing API](https://developers.googleblog.com/2013/12/measuring-network-performance-with.html); Ilya Grigorik; 2013 December 11
- [A Primer for Web Performance Timing APIs](https://siusin.github.io/perf-timing-primer/); Xiaoqian Wu; W3C Editor's Draft
