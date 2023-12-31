---
title: "Response: redirect() static method"
short-title: redirect()
slug: Web/API/Response/redirect_static
page-type: web-api-static-method
browser-compat: api.Response.redirect_static
---

{{APIRef("Fetch API")}}

The **`redirect()`** static method of the {{domxref("Response")}} interface returns a `Response` resulting in a redirect to the specified URL.

> **Note:** This can be used alongside the [ServiceWorker API](/en-US/docs/Web/API/Service_Worker_API).
> A controlling service worker could intercept a page's request and redirect it as desired.
> This will actually lead to a real redirect if a service worker sends it upstream.

## Syntax

```js-nolint
Response.redirect(url)
Response.redirect(url, status)
```

### Parameters

- `url`
  - : The URL that the new response is to originate from.
- `status` {{optional_inline}}
  - : An optional number indicating the status code for the response: one of {{HTTPStatus("301", "301")}}, {{HTTPStatus("302", "302")}}, {{HTTPStatus("303", "303")}}, {{HTTPStatus("307", "307")}}, or {{HTTPStatus("308", "308")}}. If omitted, {{HTTPStatus("302", "302 (Found)")}} is used by default.

### Return value

A {{domxref("Response")}} object.

### Exceptions

- {{jsxref("RangeError")}}
  - : The specified status is not a redirect status.
- {{jsxref("TypeError")}}
  - : The specified URL is invalid.

## Examples

```js
Response.redirect("https://www.example.com", 302);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [ServiceWorker API](/en-US/docs/Web/API/Service_Worker_API)
- [HTTP access control (CORS)](/en-US/docs/Web/HTTP/CORS)
- [HTTP](/en-US/docs/Web/HTTP)
