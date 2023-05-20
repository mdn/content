---
title: "Response: clone() method"
short-title: clone()
slug: Web/API/Response/clone
page-type: web-api-instance-method
browser-compat: api.Response.clone
---

{{APIRef("Fetch API")}}

The **`clone()`** method of the {{domxref("Response")}} interface creates a clone of a response object, identical in every way, but stored in a different variable.

Like the underlying {{domxref("ReadableStream.tee")}} api,
the {{domxref("Response.body", "body")}} of a cloned `Response`
will signal backpressure at the rate of the _faster_ consumer of the two bodies,
and unread data is enqueued internally on the slower consumed `body`
without any limit or backpressure.
Backpressure refers to the mechanism by which the streaming consumer of data
(in this case, the code that reads the body)
slows down the producer of data (such as the TCP server)
so as not to load large amounts of data in memory
that is waiting to be used by the application.
If only one cloned branch is consumed, then the entire body will be buffered in memory.
Therefore, `clone()` is one way to read a response twice in sequence,
but you should not use it to read very large bodies
in parallel at different speeds.

`clone()` throws a {{jsxref("TypeError")}} if the response body has already been used.
In fact, the main reason `clone()` exists is to allow multiple uses of body objects (when they are one-use only.)

## Syntax

```js-nolint
clone()
```

### Parameters

None.

### Return value

A {{domxref("Response")}} object.

## Examples

In our [Fetch Response clone example](https://github.com/mdn/dom-examples/blob/main/fetch/fetch-response-clone/index.html) (see [Fetch Response clone live](https://mdn.github.io/dom-examples/fetch/fetch-response-clone/)) we create a new {{domxref("Request")}} object using the {{domxref("Request.Request","Request()")}} constructor, passing it a JPG path.
We then fetch this request using {{domxref("fetch()")}}.
When the fetch resolves successfully, we clone it, extract a blob from both responses using two {{domxref("Response.blob")}} calls, create object URLs out of the blobs using
{{domxref("URL.createObjectURL")}}, and display them in two separate {{htmlelement("img")}} elements.

```js
const image1 = document.querySelector(".img1");
const image2 = document.querySelector(".img2");

const myRequest = new Request("flowers.jpg");

fetch(myRequest).then((response) => {
  const response2 = response.clone();

  response.blob().then((myBlob) => {
    const objectURL = URL.createObjectURL(myBlob);
    image1.src = objectURL;
  });

  response2.blob().then((myBlob) => {
    const objectURL = URL.createObjectURL(myBlob);
    image2.src = objectURL;
  });
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [ServiceWorker API](/en-US/docs/Web/API/Service_Worker_API)
- [HTTP access control (CORS)](/en-US/docs/Web/HTTP/CORS)
- [HTTP](/en-US/docs/Web/HTTP)
