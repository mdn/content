---
title: HTMLAreaElement.pathname
slug: Web/API/HTMLAreaElement/pathname
tags:
  - API
  - HTMLAreaElement
  - Property
  - Reference
browser-compat: api.HTMLAreaElement.pathname
---
{{ApiRef("HTML DOM")}}

The **`HTMLAreaElement.pathname`** property is a
{{domxref("USVString")}} containing an initial `'/'` followed by the path of
the URL not including the query string or fragment (or the empty string if there is no
path).

## Syntax

```js
// Getter
string = area.pathname;
// Setter
area.pathname = string;
```

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
