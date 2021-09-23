---
title: URL.toJSON()
slug: Web/API/URL/toJSON
tags:
  - API
  - Method
  - Reference
  - URL
  - URL API
  - Polyfill
browser-compat: api.URL.toJSON
---
{{APIRef("URL API")}}

The **`toJSON()`** method of the {{domxref("URL")}} interface
returns a {{domxref("USVString")}} containing a serialized version of the URL,
although in practice it seems to have the same effect as
{{domxref("URL.toString()")}}.

{{AvailableInWorkers}}

## Syntax

```js
const href = url.toJSON()
```

### Return value

A {{domxref("USVString")}}.

## Examples

```js
const url = new URL("https://developer.mozilla.org/en-US/docs/Web/API/URL/toString");
url.toJSON(); // should return the URL as a string
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- A polyfill of `URL.prototype.toJSON` is available in [`core-js`](https://github.com/zloirock/core-js#url-and-urlsearchparams)
