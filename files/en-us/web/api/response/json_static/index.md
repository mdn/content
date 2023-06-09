---
title: "Response: json() static method"
short-title: json()
slug: Web/API/Response/json_static
page-type: web-api-static-method
---

{{APIRef("Fetch API")}}

The **`json()`** static method of the {{domxref("Response")}} interface returns a `Response` which contains the provided JSON data as body and a {{HTTPHeader("Content-Type")}} header which is set to `application/json`.

## Syntax

```js-nolint
Response.json(data)
Response.json(data, options)
```

### Parameters

- `data`
  - : The JSON data that will be used as response body.
- `options` {{optional_inline}}
  - : An options object containing any custom settings. This is the same as the options parameter of the {{domxref("Response.Response", "Response()")}} constructor.

### Return value

A {{domxref("Response")}} object.

## Examples

```js
Response.json({ my: "data" });
```

## See also

- [ServiceWorker API](/en-US/docs/Web/API/Service_Worker_API)
- [HTTP access control (CORS)](/en-US/docs/Web/HTTP/CORS)
- [HTTP](/en-US/docs/Web/HTTP)
