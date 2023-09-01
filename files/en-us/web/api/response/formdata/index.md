---
title: "Response: formData() method"
short-title: formData()
slug: Web/API/Response/formData
page-type: web-api-instance-method
browser-compat: api.Response.formData
---

{{APIRef("Fetch API")}}

The **`formData()`** method of the {{domxref("Response")}} interface
takes a {{domxref("Response")}} stream and reads it to completion. It returns a promise
that resolves with a {{domxref("FormData")}} object.

> **Note:** This is mainly relevant to [service workers](/en-US/docs/Web/API/Service_Worker_API). If a user submits
> a form and a service worker intercepts the request, you could for example call
> `formData()` on it to obtain a key-value map, modify some fields, then send
> the form onwards to the server (or use it locally).

## Syntax

```js-nolint
formData()
```

### Parameters

None.

### Return value

A {{jsxref("Promise")}} that resolves with a {{domxref("FormData")}} object.

## Examples

TBD.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [ServiceWorker API](/en-US/docs/Web/API/Service_Worker_API)
- [HTTP access control (CORS)](/en-US/docs/Web/HTTP/CORS)
- [HTTP](/en-US/docs/Web/HTTP)
