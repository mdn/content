---
title: WorkerLocation.pathname
slug: Web/API/WorkerLocation/pathname
tags:
  - API
  - Property
  - Read-only
  - Reference
  - WorkerLocation
browser-compat: api.WorkerLocation.pathname
---
{{ApiRef("WorkerLocation")}}

The **`pathname`** property of a {{domxref("WorkerLocation")}} object returns the {{domxref("URL.pathname", "pathname")}} part of the worker’s location.

## Syntax

```js
string = location.pathname;
```

## Examples

```js
// In a Web worker, on the page https://developer.mozilla.org/en-US/docs/Web
var result = location.pathname; // Returns '/en-US/docs/Web'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("WorkerLocation")}} interface it belongs to.
