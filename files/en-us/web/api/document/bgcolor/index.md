---
title: Document.bgColor
slug: Web/API/Document/bgColor
tags:
  - API
  - Deprecated
  - Document
  - HTML DOM
  - NeedsMarkupWork
  - NeedsSpecTable
  - Property
  - Reference
browser-compat: api.Document.bgColor
---
{{APIRef("DOM")}} {{Deprecated_Header}}

The deprecated  `bgColor` property gets or sets the background color of the
current document.

## Syntax

```js
color = document.bgColor
document.bgColor =color
```

### Parameters

- `color` is a string representing the color as a word (e.g., "red") or
  hexadecimal value (e.g., "`#ff0000`").

## Example

    document.bgColor = "darkblue";

## Notes

The default value for this property in Firefox is white (`#ffffff` in
hexadecimal).

`document.bgColor` is deprecated in [DOM Level 2
HTML](https://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-26809268). The recommended alternative is use of the CSS style
{{Cssxref("background-color")}} which can be accessed through the DOM with
`document.body.style.backgroundColor`. Another alternative is
`document.body.bgColor`, although this is also deprecated in HTML 4.01 in
favor of the CSS alternative.

## Browser compatibility

{{Compat}}
