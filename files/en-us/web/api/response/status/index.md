---
title: Response.status
slug: Web/API/Response/status
page-type: web-api-instance-property
tags:
  - API
  - Fetch
  - Property
  - Reference
  - Response
  - status
browser-compat: api.Response.status
---
{{APIRef("Fetch")}}

The **`status`** read-only property of the {{domxref("Response")}} interface contains the [HTTP status codes](/en-US/docs/Web/HTTP/Status) of the response.

For example, `200` for success, `404` if the resource could not be found.

## Value

A unsigned short number.
This is one of the [HTTP response status codes](/en-US/docs/Web/HTTP/Status).

## Examples

In our [Fetch Response example](https://github.com/mdn/dom-examples/tree/main/fetch/fetch-response) (see [Fetch Response live](https://mdn.github.io/dom-examples/fetch/fetch-response/))
we create a new {{domxref("Request")}} object using the {{domxref("Request.Request","Request()")}} constructor, passing it a JPG path.
We then fetch this request using {{domxref("fetch()")}}, extract a blob from the response using {{domxref("Response.blob")}}, create an object URL out of it using {{domxref("URL.createObjectURL")}}, and display this in an {{htmlelement("img")}}.

Note that at the top of the `fetch()` block we log the response `status` value to the console.

```js
const myImage = document.querySelector('img');

const myRequest = new Request('flowers.jpg');

fetch(myRequest).then((response) => {
  console.log(response.status); // returns 200
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
