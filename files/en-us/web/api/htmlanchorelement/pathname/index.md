---
title: "HTMLAnchorElement: pathname property"
short-title: pathname
slug: Web/API/HTMLAnchorElement/pathname
page-type: web-api-instance-property
browser-compat: api.HTMLAnchorElement.pathname
---

{{ApiRef("HTML DOM")}}

The **`HTMLAnchorElement.pathname`** property is a
string containing an initial `'/'` followed by the path of
the URL not including the query string or fragment (or the empty string if there is no
path).

## Value

A string.

## Examples

```js
// An <a id="myAnchor" href="/en-US/docs/HTMLAnchorElement"> element is in the document
const anchor = document.getElementById("myAnchor");
anchor.pathname; // returns '/en-US/docs/HTMLAnchorElement'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("HTMLAnchorElement")}} interface it belongs to.
