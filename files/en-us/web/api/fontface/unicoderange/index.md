---
title: FontFace.unicodeRange
slug: Web/API/FontFace/unicodeRange
tags:
  - API
  - CSS Font Loading API
  - CSSOM
  - FontFace
  - Fonts
  - Property
  - Reference
  - unicodeRange
browser-compat: api.FontFace.unicodeRange
---
{{APIRef("CSS Font Loading API")}}

The **`unicodeRange`** property of the
{{domxref("FontFace")}} interface retrieves or sets the range of unicode codepoints
encompassing the font. It is equivalent to the {{cssxref("@font-face/unicode-range",
  "unicode-range")}} descriptor.

## Syntax

```js
let unicodeRangeDescriptor = FontFace.unicodeRange;
FontFace.unicodeRange = unicodeRangeDescriptor;
```

### Value

A {{domxref('CSSOMString')}} containing a descriptor as it would appear in a style
sheet's `@font-face` rule.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
