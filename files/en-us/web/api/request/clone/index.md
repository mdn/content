---
title: Request.clone()
slug: Web/API/Request/clone
tags:
  - API
  - Experimental
  - Fetch
  - Method
  - Reference
  - clone
  - request
browser-compat: api.Request.clone
---
{{APIRef("Fetch")}}

The **`clone()`** method of the {{domxref("Request")}} interface creates a copy of the current `Request` object.

`clone()` throws a {{jsxref("TypeError")}} if the request body has already been used. In fact, the main reason `clone()` exists is to allow multiple uses of body objects (when they are one-use only.)

If you intend to modify the request, you may prefer the {{domxref("Request")}} constructor.

## Syntax

```js
var newRequest = request.clone();
```

### Parameters

None.

### Return value

A {{domxref("Request")}} object, which is an exact copy of the `Request` that `clone()` was called on.

## Example

In the following snippet, we create a new request using the `{{domxref("Request.Request()")}}` constructor (for an image file in the same directory as the script), then clone the request.

```js
var myRequest = new Request('flowers.jpg');
var newRequest = myRequest.clone(); // a copy of the request is now stored in newRequest
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [ServiceWorker API](/en-US/docs/Web/API/Service_Worker_API)
- [HTTP access control (CORS)](/en-US/docs/Web/HTTP/CORS)
- [HTTP](/en-US/docs/Web/HTTP)
