---
title: WorkerLocation.hash
slug: Web/API/WorkerLocation/hash
tags:
  - API
  - Property
  - Read-only
  - Reference
  - WorkerLocation
browser-compat: api.WorkerLocation.hash
---
{{ApiRef("WorkerLocation")}}

The **`hash`** property of a {{domxref("WorkerLocation")}} object returns the {{domxref("URL.hash", "hash")}} part of the worker’s location.

## Syntax

```js
string = location.hash;
```

## Examples

```js
// In a Web worker, on the page https://developer.mozilla.org/en-US/docs/Web/API/WorkerLocation/hash#examples
var result = location.hash; // Returns '#examples'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("WorkerLocation")}} interface it belongs to.
