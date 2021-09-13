---
title: WorkerLocation.hostname
slug: Web/API/WorkerLocation/hostname
tags:
  - API
  - Property
  - Read-only
  - Reference
  - WorkerLocation
browser-compat: api.WorkerLocation.hostname
---
{{ApiRef("WorkerLocation")}}

The **`hostname`** property of a {{domxref("WorkerLocation")}} object returns the {{domxref("URL.hostname", "hostname")}} part of the worker’s location.

## Syntax

```js
string = location.hostname;
```

## Examples

```js
// In a Web worker, on the page http://localhost:8080/
var result = location.hostname; // Returns 'localhost'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("WorkerLocation")}} interface it belongs to.
