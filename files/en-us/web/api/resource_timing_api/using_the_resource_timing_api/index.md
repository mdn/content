---
title: Using the Resource Timing API
slug: Web/API/Resource_Timing_API/Using_the_Resource_Timing_API
page-type: guide
tags:
  - API
  - Guide
  - NeedsExample
  - Performance
  - Resource Timing
  - Resource Timing API
  - Timing
  - Web
  - Web Development
  - Web Performance
---
{{DefaultAPISidebar("Resource Timing API")}}

The **Resource Timing API** provides a way to retrieve and analyze detailed network timing data regarding the loading of an application's _resource(s)_. An application can use the timing metrics to determine, for example, the length of time it takes to fetch a specific resource such as an {{domxref("XMLHttpRequest")}}, {{SVGElement("SVG","SVG element")}}, image, script, etc.).

The interface's properties create a _resource loading timeline_ with {{domxref("DOMHighResTimeStamp","high-resolution timestamps")}} for network events such as redirect start and end times, fetch start, DNS lookup start and end times, response start and end times, etc. The interface also includes other properties that provide data about the size of the fetched resource as well as the _type_ of resource that initiated the fetch.

This document shows the use of Resource Timing interfaces. For more details about the interfaces, including examples, see each interface's reference page and the references in the [See also](#see_also) section.

