---
title: "Document: vlinkColor property"
short-title: vlinkColor
slug: Web/API/Document/vlinkColor
page-type: web-api-instance-property
status:
  - deprecated
browser-compat: api.Document.vlinkColor
---

{{APIRef("DOM")}} {{Deprecated_Header}}

The **`Document.vlinkColor`** property gets/sets the color of
links that the user has visited in the document.

## Value

A string representing the color as a word (e.g., `"red"`) or hexadecimal value (e.g., `"#ff0000"`).

When set to the `null` value, that `null` value is converted to the empty string (`""`), so `document.vlinkColor = null` is equivalent to `document.vlinkColor = ""`.

## Notes

- The default value for this property in Mozilla Firefox is purple
  (`#551a8b` in hexadecimal).
- `Document.vlinkColor` is [the HTML specification](https://html.spec.whatwg.org/multipage/obsolete.html#dom-document-vlinkcolor).
- The recommended alternative is to get/set the color of the CSS {{Cssxref(":visited")}} pseudo-class on HTML {{HtmlElement("a")}} elements (e.g., `a:visited {color:red;}`).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
