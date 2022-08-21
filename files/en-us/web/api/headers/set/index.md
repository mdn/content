---
title: Headers.set()
slug: Web/API/Headers/set
page-type: web-api-instance-method
tags:
  - API
  - Fetch
  - Method
  - Reference
  - set
browser-compat: api.Headers.set
---
{{APIRef("Fetch")}}

The **`set()`** method of the {{domxref("Headers")}} interface
sets a new value for an existing header inside a `Headers` object, or adds
the header if it does not already exist.

The difference between `set()` and {{domxref("Headers.append")}} is that if
the specified header already exists and accepts multiple values, `set()`
overwrites the existing value with the new one, whereas {{domxref("Headers.append")}}
appends the new value to the end of the set of values.

For security reasons, some headers can only be controller by the user agent. These
headers include the {{Glossary("Forbidden_header_name", "forbidden header names", 1)}}
and {{Glossary("Forbidden_response_header_name", "forbidden response header names",
  1)}}.

## Syntax

```js
set(name, value)
```

### Parameters

- `name`
  - : The name of the HTTP header you want to set to a new value. If the given name is not
    the name of an HTTP header, this method throws a {{jsxref("TypeError")}}.
- `value`
  - : The new value you want to set.

### Return value

None ({{jsxref("undefined")}}).

## Examples

Creating an empty `Headers` object is simple:

```js
const myHeaders = new Headers(); // Currently empty
```

You could add a header to this using {{domxref("Headers.append")}}, then set a new
value for this header using `set()`:

```js
myHeaders.append('Content-Type', 'image/jpeg');
myHeaders.set('Content-Type', 'text/html');
```

If the specified header does not already exist, `set()` will create it and
set its value to the specified value. If the specified header does already exist and
does accept multiple values, `set()` will overwrite the existing value with
the new one:

```js
myHeaders.set('Accept-Encoding', 'deflate');
myHeaders.set('Accept-Encoding', 'gzip');
myHeaders.get('Accept-Encoding'); // Returns 'gzip'
```

You'd need {{domxref("Headers.append")}} to append the new value onto the values, not
overwrite it.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [ServiceWorker API](/en-US/docs/Web/API/Service_Worker_API)
- [HTTP access control (CORS)](/en-US/docs/Web/HTTP/CORS)
- [HTTP](/en-US/docs/Web/HTTP)
