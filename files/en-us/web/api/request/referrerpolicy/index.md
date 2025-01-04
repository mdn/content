---
title: "Request: referrerPolicy property"
short-title: referrerPolicy
slug: Web/API/Request/referrerPolicy
page-type: web-api-instance-property
browser-compat: api.Request.referrerPolicy
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

The **`referrerPolicy`** read-only property of the
{{domxref("Request")}} interface returns the referrer policy, which governs what
referrer information, sent in the {{HTTPHeader("Referer")}} header, should be included
with the request.

## Value

A string representing the request's `referrerPolicy`. For
more information and possible values, see the {{HTTPHeader("Referrer-Policy")}} HTTP
header page.

## Examples

In the following snippet, we create a new request using the
{{domxref("Request.Request", "Request()")}} constructor (for an image file in the same directory as
the script), then save the request referrer policy in a variable:

```js
const myRequest = new Request("flowers.jpg");
const myReferrer = myRequest.referrerPolicy; // returns "" by default
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [ServiceWorker API](/en-US/docs/Web/API/Service_Worker_API)
- [HTTP access control (CORS)](/en-US/docs/Web/HTTP/CORS)
- [HTTP](/en-US/docs/Web/HTTP)
