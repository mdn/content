---
title: Resource timing
slug: Web/API/Performance_API/Resource_timing
page-type: web-api-overview
---

{{DefaultAPISidebar("Performance API")}}

Resource Timing is part of the Performance API and enables retrieving and analyzing detailed network timing data for the loading of an application's resources. An application can use the timing metrics to determine, for example, the length of time it takes to load a specific resource (such as an image or a script) either implicitly as part of page load or explicitly from JavaScript, for example using the {{domxref("Window/fetch", "fetch()")}} API.

Every resource on a document will be represented by a {{domxref("PerformanceResourceTiming")}} entry (extending the {{domxref("PerformanceEntry")}} interface) with the {{domxref("PerformanceEntry.entryType","entryType")}} of `"resource"`.

For each `PerformanceResourceTiming` entry, a _resource loading timeline_ will be recorded, with {{domxref("DOMHighResTimeStamp","high-resolution timestamps", "", 1)}} for network events such as redirect start and end times, DNS lookup start and end times, request start, response start and end times, and so on. Besides the timestamps, other properties that provide information about the resource are included as well, such the size of the fetched resource, or the type of resource that initiated the fetch.

## Resource loading timestamps

![Timestamp diagram listing timestamps in the order in which they are recorded for the fetching of a resource](https://mdn.github.io/shared-assets/images/diagrams/api/performance/timestamp-diagram.svg)
Figure 1. Resource loading timestamps ([source](https://w3c.github.io/resource-timing/#attribute-descriptions)).

An application can get timestamps for the various stages used to load a resource. The timestamps this API provides are:

1. {{domxref("PerformanceEntry.startTime","startTime")}}: timestamp immediately before the resource loading process begins.
2. {{domxref("PerformanceResourceTiming.redirectStart","redirectStart")}}: timestamp of the fetch which initiates the redirect.
3. {{domxref("PerformanceResourceTiming.redirectEnd","redirectEnd")}}: timestamp immediately after receiving the last byte of the response to the last redirect.
4. {{domxref('PerformanceResourceTiming.workerStart','workerStart')}}: timestamp immediately before starting the Service Worker thread.
5. {{domxref("PerformanceResourceTiming.fetchStart","fetchStart")}}: timestamp immediately before the browser starts to fetch the resource.
6. {{domxref("PerformanceResourceTiming.domainLookupStart","domainLookupStart")}}: timestamp immediately before the browser starts the domain name lookup for the resource.
7. {{domxref("PerformanceResourceTiming.domainLookupEnd","domainLookupEnd")}}: timestamp immediately after the browser finishes the domain name lookup for the resource.
8. {{domxref('PerformanceResourceTiming.connectStart','connectStart')}}: timestamp immediately before the user agent starts establishing the connection to the server to retrieve the resource.
9. {{domxref('PerformanceResourceTiming.secureConnectionStart','secureConnectionStart')}}: If the resource is loaded via a secure connection, timestamp immediately before the browser starts the handshake process to secure the current connection.
10. {{domxref('PerformanceResourceTiming.connectEnd','connectEnd')}}: timestamp immediately after the browser finishes establishing the connection to the server to retrieve the resource.
11. {{domxref('PerformanceResourceTiming.requestStart','requestStart')}}: timestamp of the time immediately before the browser starts requesting the resource from the server, cache, or local resource.
12. {{domxref('PerformanceResourceTiming.responseStart','responseStart')}}: timestamp immediately after the browser receives the first byte of the response from the server, cache, or local resource.
13. {{domxref('PerformanceResourceTiming.responseEnd','responseEnd')}}: timestamp immediately after the browser receives the last byte of the resource or immediately before the transport connection is closed, whichever comes first.

## Resource size

The {{domxref("PerformanceResourceTiming")}} interface has three properties that can be used to obtain size data about a resource. The {{domxref('PerformanceResourceTiming.transferSize','transferSize')}} property returns the size (in bytes) of the fetched resource including the response header fields plus the response payload body.

The {{domxref('PerformanceResourceTiming.encodedBodySize','encodedBodySize')}} property returns the size (in octets) received from the fetch (HTTP or cache), of the _payload body_, **before** removing any applied content-codings. {{domxref('PerformanceResourceTiming.decodedBodySize','decodedBodySize')}} returns the size (in octets) received from the fetch (HTTP or cache) of the _message body_, **after** removing any applied content-codings.

## Other properties

The {{domxref("PerformanceResourceTiming")}} interface provides [additional resources information](/en-US/docs/Web/API/PerformanceResourceTiming#additional_resource_information). Consult the reference docs for the full list of properties.

## Typical resource timing metrics

The information the `PerformanceResourceTiming` entries provide are often used for calculations like the following:

- Measuring TCP handshake time (`connectEnd` - `connectStart`)
- Measuring DNS lookup time (`domainLookupEnd` - `domainLookupStart`)
- Measuring redirection time (`redirectEnd` - `redirectStart`)
- Measuring request time (`responseStart` - `requestStart`)
- Measuring TLS negotiation time (`requestStart` - `secureConnectionStart`)
- Measuring time to fetch (without redirects) (`responseEnd` - `fetchStart`)
- Measuring ServiceWorker processing time (`fetchStart` - `workerStart`)
- Checking if content was compressed (`decodedBodySize` should not be `encodedBodySize`)
- Checking if local caches were hit (`transferSize` should be `0`)
- Checking if modern and fast protocols are used (`nextHopProtocol` should be HTTP/2 or HTTP/3)
- Checking if the correct resources are render-blocking (`renderBlockingStatus`)

The {{domxref("PerformanceResourceTiming")}} reference pages contain example code for measuring all of these metrics. Typically, the code for measuring these metrics looks like this:

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    const request = entry.responseStart - entry.requestStart;
    if (request > 0) {
      console.log(`${entry.name}: Request time: ${request}ms`);
    }
  });
});

