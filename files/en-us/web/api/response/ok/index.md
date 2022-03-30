---
title: Response.ok
slug: Web/API/Response/ok
tags:
  - API
  - Fetch
  - Property
  - Reference
  - Response
  - ok
browser-compat: api.Response.ok
---
{{APIRef("Fetch")}}

The **`ok`** read-only property of the {{domxref("Response")}} interface contains a Boolean stating whether the response was successful (status in the range 200-299) or not.

## Value

A boolean value.

## Example

In our [Fetch Response example](https://github.com/mdn/fetch-examples/tree/master/fetch-response) (see [Fetch Response live](https://mdn.github.io/fetch-examples/fetch-response/))
we create a new {{domxref("Request")}} object using the {{domxref("Request.Request","Request()")}} constructor, passing it a JPG path.
We then fetch this request using {{domxref("fetch()")}}, extract a blob from the response using {{domxref("Response.blob")}}, create an object URL out of it using {{domxref("URL.createObjectURL")}}, and display this in an {{htmlelement("img")}}.

> **Note:** at the top of the `fetch()` block we log the response `ok` value to the console.

```js
var myImage = document.querySelector('img');

var myRequest = new Request('flowers.jpg');

fetch(myRequest).then(function(response) {
  console.log(response.ok); // returns true if the response returned successfully
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
