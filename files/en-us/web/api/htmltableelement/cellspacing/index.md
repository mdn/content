---
title: HTMLTableElement.cellSpacing
slug: Web/API/HTMLTableElement/cellSpacing
tags:
  - API
  - HTML DOM
  - HTMLTableElement
  - NeedsSpecTable
  - Property
  - Reference
  - cellSpacing
  - Deprecated
browser-compat: api.HTMLTableElement.cellSpacing
---
{{APIRef("HTML DOM")}}{{deprecated_header}}

While you should instead use the CSS
{{cssxref("border-spacing")}} property, the obsolete {{domxref("HTMLTableElement")}}
interface's **`cellSpacing`** property represents the spacing
around the individual {{HTMLElement("th")}} and {{HTMLElement("td")}} elements
representing a table's cells. Any two cells are separated by the sum of the
`cellSpacing` of each of the two cells.

## Syntax

```js
HTMLTableElement.cellSpacing = spacing;
var spacing = HTMLTableElement.cellSpacing;
```

### Value

A {{domxref("DOMString")}} which is either a number of pixels (such as
`"10"`) or a percentage value (like `"10%"`).

## Example

This example sets cell spacing for a given table to 10 pixels.

```js
var t = document.getElementById('TableA');
t.cellSpacing = "10";
```

## Specifications

- W3C DOM 2 HTML Specification [_HTMLTableElement_
  .cellSpacing](https://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-68907883).

## Browser compatibility

{{Compat}}
