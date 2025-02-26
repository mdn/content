---
title: PerformanceResourceTiming
slug: Web/API/PerformanceResourceTiming
page-type: web-api-interface
browser-compat: api.PerformanceResourceTiming
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

The **`PerformanceResourceTiming`** interface enables retrieval and analysis of detailed network timing data regarding the loading of an application's resources. An application can use the timing metrics to determine, for example, the length of time it takes to fetch a specific resource, such as an {{domxref("XMLHttpRequest")}}, {{SVGElement("SVG","SVG element")}}, image, or script.

{{InheritanceDiagram}}

## Description

The interface's properties create a resource loading timeline with high-resolution timestamps for network events such as redirect start and end times, fetch start, DNS lookup start and end times, response start and end times, and more. Additionally, the interface extends {{domxref("PerformanceEntry")}} with other properties which provide data about the size of the fetched resource as well as the type of resource that initiated the fetch.

### Typical resource timing metrics

The properties of this interface allow you to calculate certain resource timing metrics. Common use cases include:

- Measuring TCP handshake time (`connectEnd` - `connectStart`)
- Measuring DNS lookup time (`domainLookupEnd` - `domainLookupStart`)
- Measuring redirection time (`redirectEnd` - `redirectStart`)
- Measuring interim request time (`firstInterimResponseStart` - `finalResponseHeadersStart`)
- Measuring request time (`responseStart` - `requestStart`)
- Measuring TLS negotiation time (`requestStart` - `secureConnectionStart`)
- Measuring time to fetch (without redirects) (`responseEnd` - `fetchStart`)
- Measuring ServiceWorker processing time (`fetchStart` - `workerStart`)
- Checking if content was compressed (`decodedBodySize` should not be `encodedBodySize`)
- Checking if local caches were hit (`transferSize` should be `0`)
- Checking if modern and fast protocols are used (`nextHopProtocol` should be HTTP/2 or HTTP/3)
- Checking if the correct resources are render-blocking (`renderBlockingStatus`)

## Instance properties

### Inherited from `PerformanceEntry`

This interface extends the following {{domxref("PerformanceEntry")}} properties for resource performance entry types by qualifying and constraining them as follows:

- {{domxref("PerformanceEntry.duration")}} {{ReadOnlyInline}}
  - : Returns a {{domxref("DOMHighResTimeStamp","timestamp")}} that is the difference between the {{domxref("PerformanceResourceTiming.responseEnd","responseEnd")}} and the {{domxref("PerformanceEntry.startTime","startTime")}} properties.
- {{domxref("PerformanceEntry.entryType")}} {{ReadOnlyInline}}
  - : Returns `"resource"`.
- {{domxref("PerformanceEntry.name")}} {{ReadOnlyInline}}
  - : Returns the resource's URL.
- {{domxref("PerformanceEntry.startTime")}} {{ReadOnlyInline}}
  - : Returns the {{domxref("DOMHighResTimeStamp","timestamp")}} for the time a resource fetch started. This value is equivalent to {{domxref("PerformanceResourceTiming.fetchStart")}}.

### Timestamps

The interface supports the following timestamp properties which you can see in the diagram and are listed in the order in which they are recorded for the fetching of a resource. An alphabetical listing is shown in the navigation, at left.

