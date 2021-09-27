---
title: WorkerGlobalScope.location
slug: Web/API/WorkerGlobalScope/location
tags:
  - API
  - Location
  - Property
  - Reference
  - Web Workers
  - WorkerGlobalScope
browser-compat: api.WorkerGlobalScope.location
---
{{APIRef("Web Workers API")}}

The **`location`** read-only property of the {{domxref("WorkerGlobalScope")}} interface returns the {{domxref("WorkerLocation")}} associated with the worker. It is a specific location object, mostly a subset of the {{domxref("Location")}} for browsing scopes, but adapted to workers.

## Syntax

```js
var locationObj = self.location;
```

### Value

A {{domxref("WorkerLocation")}} object.

## Example

If you called the following in a document served at `localhost:8000`

```js
console.log(location);
```

inside a worker (which would basically be the equivalent of `self.console.log(self.location);`, as these are being called on the worker scope, which can be referenced with {{domxref("WorkerGlobalScope.self")}}), you will get a {{domxref("WorkerLocation")}} object written to the console — something like the following:

```js
WorkerLocation {hash: "", search: "", pathname: "/worker.js", port: "8000", hostname: "localhost"…}
  hash: ""
  host: "localhost:8000"
  hostname: "localhost"
  href: "http://localhost:8000/worker.js"
  origin: "http://localhost:8000"
  pathname: "/worker.js"
  port: "8000"
  protocol: "http:"
  search: ""
  __proto__: WorkerLocation
```

You could use this location object to return more information about the document's location, as you might do with a normal {{domxref("Location")}} object.

> **Note:** Firefox has a bug with using `console.log` inside shared/service workers (see {{Bug("1058644")}}), which may return strange results, but this should be fixed soon.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

{{domxref("WorkerGlobalScope")}}
