---
title: "Response: type property"
short-title: type
slug: Web/API/Response/type
page-type: web-api-instance-property
browser-compat: api.Response.type
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

The **`type`** read-only property of the {{domxref("Response")}} interface contains the type of the response.
It can be one of the following:

- `basic`: Normal, same origin response, with all headers exposed except "Set-Cookie".
- `cors`: Response was received from a valid cross-origin request. [Certain headers and the body](https://fetch.spec.whatwg.org/#concept-filtered-response-cors) may be accessed.
- `error`: Network error.
  No useful information describing the error is available.
  The Response's status is 0, headers are empty and immutable.
  This is the type for a Response obtained from `Response.error()`.
- `opaque`: Response for "no-cors" request to cross-origin resource.
  [Severely restricted](https://fetch.spec.whatwg.org/#concept-filtered-response-opaque).
- `opaqueredirect`: The fetch request was made with `redirect: "manual"`.
  The Response's status is 0, headers are empty, body is null and trailer is empty.

> [!NOTE]
> An "error" Response never really gets exposed to script: such a response to a {{domxref("Window/fetch", "fetch()")}} would reject the promise.

## Value

A `ResponseType` string indicating the type of the response.

## Examples

In our [Fetch Response example](https://github.com/mdn/dom-examples/tree/main/fetch/fetch-response) (see [Fetch Response live](https://mdn.github.io/dom-examples/fetch/fetch-response/)) we create a new {{domxref("Request")}} object using the {{domxref("Request.Request","Request()")}} constructor, passing it a JPG path.
We then fetch this request using {{domxref("Window/fetch", "fetch()")}}, extract a blob from the response using {{domxref("Response.blob")}}, create an object URL out of it using {{domxref("URL.createObjectURL_static", "URL.createObjectURL()")}}, and display this in an {{htmlelement("img")}}.

Note that at the top of the `fetch()` block we log the response `type` to the console.

```js
const myImage = document.querySelector("img");

const myRequest = new Request("flowers.jpg");

fetch(myRequest)
  .then((response) => {
    console.log("response.type =", response.type); // response.type = 'basic'
    return response.blob();
  })
  .then((myBlob) => {
    const objectURL = URL.createObjectURL(myBlob);
    myImage.src = objectURL;
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
