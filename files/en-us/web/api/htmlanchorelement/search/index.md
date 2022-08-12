---
title: HTMLAnchorElement.search
slug: Web/API/HTMLAnchorElement/search
page-type: web-api-instance-property
tags:
  - API
  - HTMLAnchorElement
  - Property
  - Reference
browser-compat: api.HTMLAnchorElement.search
---
{{ApiRef("HTML DOM")}}

The **`HTMLAnchorElement.search`** property is a search
string, also called a _query string_, that is a string containing
a `'?'` followed by the parameters of the URL.

Modern browsers provide
[`URLSearchParams`](/en-US/docs/Web/API/URLSearchParams/get#examples)
and
[`URL.searchParams`](/en-US/docs/Web/API/URL/searchParams#examples)
to make it easy to parse out the parameters from the querystring.

## Value

A string.

## Examples

### Getting the search string from an anchor link

```js
// An <a id="myAnchor" href="/en-US/docs/HTMLAnchorElement?q=123"> element is in the document
const anchor = document.getElementById("myAnchor");
anchor.search; // returns '?q=123'
```

### Advanced parsing using URLSearchParams

Alternatively, [`URLSearchParams`](/en-US/docs/Web/API/URLSearchParams/get#examples) can be used:

```js
let params = new URLSearchParams(queryString);
let q = parseInt(params.get("q")); // returns the number 123
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("HTMLAnchorElement")}} interface it belongs to.
