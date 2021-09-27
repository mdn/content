---
title: HTMLTableElement.align
slug: Web/API/HTMLTableElement/align
tags:
  - API
  - Deprecated
  - HTML DOM
  - HTMLTableElement
  - NeedsMarkupWork
  - NeedsSpecTable
  - Property
  - Reference
browser-compat: api.HTMLTableElement.align
---
{{APIRef("HTML DOM")}}{{Deprecated_Header}}

The **`HTMLTableElement.align`** property represents the
alignment of the table.

## Syntax

```js
HTMLTableElement.align = alignment;
var alignment = HTMLTableElement.align;
```

### Parameters

- `alignment`

  - : {{DOMxRef("DOMString")}} with one of the following values:

    - left
    - center
    - right

## Example

```js
// Set the alignment of a table
var t = document.getElementById('TableA');
t.align = 'center';
```

## Specifications

- W3C DOM 2 HTML Specification [_HTMLTableElement_
  .align](https://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-23180977).

## Browser compatibility

{{Compat}}
