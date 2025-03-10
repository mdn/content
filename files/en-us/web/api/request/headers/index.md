---
title: "Request: headers property"
short-title: headers
slug: Web/API/Request/headers
page-type: web-api-instance-property
browser-compat: api.Request.headers
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

The **`headers`** read-only property of the
{{domxref("Request")}} interface contains the {{domxref("Headers")}} object associated
with the request.

## Value

A {{domxref("Headers")}} object.

## Examples

In the following snippet, we create a new request using the
{{domxref("Request.Request", "Request()")}} constructor (for an image file in the same directory as
the script), then save the request headers in a variable:

```js
const myRequest = new Request("flowers.jpg");
const myHeaders = myRequest.headers; // Headers {}
```

To add a header to the {{domxref("Headers")}} object we use
{{domxref("Headers.append")}}; we then create a new `Request` along with a
2nd init parameter, passing headers in as an init option:

```js
const myHeaders = new Headers();
myHeaders.append("Content-Type", "image/jpeg");

const myInit = {
  method: "GET",
  headers: myHeaders,
  mode: "cors",
  cache: "default",
};

const myRequest = new Request("flowers.jpg", myInit);

const myContentType = myRequest.headers.get("Content-Type"); // returns 'image/jpeg'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [ServiceWorker API](/en-US/docs/Web/API/Service_Worker_API)
- [HTTP access control (CORS)](/en-US/docs/Web/HTTP/CORS)
- [HTTP](/en-US/docs/Web/HTTP)
