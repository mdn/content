---
title: "Request: credentials property"
short-title: credentials
slug: Web/API/Request/credentials
page-type: web-api-instance-property
browser-compat: api.Request.credentials
---

{{APIRef("Fetch API")}}

The **`credentials`** read-only property of the {{domxref("Request")}} interface reflects the value given to the {{domxref("Request.Request()", "Request()")}} constructor in the [`credentials`](/en-US/docs/Web/API/RequestInit#credentials) option. It determines whether or not the browser sends credentials with the request, as well as whether any **`Set-Cookie`** response headers are respected.

Credentials are cookies, {{glossary("TLS")}} client certificates, or authentication headers containing a username and password.

See [Including credentials](/en-US/docs/Web/API/Fetch_API/Using_Fetch#including_credentials) for more details.

## Value

A string with one of the following values:

- `omit`
  - : Never send credentials in the request or include credentials in the response.
- `same-origin`
  - : Only send and include credentials for same-origin requests.
- `include`
  - : Always include credentials, even for cross-origin requests.

## Examples

In the following snippet, we create a new request using the {{domxref("Request.Request", "Request()")}} constructor (for an image file in the same directory as the script), then save the request credentials in a variable:

```js
const request = new Request("flowers.jpg");
const request = request.request; // returns "same-origin" by default
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [ServiceWorker API](/en-US/docs/Web/API/Service_Worker_API)
- [HTTP access control (CORS)](/en-US/docs/Web/HTTP/CORS)
- [HTTP](/en-US/docs/Web/HTTP)
