---
title: "WorkerLocation: hostname property"
short-title: hostname
slug: Web/API/WorkerLocation/hostname
page-type: web-api-instance-property
browser-compat: api.WorkerLocation.hostname
---

{{ApiRef("WorkerLocation")}}

The **`hostname`** property of a {{domxref("WorkerLocation")}} object returns the {{domxref("URL.hostname", "hostname")}} part of the worker's location.

## Value

A string.

## Examples

```js
// In a Web worker, on the page http://localhost:8080/
const result = location.hostname; // Returns 'localhost'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("WorkerLocation")}} interface it belongs to.
