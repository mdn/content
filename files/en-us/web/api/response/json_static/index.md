---
title: "Response: json() static method"
short-title: json()
slug: Web/API/Response/json_static
page-type: web-api-static-method
browser-compat: api.Response.json_static
---

{{APIRef("Fetch API")}}

The **`json()`** static method of the {{domxref("Response")}} interface encodes provided data as a stringified JSON in the response body, sets the {{HTTPHeader("Content-Type")}} header to `application/json`, and allows the response status, status message, and additional headers to be set by the developer.

This makes it very easy to create a `Response` object that is suitable for returning JSON encoded data.

## Syntax

```js-nolint
Response.json(data)
Response.json(data, options)
```

### Parameters

- `data`
  - : The JSON data to be used as the response body.
- `options` {{optional_inline}}
  - : An options object containing settings for the response, including the status code, status text, and headers.
    This is the same as the options parameter of the {{domxref("Response.Response", "Response()")}} constructor.

    - `status`
      - : The status code for the response, such as `200`.
    - `statusText`
      - : The status message associated with the status code.
        For a status of `200` this might be `OK`.
    - `headers`
      - : Any headers you want to add to your response, contained within a {{domxref("Headers")}} object or object literal of {{jsxref("String")}} key/value pairs (see [HTTP headers](/en-US/docs/Web/HTTP/Headers) for a reference).

### Return value

A {{domxref("Response")}} object.

### Exceptions

- `TypeError`
  - : Thrown if `data` cannot be converted to a JSON string.
    This might happen if the data is a JavaScript object that has method, or that has a circular reference, or if the passed object is `undefined`.

## Examples

```js
Response.json({ my: "data" });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [ServiceWorker API](/en-US/docs/Web/API/Service_Worker_API)
