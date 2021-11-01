---
title: Request.url
slug: Web/API/Request/url
tags:
  - API
  - Experimental
  - Fetch
  - Property
  - Reference
  - URL
  - request
browser-compat: api.Request.url
---
{{APIRef("Fetch")}}

The **`url`** read-only property of the {{domxref("Request")}}
interface contains the URL of the request.

## Syntax

```js
var myURL = request.url;
```

### Value

A {{domxref("USVString")}} indicating the url of the request.

## Example

In the following snippet, we create a new request using the
{{domxref("Request.Request()")}} constructor (for an image file in the same directory as
the script), then save the url of the request in a variable:

```js
var myRequest = new Request('flowers.jpg');
var myURL = myRequest.url; // "https://mdn.github.io/fetch-examples/fetch-request/flowers.jpg"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [ServiceWorker API](/en-US/docs/Web/API/Service_Worker_API)
- [HTTP access control (CORS)](/en-US/docs/Web/HTTP/CORS)
- [HTTP](/en-US/docs/Web/HTTP)
