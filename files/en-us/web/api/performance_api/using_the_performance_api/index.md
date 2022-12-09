---
title: Using the Performance API
slug: Web/API/Performance_API/Using_the_Performance_API
page-type: guide
tags:
  - Guide
  - Performance
  - Web Performance
---

{{DefaultAPISidebar("Performance API")}}

While a web application is running, the browser collects data that records various aspects of its performance, such as:

- how long event handlers take to run
- how long it takes the browser to fetch resources such as images, videos, fonts, and scripts
- which paint operations take a long time to execute

The Performance API gives web developers access to these metrics, and also enables them to record their own custom metrics that are associated with various events or locations in the code.

## Performance entries

A single recorded performance metric is called a _performance entry_ and is represented by an instance of the {{domxref("PerformanceEntry")}} interface.

The Performance API records various different types of performance metric, and the `PerformanceEntry` has an {{domxref("PerformanceEntry.entryType", "entryType")}} property which is a string describing the type of this performance entry:

- `"element"` records how long it takes an element to load and render
- `"event"` records how long it took the browser to start running an event handler in response to its trigger, and how long the event handler took to run
- `"first-input"` records the {{Glossary("First input delay")}}
- `"largest-contentful-paint"` records the largest paint during page load
- `"layout-shift"` records a metric representing how much the page layout has shifted in each animation frame
- `"longtask"` records tasks that took 50ms or more
- `"mark"` records a custom timestamp made by the developer
- `"measure"` records a custom measurement between two timestamps made by the developer
- `"navigation"` records metrics associated with navigating to and initial load of the page
- `"paint"` records key moments of rendering during page load
- `"resource"` records how long it took the browser to fetch a resource

### Performance entry subclasses

Particular entry types typically include extra type-specific data: for example, the `"resource"` type captures the time at which DNS lookup started and ended. So entries are represented by subclasses that extend the basic `PerformanceEntry` interface. For example, a `"resource"` entry is represented by an instance of {{domxref("PerformanceResourceTiming")}}, which inherits from `PerformanceEntry`, and which adds properties to record DNS lookup timestamps.

The subclasses of `PerformanceEntry` also define the semantics of the properties belonging to `PerformanceEntry` itself: for example, `PerformanceEntry` has a {{domxref("PerformanceEntry.name", "name")}} property whose meaning depends on the subclass.

The following interfaces inherit from `PerformanceEntry`:

- {{domxref("LargestContentfulPaint")}}
- {{domxref("PerformanceElementTiming")}}
- {{domxref("PerformanceEventTiming")}}
- {{domxref("PerformanceLongTaskTiming")}}
- {{domxref("PerformanceMark")}}
- {{domxref("PerformanceMeasure")}}
- {{domxref("PerformancePaintTiming")}}
- {{domxref("PerformanceResourceTiming")}}
  - {{domxref("PerformanceNavigationTiming")}} inherits from `PerformanceResourceTiming`
- {{domxref("TaskAttributionTiming")}}

## Accessing performance entries

You can access performance entries in one of two ways. The preferred way is to use the {{domxref("PerformanceObserver")}} interface, which is constructed with a callback function to be called when particular performancer entries are recorded. You then call its {{domxref("PerformanceObserver.observe", "observe")}} method, passing in the types to observe:

```js
function logEventDuration(entries) {
  const events = entries.getEntriesByType("event");
  for (const event of events) {
    console.log(
      `Event handler took: ${
        event.processingEnd - event.processingStart
      } milliseconds`
    );
  }
}

const observer = new PerformanceObserver(logEventDuration);
observer.observe({ entryTypes: ["event"] });
```

Alternatively, you can use the {{domxref("Performance.getEntries()")}}, {{domxref("Performance.getEntriesByName()")}}, and {{domxref("Performance.getEntriesByType()")}} methods to retrieve all performance entries for a page, or entries matching the given name or type.

```js
const events = performance.getEntriesByType("event");

for (const event of events) {
  console.log(
    `Event handler took: ${
      event.processingEnd - event.processingStart
    } milliseconds`
  );
}
```

The `PerformanceObserver` option is preferred because:

- The `getEntries*` methods will always return all relevant entries since the start of the timeline, so if you call it twice, you will see the same entries again and will need to filter out entries that you've seen before.
- Observer notifications are delivered asynchronously, so the browser can dispatch them during idle time to minimise their performance impact.

In the rest of this page we'll provide an overview of each of the entry types supported by the Performance API.

## `element`

## `event`

