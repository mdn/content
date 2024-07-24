---
title: "Document: alinkColor property"
short-title: alinkColor
slug: Web/API/Document/alinkColor
page-type: web-api-instance-property
status:
  - deprecated
browser-compat: api.Document.alinkColor
---

{{APIRef("DOM")}}{{Deprecated_header}}

Returns or sets the color of an active link in the document body. A link is active
during the time between `mousedown` and `mouseup` events.

## Value

A string containing the name of the color (e.g., `blue`, `darkblue`, etc.) or the hexadecimal value of the color (e.g., `#0000FF`).

When set to the `null` value, that `null` value is converted to the empty string (`""`), so `document.alinkColor = null` is equivalent to `document.alinkColor = ""`.

## Notes

The default value for this property in Mozilla Firefox is red (`#ee0000` in
hexadecimal).

`document.alinkColor` is deprecated in [DOM Level 2 HTML](https://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-26809268). One alternative is the CSS selector {{Cssxref(":active")}}.

Another alternative is `document.body.aLink`, although this is [deprecated in HTML 4.01](https://www.w3.org/TR/html401/struct/global.html#adef-alink) in favor of the CSS alternative.

Firefox supports both `alinkColor`/`:active` and {{Cssxref(":focus")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
