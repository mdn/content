---
title: "Response: type property"
short-title: type
slug: Web/API/Response/type
page-type: web-api-instance-property
browser-compat: api.Response.type
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

The **`type`** read-only property of the {{domxref("Response")}} interface contains the type of the response. The type determines whether scripts are able to access the response body and headers.

## Value

A string, which may be any of the following values:

- `basic`

  - : This applies in any of the following cases:

    - The request is same-origin.
    - The requested URL's scheme is [`data:`](/en-US/docs/Web/URI/Reference/Schemes/data).
    - The request's {{domxref("Request.mode", "mode")}} is `navigate` or `websocket`.

    With this type, all response headers are exposed except {{httpheader("Set-Cookie")}}.

- `cors`
  - : The request was cross-origin and was successfully processed using [CORS](/en-US/docs/Web/HTTP/Guides/CORS). With this type, only {{glossary("CORS-safelisted response header", "CORS-safelisted response headers")}} are exposed.
- `error`

  - : A network error occurred. The {{domxref("Response.status", "status")}} property is set to `0`, {{domxref("Response.body", "body")}} is `null`, headers are empty and immutable.

    This is the type of response returned by {{domxref("Response.error_static", "Response.error()")}}. A response of this type is not returned by a call to {{domxref("Window.fetch", "fetch()")}}, because if a network error occurs, the promise is rejected.

- `opaque`
  - : A response to a cross-origin request whose {{domxref("Request.mode", "mode")}} was set to `no-cors`. The {{domxref("Response.status", "status")}} property is set to `0`, {{domxref("Response.body", "body")}} is `null`, headers are empty and immutable.
- `opaqueredirect`
  - : A response to a request whose {{domxref("Request.redirect", "redirect")}} option was set to `manual`, and which was redirected by the server. The {{domxref("Response.status", "status")}} property is set to `0`, {{domxref("Response.body", "body")}} is `null`, headers are empty and immutable.

## Examples

### A basic response

The following same-origin request will return a `basic` response:

```js
const response = await fetch("flowers.jpg");

console.log(response.type); // "basic"
```

### A CORS response

Assuming `https://example.org` is not the requester's origin, and that the server responds with the appropriate CORS headers, this request will return a `cors` response:

```js
const response = await fetch("https://example.org/flowers.jpg");

console.log(response.type); // "cors"
```

### An opaque response

The following request is made with the [`no-cors`](/en-US/docs/Web/API/Request/mode#no-cors) option, so it returns an `opaque` response:

```js
const response = await fetch("https://example.org/flowers.jpg", {
  mode: "no-cors",
});

console.log(response.type); // "opaque"
console.log(response.body); // null
console.log(response.status); // 0
```

### An error response

The following code uses {{domxref("Response.error_static", "Response.error()")}} to create an `error` response:

```js
const response = Response.error();

console.log(response.type); // "error"
console.log(response.body); // null
console.log(response.status); // 0
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [ServiceWorker API](/en-US/docs/Web/API/Service_Worker_API)
- [HTTP access control (CORS)](/en-US/docs/Web/HTTP/Guides/CORS)
- [HTTP](/en-US/docs/Web/HTTP)
