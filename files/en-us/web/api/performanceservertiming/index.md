---
title: PerformanceServerTiming
slug: Web/API/PerformanceServerTiming
page-type: web-api-interface
browser-compat: api.PerformanceServerTiming
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}{{securecontext_header}}

The **`PerformanceServerTiming`** interface surfaces server metrics that are sent with the response in the {{HTTPHeader("Server-Timing")}} HTTP header.

This interface is restricted to the same origin, but you can use the {{HTTPHeader("Timing-Allow-Origin")}} header to specify the domains that are allowed to access the server metrics. Note that this interface is only available in secure contexts (HTTPS) in some browsers.

## Instance properties

- {{domxref('PerformanceServerTiming.description')}} {{ReadOnlyInline}}
  - : A string value of the server-specified metric description, or an empty string.
- {{domxref('PerformanceServerTiming.duration')}} {{ReadOnlyInline}}
  - : A double that contains the server-specified metric duration, or value `0.0`.
- {{domxref('PerformanceServerTiming.name')}} {{ReadOnlyInline}}
  - : A string value of the server-specified metric name.

## Instance methods

- {{domxref('PerformanceServerTiming.toJSON()')}}
  - : Returns a JSON representation of the `PerformanceServerTiming` object.

## Example

Given a server that sends the {{HTTPHeader("Server-Timing")}} header, for example a Node.js server like this:

```js
const http = require("http");

function requestHandler(request, response) {
  const headers = {
    "Server-Timing": `
      cache;desc="Cache Read";dur=23.2,
      db;dur=53,
      app;dur=47.2
    `.replace(/\n/g, ""),
  };
  response.writeHead(200, headers);
  response.write("");
  return setTimeout(() => {
    response.end();
  }, 1000);
}

http.createServer(requestHandler).listen(3000).on("error", console.error);
```

The `PerformanceServerTiming` entries are now observable from JavaScript via the {{domxref("PerformanceResourceTiming.serverTiming")}} property and live on `navigation` and `resource` entries.

Example using a {{domxref("PerformanceObserver")}}, which notifies of new `navigation` and `resource` performance entries as they are recorded in the browser's performance timeline. Use the `buffered` option to access entries from before the observer creation.

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

Example using {{domxref("Performance.getEntriesByType()")}}, which only shows `navigation` and `resource` performance entries present in the browser's performance timeline at the time you call this method:

```js
for (const entryType of ["navigation", "resource"]) {
  for (const { name: url, serverTiming } of performance.getEntriesByType(
    entryType,
  )) {
    if (serverTiming) {
      for (const { name, description, duration } of serverTiming) {
        console.log(`${name} (${description}) duration: ${duration}`);
        // Logs "cache (Cache Read) duration: 23.2"
        // Logs "db () duration: 53"
        // Logs "app () duration: 47.2"
      }
    }
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Server-Timing")}}
- {{domxref("PerformanceResourceTiming.serverTiming")}}
