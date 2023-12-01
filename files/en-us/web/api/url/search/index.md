---
title: "URL: search property"
short-title: search
slug: Web/API/URL/search
page-type: web-api-instance-property
browser-compat: api.URL.search
---

{{ApiRef("URL API")}}

The **`search`** property of the {{domxref("URL")}} interface
is a search string, also called a _query string_, that is a
string containing a `'?'` followed by the parameters of the
URL.

Modern browsers provide the {{domxref("URL.searchParams")}} property to make it easy to
parse out the parameters from the query string.

{{AvailableInWorkers}}

## Value

A string.

## Examples

```js
const url = new URL(
  "https://developer.mozilla.org/en-US/docs/Web/API/URL/search?q=123",
);
console.log(url.search); // Logs "?q=123"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("URL")}} interface it belongs to.
