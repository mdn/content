---
title: Headers.delete()
slug: Web/API/Headers/delete
tags:
  - API
  - Experimental
  - Fetch
  - Method
  - Reference
  - delete
browser-compat: api.Headers.delete
---
{{APIRef("Fetch")}}

The **`delete()`** method of the {{domxref("Headers")}}
interface deletes a header from the current `Headers` object.

This method throws a {{jsxref("TypeError")}} for the following reasons:

- The value of the name parameter is not the name of an HTTP header.
- The value of {{Glossary("Guard")}} is `immutable`.

For security reasons, some headers can only be controller by the user agent. These
headers include the {{Glossary("Forbidden_header_name", "forbidden header names", 1)}}
and {{Glossary("Forbidden_response_header_name", "forbidden response header names",
  1)}}.

## Syntax

```js
myHeaders.delete(name);
```

### Parameters

- `name`
  - : The name of the HTTP header you want to delete from the `Headers` object.

### Returns

{{jsxref('undefined')}}.

## Example

Creating an empty `Headers` object is simple:

```js
var myHeaders = new Headers(); // Currently empty
```

You could add a header to this using {{domxref("Headers.append")}}:

```js
myHeaders.append('Content-Type', 'image/jpeg');
myHeaders.get('Content-Type'); // Returns 'image/jpeg'
```

You can then delete it again:

```js
myHeaders.delete('Content-Type');
myHeaders.get('Content-Type'); // Returns null, as it has been deleted
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [ServiceWorker API](/en-US/docs/Web/API/Service_Worker_API)
- [HTTP access control (CORS)](/en-US/docs/Web/HTTP/CORS)
- [HTTP](/en-US/docs/Web/HTTP)
