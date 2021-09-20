---
title: HTMLAreaElement.search
slug: Web/API/HTMLAreaElement/search
tags:
  - API
  - HTMLAreaElement
  - Property
  - Reference
browser-compat: api.HTMLAreaElement.search
---
{{ApiRef("HTML DOM")}}

The **`HTMLAreaElement.search`** property is a search
string, also called a _query string_, that is {{domxref("USVString")}} containing
a `'?'` followed by the parameters of the URL.

Modern browsers provide
[`URLSearchParams`](/en-US/docs/Web/API/URLSearchParams/get#examples)
and
[`URL.searchParams`](/en-US/docs/Web/API/URL/searchParams#examples)
to make it easy to parse out the parameters from the querystring.

## Syntax

```js
// Getter
string = area.search;
// Setter
area.search = string;
```

## Examples

### Getting the search string from an area link

```js
// An <area id="myArea" href="/en-US/docs/HTMLAreaElement?q=123"> element is in the document
const area = document.getElementById("myArea");
area.search; // returns '?q=123'
```

### Advanced parsing using URLSearchParams

Alternatively, [`URLSearchParams`](/en-US/docs/Web/API/URLSearchParams/get#examples) can be used:

```js
let params = new URLSearchParams(queryString);
let q = parseInt(params.get("q"); // returns the number 123
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("HTMLAreaElement")}} interface it belongs to.
