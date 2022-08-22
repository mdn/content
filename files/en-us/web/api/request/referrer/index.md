---
title: Request.referrer
slug: Web/API/Request/referrer
page-type: web-api-instance-property
tags:
  - API
  - Fetch
  - Property
  - Reference
  - referrer
  - request
browser-compat: api.Request.referrer
---
{{APIRef("Fetch")}}

The **`referrer`** read-only property of the
{{domxref("Request")}} interface is set by the user agent to be the referrer of the
Request. (e.g., `client`, `no-referrer`, or a URL.)

> **Note:** If `referrer`'s value is `no-referrer`,
> it returns an empty string.

## Value

A string representing the request's referrer.

## Examples

In the following snippet, we create a new request using the
{{domxref("Request.Request", "Request()")}} constructor (for an image file in the same directory as
the script), then save the request referrer in a variable:

```js
const myRequest = new Request('flowers.jpg');
const myReferrer = myRequest.referrer; // returns "about:client" by default
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [ServiceWorker API](/en-US/docs/Web/API/Service_Worker_API)
- [HTTP access control (CORS)](/en-US/docs/Web/HTTP/CORS)
- [HTTP](/en-US/docs/Web/HTTP)
