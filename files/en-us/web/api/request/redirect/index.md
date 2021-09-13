---
title: Request.redirect
slug: Web/API/Request/redirect
tags:
  - API
  - Experimental
  - Fetch
  - Property
  - Redirect
  - Reference
  - request
browser-compat: api.Request.redirect
---
{{APIRef("Fetch")}}

The **`redirect`** read-only property of the {{domxref("Request")}} interface contains the mode for how redirects are handled.

## Syntax

```js
var myRedirect = request.redirect;
```

### Value

A `RequestRedirect` enum value, which can be one the following strings:

- `follow`
- `error`
- `manual`

If not specified when the request is created, it takes the default value of `follow`.

## Example

In the following snippet, we create a new request using the {{domxref("Request.Request()")}} constructor (for an image file in the same directory as the script), then save the request `redirect` value in a variable:

```js
var myRequest = new Request('flowers.jpg');
var myCred = myRequest.redirect;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [ServiceWorker API](/en-US/docs/Web/API/Service_Worker_API)
- [HTTP access control (CORS)](/en-US/docs/Web/HTTP/CORS)
- [HTTP](/en-US/docs/Web/HTTP)
