---
title: "HTMLAreaElement: pathname property"
short-title: pathname
slug: Web/API/HTMLAreaElement/pathname
page-type: web-api-instance-property
browser-compat: api.HTMLAreaElement.pathname
---

{{ApiRef("HTML DOM")}}

The **`HTMLAreaElement.pathname`** property is a
string containing an initial `'/'` followed by the path of
the URL not including the query string or fragment (or the empty string if there is no
path).

## Value

A string.

## Examples

```js
// An <area id="myArea" href="/en-US/docs/HTMLAreaElement"> element is in the document
const area = document.getElementById("myArea");
area.pathname; // returns '/en-US/docs/HTMLAreaElement'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("HTMLAreaElement")}} interface it belongs to.
