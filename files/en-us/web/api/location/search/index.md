---
title: 'Location: search'
slug: Web/API/Location/search
tags:
  - API
  - Location
  - Property
browser-compat: api.Location.search
---
{{ApiRef("Location")}}

The **`search`** property of the {{domxref("Location")}}
interface is a search string, also called a _query string_; that is, a
{{domxref("USVString")}} containing a `'?'` followed by the parameters of the
URL.

Modern browsers provide
[`URLSearchParams`](/en-US/docs/Web/API/URLSearchParams/get#examples)
and
[`URL.searchParams`](/en-US/docs/Web/API/URL/searchParams#examples)
to make it easy to parse out the parameters from the querystring.

## Syntax

```js
string = object.search;
object.search = string;
```

## Examples

```js
// Let an <a id="myAnchor" href="/en-US/docs/Location.search?q=123"> element be in the document
var anchor = document.getElementById("myAnchor");
var queryString = anchor.search; // Returns:'?q=123'

// Further parsing:
let params = new URLSearchParams(queryString);
let q = parseInt(params.get("q")); // is the number 123
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
