---
title: Document.vlinkColor
slug: Web/API/Document/vlinkColor
tags:
  - API
  - Deprecated
  - Document
  - HTML DOM
  - NeedsExample
  - NeedsSpecTable
  - Property
  - Reference
browser-compat: api.Document.vlinkColor
---
{{APIRef("DOM")}} {{Deprecated_Header}}

The **`Document.vlinkColor`** property gets/sets the color of
links that the user has visited in the document.

## Syntax

```js
color = document.vlinkColor
document.vlinkColor = color
```

### Parameters

- `color` is a string representing the color as a word (e.g.,
  `"red"`) or hexadecimal value (e.g., `"#ff0000"`).

## Notes

- The default value for this property in Mozilla Firefox is purple
  (`#551a8b` in hexadecimal).
- `Document.vlinkColor` is [deprecated in
  DOM Level 2 HTML](https://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-26809268).
- The recommended alternative is to get/set the color of the CSS {{
    Cssxref(":visited") }} pseudo-class on HTML {{HtmlElement("a")}} elements (e.g.,
  `a:visited {color:red;}`).
- Another alternative is `document.body.vLink`, although this is [deprecated in
  HTML 4.01](https://www.w3.org/TR/html401/struct/global.html#adef-vlink) in favor of the CSS alternative.

## Browser compatibility

{{Compat}}
