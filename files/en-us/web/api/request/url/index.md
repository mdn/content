---
title: "Request: url property"
short-title: url
slug: Web/API/Request/url
page-type: web-api-instance-property
browser-compat: api.Request.url
---

{{APIRef("Fetch API")}}

The **`url`** read-only property of the {{domxref("Request")}}
interface contains the URL of the request.

## Value

A string indicating the URL of the request.

## Examples

In the following snippet, we create a new request using the
{{domxref("Request.Request", "Request()")}} constructor (for an image file in the same directory as
the script), then save the URL of the request in a variable:

```js
const myRequest = new Request("flowers.jpg");
const myURL = myRequest.url; // "https://github.com/mdn/dom-examples/tree/main/fetch/fetch-request/flowers.jpg"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [ServiceWorker API](/en-US/docs/Web/API/Service_Worker_API)
- [HTTP access control (CORS)](/en-US/docs/Web/HTTP/CORS)
- [HTTP](/en-US/docs/Web/HTTP)