The `"event"` performance entry type measures the latency of DOM events in your application: that is, the time between a user triggering an event and the application updating in response. Event latency is important to perceived performance in part because events are often tied to user actions: a user does something in the application and an event handler runs in response, so slow event handlers make an application feel unresponsive. Research suggests that [100 milliseconds is about the point where actions no longer feel instantaneous](https://www.nngroup.com/articles/response-times-3-important-limits/).

The Performance API records two different aspects of event latency:

- The time difference between the event being created (this is an approximation of the time the user input occurred) and the event handler being run. This is also called the event's _delay_.
- The time the event handler itself takes to run.

Event performance entries are recorded as instances of the {{domxref("PerformanceEventTiming")}} subclass of `PerformanceEntry`. This subclass adds {{domxref("PerformanceEventTiming.processingStart", "processingStart")}} and {{domxref("PerformanceEventTiming.processingEnd", "processingEnd")}} properties, that are timestamps recording the start and end of the event handler's execution.

The {{domxref("PerformanceEventTiming")}} defines the {{domxref("PerformanceEntry.startTime")}} property to be the time that the event was created, and the {{domxref("PerformanceEntry.duration")}} property to be the total event latency, between the `startTime` and the next rendering paint, rounded to the nearest 8ms.

Thus:

- Event delay is `processingStart - startTime`.
- Event handler execution time is `processingEnd - processingStart`.

Only event types that are triggered by user actions are recorded in the Performance API: for the full list of event types that are recorded, see the documentation for the {{domxref("PerformanceEventTiming")}} interface.

Also, by default, only events whose duration exceeds 104 ms are recorded, although this threshold can be changed in the API.

### Example

In this example, we log the event target, delay, handler processing time, and total latency:

```js
function logEventDuration(entries) {
  const events = entries.getEntriesByType("event");
  for (const event of events) {
    console.log(`Event target: ${event.target}`);
    console.log(
      `Event delay: ${event.processingStart - event.startTime} milliseconds`
    );
    console.log(
      `Event handler: ${
        event.processingEnd - event.processingStart
      } milliseconds`
    );
    console.log(`Event latency: ${event.duration} milliseconds`);
  }
}

const observer = new PerformanceObserver(logEventDuration);
observer.observe({ entryTypes: ["event"] });
```

## `first-input`

## `largest-contentful-paint`

## `layout-shift`

## `longtask`

## `mark` and `measure`

The `"mark"` and `"measure"` performance entry types enable developers to explicitly instrument their code, to record timing information for operations that don't necessarily map to any of the built-in timing metrics.

For example, you might want to measure how long it takes to log a user into the application.

- _marks_ record individual timestamps. To record a mark, call {{domxref("Performance.mark()")}}. The entry type associated with a mark is {{domxref("PerformanceMark")}}.
- _measures_ record a measurement between two timestamps: the timestamps can be marks or any other timestamp. To record a mark, call {{domxref("Performance.measure()")}}. The entry type associated with a mark is {{domxref("PerformanceMeasure")}}.

### Example

In this example we record a mark when the user starts the login process, and take a measure when they finish:

```js
loginButton.addEventListener("click", () => {
  performance.mark("start-login");
  // start logging the user in
});

// fires when login is complete
loggedInUser.addEventListener("load", () => {
  // measure from the start to now
  performance.measure("login-duration", "start-login");
});
```

## `navigation`

## `paint`

## `resource`

The `"resource"` entry type measures how long it takes to load an external resource. External resources include:

- media files such as video, audio, images, and icons
- web fonts
- scripts and stylesheets
- resources loaded using {{domxref("fetch()")}} or {{domxref("XMLHttpRequest")}}
- content embedded using elements such as {{HTMLElement("iframe")}} or {{HTMLElement("object")}}

Each resource is represented by a single {{domxref("PerformanceResourceTiming")}} object. The {{domxref("PerformanceEntry.name", "name")}} property is the resource's URL.

### Resource initiators

Resource loads are initiated by some web platform feature, such as an HTML {{HTMLElement("img")}} element with a `src` attribute, or a CSS {{cssxref("background")}} property whose value uses a {{cssxref("url()")}}.

Each `PerformanceResourceTiming` object includes an {{domxref("PerformanceResourceTiming.initiatorType", "initiatorType")}} property which indicates the feature that initiated the request.

### Resource loading timeline

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

### Additional properties

Apart from timings, the `PerformanceResourceTiming` object includes extra properties to help understand characteristics of the resource load:

- size information, including:

  - the {{domxref("PerformanceResourceTiming.transferSize", "transfer size of the response header and body", "", 1)}}
  - the {{domxref("PerformanceResourceTiming.encodedBodySize", "size of the encoded (for example, compressed) body", "", 1)}}
  - the {{domxref("PerformanceResourceTiming.decodedBodySize", "size of the decoded body", "", 1)}}.

- whether the resource might be {{domxref("PerformanceResourceTiming.renderBlockingStatus", "render-blocking", "", 1)}}: meaning that the browser needs to download and evaluate the resource before rendering the page.

- the {{domxref("PerformanceResourceTiming.responseStatus", "status code the server returned for the resource", "", 1)}}

- an identifier for the {{domxref("PerformanceResourceTiming.nextHopProtocol", "version of HTTP used to fetch the resource", "", 1)}}

### Cross-origin resource loads

By default, most of the information in a resource timing entry is not exposed for cross-origin resource loads: the property values are set to zero.

To receive complete information for a cross-origin resource load, the server must send a {{HTTPHeader("Timing-Allow-Origin")}} response header along with the resource, listing the requester's origin.

### Examples

#### Listing all resource loads

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

#### Listing resource timings

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
