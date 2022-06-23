---
title: URLSearchParams.delete()
slug: Web/API/URLSearchParams/delete
page-type: web-api-instance-method
tags:
  - API
  - Method
  - URL API
  - URLSearchParams
  - delete
browser-compat: api.URLSearchParams.delete
---
{{ApiRef("URL API")}}

The **`delete()`** method of the {{domxref("URLSearchParams")}}
interface deletes the given search parameter and all its associated values, from the
list of all search parameters.

{{availableinworkers}}

## Syntax

```js
delete(name)
```

### Parameters

- `name`
  - : The name of the parameter to be deleted.

### Return value

None ({{jsxref("undefined")}}).

## Examples

```js
let url = new URL('https://example.com?foo=1&bar=2&foo=3');
let params = new URLSearchParams(url.search);

// Delete the foo parameter.
params.delete('foo'); //Query string is now: 'bar=2'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
