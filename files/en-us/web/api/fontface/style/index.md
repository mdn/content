---
title: FontFace.style
slug: Web/API/FontFace/style
tags:
  - API
  - CSS Font Loading API
  - CSSOM
  - FontFace
  - Fonts
  - Property
  - Reference
  - Style
browser-compat: api.FontFace.style
---
{{APIRef("CSS Font Loading API")}}

The **`style`** property of the
{{domxref("FontFace")}} interface retrieves or sets the font's style. It is equivalent
to the {{cssxref("@font-face/font-style", "font-style")}} descriptor.

## Syntax

```js
let style = FontFace.style;
FontFace.style = value;
```

### Value

A {{domxref('CSSOMString')}} containing the descriptors defined in the style sheet's
`@font-face` rule.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
