---
title: WorkerLocation.origin
slug: Web/API/WorkerLocation/origin
tags:
  - API
  - Property
  - Read-only
  - Reference
  - WorkerLocation
browser-compat: api.WorkerLocation.origin
---
{{ApiRef("WorkerLocation")}}

The **`origin`** property of a {{domxref("WorkerLocation")}} object returns the worker’s {{domxref("URL.origin", "origin")}}.

## Syntax

```js
string = object.origin;
```

## Examples

```js
// On this page, returns the origin
var result = self.location.origin; // Returns:'https://developer.mozilla.org:443'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("WorkerLocation")}} interface it belongs to.
