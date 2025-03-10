---
title: "Request: redirect property"
short-title: redirect
slug: Web/API/Request/redirect
page-type: web-api-instance-property
browser-compat: api.Request.redirect
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

The **`redirect`** read-only property of the {{domxref("Request")}} interface contains the mode for how redirects are handled.

## Value

A `RequestRedirect` enum value, which can be one the following strings:

- `follow`
- `error`
- `manual`

If not specified when the request is created, it takes the default value of `follow`.

## Examples

In the following snippet, we create a new request using the {{domxref("Request.Request", "Request()")}} constructor (for an image file in the same directory as the script), then save the request `redirect` value in a variable:

```js
const myRequest = new Request("flowers.jpg");
const myCred = myRequest.redirect;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [ServiceWorker API](/en-US/docs/Web/API/Service_Worker_API)
- [HTTP access control (CORS)](/en-US/docs/Web/HTTP/CORS)
- [HTTP](/en-US/docs/Web/HTTP)
