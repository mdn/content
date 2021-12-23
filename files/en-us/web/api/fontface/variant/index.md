---
title: FontFace.variant
slug: Web/API/FontFace/variant
tags:
  - API
  - CSS Font Loading API
  - CSSOM
  - FontFace
  - Fonts
  - Property
  - Reference
  - variant
browser-compat: api.FontFace.variant
---
{{APIRef("CSS Font Loading API")}}

The **`variant`** property of the
{{domxref("FontFace")}} interface programmatically retrieves or sets font variant
values. It is equivalent to the {{cssxref("@font-face/font-variant", "font-variant")}}
descriptor.

## Syntax

```js
var variantSubProperty = FontFace.variant;
FontFace.variant = variantSubProperty;
```

### Value

A {{domxref('CSSOMString')}} containing a descriptor as it would be defined in a style
sheet's `@font-face` rule.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
