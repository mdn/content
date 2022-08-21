---
title: PerformanceServerTiming
slug: Web/API/PerformanceServerTiming
page-type: web-api-interface
tags:
  - API
  - Interface
  - Reference
  - ServerTiming
browser-compat: api.PerformanceServerTiming
---
{{APIRef("Resource Timing API")}} {{AvailableInWorkers}} {{securecontext_header}}

The **`PerformanceServerTiming`** interface surfaces server metrics that are sent with the response in the {{HTTPHeader("Server-Timing")}} HTTP header.

This interface is restricted to the same origin, but you can use the {{HTTPHeader("Timing-Allow-Origin")}} header to specify the domains that are allowed to access the server metrics. Note that this interface is only available in secure contexts (HTTPS) in some browsers.

## Properties

- {{domxref('PerformanceServerTiming.description')}} {{ReadOnlyInline}}
  - : A string value of the server-specified metric description, or an empty string.
- {{domxref('PerformanceServerTiming.duration')}} {{ReadOnlyInline}}
  - : A double that contains the server-specified metric duration, or value `0.0`.
- {{domxref('PerformanceServerTiming.name')}} {{ReadOnlyInline}}
  - : A string value of the server-specified metric name.

## Methods

- {{domxref('PerformanceServerTiming.toJSON()')}}
  - : Returns a string that is the JSON representation of the `PerformanceServerTiming` object.

## Example

Given a server that sends the {{HTTPHeader("Server-Timing")}} header, for example a Node.js server like this:

```js
const http = require('http');

function requestHandler(request, response) {
  const headers = {
    'Server-Timing': `
      cache;desc="Cache Read";dur=23.2,
      db;dur=53,
      app;dur=47.2
    `.replace(/\n/g, '')
  };
  response.writeHead(200, headers);
  response.write('');
  return setTimeout(() => {
   response.end();
 }, 1000)
};

http.createServer(requestHandler).listen(3000).on('error', console.error);
```

The `PerformanceServerTiming` entries are now observable from JavaScript via the {{domxref("PerformanceResourceTiming.serverTiming")}} property:

```js
let entries = performance.getEntriesByType('resource');
console.log(entries[0].serverTiming);
// 0: PerformanceServerTiming {name: "cache", duration: 23.2, description: "Cache Read"}
// 1: PerformanceServerTiming {name: "db", duration: 53, description: ""}
// 2: PerformanceServerTiming {name: "app", duration: 47.2, description: ""}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Server-Timing")}}
- {{domxref("PerformanceResourceTiming.serverTiming")}}
