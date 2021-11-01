---
title: Response.formData()
slug: Web/API/Response/formData
tags:
  - API
  - Fetch
  - Fetch API
  - FormData
  - Method
  - NeedsExample
  - Reference
  - Response
browser-compat: api.Response.formData
---
{{APIRef("Fetch")}}

The **`formData()`** method of the {{domxref("Response")}} interface
takes a {{domxref("Response")}} stream and reads it to completion. It returns a promise
that resolves with a {{domxref("FormData")}} object.

> **Note:** This is mainly relevant to [service workers](/en-US/docs/Web/API/Service_Worker_API). If a user submits
> a form and a service worker intercepts the request, you could for example call
> `formData()` on it to obtain a key-value map, modify some fields, then send
> the form onwards to the server (or use it locally).

## Syntax

```js
response.formData()
.then(function(formdata) {
  // do something with your formdata
});
```

### Parameters

None.

### Return value

A {{jsxref("Promise")}} that resolves with a {{domxref("FormData")}} object.

## Example

TBD.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [ServiceWorker API](/en-US/docs/Web/API/Service_Worker_API)
- [HTTP access control (CORS)](/en-US/docs/Web/HTTP/CORS)
- [HTTP](/en-US/docs/Web/HTTP)