A _live_ version of the examples is available on [GitHub](https://mdn.github.io/dom-examples/performance-apis/Using_the_Resource_Timing_API.html), as is the [source code](https://github.com/mdn/dom-examples/blob/main/performance-apis/Using_the_Resource_Timing_API.html). Pull requests and [bug reports](https://github.com/mdn/dom-examples/issues) are welcome.

## Resource loading phases

An application can get timestamps for the various phases of resource loading such as redirection, DNS lookup, and TCP connection setup. Those phases and their property names are illustrated in Figure 1.

![Graphic of Resource Timing timestamps](resourcetiming-timestamps.jpg)
Figure 1. Resource timing properties

An application developer can use the property values to calculate the length of time a phase takes and that information can help diagnose performance issues.

## Timing resource loading phases

The following example illustrates using the resource timing properties to calculate the amount of time the following phases take: redirection ({{domxref("PerformanceResourceTiming.redirectStart","redirectStart")}} and {{domxref("PerformanceResourceTiming.redirectEnd","redirectEnd")}} ), DNS lookup ({{domxref("PerformanceResourceTiming.domainLookupStart","domainLookupStart")}} and {{domxref("PerformanceResourceTiming.domainLookupEnd","domainLookupEnd")}}), TCP handshake ({{domxref('PerformanceResourceTiming.connectStart','connectStart')}} and {{domxref('PerformanceResourceTiming.connectEnd','connectEnd')}}), and response ({{domxref('PerformanceResourceTiming.responseStart','responseStart')}} and {{domxref('PerformanceResourceTiming.responseEnd','responseEnd')}}). This example also calculates the time from the start of the fetch and request start phases ({{domxref("PerformanceResourceTiming.fetchStart","fetchStart")}} and {{domxref("PerformanceResourceTiming.requestStart","requestStart")}}, respectively), until the response has ended ({{domxref('PerformanceResourceTiming.responseEnd','responseEnd')}}). This timing data provides a detailed profile of the resource loading phases and this data can be used to help identify performance bottlenecks.

```js
function calculate_load_times() {
  // Check performance support
  if (performance === undefined) {
    console.log("= Calculate Load Times: performance NOT supported");
    return;
  }

  // Get a list of "resource" performance entries
  const resources = performance.getEntriesByType("resource");
  if (resources === undefined || resources.length <= 0) {
    console.log("= Calculate Load Times: there are NO `resource` performance records");
    return;
  }

  console.log("= Calculate Load Times");
  for (let i=0; i < resources.length; i++) {
    console.log(`== Resource[${i}] - ${resources[i].name}`);
    // Redirect time
    let t = resources[i].redirectEnd - resources[i].redirectStart;
    console.log(`… Redirect time = ${t}`);

    // DNS time
    t = resources[i].domainLookupEnd - resources[i].domainLookupStart;
    console.log(`… DNS lookup time = ${t}`);

    // TCP handshake time
    t = resources[i].connectEnd - resources[i].connectStart;
    console.log(`… TCP time = ${t}`);

    // Secure connection time
    t = (resources[i].secureConnectionStart > 0) ? (resources[i].connectEnd - resources[i].secureConnectionStart) : "0";
    console.log(`… Secure connection time = ${t}`);

    // Response time
    t = resources[i].responseEnd - resources[i].responseStart;
    console.log(`… Response time = ${t}`);

    // Fetch until response end
    t = (resources[i].fetchStart > 0) ? (resources[i].responseEnd - resources[i].fetchStart) : "0";
    console.log(`… Fetch until response end time = ${t}`);

    // Request start until response end
    t = (resources[i].requestStart > 0) ? (resources[i].responseEnd - resources[i].requestStart) : "0";
    console.log(`… Request start until response end time = ${t}`);

    // Start until response end
    t = (resources[i].startTime > 0) ? (resources[i].responseEnd - resources[i].startTime) : "0";
    console.log(`… Start until response end time = ${t}`);
  }
}
```

## Resource size measurements

The size of an application's resources can affect an application's performance so getting accurate data on resource size can be important (especially for non-hosted resources). The {{domxref("PerformanceResourceTiming")}} interface has three properties that can be used to obtain size data about a resource. The {{domxref('PerformanceResourceTiming.transferSize','transferSize')}} property returns the size (in octets) of the fetched resource including the response header fields plus the response payload body. The {{domxref('PerformanceResourceTiming.encodedBodySize','encodedBodySize')}} property returns the size (in octets) received from the fetch (HTTP or cache), of the _payload body_, **before** removing any applied content-codings. {{domxref('PerformanceResourceTiming.decodedBodySize','decodedBodySize')}} returns the size (in octets) received from the fetch (HTTP or cache) of the _message body_, **after** removing any applied content-codings.

The following example demonstrates using these three properties.

```js
function display_size_data(){
  // Check for support of the PerformanceResourceTiming.*size properties and print their values
  // if supported.
  if (performance === undefined) {
    console.log("= Display Size Data: performance NOT supported");
    return;
  }

  const list = performance.getEntriesByType("resource");
  if (list === undefined) {
    console.log("= Display Size Data: performance.getEntriesByType() is NOT supported");
    return;
  }

  // For each "resource", display its *Size property values
  console.log("= Display Size Data");
  for (let i=0; i < list.length; i++) {
    console.log(`== Resource[${i}] - ${list[i].name}`);
    if ("decodedBodySize" in list[i]) {
      console.log(`… decodedBodySize[${i}] = ${list[i].decodedBodySize}`);
    } else {
      console.log(`… decodedBodySize[${i}] = NOT supported`);
    }

    if ("encodedBodySize" in list[i]) {
      console.log(`… encodedBodySize[${i}] = ${list[i].encodedBodySize}`);
    } else {
      console.log(`… encodedBodySize[${i}] = NOT supported`);
    }

    if ("transferSize" in list[i]) {
      console.log(`… transferSize[${i}] = ${list[i].transferSize}`);
    } else {
      console.log(`… transferSize[${i}] = NOT supported`);
    }
  }
}
```

## Managing the resource buffer

Although the browser is required to support at least 150 resource timing performance entries in its _resource timing buffer_, some applications may use more resources than that limit. To help the developer manage the buffer size, Resource Timing defines two methods that extend the {{domxref("Performance")}} interface. The {{domxref("Performance.clearResourceTimings","clearResourceTimings()")}} method removes all "`resource`" type performance entries from the browser's resource performance entry buffer. The {{domxref("Performance.setResourceTimingBufferSize","setResourceTimingBufferSize()")}} method sets the resource performance entry buffer size to the specified number of resource {{domxref("PerformanceEntry","performance entries")}}.

The following example demonstrates the usage of these two methods.

```js
function clear_resource_timings() {
  if (performance === undefined) {
    console.log("= performance.clearResourceTimings(): performance NOT supported");
    return;
  }
  // Check if Performance.clearResourceTiming() is supported
  console.log ("= Print performance.clearResourceTimings()");
  const supported = typeof performance.clearResourceTimings === "function";
  if (supported) {
    console.log("… Performance.clearResourceTimings() = supported");
    performance.clearResourceTimings();
  } else {
    console.log("… Performance.clearResourceTiming() = NOT supported");
    return;
  }
  // getEntries should now return zero
  const p = performance.getEntriesByType("resource");
  if (p.length === 0) {
    console.log("… Performance data buffer cleared");
  } else {
    console.log(`… Performance data buffer NOT cleared (still have '${p.length}' items`);
  }
}

function set_resource_timing_buffer_size(n) {
  if (performance === undefined) {
    console.log("= performance.setResourceTimingBufferSize(): performance NOT supported");
    return;
  }
  // Check if Performance.setResourceTimingBufferSize() is supported
  console.log ("= performance.setResourceTimingBufferSize()");
  const supported = typeof performance.setResourceTimingBufferSize === "function";
  if (supported) {
    console.log("… Performance.setResourceTimingBufferSize() = supported");
    performance.setResourceTimingBufferSize(n);
  } else {
    console.log("… Performance.setResourceTimingBufferSize() = NOT supported");
  }
}
```

The {{domxref("Performance.resourcetimingbufferfull_event","resourcetimingbufferfull")}} event is fired at the {{domxref("Performance")}} object when the browser's resource performance entry buffer is full. The following code example sets a {{domxref("Performance.resourcetimingbufferfull_event","onresourcetimingbufferfull")}} event handler in the `init()` function.

```js
function buffer_full(event) {
  console.log("WARNING: Resource Timing Buffer is FULL!");
  set_resource_timing_buffer_size(200);
}

function init() {
  // load some image to trigger "resource" fetch events
  const image1 = new Image();
  image1.src = "https://developer.mozilla.org/static/img/opengraph-logo.png";
  const image2 = new Image();
  image2.src = "http://mozorg.cdn.mozilla.net/media/img/firefox/firefox-256.e2c1fc556816.jpg"

  // Set a callback if the resource buffer becomes filled
  performance.onresourcetimingbufferfull = buffer_full;
}
```

## Coping with CORS

When {{Glossary("CORS")}} is in effect, many of the timing properties' values are returned as zero unless the server's access policy permits these values to be shared. This requires the server providing the resource to send the {{httpheader("Timing-Allow-Origin")}} HTTP response header with a value specifying the origin or origins which are allowed to get the restricted timestamp values.

> **Note:** The properties which are returned as 0 by default when loading a resource from a domain other than the one of the web page itself: `redirectStart`, `redirectEnd`, `domainLookupStart`, `domainLookupEnd`, `connectStart`, `connectEnd`, `secureConnectionStart`, `requestStart`, and `responseStart`.

## See also

- [Firefox Performance Tool](https://firefox-source-docs.mozilla.org/devtools-user/performance/index.html)
- [Resource Timing Standard](https://w3c.github.io/resource-timing/); W3C Editor's Draft
- [Resource Timing practical tips](https://www.stevesouders.com/blog/2014/08/21/resource-timing-practical-tips/); Steve Souders; 2014 August 21
- [Measuring network performance with Resource Timing API](https://developers.googleblog.com/2013/12/measuring-network-performance-with.html); Ilya Grigorik; 2013 December 11
