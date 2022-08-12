---
title: Request.arrayBuffer()
slug: Web/API/Request/arrayBuffer
page-type: web-api-instance-method
tags:
  - API
  - ArrayBuffer
  - Fetch
  - Method
  - Reference
  - Request
browser-compat: api.Request.arrayBuffer
---
{{APIRef("Fetch")}}

The **`arrayBuffer()`** method of the {{domxref("Request")}} interface
reads the request body and returns it as a promise that resolves with an {{jsxref("ArrayBuffer")}}.

## Syntax

```js
arrayBuffer()
```

### Parameters

None.

### Return value

A promise that resolves with an {{jsxref("ArrayBuffer")}}.

## Examples

```js
const myArray = new Uint8Array(10);

const request = new Request('/myEndpoint', {
  method: 'POST',
  body: myArray
});

request.arrayBuffer().then((buffer) => {
  // do something with the buffer sent in the request
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Response.arrayBuffer()")}}
