---
title: WorkerLocation.search
slug: Web/API/WorkerLocation/search
tags:
  - API
  - Property
  - Read-only
  - Reference
  - WorkerLocation
browser-compat: api.WorkerLocation.search
---
{{ApiRef("WorkerLocation")}}

The **`search`** property of a {{domxref("WorkerLocation")}} object returns the {{domxref("URL.search", "search")}} part of the worker's location.

## Syntax

```js
string = location.search;
```

## Examples

```js
// In a Web worker, on the page https://developer.mozilla.org/en-US/docs/Web?t=67
var result = location.search; // Returns:'?t=67'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("WorkerLocation")}} interface it belongs to.
