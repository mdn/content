---
title: PerformanceResourceTiming
slug: Web/API/PerformanceResourceTiming
page-type: web-api-interface
tags:
  - DOM
  - Interface
  - Reference
  - Web Performance
browser-compat: api.PerformanceResourceTiming
---
{{APIRef("Resource Timing API")}}

The **`PerformanceResourceTiming`** interface enables retrieval and analysis of detailed network timing data regarding the loading of an application's _resources_. An application can use the timing metrics to determine, for example, the length of time it takes to fetch a specific resource, such as an {{domxref("XMLHttpRequest")}}, {{SVGElement("SVG","SVG element")}}, image, or script.

The interface's properties create a _resource loading timeline_ with {{domxref("DOMHighResTimeStamp","high-resolution timestamps")}} for network events such as redirect start and end times, fetch start, DNS lookup start and end times, response start and end times, etc.. Additionally, the interface extends {{domxref("PerformanceEntry")}} with other properties which provide data about the size of the fetched resource as well as the _type_ of resource that initiated the fetch.

{{InheritanceDiagram}}

{{AvailableInWorkers}}

## Properties

This interface extends the following {{domxref("PerformanceEntry")}} properties for resource performance entry types by qualifying and constraining them as follows:

- {{domxref("PerformanceEntry.entryType")}} {{ReadOnlyInline}}
  - : Returns `"resource"`.
- {{domxref("PerformanceEntry.name")}} {{ReadOnlyInline}}
  - : Returns the resources URL.
- {{domxref("PerformanceEntry.startTime")}} {{ReadOnlyInline}}
  - : Returns the {{domxref("DOMHighResTimeStamp","timestamp")}} for the time a resource fetch started. This value is equivalent to {{domxref("PerformanceResourceTiming.fetchStart")}}.
- {{domxref("PerformanceEntry.duration")}} {{ReadOnlyInline}}
  - : Returns a {{domxref("DOMHighResTimeStamp","timestamp")}} that is the difference between the {{domxref("PerformanceResourceTiming.responseEnd","responseEnd")}} and the {{domxref("PerformanceEntry.startTime","startTime")}} properties.

The interface also supports the following properties which are listed in the order in which they are recorded for the fetching of a single resource. An alphabetical listing is shown in the navigation, at left.

- {{domxref('PerformanceResourceTiming.initiatorType')}} {{ReadOnlyInline}}
  - : A string representing the _type_ of resource that initiated the performance entry, as specified in {{domxref('PerformanceResourceTiming.initiatorType')}}.
- {{domxref('PerformanceResourceTiming.nextHopProtocol')}} {{ReadOnlyInline}}
  - : A string representing the _network protocol_ used to fetch the resource, as identified by the [ALPN Protocol ID (RFC7301)](https://datatracker.ietf.org/doc/html/rfc7301).
- {{domxref('PerformanceResourceTiming.workerStart')}} {{ReadOnlyInline}}
  - : Returns a {{domxref("DOMHighResTimeStamp")}} immediately before dispatching the {{domxref("FetchEvent")}} if a Service Worker thread is already running, or immediately before starting the Service Worker thread if it is not already running. If the resource is not intercepted by a Service Worker the property will always return 0.
- {{domxref('PerformanceResourceTiming.redirectStart')}} {{ReadOnlyInline}}
  - : A {{domxref("DOMHighResTimeStamp")}} that represents the start time of the fetch which initiates the redirect.
- {{domxref('PerformanceResourceTiming.redirectEnd')}} {{ReadOnlyInline}}
  - : A {{domxref("DOMHighResTimeStamp")}} immediately after receiving the last byte of the response of the last redirect.
- {{domxref('PerformanceResourceTiming.fetchStart')}} {{ReadOnlyInline}}
  - : A {{domxref("DOMHighResTimeStamp")}} immediately before the browser starts to fetch the resource.
- {{domxref('PerformanceResourceTiming.domainLookupStart')}} {{ReadOnlyInline}}
  - : A {{domxref("DOMHighResTimeStamp")}} immediately before the browser starts the domain name lookup for the resource.
- {{domxref('PerformanceResourceTiming.domainLookupEnd')}} {{ReadOnlyInline}}
  - : A {{domxref("DOMHighResTimeStamp")}} representing the time immediately after the browser finishes the domain name lookup for the resource.
- {{domxref('PerformanceResourceTiming.connectStart')}} {{ReadOnlyInline}}
  - : A {{domxref("DOMHighResTimeStamp")}} immediately before the browser starts to establish the connection to the server to retrieve the resource.
- {{domxref('PerformanceResourceTiming.connectEnd')}} {{ReadOnlyInline}}
  - : A {{domxref("DOMHighResTimeStamp")}} immediately after the browser finishes establishing the connection to the server to retrieve the resource.
- {{domxref('PerformanceResourceTiming.secureConnectionStart')}} {{ReadOnlyInline}}
  - : A {{domxref("DOMHighResTimeStamp")}} immediately before the browser starts the handshake process to secure the current connection.
- {{domxref('PerformanceResourceTiming.requestStart')}} {{ReadOnlyInline}}
  - : A {{domxref("DOMHighResTimeStamp")}} immediately before the browser starts requesting the resource from the server.
- {{domxref('PerformanceResourceTiming.responseStart')}} {{ReadOnlyInline}}
  - : A {{domxref("DOMHighResTimeStamp")}} immediately after the browser receives the first byte of the response from the server.
- {{domxref('PerformanceResourceTiming.responseEnd')}} {{ReadOnlyInline}}
  - : A {{domxref("DOMHighResTimeStamp")}} immediately after the browser receives the last byte of the resource or immediately before the transport connection is closed, whichever comes first.
- {{domxref('PerformanceResourceTiming.transferSize')}} {{ReadOnlyInline}}
  - : A `number` representing the size (in octets) of the fetched resource. The size includes the response header fields plus the response payload body.
- {{domxref('PerformanceResourceTiming.encodedBodySize')}} {{ReadOnlyInline}}
  - : A `number` representing the size (in octets) received from the fetch (HTTP or cache), of the _payload body_, before removing any applied content-codings.
- {{domxref('PerformanceResourceTiming.decodedBodySize')}} {{ReadOnlyInline}}
  - : A `number` that is the size (in octets) received from the fetch (HTTP or cache) of the _message body_, after removing any applied content-codings.
- {{domxref('PerformanceResourceTiming.serverTiming')}} {{ReadOnlyInline}}
  - : An array of {{domxref("PerformanceServerTiming")}} entries containing server timing metrics.

## Methods

- {{domxref("PerformanceResourceTiming.toJSON()")}}
  - : Returns a string that is the JSON representation of the {{domxref("PerformanceResourceTiming")}} object.

## Example

See the example in [Using the Resource Timing API](/en-US/docs/Web/API/Resource_Timing_API/Using_the_Resource_Timing_API).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Resource Timing (Overview)](/en-US/docs/Web/API/Resource_Timing_API)
- [Using the Resource Timing API](/en-US/docs/Web/API/Resource_Timing_API/Using_the_Resource_Timing_API)
