---
title: FontFaceSet.load()
slug: Web/API/FontFaceSet/load
tags:
  - API
  - CSS Font Loading API
  - CSSOM
  - FontFaceSet
  - Method
  - Reference
browser-compat: api.FontFaceSet.load
---
{{APIRef("CSS Font Loading API")}}

The `load()` method of the {{domxref("FontFaceSet")}} forces all the fonts
given in parameters to be loaded.

## Syntax

```js
aFontFaceSet.load(font);
aFontFaceSet.load(font, text);
```

### Returns

A {{jsxref("Promise")}} of an {{jsxref("Array")}} of {{jsxref("FontFace")}} loaded. The
promise is fulfilled when all the fonts are loaded; it is rejected if one of the fonts
failed to load.

### Parameters

- `font`
  - : a font specification using the [CSS value syntax](/en-US/docs/), e.g. "italic bold 16px Roboto"
- `text`
  - : limit the font faces to those whose Unicode range contains at least one of the characters in text. This [does not check for individual glyph coverage](http://lists.w3.org/Archives/Public/www-style/2015Aug/0330.html).

## Examples

The following example returns a promise that will be fulfilled or rejected according the success of loading "MyFont". The code in `then()` can assume the availability of that font.

```js
document.fonts.load("12px MyFont", "ß").then(…);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
