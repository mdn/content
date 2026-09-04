---
title: "Request: arrayBuffer() method"
short-title: arrayBuffer()
slug: Web/API/Request/arrayBuffer
page-type: web-api-instance-method
browser-compat: api.Request.arrayBuffer
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

The **`arrayBuffer()`** method of the {{domxref("Request")}} interface
reads the request body and returns it as a promise that resolves with an {{jsxref("ArrayBuffer")}}.

## Syntax

```js-nolint
arrayBuffer()
```

### Parameters

None.

### Return value

A promise that resolves with an {{jsxref("ArrayBuffer")}}.

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown for one of the following reasons:
    - The request body is [disturbed or locked](/en-US/docs/Web/API/Fetch_API/Using_Fetch#locked_and_disturbed_streams).
    - There was an error decoding the body content (for example, because the {{httpheader("Content-Encoding")}} header is incorrect).
- {{jsxref("RangeError")}}
  - : Thrown if there is a problem creating the associated `ArrayBuffer` (for example, if the data size is too large).

## Examples

```js
const myArray = new Uint8Array(10);

const request = new Request("/myEndpoint", {
  method: "POST",
  body: myArray,
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
