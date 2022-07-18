---
title: FontFaceSet.check()
slug: Web/API/FontFaceSet/check
page-type: web-api-instance-method
tags:
  - API
  - CSS Font Loading API
  - CSSOM
  - FontFaceSet
  - Method
  - Reference
browser-compat: api.FontFaceSet.check
---
{{APIRef("CSS Font Loading API")}}

The `check()` method of the {{domxref("FontFaceSet")}} returns whether all
fonts in the given font list have been loaded and are available.

## Syntax

```js
check(font)
check(font, text)
```

### Parameters

- `font`
  - : a font specification using the CSS value syntax, for example `"italic bold 16px Roboto"`
- `text`
  - : limit the font faces to those whose Unicode range contains at least one of the characters in text. This [does not check for individual glyph coverage](https://lists.w3.org/Archives/Public/www-style/2015Aug/0330.html).

### Return value

A {{jsxref("Boolean")}} value that is `true` if the font list is available.

## Examples

In the following example, the first line will print `true` if the Courier font is available at `12px`. The second line will print `true` if the font `MyFont` contains the "ß" character.

```js
console.log(document.fonts.check("12px courier"));

console.log(document.fonts.check("12px MyFont", "ß"));
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
