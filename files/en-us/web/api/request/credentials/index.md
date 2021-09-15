---
title: Request.credentials
slug: Web/API/Request/credentials
tags:
  - API
  - Cookies
  - Fetch
  - Networking
  - Property
  - Reference
  - Security
  - credentials
  - request
browser-compat: api.Request.credentials
---
{{APIRef("Fetch")}}

The **`credentials`** read-only property of the {{domxref("Request")}} interface indicates whether the user agent should send cookies from the other domain in the case of cross-origin requests.

## Syntax

```js
var myCred = request.credentials;
```

### Value

A `RequestCredentials` dictionary value indicating whether the user agent should send cookies from the other domain in the case of cross-origin requests. Possible values are:

- `omit`: Never send or receive cookies.
- `same-origin`: Send user credentials (cookies, basic http auth, etc..) if the URL is on the same origin as the calling script. **This is the default value.**
- `include`: Always send user credentials (cookies, basic http auth, etc..), even for cross-origin calls.

This is similar to XHR’s [`withCredentials`](/en-US/docs/Web/API/XMLHttpRequest/withCredentials) flag, but with three available values instead of two.

## Example

In the following snippet, we create a new request using the {{domxref("Request.Request()")}} constructor (for an image file in the same directory as the script), then save the request credentials in a variable:

```js
var myRequest = new Request('flowers.jpg');
var myCred = myRequest.credentials; // returns "same-origin" by default
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [ServiceWorker API](/en-US/docs/Web/API/Service_Worker_API)
- [HTTP access control (CORS)](/en-US/docs/Web/HTTP/CORS)
- [HTTP](/en-US/docs/Web/HTTP)
