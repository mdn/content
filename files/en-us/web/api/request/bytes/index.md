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

### Exceptions

- `TypeError`
  : Thrown for one of the following reasons:
  _ The response body is [disturbed or locked](/en-US/docs/Web/API/Fetch_API/Using_Fetch#locked_and_disturbed_streams).
  _ There was an error decoding the body content (for example, because the {{httpheader("Content-Encoding")}} header is incorrect).
- `RangeError`
  : Thrown if there is a problem creating the associated `ArrayBuffer` (for example, if the data size is too large).

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
