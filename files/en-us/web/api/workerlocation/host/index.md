---
title: "WorkerLocation: host property"
short-title: host
slug: Web/API/WorkerLocation/host
page-type: web-api-instance-property
browser-compat: api.WorkerLocation.host
---

{{ApiRef("WorkerLocation")}}{{AvailableInWorkers("worker")}}

The **`host`** property of a {{domxref("WorkerLocation")}} object returns the {{domxref("URL.host", "host")}} part of the worker's location.

## Value

A string.

## Examples

```js
// In a Web worker, on the page http://localhost:8080/
const result = location.host; // Returns 'localhost:8080'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("WorkerLocation")}} interface it belongs to.
