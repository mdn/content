---
title: Request.headers
slug: Web/API/Request/headers
tags:
  - API
  - Experimental
  - Fetch
  - Headers
  - Property
  - Reference
  - request
browser-compat: api.Request.headers
---
{{APIRef("Fetch")}}

The **`headers`** read-only property of the
{{domxref("Request")}} interface contains the {{domxref("Headers")}} object associated
with the request.

## Syntax

```js
var myHeaders = request.headers;
```

### Value

A {{domxref("Headers")}} object.

## Example

In the following snippet, we create a new request using the
{{domxref("Request.Request()")}} constructor (for an image file in the same directory as
the script), then save the request headers in a variable:

```js
var myRequest = new Request('flowers.jpg');
var myHeaders = myRequest.headers; // Headers {}
```

To add a header to the {{domxref("Headers")}} object we use
{{domxref("Headers.append")}}; we then create a new `Request` along with a
2nd init parameter, passing headers in as an init option:

```js
var myHeaders = new Headers();
myHeaders.append('Content-Type', 'image/jpeg');

var myInit = {
  method: 'GET',
  headers: myHeaders,
  mode: 'cors',
  cache: 'default'
};

var myRequest = new Request('flowers.jpg', myInit);

myContentType = myRequest.headers.get('Content-Type'); // returns 'image/jpeg'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [ServiceWorker API](/en-US/docs/Web/API/Service_Worker_API)
- [HTTP access control (CORS)](/en-US/docs/Web/HTTP/CORS)
- [HTTP](/en-US/docs/Web/HTTP)
