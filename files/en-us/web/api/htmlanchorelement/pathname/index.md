---
title: HTMLAnchorElement.pathname
slug: Web/API/HTMLAnchorElement/pathname
tags:
  - API
  - HTMLAnchorElement
  - Property
  - Reference
browser-compat: api.HTMLAnchorElement.pathname
---
{{ApiRef("HTML DOM")}}

The **`HTMLAnchorElement.pathname`** property is a
{{domxref("USVString")}} containing an initial `'/'` followed by the path of
the URL not including the query string or fragment (or the empty string if there is no
path).

## Syntax

```js
// Getter
string = anchor.pathname;
// Setter
anchor.pathname = string;
```

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
