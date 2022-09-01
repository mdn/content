---
title: Response.blob()
slug: Web/API/Response/blob
page-type: web-api-instance-method
tags:
  - API
  - Blob
  - Fetch
  - Method
  - Reference
  - Response
browser-compat: api.Response.blob
---
{{APIRef("Fetch")}}

The **`blob()`** method of the {{domxref("Response")}} interface takes
a {{domxref("Response")}} stream and reads it to completion. It returns a promise that
resolves with a {{domxref("Blob")}}.

## Syntax

```js
blob()
```

### Parameters

None.

> **Note:** If the {{domxref("Response")}} has a
> {{domxref("Response.type")}} of `"opaque"`, the resulting {{domxref("Blob")}}
> will have a {{domxref("Blob.size")}} of `0` and a {{domxref("Blob.type")}} of
> empty string `""`, which renders it _useless_ for methods like
> {{domxref("URL.createObjectURL")}}.

### Return value

A promise that resolves with a {{domxref("Blob")}}.

## Examples

In our [fetch request example](https://github.com/mdn/dom-examples/tree/main/fetch/fetch-request) (run [fetch request live](https://mdn.github.io/dom-examples/fetch/fetch-request/)), we
create a new request using the {{domxref("Request.Request","Request()")}} constructor,
then use it to fetch a JPG. When the fetch is successful, we read a {{domxref("Blob")}}
out of the response using `blob()`, put it into an object URL using
{{domxref("URL.createObjectURL")}}, and then set that URL as the source of an
{{htmlelement("img")}} element to display the image.

```js
const myImage = document.querySelector('img');

const myRequest = new Request('flowers.jpg');

fetch(myRequest)
  .then((response) => response.blob())
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
