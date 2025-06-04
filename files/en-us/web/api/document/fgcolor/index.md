---
title: "Document: fgColor property"
short-title: fgColor
slug: Web/API/Document/fgColor
page-type: web-api-instance-property
status:
  - deprecated
browser-compat: api.Document.fgColor
---

{{ApiRef}}{{Deprecated_header}}

**`fgColor`** gets/sets the foreground color, or text color, of
the current document.

## Value

A string representing the color as a word (e.g., `"red"`) or hexadecimal value (e.g., `"#ff0000"`).

## Examples

```js
document.fgColor = "white";
document.bgColor = "darkblue";
```

## Notes

The default value for this property in Mozilla Firefox is black (`#000000`
in hexadecimal).

`document.fgColor` is [the HTML specification](https://html.spec.whatwg.org/multipage/obsolete.html#dom-document-fgcolor). The recommended alternative is the CSS property {{Cssxref("color")}}
(e.g., `document.body.style.color = "red"`).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
