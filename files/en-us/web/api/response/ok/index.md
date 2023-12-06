---
title: "Response: ok property"
short-title: ok
slug: Web/API/Response/ok
page-type: web-api-instance-property
browser-compat: api.Response.ok
---

{{APIRef("Fetch API")}}

The **`ok`** read-only property of the {{domxref("Response")}} interface contains a Boolean stating whether the response was successful (status in the range 200-299) or not.

## Value

A boolean value.

## Examples

In our [Fetch Response example](https://github.com/mdn/dom-examples/tree/main/fetch/fetch-response) (see [Fetch Response live](https://mdn.github.io/dom-examples/fetch/fetch-response/))
we create a new {{domxref("Request")}} object using the {{domxref("Request.Request","Request()")}} constructor, passing it a JPG path.
We then fetch this request using {{domxref("fetch()")}}, extract a blob from the response using {{domxref("Response.blob")}}, create an object URL out of it using {{domxref("URL.createObjectURL_static", "URL.createObjectURL()")}}, and display this in an {{htmlelement("img")}}.

> **Note:** at the top of the `fetch()` block we log the response `ok` value to the console.

```js
const myImage = document.querySelector("img");

const myRequest = new Request("flowers.jpg");

fetch(myRequest).then((response) => {
  console.log(response.ok); // returns true if the response returned successfully
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
