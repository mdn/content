---
title: WorkerLocation.port
slug: Web/API/WorkerLocation/port
tags:
  - API
  - Property
  - Read-only
  - Reference
  - WorkerLocation
browser-compat: api.WorkerLocation.port
---
{{ApiRef("WorkerLocation")}}

The **`port`** property of a {{domxref("WorkerLocation")}} object returns the {{domxref("URL.port", "port")}} part of the worker’s location.

## Syntax

```js
string = location.port;
```

## Examples

```js
// In a Web worker, on the page http://localhost:8080/
var result = location.port; // Returns '8080'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("WorkerLocation")}} interface it belongs to.
