---
title: WorkerLocation.protocol
slug: Web/API/WorkerLocation/protocol
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Read-only
  - Reference
  - WorkerLocation
browser-compat: api.WorkerLocation.protocol
---
{{ApiRef("WorkerLocation")}}

The **`protocol`** property of a {{domxref("WorkerLocation")}} object returns the {{domxref("URL.protocol", "protocol")}} part of the worker's location.

## Value

A string.

## Examples

```js
// In a Web worker, on the page https://developer.mozilla.org/en-US/docs/Web
const result = location.protocol; // Returns 'https:'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("WorkerLocation")}} interface it belongs to.
