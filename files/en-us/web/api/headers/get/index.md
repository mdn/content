---
title: "Headers: get() method"
short-title: get()
slug: Web/API/Headers/get
page-type: web-api-instance-method
browser-compat: api.Headers.get
---

{{APIRef("Fetch API")}}

The **`get()`** method of the {{domxref("Headers")}} interface
returns a byte string of all the values of a header within a `Headers` object
with a given name. If the requested header doesn't exist in the `Headers`
object, it returns `null`.

For security reasons, some headers can only be controlled by the user agent. These
headers include the {{Glossary("Forbidden_header_name", "forbidden header names")}}
and {{Glossary("Forbidden_response_header_name", "forbidden response header names")}}.

{{AvailableInWorkers}}

## Syntax

```js-nolint
get(name)
```

### Parameters

- `name`
  - : The name of the HTTP header whose values you want to retrieve from the
    `Headers` object. If the given name is not the name of an HTTP header, this
    method throws a {{jsxref("TypeError")}}. The name is case-insensitive.

### Return value

A {{jsxref("String")}} sequence representing the values of the retrieved header or
`null` if this header is not set.

## Examples

Creating an empty `Headers` object is simple:

```js
const myHeaders = new Headers(); // Currently empty
myHeaders.get("Not-Set"); // Returns null
```

You could add a header to this using {{domxref("Headers.append")}}, then retrieve it
using `get()`:

```js
myHeaders.append("Content-Type", "image/jpeg");
myHeaders.get("Content-Type"); // Returns "image/jpeg"
```

If the header has multiple values associated with it, the byte string will contain all
the values, in the order they were added to the Headers object:

```js
myHeaders.append("Accept-Encoding", "deflate");
myHeaders.append("Accept-Encoding", "gzip");
myHeaders.get("Accept-Encoding"); // Returns "deflate, gzip"
myHeaders
  .get("Accept-Encoding")
  .split(",")
  .map((v) => v.trimStart()); // Returns [ "deflate", "gzip" ]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [ServiceWorker API](/en-US/docs/Web/API/Service_Worker_API)
- [HTTP access control (CORS)](/en-US/docs/Web/HTTP/CORS)
- [HTTP](/en-US/docs/Web/HTTP)
