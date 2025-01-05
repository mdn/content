---
title: "Response: formData() method"
short-title: formData()
slug: Web/API/Response/formData
page-type: web-api-instance-method
browser-compat: api.Response.formData
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

The **`formData()`** method of the {{domxref("Response")}} interface
takes a {{domxref("Response")}} stream and reads it to completion. It returns a promise
that resolves with a {{domxref("FormData")}} object.

> [!NOTE]
> This is mainly relevant to [service workers](/en-US/docs/Web/API/Service_Worker_API). If a user submits
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

### Exceptions

- {{domxref("DOMException")}} `AbortError`
  - : The request was [aborted](/en-US/docs/Web/API/Fetch_API/Using_Fetch#canceling_a_request).
- {{jsxref("TypeError")}}
  - : Thrown for one of the following reasons:
    - The response body is [disturbed or locked](/en-US/docs/Web/API/Fetch_API/Using_Fetch#locked_and_disturbed_streams).
    - There was an error decoding the body content (for example, because the {{httpheader("Content-Encoding")}} header is incorrect).
    - The {{glossary("MIME")}} type of the body cannot be determined from the {{httpheader("Content-Type")}} headers included in the response.
    - The body cannot be parsed as a `FormData` object.

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
