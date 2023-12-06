---
title: "Request: clone() method"
short-title: clone()
slug: Web/API/Request/clone
page-type: web-api-instance-method
browser-compat: api.Request.clone
---

{{APIRef("Fetch API")}}

The **`clone()`** method of the {{domxref("Request")}} interface creates a copy of the current `Request` object.

Like the underlying {{domxref("ReadableStream.tee")}} api,
the {{domxref("Request.body", "body")}} of a cloned `Response`
will signal backpressure at the rate of the _faster_ consumer of the two bodies,
and unread data is enqueued internally on the slower consumed `body`
without any limit or backpressure.
Beware when you construct a `Request` from a stream and then `clone` it.

`clone()` throws a {{jsxref("TypeError")}} if the request body has already been used. In fact, the main reason `clone()` exists is to allow multiple uses of body objects (when they are one-use only.)

If you intend to modify the request, you may prefer the {{domxref("Request")}} constructor.

## Syntax

```js-nolint
clone()
```

### Parameters

None.

### Return value

A {{domxref("Request")}} object, which is an exact copy of the `Request` that `clone()` was called on.

## Examples

In the following snippet, we create a new request using the {{domxref("Request.Request", "Request()")}} constructor (for an image file in the same directory as the script), then clone the request.

```js
const myRequest = new Request("flowers.jpg");
const newRequest = myRequest.clone(); // a copy of the request is now stored in newRequest
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [ServiceWorker API](/en-US/docs/Web/API/Service_Worker_API)
- [HTTP access control (CORS)](/en-US/docs/Web/HTTP/CORS)
- [HTTP](/en-US/docs/Web/HTTP)
