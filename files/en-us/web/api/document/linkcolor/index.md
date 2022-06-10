---
title: Document.linkColor
slug: Web/API/Document/linkColor
page-type: web-api-instance-property
tags:
  - API
  - Deprecated
  - Document
  - HTML DOM
  - NeedsSpecTable
  - Property
  - Reference
browser-compat: api.Document.linkColor
---
{{APIRef("DOM")}} {{Deprecated_header}}

The **`Document.linkColor`** property gets/sets the color of
links within the document.

This property is deprecated. As an alternative, you can set the CSS
{{cssxref("color")}} property on either HTML anchor links ({{HtmlElement("a")}}) or on
{{cssxref(":link")}} pseudo-classes. Another alternative is
`document.body.link`, although this is [deprecated in HTML 4.01](https://www.w3.org/TR/html401/struct/global.html#adef-link).

## Value

A string representing the color as a word (e.g., `red`) or hexadecimal value (e.g., `#ff0000`).

## Examples

```js
document.linkColor = 'blue';
```

## Specifications

HTML5

`Document.linkColor` is [deprecated in DOM Level 2 HTML](https://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-26809268).

## Browser compatibility

{{Compat}}

The default value for this property in Mozilla Firefox is blue (`#0000ee` in
hexadecimal).

## See also

- {{domxref("document.vlinkColor")}}
- {{domxref("document.alinkColor")}}
