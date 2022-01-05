---
title: URLSearchParams.toString()
slug: Web/API/URLSearchParams/toString
tags:
  - API
  - Method
  - URL API
  - URLSearchParams
  - toString
browser-compat: api.URLSearchParams.toString
---
{{ApiRef("URL API")}}

The **`toString()`** method of the
{{domxref("URLSearchParams")}} interface returns a query string suitable for use in a
URL.

> **Note:** This method returns the query string without the question
> mark. This is different from [window.location.search](/en-US/docs/Web/API/HTMLAnchorElement/search),
> which includes it.

{{availableinworkers}}

## Syntax

```js
URLSearchParams.toString()
```

### Parameters

None.

### Return value

A {{domxref("DOMString")}}, without the question mark. (Returns an empty string if no
search parameters have been set.)

## Examples

```js
let url = new URL('https://example.com?foo=1&bar=2');
let params = new URLSearchParams(url.search);

//Add a second foo parameter.
params.append('foo', 4);
console.log(params.toString());
//Prints 'foo=1&bar=2&foo=4'

// note: params can also be directly created
let url = new URL('https://example.com?foo=1&bar=2');
let params = url.searchParams;

// or even simpler
let params = new URLSearchParams('foo=1&bar=2');
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("URL")}} interface.
- [Google
  Developers: Easy URL manipulation with URLSearchParams](https://developers.google.com/web/updates/2016/01/urlsearchparams?hl=en)
