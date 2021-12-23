---
title: FontFace.variationSettings
slug: Web/API/FontFace/variationSettings
tags:
  - API
  - CSS Font Loading API
  - CSSOM
  - FontFace
  - Fonts
  - Property
  - Reference
  - variationSettings
browser-compat: api.FontFace.variationSettings
---
{{APIRef("CSS Font Loading API")}}

The **`variationSettings`** property of the
{{domxref("FontFace")}} interface retrieves or sets low-level OpenType or TrueType font variations.
It is equivalent to the
{{cssxref("@font-face/font-variation-settings", "font-variation-settings")}} descriptor.

## Syntax

```js
let variationSettingDescriptor = FontFace.variationSettings;
FontFace.variationSettings = variationSettingDescriptor;
```

### Value

A {{domxref('CSSOMString')}} containing a descriptor.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
