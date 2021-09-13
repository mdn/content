---
title: Response.type
slug: Web/API/Response/type
tags:
  - API
  - Experimental
  - Fetch
  - Property
  - Reference
  - Response
  - Type
browser-compat: api.Response.type
---
{{APIRef("Fetch")}}

The **`type`** read-only property of the {{domxref("Response")}} interface contains the type of the response. It can be one of the following:

- `basic`: Normal, same origin response, with all headers exposed except “Set-Cookie” and “Set-Cookie2″.
- `cors`: Response was received from a valid cross-origin request. [Certain headers and the body](https://fetch.spec.whatwg.org/#concept-filtered-response-cors) may be accessed.
- `error`: Network error. No useful information describing the error is available. The Response’s status is 0, headers are empty and immutable. This is the type for a Response obtained from `Response.error()`.
- `opaque`: Response for “no-cors” request to cross-origin resource. [Severely restricted](https://fetch.spec.whatwg.org/#concept-filtered-response-opaque).
- `opaqueredirect`: The fetch request was made with `redirect: "manual"`. The Response's status is 0, headers are empty, body is null and trailer is empty.

> **Note:** An "error" Response never really gets exposed to script: such a response to a {{domxref("fetch()")}} would reject the promise.

## Syntax

```js
var myType = response.type;
```

### Value

A `ResponseType` string indicating the type of the response.

## Example

In our [Fetch Response example](https://github.com/mdn/fetch-examples/tree/gh-pages/fetch-response) (see [Fetch Response live](https://mdn.github.io/fetch-examples/fetch-response/)) we create a new {{domxref("Request")}} object using the {{domxref("Request.Request","Request()")}} constructor, passing it a JPG path. We then fetch this request using {{domxref("fetch()")}}, extract a blob from the response using {{domxref("Response.blob")}}, create an object URL out of it using {{domxref("URL.createObjectURL")}}, and display this in an {{htmlelement("img")}}.

Note that at the top of the `fetch()` block we log the response `type` to the console.

```js
var myImage = document.querySelector('img');

var myRequest = new Request('flowers.jpg');

fetch(myRequest).then(function(response) {
  console.log(response.type); // returns basic by default
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
