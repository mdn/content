---
title: Response.error()
slug: Web/API/Response/error
page-type: web-api-static-method
tags:
  - API
  - Error
  - Fetch
  - Method
  - Reference
  - Response
browser-compat: api.Response.error
---
{{APIRef("Fetch")}}

The **`error()`** method of the {{domxref("Response")}} interface returns a new `Response` object associated with a network error.

> **Note:** This is mainly relevant to [ServiceWorkers](/en-US/docs/Web/API/Service_Worker_API); the error method is used to return an error if you so wish it.
> An error response has its {{domxref("Response.type","type")}} set to `error`.

> **Note:** An "error" `Response` never really gets exposed to script: such a response to a {{domxref("fetch()")}} would reject the promise.

## Syntax

```js
error()
```

### Parameters

None.

### Return value

A {{domxref("Response")}} object.

## Examples

TBD (does not yet appear to be supported anywhere).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [ServiceWorker API](/en-US/docs/Web/API/Service_Worker_API)
- [HTTP access control (CORS)](/en-US/docs/Web/HTTP/CORS)
- [HTTP](/en-US/docs/Web/HTTP)
