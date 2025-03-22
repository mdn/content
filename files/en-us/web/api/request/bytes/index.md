---
title: "Request: bytes() method"
short-title: bytes()
slug: Web/API/Request/bytes
page-type: web-api-instance-method
browser-compat: api.Request.bytes
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

The **`bytes()`** method of the {{domxref("Request")}} interface reads the request body and returns it as a promise that resolves with an {{jsxref("Uint8Array")}}.

## Syntax

```js-nolint
bytes()
```

### Parameters

None.

### Return value

A promise that resolves with an {{jsxref("Uint8Array")}}.

## Examples

```js
const myArray = new Uint8Array(10);

const request = new Request("/myEndpoint", {
  method: "POST",
  body: myArray,
});

request.bytes().then((buffer) => {
  // do something with the buffer sent in the request
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Response.arrayBuffer()")}}
