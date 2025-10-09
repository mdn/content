---
title: Resource timing
slug: Web/API/Performance_API/Resource_timing
page-type: web-api-overview
---

{{DefaultAPISidebar("Performance API")}}

Resource Timing is part of the Performance API and enables retrieving and analyzing detailed network timing data for the loading of an application's resources. An application can use the timing metrics to determine, for example, the length of time it takes to load a specific resource (such as an image or a script) either implicitly as part of page load or explicitly from JavaScript, for example using the {{domxref("Window/fetch", "fetch()")}} API.

Every resource on a document will be represented by a {{domxref("PerformanceResourceTiming")}} entry (extending the {{domxref("PerformanceEntry")}} interface) with the {{domxref("PerformanceEntry.entryType","entryType")}} of `"resource"`.

For each `PerformanceResourceTiming` entry, a _resource loading timeline_ will be recorded, with {{domxref("DOMHighResTimeStamp","high-resolution timestamps", "", 1)}} for network events such as redirect start and end times, DNS lookup start and end times, request start, response start and end times, and so on. Besides the timestamps, other properties that provide information about the resource are included as well, such the size of the fetched resource, or the type of resource that initiated the fetch.

[Typical resource timing metrics](/en-US/docs/Web/API/PerformanceResourceTiming#typical_resource_timing_metrics) this API is used for are detailed in the {{domxref("PerformanceResourceTiming")}}.

## Resource loading timestamps

![Timestamp diagram listing timestamps in the order in which they are recorded for the fetching of a resource](https://mdn.github.io/shared-assets/images/diagrams/api/performance/timestamp-diagram.svg)
Figure 1. Resource loading timestamps ([source](https://w3c.github.io/resource-timing/#attribute-descriptions)).

An application can get timestamps for the various stages used to load a resource. For example the {{domxref('PerformanceEntry.startTime','startTime')}}, DNS timestamps, connection set up times and then various resource download times.

The [timestamps](/en-US/docs/Web/API/PerformanceResourceTiming#timestamps) this API provides are detailed in the {{domxref("PerformanceResourceTiming")}}.

## Resource size

The {{domxref("PerformanceResourceTiming")}} interface has three properties that can be used to obtain size data about a resource. The {{domxref('PerformanceResourceTiming.transferSize','transferSize')}} property returns the size (in bytes) of the fetched resource including the response header fields plus the response payload body.

The {{domxref('PerformanceResourceTiming.encodedBodySize','encodedBodySize')}} property returns the size (in octets) received from the fetch (HTTP or cache), of the _payload body_, **before** removing any applied content-codings. {{domxref('PerformanceResourceTiming.decodedBodySize','decodedBodySize')}} returns the size (in octets) received from the fetch (HTTP or cache) of the _message body_, **after** removing any applied content-codings.

## Other properties

The {{domxref("PerformanceResourceTiming")}} interface provides [additional resources information](/en-US/docs/Web/API/PerformanceResourceTiming#additional_resource_information). Consult the reference docs for the full list of properties.

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

For more information on the fields affected, see the [relevant section of PerformanceResourceTiming](/en-US/docs/Web/API/PerformanceResourceTiming#cross-origin_timing_information).

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
