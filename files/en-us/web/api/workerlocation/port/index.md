---
title: "WorkerLocation: port property"
short-title: port
slug: Web/API/WorkerLocation/port
page-type: web-api-instance-property
browser-compat: api.WorkerLocation.port
---

{{ApiRef("WorkerLocation")}}{{AvailableInWorkers("worker")}}

The **`port`** property of a {{domxref("WorkerLocation")}} object returns the {{domxref("URL.port", "port")}} part of the worker's location.

## Value

A string.

## Examples

```js
// In a Web worker, on the page http://localhost:8080/
const result = location.port; // Returns '8080'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("WorkerLocation")}} interface it belongs to.
