---
title: "FontFaceSet: load() method"
short-title: load()
slug: Web/API/FontFaceSet/load
page-type: web-api-instance-method
browser-compat: api.FontFaceSet.load
---

{{APIRef("CSS Font Loading API")}}{{AvailableInWorkers}}

The `load()` method of the {{domxref("FontFaceSet")}} forces all the fonts given in parameters to be loaded.

## Syntax

```js-nolint
load(font)
load(font, text)
```

### Parameters

- `font`
  - : a font specification using the CSS value syntax, e.g. "italic bold 16px Roboto"
- `text`
  - : limit the font faces to those whose Unicode range contains at least one of the characters in text. This [does not check for individual glyph coverage](https://lists.w3.org/Archives/Public/www-style/2015Aug/0330.html).

### Return value

A {{jsxref("Promise")}} fulfilled with an {{jsxref("Array")}} of loaded {{domxref("FontFace")}} objects. The
promise is fulfilled when all the fonts are loaded; it is rejected if one of the fonts
failed to load.

## Examples

The following example returns a promise that will be fulfilled or rejected according the success of loading "MyFont". The code in `then()` can assume the availability of that font.

```js
document.fonts.load("12px MyFont", "ß").then(/* ... */);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
