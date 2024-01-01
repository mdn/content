---
title: "HTMLTableElement: cellPadding property"
short-title: cellPadding
slug: Web/API/HTMLTableElement/cellPadding
page-type: web-api-instance-property
status:
  - deprecated
browser-compat: api.HTMLTableElement.cellPadding
---

{{APIRef("HTML DOM")}} {{Deprecated_Header}}

The **`HTMLTableElement.cellPadding`** property represents the
padding around the individual cells of the table.

## Value

A string representing pixels (e.g. "10") or a percentage value (e.g. "10%").

## Examples

```js
// Set cell padding to 10 pixels
let t = document.getElementById("TableA");
t.cellPadding = "10";
```

## Specifications

- W3C DOM 2 HTML Specification [_HTMLTableElement.cellPadding_](https://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-59162158).

## Browser compatibility

{{Compat}}
