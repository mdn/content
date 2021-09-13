---
title: Request.blob()
slug: Web/API/Request/blob
tags:
  - API
  - Blob
  - Fetch
  - Method
  - Reference
  - Request
browser-compat: api.Request.blob
---
{{APIRef("Fetch")}}

The **`blob()`** method of the {{domxref("Request")}} interface
reads the request body and returns it as a promise that resolves with a {{domxref("Blob")}}.

## Syntax

```js
request.blob().then(function(myBlob) {
  // do something with myBlob
});
```

### Parameters

None.

### Return value

A promise that resolves with a {{domxref("Blob")}}.

## Examples

```js
const obj = {hello: 'world'};
const myBlob = new Blob([JSON.stringify(obj, null, 2)], {type : 'application/json'});

const request = new Request('/myEndpoint', {
  method: 'POST',
  body: myBlob
 });

request.blob().then(function(myBlob) {
  // do something with the blob sent in the request
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Response.blob()")}}
