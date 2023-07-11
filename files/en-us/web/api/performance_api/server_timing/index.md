---
title: Server timing
slug: Web/API/Performance_API/Server_timing
page-type: guide
---

{{DefaultAPISidebar("Performance API")}}

Server-Timing is a part of the Performance API and allows servers to communicate metrics about the request-response cycle to the user agent. You can collect this information and act on server-side metrics in the same way as all the other metrics processed with the Performance API.

## Sending server metrics

The {{HTTPHeader("Server-Timing")}} HTTP header is used to surface any backend server timing metrics. For example, you might want to send database read/write operation times, CPU time, and file system access.

You can send metrics with or without values. The metrics can optionally contain a description. It is advised to keep names, descriptions, and data as short as possible to minimize the HTTP overhead.

Examples of `Server-Timing` headers:

```http
// Single metric without value
Server-Timing: missedCache

// Single metric with value
Server-Timing: cpu;dur=2.4

// Single metric with description and value
Server-Timing: cache;desc="Cache Read";dur=23.2

// Two metrics with values
Server-Timing: db;dur=53, app;dur=47.2

// Server-Timing as trailer
Trailer: Server-Timing
--- response body ---
Server-Timing: total;dur=123.4
```

To calculate real server-side metrics, consult the documentation of your server-side CMS, framework, or programming language for how to measure performance within the backend application. If your server uses Node.js, the performance measurement APIs will look very familiar to the Performance API in browsers. This is because the Node.js performance module is a subset of the W3C Web Performance APIs as well as additional APIs for Node.js-specific performance measurements. See the [Node.js performance documentation](https://nodejs.org/api/perf_hooks.html#performance-measurement-apis) for more information.

Note that there is no clock synchronization between the server, the client, and any intermediate proxies. This means that if your server sends timestamps or a `startTime`, the value might not meaningfully map to the {{domxref("PerformanceEntry.startTime", "startTime")}} of the client's timeline.

Once you have calculated your desired metrics, the server needs to send the `Server-Timing` header in its response. See the {{HTTPHeader("Server-Timing")}} reference page for an example of how to send the header in Node.js.

## Retrieving server metrics

The server timing metrics usually appear in the developer tools of the browser, but they are also stored as {{domxref("PerformanceServerTiming")}} performance entries that you can access like other [performance data](/en-US/docs/Web/API/Performance_API/Performance_data). However, there are no `"server-timing"` entries on their own. The `PerformanceServerTiming` objects are observable from `"navigation"` and `"resource"` performance entries. You access the server metrics from the {{domxref("PerformanceResourceTiming.serverTiming")}} property, which is an array of `PerformanceServerTiming` objects.

Given a {{HTTPHeader("Server-Timing")}} like this:

```
Server-Timing: cache;desc="Cache Read";dur=23.2,db;dur=53,app;dur=47.2
```

A `PerformanceObserver` can log the entries on the client side with the following code:

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    entry.serverTiming.forEach((serverEntry) => {
      console.log(
        `${serverEntry.name} (${serverEntry.description}) duration: ${serverEntry.duration}`,
      );
      // Logs "cache (Cache Read) duration: 23.2"
      // Logs "db () duration: 53"
      // Logs "app () duration: 47.2"
    });
  });
});

["navigation", "resource"].forEach((type) =>
  observer.observe({ type, buffered: true }),
);
```

## Privacy and security considerations

The `Server-Timing` header may expose potentially sensitive application and infrastructure information. Therefore, you need to control when the metrics are returned and to whom on the server side. For example, you could show metrics only to authenticated users and nothing to the public.

The `PerformanceServerTiming` interface is restricted to the same origin, but you can use the {{HTTPHeader("Timing-Allow-Origin")}} header to specify the domains that are allowed to access the server metrics. Also, note that this interface is only available in secure contexts (HTTPS) in some browsers.
