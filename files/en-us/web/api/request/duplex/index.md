---
title: "Request: duplex property"
short-title: duplex
slug: Web/API/Request/duplex
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.Request.duplex
---

{{APIRef("Fetch API")}}{{SeeCompatTable}}

The **`duplex`** read-only property of the {{domxref("Request")}} interface returns the duplex mode of the request, which determines whether the browser must send the entire request before processing the response.

## Value

A string with the following possible value:

- `"half"`
  - : The browser must send the entire request before processing the response.

If not specified when creating the request, the value will be `undefined`.

## Examples

### Checking a request's duplex mode

```js
const stream = new ReadableStream({
  /* ... */
});
const request = new Request("/upload", {
  method: "POST",
  body: stream,
  duplex: "half", // Required for streaming requests
});

console.log(request.duplex); // "half"
```

### Handling missing duplex with ReadableStream

```js
try {
  // This will throw if duplex is missing with ReadableStream
  const invalidRequest = new Request("/upload", {
    method: "POST",
    body: new ReadableStream(),
  });
} catch (err) {
  console.error(err); // TypeError: Failed to construct 'Request'
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Fetch API](/en-US/docs/Web/API/Fetch_API)
- {{domxref("Request.Request", "Request()")}} constructor
- {{domxref("RequestInit.duplex")}} in request options
- [Using ReadableStreams with fetch](/en-US/docs/Web/API/Streams_API/Using_readable_streams#streams_with_fetch)
