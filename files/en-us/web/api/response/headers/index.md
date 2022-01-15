---
title: Response.headers
slug: Web/API/Response/headers
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

## Example

In our [Fetch Response example](https://github.com/mdn/fetch-examples/tree/master/fetch-response) (see [Fetch Response live](https://mdn.github.io/fetch-examples/fetch-response/))
we create a new {{domxref("Request")}} object using the {{domxref("Request.Request","Request()")}} constructor, passing it a JPG path.
We then fetch this request using {{domxref("fetch()")}}, extract a blob from the response using {{domxref("Response.blob")}},
create an object URL out of it using {{domxref("URL.createObjectURL")}}, and display this in an {{htmlelement("img")}}.

Note that at the top of the `fetch()` block we log the response `headers` value to the console.

```js
var myImage = document.querySelector('img');

var myRequest = new Request('flowers.jpg');

fetch(myRequest).then(function(response) {
  console.log(response.headers); // returns a Headers{} object
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