observer.observe({ type: "resource", buffered: true });
```

## Cross-origin timing information

When {{Glossary("CORS")}} is in effect, many of the timing properties' values are returned as zero unless the server's access policy permits these values to be shared. This requires the server providing the resource to send the {{httpheader("Timing-Allow-Origin")}} HTTP response header with a value specifying the origin or origins which are allowed to get the restricted timestamp values.

The properties which are returned as 0 by default when loading a resource from an origin other than the one of the web page itself: `redirectStart`, `redirectEnd`, `domainLookupStart`, `domainLookupEnd`, `connectStart`, `connectEnd`, `secureConnectionStart`, `requestStart`, and `responseStart`.

For example, to allow `https://developer.mozilla.org` to see resource timing information, the cross-origin resource should send:

```http
Timing-Allow-Origin: https://developer.mozilla.org
```

## Managing resource buffer sizes

If your website or application fetches more than 250 resources and you want to record more than 250 {{domxref("PerformanceResourceTiming")}} entries, you need to increase the size of the resource timing buffer.

To set the size of the browser's performance resource data buffer, use the {{domxref("Performance.setResourceTimingBufferSize()")}} method, and to clear the browser's performance resource data buffer, use the {{domxref("Performance.clearResourceTimings()")}} method.

To get notified when the browser's resource timing buffer is full, listen for the {{domxref("Performance.resourcetimingbufferfull_event", "resourcetimingbufferfull")}} event.

The following call allows 500 `"resource"` performance entries in the browser's performance timeline.

```js
performance.setResourceTimingBufferSize(500);
```

For more information, see also [Managing buffer sizes](/en-US/docs/Web/API/Performance_API/Performance_data#managing_buffer_sizes).

## See also

- {{domxref("PerformanceResourceTiming")}}
- {{httpheader("Timing-Allow-Origin")}}
- {{domxref("Performance.setResourceTimingBufferSize()")}}
- {{domxref("Performance.clearResourceTimings()")}}
