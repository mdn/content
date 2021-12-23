---
title: HTMLTableElement.border
slug: Web/API/HTMLTableElement/border
tags:
  - API
  - Deprecated
  - HTML DOM
  - NeedsSpecTable
  - Property
  - Reference
browser-compat: api.HTMLTableElement.border
---
{{APIRef("HTML DOM")}}{{Deprecated_Header}}

The **`HTMLTableElement.border`** property represents the
border width of the {{HtmlElement("table")}} element.

## Syntax

```js
HTMLTableElement.border = border;
var border = HTMLTableElement.border;
```

- `border` is a string representing the width of the border in pixels.

## Example

```js
// Set the width of a table border to 2 pixels
var t = document.getElementById('TableA');
t.border = '2';
```

## Specifications

W3C DOM 2 HTML Specification [_HTMLTableElement_
.border](https://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-50969400).

This attribute is deprecated in HTML 4.0.

## Browser compatibility

{{Compat}}
