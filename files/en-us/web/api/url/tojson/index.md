---
title: "URL: toJSON() method"
short-title: toJSON()
slug: Web/API/URL/toJSON
page-type: web-api-instance-method
browser-compat: api.URL.toJSON
---

{{APIRef("URL API")}} {{AvailableInWorkers}}

The **`toJSON()`** method of the {{domxref("URL")}} interface
returns a string containing a serialized version of the URL,
although in practice it seems to have the same effect as
{{domxref("URL.toString()")}}.

## Syntax

```js-nolint
toJSON()
```

### Parameters

None.

### Return value

A string.

## Examples

```js
const url = new URL(
  "https://developer.mozilla.org/en-US/docs/Web/API/URL/toString",
);
url.toJSON(); // should return the URL as a string
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `URL.prototype.toJSON` in `core-js`](https://github.com/zloirock/core-js#url-and-urlsearchparams)
