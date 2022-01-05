---
title: FontFace.weight
slug: Web/API/FontFace/weight
tags:
  - API
  - CSS Font Loading API
  - CSSOM
  - FontFace
  - Fonts
  - Property
  - Reference
  - weight
browser-compat: api.FontFace.weight
---
{{APIRef("CSS Font Loading API")}}

The **`weight`** property of the
{{domxref("FontFace")}} interface retrieves or sets the weight of the font. It is
equivalent to the {{cssxref("@font-face/font-weight", "font-weight")}} descriptor.

## Syntax

```js
let weightDescriptor = FontFace.weight;
FontFace.weight = weightDescriptor;
```

### Value

A {{domxref('CSSOMString')}} containing a descriptor as it would be defined in a style
sheet's `@font-face` rule.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
