---
title: URLSearchParams.append()
slug: Web/API/URLSearchParams/append
tags:
  - API
  - Append
  - Method
  - URL API
  - URLSearchParams
browser-compat: api.URLSearchParams.append
---
{{ApiRef("URL API")}}

The **`append()`** method of the {{domxref("URLSearchParams")}}
interface appends a specified key/value pair as a new search parameter.

As shown in the example below, if the same key is appended multiple times it will
appear in the parameter string multiple times for each value.

{{availableinworkers}}

## Syntax

```js
URLSearchParams.append(name, value)
```

### Parameters

- name
  - : The name of the parameter to append.
- value
  - : The value of the parameter to append.

### Return value

Void.

## Examples

```js
let url = new URL('https://example.com?foo=1&bar=2');
let params = new URLSearchParams(url.search.slice(1));

//Add a second foo parameter.
params.append('foo', 4);
//Query string is now: 'foo=1&bar=2&foo=4'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Other URL-related interfaces: {{domxref("URL")}},
  {{domxref("HTMLHyperlinkElementUtils")}}.
- [Google
  Developers: Easy URL manipulation with URLSearchParams](https://developers.google.com/web/updates/2016/01/urlsearchparams?hl=en)
