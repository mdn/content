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

`document.alinkColor` is deprecated in [the HTML specification](https://html.spec.whatwg.org/multipage/obsolete.html#dom-document-alinkcolor). One alternative is the CSS selector {{Cssxref(":active")}}.

Firefox supports both `alinkColor`/`:active` and {{Cssxref(":focus")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
