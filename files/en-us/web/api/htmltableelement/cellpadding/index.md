---
title: HTMLTableElement.cellPadding
slug: Web/API/HTMLTableElement/cellPadding
tags:
  - API
  - HTML DOM
  - NeedsSpecTable
  - Property
  - Reference
  - Deprecated
browser-compat: api.HTMLTableElement.cellPadding
---
{{APIRef("HTML DOM")}} {{Deprecated_Header}}

The **`HTMLTableElement.cellPadding`** property represents the
padding around the individual cells of the table.

## Syntax

```js
HTMLTableElement.cellPadding = padding;
var padding = HTMLTableElement.cellPadding;
```

- `padding` is either a number of pixels (e.g. "10") or a percentage value
  (e.g. "10%").

## Example

```js
// Set cell padding to 10 pixels
let t = document.getElementById('TableA');
t.cellPadding = '10';
```

## Specifications

- W3C DOM 2 HTML Specification [_HTMLTableElement_
  .cellPadding](https://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-59162158).

## Browser compatibility

{{Compat}}
