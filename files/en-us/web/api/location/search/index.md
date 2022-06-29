---
title: location.search
slug: Web/API/Location/search
page-type: web-api-instance-property
tags:
  - API
  - Location
  - Property
browser-compat: api.Location.search
---
{{ApiRef("Location")}}

The **`search`** property of the {{domxref("Location")}}
interface is a search string, also called a _query string_; that is, a
string containing a `'?'` followed by the parameters of the
URL.

Modern browsers provide
[`URLSearchParams`](/en-US/docs/Web/API/URLSearchParams/get#examples)
and
[`URL.searchParams`](/en-US/docs/Web/API/URL/searchParams#examples)
to make it easy to parse out the parameters from the querystring.

## Value

A string.

## Examples

```js
// Let an <a id="myAnchor" href="/en-US/docs/Location.search?q=123"> element be in the document
const anchor = document.getElementById("myAnchor");
const queryString = anchor.search; // Returns:'?q=123'

// Further parsing:
const params = new URLSearchParams(queryString);
const q = parseInt(params.get("q")); // is the number 123
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
