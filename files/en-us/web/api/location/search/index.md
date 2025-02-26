---
title: "Location: search property"
short-title: search
slug: Web/API/Location/search
page-type: web-api-instance-property
browser-compat: api.Location.search
---

{{ApiRef("Location")}}

The **`search`** property of the {{domxref("Location")}} interface is a search string, also called a _query string_, that is a string containing a `"?"` followed by the parameters of the location's URL. If the URL does not have a search query, this property contains an empty string, `""`.

This property can be set to change the query string of the URL. When setting, a single `"?"` prefix is added to the provided value, if not already present. Setting it to `""` removes the query string.

The query is {{Glossary("Percent-encoding", "percent-encoded")}} when setting but not percent-decoded when reading.

Modern browsers provide
[`URLSearchParams`](/en-US/docs/Web/API/URLSearchParams/get#examples)
and
[`URL.searchParams`](/en-US/docs/Web/API/URL/searchParams#examples)
to make it easy to parse out the parameters from the querystring.

See {{domxref("URL.search")}} for more information.

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
