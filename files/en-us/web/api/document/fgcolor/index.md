---
title: Document.fgColor
slug: Web/API/Document/fgColor
tags:
  - API
  - Deprecated
  - HTML DOM
  - NeedsMarkupWork
  - NeedsSpecTable
  - Property
  - Reference
browser-compat: api.Document.fgColor
---
{{ApiRef}}{{Deprecated_header}}

**`fgColor`** gets/sets the foreground color, or text color, of
the current document.

## Syntax

```js
var color = document.fgColor;
document.fgColor = color;
```

### Parameters

- _color_ is a string representing the color as a word (e.g., "red") or
  hexadecimal value (e.g., "`#ff0000`").

## Example

```js
document.fgColor = "white";
document.bgColor = "darkblue";
```

## Notes

The default value for this property in Mozilla Firefox is black (`#000000`
in hexadecimal).

`document.fgColor` is [deprecated in DOM
Level 2 HTML](https://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-26809268). The recommended alternative is the CSS property {{Cssxref("color")}}
(e.g., `document.body.style.color = "red"`).

Another alternative is `document.body.text`, although this is [deprecated in HTML
4.01](https://www.w3.org/TR/html401/struct/global.html#adef-text) in favor of the CSS alternative above.

## Browser compatibility

{{Compat}}
