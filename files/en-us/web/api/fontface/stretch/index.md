---
title: FontFace.stretch
slug: Web/API/FontFace/stretch
tags:
  - API
  - CSS Font Loading API
  - CSSOM
  - FontFace
  - Fonts
  - Property
  - Reference
  - stretch
browser-compat: api.FontFace.stretch
---
{{APIRef("CSS Font Loading API")}}

The **`stretch`** property of the
{{domxref("FontFace")}} interface retrieves or sets how the font stretches. It is
equivalent to the {{cssxref("@font-face/font-stretch", "font-stretch")}} descriptor.

## Syntax

```js
let stretchDescriptor = FontFace.stretch;
FontFace.stretch = stretchDescriptor;
```

### Value

A {{domxref('CSSOMString')}} containing a descriptor as it would be defined in a style
sheet's `@font-face` rule.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
