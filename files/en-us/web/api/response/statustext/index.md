---
title: "Response: statusText property"
short-title: statusText
slug: Web/API/Response/statusText
page-type: web-api-instance-property
browser-compat: api.Response.statusText
---

{{APIRef("Fetch API")}}

The **`statusText`** read-only property of the {{domxref("Response")}} interface contains the status message corresponding to the HTTP status code in {{domxref("Response.status")}}.

For example, this would be `OK` for a status code `200`, `Continue` for `100`, `Not Found` for `404`.

## Value

A {{jsxref("String")}} containing the HTTP status message associated with the response.
The default value is "".

See [HTTP response status codes](/en-US/docs/Web/HTTP/Status) for a list of codes and their associated status messages.
Note that HTTP/2 [does not support](https://fetch.spec.whatwg.org/#concept-response-status-message) status messages.

## Examples

In our [Fetch Response example](https://github.com/mdn/dom-examples/tree/main/fetch/fetch-response) (see [Fetch Response live](https://mdn.github.io/dom-examples/fetch/fetch-response/)) we create a new {{domxref("Request")}} object using the {{domxref("Request.Request","Request()")}} constructor, passing it a JPG path.
We then fetch this request using {{domxref("fetch()")}}, extract a blob from the response using {{domxref("Response.blob")}}, create an object URL out of it using {{domxref("URL.createObjectURL")}}, and display this in an {{htmlelement("img")}}.

Note that at the top of the `fetch()` block we log the response `statusText` value to the console.

```js
const myImage = document.querySelector("img");

const myRequest = new Request("flowers.jpg");

fetch(myRequest).then((response) => {
  console.log(response.statusText); // returns "OK" if the response returned successfully
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
