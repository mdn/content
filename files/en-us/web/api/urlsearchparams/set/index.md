---
title: URLSearchParams.set()
slug: Web/API/URLSearchParams/set
page-type: web-api-instance-method
tags:
  - API
  - Method
  - URL API
  - URLSearchParams
  - set
browser-compat: api.URLSearchParams.set
---
{{ApiRef("URL API")}}

The **`set()`** method of the {{domxref("URLSearchParams")}}
interface sets the value associated with a given search parameter to the given value.
If there were several matching values, this method deletes the others. If the search
parameter doesn't exist, this method creates it.

{{availableinworkers}}

## Syntax

```js
set(name, value)
```

### Parameters

- `name`
  - : The name of the parameter to set.
- `value`
  - : The value of the parameter to set.

### Return value

None ({{jsxref("undefined")}}).

## Examples

```js
let url = new URL('https://example.com?foo=1&bar=2');
let params = new URLSearchParams(url.search);

// Add a third parameter.
params.set('baz', 3);
params.toString(); // "foo=1&bar=2&baz=3"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
