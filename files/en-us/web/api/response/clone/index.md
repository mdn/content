---
title: Response.clone()
slug: Web/API/Response/clone
tags:
  - API
  - Fetch
  - Method
  - Reference
  - Response
  - clone
browser-compat: api.Response.clone
---
{{APIRef("Fetch")}}

The **`clone()`** method of the {{domxref("Response")}} interface creates a clone of a response object, identical in every way, but stored in a different variable.

`clone()` throws a {{jsxref("TypeError")}} if the response body has already been used.
In fact, the main reason `clone()` exists is to allow multiple uses of body objects (when they are one-use only.)

## Syntax

```js
var response2 = response1.clone();
```

### Parameters

None.

### Value

A {{domxref("Response")}} object.

## Example

In our [Fetch Response clone example](https://github.com/mdn/fetch-examples/tree/master/fetch-response-clone) (see [Fetch Response clone live](https://mdn.github.io/fetch-examples/fetch-response-clone/)) we create a new {{domxref("Request")}} object using the {{domxref("Request.Request","Request()")}} constructor, passing it a JPG path.
We then fetch this request using {{domxref("fetch()")}}.
When the fetch resolves successfully, we clone it, extract a blob from both responses using two {{domxref("Response.blob")}} calls, create object URLs out of the blobs using
{{domxref("URL.createObjectURL")}}, and display them in two separate {{htmlelement("img")}} elements.

```js
var image1 = document.querySelector('.img1');
var image2 = document.querySelector('.img2');

var myRequest = new Request('flowers.jpg');

fetch(myRequest).then(function(response) {
  var response2 = response.clone();

  response.blob().then(function(myBlob) {
    var objectURL = URL.createObjectURL(myBlob);
    image1.src = objectURL;
  });

  response2.blob().then(function(myBlob) {
    var objectURL = URL.createObjectURL(myBlob);
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
