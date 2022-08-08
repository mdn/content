---
title: Headers.append()
slug: Web/API/Headers/append
page-type: web-api-instance-method
tags:
  - API
  - Append
  - Fetch
  - Method
  - Reference
browser-compat: api.Headers.append
---
{{APIRef("Fetch")}}

The **`append()`** method of the {{domxref("Headers")}}
interface appends a new value onto an existing header inside a `Headers`
object, or adds the header if it does not already exist.

The difference between {{domxref("Headers.set", "set()")}} and `append()` is
that if the specified header already exists and accepts multiple values,
`set()` will overwrite the existing value with the new one, whereas
`append()` will append the new value onto the end of the set of values.

For security reasons, some headers can only be controlled by the user agent. These
headers include the {{Glossary("Forbidden_header_name", "forbidden header names", 1)}}
and {{Glossary("Forbidden_response_header_name", "forbidden response header names",
  1)}}.

## Syntax

```js
append(name, value)
```

### Parameters

- `name`
  - : The name of the HTTP header you want to add to the `Headers` object.
- `value`
  - : The value of the HTTP header you want to add.

### Return value

None ({{jsxref("undefined")}}).

## Examples

Creating an empty `Headers` object is simple:

```js
const myHeaders = new Headers(); // Currently empty
```

You could add a header to this using `append()`:

```js
myHeaders.append('Content-Type', 'image/jpeg');
myHeaders.get('Content-Type'); // Returns 'image/jpeg'
```

If the specified header already exists, `append()` will change its value to
the specified value. If the specified header already exists and accepts multiple values,
`append()` will append the new value to the end of the value set:

```js
myHeaders.append('Accept-Encoding', 'deflate');
myHeaders.append('Accept-Encoding', 'gzip');
myHeaders.get('Accept-Encoding'); // Returns 'deflate, gzip'
```

To overwrite the old value with a new one, use {{domxref("Headers.set")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [ServiceWorker API](/en-US/docs/Web/API/Service_Worker_API)
- [HTTP access control (CORS)](/en-US/docs/Web/HTTP/CORS)
- [HTTP](/en-US/docs/Web/HTTP)
