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

## Notes

Although `duplex` can be passed as an option when constructing a `Request`, it is not currently exposed as a readable property on the resulting `Request` object in all browsers.

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

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Fetch API](/en-US/docs/Web/API/Fetch_API)
- {{domxref("Request.Request", "Request()")}} constructor
- [`RequestInit.duplex`](/en-US/docs/Web/API/RequestInit#duplex) in request options
- [Consuming a fetch as a stream](/en-US/docs/Web/API/Streams_API/Using_readable_streams#consuming_a_fetch_as_a_streamh)
