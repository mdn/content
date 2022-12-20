---
title: Using the Resource Timing API
slug: Web/API/Performance_API/Using_the_Resource_Timing_API
page-type: guide
---

{{DefaultAPISidebar("Performance API")}}

The Performance API exposes metrics about any external resources that are loaded by your page. External resources include, for example:

- scripts and stylesheets
- media files such as video, audio, images, and icons
- web fonts
- resources loaded using {{domxref("fetch()")}} or {{domxref("XMLHttpRequest")}}
- content embedded using elements such as {{HTMLElement("iframe")}} or {{HTMLElement("object")}}

Each resource is represented by a single {{domxref("PerformanceResourceTiming")}} object, whose {{domxref("PerformanceEntry.entryType", "entryType")}} is `"resource"`, and whose {{domxref("PerformanceEntry.name", "name")}} property is the resource's URL. The entry also includes:

- a timeline for the resource load, breaking down the time taken into stages such as:

  - time handling redirects
  - domain name lookup
  - connection establishment
  - time to send the request
  - time to start and finish receivng the content.

  It's also possible to include server timings, to get insight into where the server is spending time handling requests.

- the size of the resource
- additional aspects of the request, including the HTTP version and response status code

## Resource initiators

Resource loads are initiated by some web platform feature, such as:

- an HTML {{HTMLElement("img")}} element with a `src` attribute
- a CSS {{cssxref("background")}} property whose value uses a {{cssxref("url()")}}
- a script loading a resource dynamically using {{domxref("fetch()")}}

Each `PerformanceResourceTiming` object includes an {{domxref("PerformanceResourceTiming.initiatorType", "initiatorType")}} property which indicates the feature that initiated the request.

Note that `initiatorType` does _not_ indicate the type of the resource that was fetched. For example, an `initiatorType` of `"css"` means that the resource was loaded as a result of some CSS, not that the resource was a CSS stylesheet.

## Resource loading timeline

Each resource entry contains a sequence of timestamps that measure the various stages of loading that resource, enabling you to understand where time is being spent. In order, the sequence includes the following stages:

- **Redirection**

  - : The {{domxref("PerformanceResourceTiming.redirectStart", "start", "", 1)}} and {{domxref("PerformanceResourceTiming.redirectEnd", "end", "", 1)}} times for all redirects.

- **Service worker processing**

  - : The {{domxref("PerformanceResourceTiming.workerStart", "time at which a service worker is started", "", 1)}} if one is not already running, or the time a {{domxref("FetchEvent")}} is dispatched if a service worker is already running.

- **Domain name resolution**

  - : Timestamps for {{domxref("PerformanceResourceTiming.domainLookupStart", "domain lookup start", "", 1)}} and {{domxref("PerformanceResourceTiming.domainLookupEnd", "domain lookup end", "", 1)}}.

- **Connection handshake**

  - : Timestamps for establishing the transport connection ({{Glossary("TCP")}} / {{Glossary("TLS")}} or {{Glossary("QUIC")}}), including {{domxref("PerformanceResourceTiming.connectStart", "starting the connection handshake", "", 1)}}, {{domxref("PerformanceResourceTiming.secureConnectionStart", "starting the secure connection handshake", "", 1)}}, and {{domxref("PerformanceResourceTiming.connectEnd", "completing the connection handshake", "", 1)}}.

- **Sending a request**

  - : The time the browser {{domxref("PerformanceResourceTiming.requestStart", "starts requesting the resource", "", 1)}} from the server.

    The time between this timestamp and the first received byte of the response includes any time that the server takes to process the request and prepare the response. See [Server timings](#server_timings) for how to get more insight into this part of the timeline.

- **Receiving a response**
  - : The time the browser receives the {{domxref("PerformanceResourceTiming.responseStart", "first response byte", "", 1)}} and the {{domxref("PerformanceResourceTiming.responseEnd", "last response byte", "", 1)}} from the server.

### Server timings

The `PerformanceResourceTiming` object may also include timing information about the server side of a resource load.

To receive this, the server must send a {{HTTPHeader("Server-Timing")}} response header along with the resource. This contains one or more metrics, each of which may have a name, a description, and a numeric value. The name typically refers to some operation (such as a cache read) and the value represents the time taken for the operation. However, the specific metrics sent and their attributes are entirely server-defined.

Any metrics sent will appear in the {{domxref("PerformanceResourceTiming.serverTiming")}} property.

## Resource size

## Additional properties

Apart from timings, the `PerformanceResourceTiming` object includes extra properties to help understand characteristics of the resource load:

- size information, including:

  - the {{domxref("PerformanceResourceTiming.transferSize", "transfer size of the response header and body", "", 1)}}
  - the {{domxref("PerformanceResourceTiming.encodedBodySize", "size of the encoded (for example, compressed) body", "", 1)}}
  - the {{domxref("PerformanceResourceTiming.decodedBodySize", "size of the decoded body", "", 1)}}.

- whether the resource might be {{domxref("PerformanceResourceTiming.renderBlockingStatus", "render-blocking", "", 1)}}: meaning that the browser needs to download and evaluate the resource before rendering the page.

- the {{domxref("PerformanceResourceTiming.responseStatus", "status code the server returned for the resource", "", 1)}}

- an identifier for the {{domxref("PerformanceResourceTiming.nextHopProtocol", "version of HTTP used to fetch the resource", "", 1)}}

## Cross-origin resource loads

By default, most of the information in a resource timing entry is not exposed for cross-origin resource loads: the property values are set to zero.

To receive complete information for a cross-origin resource load, the server must send a {{HTTPHeader("Timing-Allow-Origin")}} response header along with the resource, listing the requester's origin.

## Examples

### Listing all resource loads

The following code lists the initiator type and URL for every resource load. Note that we use `buffered: true` to ensure we don't miss resource loads that happened before this code was executed.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    const url = new URL(entry.name);
    console.log(`${entry.initiatorType} : ${url.pathname}`);
  });
});

observer.observe({ type: "resource", buffered: true });
```

If you open <https://mdn.github.io/learning-area/css/styling-text/web-fonts/web-font-finished.html> and paste this code into the console, you will see something like:

```
link : /learning-area/css/styling-text/web-fonts/web-font-finished.css
css : /learning-area/css/styling-text/web-fonts/fonts/cicle_fina-webfont.woff2
css : /learning-area/css/styling-text/web-fonts/fonts/zantroke-webfont.woff2
```

The `"link"` entry is for the styesheet that this page loads, and the two `"css"` entries are for the [fonts loaded by the stylesheet](https://mdn.github.io/learning-area/css/styling-text/web-fonts/web-font-finished.css).

### Listing resource timings

The following code lists the total time taken to load each resource, and durations for various parts of the load operation:

- domain name lookup
- connection establishment
- time between starting to send the request and starting to receive the response
- time to receive the response from first byte to last byte

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    console.log(`${entry.initiatorType} : ${entry.name}`);
    console.log(`Total time: ${entry.duration}`);
    console.log(
      `Domain name lookup: ${entry.domainLookupEnd - entry.domainLookupStart}`
    );
    console.log(
      `Connection establishment: ${entry.connectEnd - entry.connectStart}`
    );
    console.log(
      `Waiting for response: ${entry.responseStart - entry.requestStart}`
    );
    console.log(
      `Receiving response: ${entry.responseEnd - entry.responseStart}`
    );
  });
});

observer.observe({ type: "resource", buffered: true });
```
