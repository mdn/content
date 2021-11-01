---
title: Request.integrity
slug: Web/API/Request/integrity
tags:
  - API
  - Experimental
  - Fetch
  - Property
  - Reference
  - integrity
  - request
browser-compat: api.Request.integrity
---
{{APIRef("Fetch")}}

The **`integrity`** read-only property of the {{domxref("Request")}} interface contains the [subresource integrity](/en-US/docs/Web/Security/Subresource_Integrity) value of the request.

## Syntax

```js
var myIntegrity = request.integrity;
```

### Value

The [subresource integrity](/en-US/docs/Web/Security/Subresource_Integrity) value of the request (e.g., `sha256-BpfBw7ivV8q2jLiT13fxDYAe2tJllusRSZ273h2nFSE=`).

If an integrity has not been specified, the property returns `''`.

## Example

In the following snippet, we create a new request using the {{domxref("Request.Request()")}} constructor (for an image file in the same directory as the script), then save the request `integrity` value in a variable:

```js
var myRequest = new Request('flowers.jpg');
var myIntegrity = myRequest.integrity;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [ServiceWorker API](/en-US/docs/Web/API/Service_Worker_API)
- [HTTP access control (CORS)](/en-US/docs/Web/HTTP/CORS)
- [HTTP](/en-US/docs/Web/HTTP)
