---
title: Request.bodyUsed
slug: Web/API/Request/bodyUsed
page-type: web-api-instance-property
tags:
  - API
  - Fetch
  - Property
  - Reference
  - bodyUsed
  - Request
browser-compat: api.Request.bodyUsed
---
{{APIRef("Fetch")}}

The read-only **`bodyUsed`** property of the
{{domxref("Request")}} interface is a boolean value that indicates
whether the request body has been read yet.

## Value

A boolean value.

## Examples

```js
const request = new Request('/myEndpoint', {
  method: 'POST',
  body: 'Hello world'
});

request.bodyUsed; // false

request.text().then((bodyAsText) => {
  console.log(request.bodyUsed); // true
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Request.body")}}
