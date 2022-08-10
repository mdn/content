---
title: WorkerLocation.href
slug: Web/API/WorkerLocation/href
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Read-only
  - Reference
  - WorkerLocation
browser-compat: api.WorkerLocation.href
---
{{ApiRef("WorkerLocation")}}

The **`href`** property of a {{domxref("WorkerLocation")}} object returns a string containing the serialized {{domxref("URL")}} for the worker's location.

## Value

A string.

## Examples

```js
// In a Web worker, on the page https://developer.mozilla.org/en-US/docs/Web
const result = location.href; // Returns 'https://developer.mozilla.org/en-US/docs/Web'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("WorkerLocation")}} interface it belongs to.
