---
title: Response.headers
slug: Web/API/Response/headers
page-type: web-api-instance-property
tags:
  - API
  - Fetch
  - Headers
  - Property
  - Reference
  - Response
browser-compat: api.Response.headers
---
{{APIRef("Fetch")}}

The **`headers`** read-only property of the
{{domxref("Response")}} interface contains the {{domxref("Headers")}} object associated
with the response.

## Value

A {{domxref("Headers")}} object.

## Examples

In our [Fetch Response example](https://github.com/mdn/dom-examples/tree/main/fetch/fetch-response) (see [Fetch Response live](https://mdn.github.io/dom-examples/fetch/fetch-response/))
we create a new {{domxref("Request")}} object using the {{domxref("Request.Request","Request()")}} constructor, passing it a JPG path.
We then fetch this request using {{domxref("fetch()")}}, extract a blob from the response using {{domxref("Response.blob")}},
create an object URL out of it using {{domxref("URL.createObjectURL")}}, and display this in an {{htmlelement("img")}}.

Note that at the top of the `fetch()` block, we log the response headers to the console.

```js
const myImage = document.querySelector('img');

const myRequest = new Request('flowers.jpg');

fetch(myRequest).then((response) => {
  // for each response header, log an array with header name as key
  console.log(...response.headers);
  response.blob().then((myBlob) => {
    const objectURL = URL.createObjectURL(myBlob);
    myImage.src = objectURL;
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
