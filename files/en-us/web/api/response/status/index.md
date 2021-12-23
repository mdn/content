---
title: Response.status
slug: Web/API/Response/status
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

## Example

In our [Fetch Response example](https://github.com/mdn/fetch-examples/tree/master/fetch-response) (see [Fetch Response live](https://mdn.github.io/fetch-examples/fetch-response/))
we create a new {{domxref("Request")}} object using the {{domxref("Request.Request","Request()")}} constructor, passing it a JPG path.
We then fetch this request using {{domxref("fetch()")}}, extract a blob from the response using {{domxref("Response.blob")}}, create an object URL out of it using {{domxref("URL.createObjectURL")}}, and display this in an {{htmlelement("img")}}.

Note that at the top of the `fetch()` block we log the response `status` value to the console.

```js
var myImage = document.querySelector('img');

var myRequest = new Request('flowers.jpg');

fetch(myRequest).then(function(response) {
  console.log(response.status); // returns 200
  response.blob().then(function(myBlob) {
    var objectURL = URL.createObjectURL(myBlob);
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
