---
title: FontFace.featureSettings
slug: Web/API/FontFace/featureSettings
tags:
  - API
  - CSS Font Loading API
  - CSSOM
  - FontFace
  - Fonts
  - Property
  - Reference
  - featureSettings
browser-compat: api.FontFace.featureSettings
---
{{APIRef("CSS Font Loading API")}}

The **`featureSettings`** property of the
{{domxref("FontFace")}} interface retrieves or sets infrequently used font features that
are not available from a font's variant properties. It is equivalent to the
{{cssxref("@font-face/font-feature-settings", "font-feature-settings")}} descriptor.

## Syntax

```js
let featureSettingDescriptor = FontFace.featureSettings;
FontFace.featureSettings = featureSettingDescriptor;
```

### Value

A {{domxref('CSSOMString')}} containing a descriptor.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
