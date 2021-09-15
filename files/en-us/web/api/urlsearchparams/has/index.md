---
title: URLSearchParams.has()
slug: Web/API/URLSearchParams/has
tags:
  - API
  - Method
  - URL API
  - URLSearchParams
  - has
browser-compat: api.URLSearchParams.has
---
{{ApiRef("URL API")}}

The **`has()`** method of the {{domxref("URLSearchParams")}}
interface returns a boolean value that indicates whether a parameter with the
specified name exists.

{{availableinworkers}}

## Syntax

```js
var hasName = URLSearchParams.has(name)
```

### Parameters

- name
  - : The name of the parameter to find.

### Return value

A boolean value.

## Examples

```js
let url = new URL('https://example.com?foo=1&bar=2');
let params = new URLSearchParams(url.search.slice(1));

params.has('bar') === true; //true
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