![Timestamp diagram listing timestamps in the order in which they are recorded for the fetching of a resource](https://mdn.github.io/shared-assets/images/diagrams/api/performance/timestamp-diagram.svg)

- {{domxref('PerformanceResourceTiming.redirectStart')}} {{ReadOnlyInline}}
  - : A {{domxref("DOMHighResTimeStamp")}} that represents the start time of the fetch which initiates the redirect.
- {{domxref('PerformanceResourceTiming.redirectEnd')}} {{ReadOnlyInline}}
  - : A {{domxref("DOMHighResTimeStamp")}} immediately after receiving the last byte of the response of the last redirect.
- {{domxref('PerformanceResourceTiming.workerStart')}} {{ReadOnlyInline}}
  - : Returns a {{domxref("DOMHighResTimeStamp")}} immediately before dispatching the {{domxref("FetchEvent")}} if a Service Worker thread is already running, or immediately before starting the Service Worker thread if it is not already running. If the resource is not intercepted by a Service Worker the property will always return 0.
- {{domxref('PerformanceResourceTiming.fetchStart')}} {{ReadOnlyInline}}
  - : A {{domxref("DOMHighResTimeStamp")}} immediately before the browser starts to fetch the resource.
- {{domxref('PerformanceResourceTiming.domainLookupStart')}} {{ReadOnlyInline}}
  - : A {{domxref("DOMHighResTimeStamp")}} immediately before the browser starts the domain name lookup for the resource.
- {{domxref('PerformanceResourceTiming.domainLookupEnd')}} {{ReadOnlyInline}}
  - : A {{domxref("DOMHighResTimeStamp")}} representing the time immediately after the browser finishes the domain name lookup for the resource.
- {{domxref('PerformanceResourceTiming.connectStart')}} {{ReadOnlyInline}}
  - : A {{domxref("DOMHighResTimeStamp")}} immediately before the browser starts to establish the connection to the server to retrieve the resource.
- {{domxref('PerformanceResourceTiming.secureConnectionStart')}} {{ReadOnlyInline}}
  - : A {{domxref("DOMHighResTimeStamp")}} immediately before the browser starts the handshake process to secure the current connection.
- {{domxref('PerformanceResourceTiming.connectEnd')}} {{ReadOnlyInline}}
  - : A {{domxref("DOMHighResTimeStamp")}} immediately after the browser finishes establishing the connection to the server to retrieve the resource.
- {{domxref('PerformanceResourceTiming.requestStart')}} {{ReadOnlyInline}}
  - : A {{domxref("DOMHighResTimeStamp")}} immediately before the browser starts requesting the resource from the server.
- {{domxref('PerformanceResourceTiming.firstInterimResponseStart')}} {{experimental_inline}} {{ReadOnlyInline}}
  - : A {{domxref("DOMHighResTimeStamp")}} that represents the interim response time (for example, 100 Continue or 103 Early Hints).
- {{domxref('PerformanceResourceTiming.responseStart')}} {{ReadOnlyInline}}
  - : A {{domxref("DOMHighResTimeStamp")}} immediately after the browser receives the first byte of the response from the server (which may be an interim response).
- {{domxref('PerformanceResourceTiming.finalResponseHeadersStart')}} {{experimental_inline}} {{ReadOnlyInline}}
  - : A {{domxref("DOMHighResTimeStamp")}} that represents the final headers response time (for example, 200 Success), after any interim response time.
- {{domxref('PerformanceResourceTiming.responseEnd')}} {{ReadOnlyInline}}
  - : A {{domxref("DOMHighResTimeStamp")}} immediately after the browser receives the last byte of the resource or immediately before the transport connection is closed, whichever comes first.

### Additional resource information

Additionally, this interface exposes the following properties containing more information about a resource:

- {{domxref("PerformanceResourceTiming.contentType")}} {{ReadOnlyInline}} {{experimental_inline}}
  - : A string representing a minimized and standardized version of the MIME-type of the fetched resource.
- {{domxref('PerformanceResourceTiming.decodedBodySize')}} {{ReadOnlyInline}}
  - : A number that is the size (in octets) received from the fetch (HTTP or cache) of the message body, after removing any applied content encoding.
- {{domxref("PerformanceResourceTiming.deliveryType")}} {{experimental_inline}} {{ReadOnlyInline}}
  - : Indicates how the resource was delivered — for example from the cache or from a navigational prefetch.
- {{domxref('PerformanceResourceTiming.encodedBodySize')}} {{ReadOnlyInline}}
  - : A number representing the size (in octets) received from the fetch (HTTP or cache), of the payload body, before removing any applied content encodings.
- {{domxref('PerformanceResourceTiming.initiatorType')}} {{ReadOnlyInline}}
  - : A string representing the web platform feature that initiated the performance entry.
- {{domxref('PerformanceResourceTiming.nextHopProtocol')}} {{ReadOnlyInline}}
  - : A string representing the network protocol used to fetch the resource, as identified by the [ALPN Protocol ID (RFC7301)](https://datatracker.ietf.org/doc/html/rfc7301).
- {{domxref('PerformanceResourceTiming.renderBlockingStatus')}} {{ReadOnlyInline}}
  - : A string representing the render-blocking status. Either `"blocking"` or `"non-blocking"`.
- {{domxref('PerformanceResourceTiming.responseStatus')}} {{ReadOnlyInline}}
  - : A number representing the HTTP response status code returned when fetching the resource.
- {{domxref('PerformanceResourceTiming.transferSize')}} {{ReadOnlyInline}}
  - : A number representing the size (in octets) of the fetched resource. The size includes the response header fields plus the response payload body.
- {{domxref('PerformanceResourceTiming.serverTiming')}} {{ReadOnlyInline}}
  - : An array of {{domxref("PerformanceServerTiming")}} entries containing server timing metrics.

## Instance methods

- {{domxref("PerformanceResourceTiming.toJSON()")}}
  - : Returns a JSON representation of the `PerformanceResourceTiming` object.

## Examples

### Logging resource timing information

Example using a {{domxref("PerformanceObserver")}}, which notifies of new `resource` performance entries as they are recorded in the browser's performance timeline. Use the `buffered` option to access entries from before the observer creation.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    console.log(entry);
  });
});

observer.observe({ type: "resource", buffered: true });
```

Example using {{domxref("Performance.getEntriesByType()")}}, which only shows `resource` performance entries present in the browser's performance timeline at the time you call this method:

```js
const resources = performance.getEntriesByType("resource");
resources.forEach((entry) => {
  console.log(entry);
});
```

## Security requirements

### Cross-origin timing information

Many of the resource timing properties are restricted to return `0` or an empty string when the resource is a cross-origin request. To expose cross-origin timing information, the {{HTTPHeader("Timing-Allow-Origin")}} HTTP response header needs to be set.

For example, to allow `https://developer.mozilla.org` to see resource timing information, the cross-origin resource should send:

```http
Timing-Allow-Origin: https://developer.mozilla.org
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Resource timing (Overview)](/en-US/docs/Web/API/Performance_API/Resource_timing)
