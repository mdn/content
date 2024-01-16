---
title: "Headers: has() method"
short-title: has()
slug: Web/API/Headers/has
page-type: web-api-instance-method
browser-compat: api.Headers.has
---

{{APIRef("Fetch API")}}

The **`has()`** method of the {{domxref("Headers")}} interface
returns a boolean stating whether a `Headers` object contains a certain
header.

For security reasons, some headers can only be controlled by the user agent. These
headers include the {{Glossary("Forbidden_header_name", "forbidden header names")}}
and {{Glossary("Forbidden_response_header_name", "forbidden response header names")}}.

{{AvailableInWorkers}}

## Syntax

```js-nolint
has(name)
```

### Parameters

- `name`
  - : The name of the HTTP header you want to test for. If the given name is not a valid
    HTTP header name, this method throws a {{jsxref("TypeError")}}.

### Return value

A boolean value.

## Examples

Creating an empty `Headers` object is simple:

```js
const myHeaders = new Headers(); // Currently empty
```

You could add a header to this using {{domxref("Headers.append")}}, then test for the
existence of it using `has()`:

```js
myHeaders.append("Content-Type", "image/jpeg");
myHeaders.has("Content-Type"); // Returns true
myHeaders.has("Accept-Encoding"); // Returns false
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [ServiceWorker API](/en-US/docs/Web/API/Service_Worker_API)
- [HTTP access control (CORS)](/en-US/docs/Web/HTTP/CORS)
- [HTTP](/en-US/docs/Web/HTTP)
