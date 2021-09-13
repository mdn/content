---
title: FontFaceSet.check()
slug: Web/API/FontFaceSet/check
tags:
  - API
  - CSS Font Loading API
  - CSSOM
  - Experimental
  - FontFaceSet
  - Method
  - Reference
browser-compat: api.FontFaceSet.check
---
{{APIRef()}}{{SeeCompatTable}}

The `check()` method of the {{domxref("FontFaceSet")}} returns whether all
fonts in the given font list have been loaded and are available.

## Syntax

```js
bool = aFontFaceSet.check(font);
bool = aFontFaceSet.check(font, text);
```

### Returns

A boolean value that is true if the font list is available

### Parameters

- `font`: a font specification using the [CSS value
  syntax](/en-US/docs/), e.g. "italic bold 16px Roboto"
- `text`: limit the font faces to those whose Unicode range contains at
  least one of the characters in text. This [does not
  check for individual glyph coverage](http://lists.w3.org/Archives/Public/www-style/2015Aug/0330.html).

## Examples

```js
document.fonts.check("12px courier"); // returns true if the font courier is available at 12px

document.fonts.check("12px MyFont", "ß"); // returns true if the font 'MyFont' has a ß character.
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
