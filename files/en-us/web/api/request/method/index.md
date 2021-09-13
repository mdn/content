---
title: Request.method
slug: Web/API/Request/method
tags:
  - API
  - Experimental
  - Fetch
  - Property
  - Reference
  - request
browser-compat: api.Request.method
---
{{APIRef("Fetch")}}

The **`method`** read-only property of the
{{domxref("Request")}} interface contains the request's method (`GET`,
`POST`, etc.)

## Syntax

```js
var myMethod = request.method;
```

### Value

A {{jsxref("String")}} indicating the method of the request.

## Example

In the following snippet, we create a new request using the
{{domxref("Request.Request()")}} constructor (for an image file in the same directory as
the script), then save the method of the request in a variable:

```js
var myRequest = new Request('flowers.jpg');
var myMethod = myRequest.method; // GET
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [ServiceWorker API](/en-US/docs/Web/API/Service_Worker_API)
- [HTTP access control (CORS)](/en-US/docs/Web/HTTP/CORS)
- [HTTP](/en-US/docs/Web/HTTP)
